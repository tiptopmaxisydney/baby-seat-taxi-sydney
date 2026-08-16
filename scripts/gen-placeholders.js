// One-off script to generate flat-colour placeholder PNGs (no external deps).
// These stand in for real photography until the client supplies actual
// photos/logo — see the summary notes for what needs replacing.
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function solidPng(width, height, [r, g, b], accentBand) {
  const raw = Buffer.alloc((width * 3 + 1) * height);
  let offset = 0;
  for (let y = 0; y < height; y++) {
    raw[offset++] = 0; // filter: none
    const bandTop = accentBand && y > height * 0.62 && y < height * 0.68;
    for (let x = 0; x < width; x++) {
      if (bandTop) {
        raw[offset++] = 0xf7;
        raw[offset++] = 0x8d;
        raw[offset++] = 0x1e;
      } else {
        raw[offset++] = r;
        raw[offset++] = g;
        raw[offset++] = b;
      }
    }
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([signature, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

const outDir = path.join(__dirname, "..", "public", "images");

// [filename, width, height, [r,g,b], accentBand]
const NAVY = [29, 54, 73];
const ORANGE = [247, 141, 30];
const LIGHT = [253, 241, 225];

const targets = [
  ["baby-seat-taxi-sydney-logo.png", 300, 59, NAVY, false],
  ["baby-capsule-taxi-sydney.jpg".replace(".jpg", ".png"), 700, 467, [214, 168, 122], true],
  ["child-seat-taxi-sydney.jpg".replace(".jpg", ".png"), 700, 467, [176, 196, 176], true],
  ["sydney-airport-transfers-with-baby-seats.png", 800, 533, [188, 196, 214], true],
  ["hospital-transfers-with-baby-seats.png", 800, 533, [206, 214, 196], true],
  ["family-transport-across-sydney.png", 800, 533, [222, 196, 170], true],
  ["child-safety-information.png", 740, 603, [196, 206, 214], true],
  ["baby-seat-taxi-sydney-banner.png", 1600, 900, NAVY, false],
  ["blog-benefits-of-baby-seat-taxi.png", 1024, 683, [214, 188, 158], true],
  ["blog-nsw-baby-seat-laws.png", 1024, 683, [188, 200, 214], true],
  ["blog-royal-prince-alfred-hospital.png", 1024, 683, [196, 214, 206], true],
];

for (const [name, w, h, color, band] of targets) {
  fs.writeFileSync(path.join(outDir, name), solidPng(w, h, color, band));
  console.log("wrote", name, w + "x" + h);
}
