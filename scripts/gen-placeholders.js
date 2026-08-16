// Generates on-brand SVG placeholder graphics (no external deps) to stand in
// for real photography until the client supplies actual photos/logo — see
// the project notes for what needs replacing. Deletes the old flat-colour
// PNG placeholders from the previous pass.
const fs = require("fs");
const path = require("path");

const NAVY = "#1d3649";
const NAVY_DARK = "#12232e";
const ORANGE = "#f78d1e";
const ORANGE_LIGHT = "#ffb35c";
const outDir = path.join(__dirname, "..", "public", "images");

function gradientDefs(id, from, to) {
  return `<linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="${from}"/>
    <stop offset="100%" stop-color="${to}"/>
  </linearGradient>`;
}

// A handful of simple, hand-built flat icon glyphs (viewBox 0 0 100 100),
// deliberately basic shapes rather than photo-real illustrations.
const ICONS = {
  capsule: `
    <path d="M22 46 C22 24 34 12 50 12 C66 12 78 24 78 46 L78 60 C78 76 66 88 50 88 C34 88 22 76 22 60 Z" fill="${NAVY}" opacity="0.92"/>
    <path d="M30 44 Q50 8 70 44" stroke="${NAVY}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="52" r="13" fill="${ORANGE}"/>
  `,
  seat: `
    <rect x="28" y="14" width="44" height="38" rx="14" fill="${NAVY}" opacity="0.92"/>
    <rect x="18" y="46" width="64" height="40" rx="14" fill="${NAVY}" opacity="0.92"/>
    <rect x="30" y="58" width="40" height="8" rx="4" fill="${ORANGE}"/>
    <circle cx="50" cy="32" r="9" fill="${ORANGE}"/>
  `,
  booster: `
    <rect x="22" y="26" width="56" height="24" rx="10" fill="${NAVY}" opacity="0.92"/>
    <rect x="14" y="52" width="72" height="30" rx="12" fill="${NAVY}" opacity="0.92"/>
    <rect x="30" y="60" width="40" height="8" rx="4" fill="${ORANGE}"/>
  `,
  plane: `
    <polygon points="14,58 88,20 60,50 66,86 48,60 20,68" fill="${NAVY}" opacity="0.92"/>
    <polygon points="88,20 60,50 48,60" fill="${ORANGE}" opacity="0.95"/>
  `,
  hospital: `
    <circle cx="50" cy="50" r="38" fill="${NAVY}" opacity="0.92"/>
    <rect x="41" y="24" width="18" height="52" rx="4" fill="${ORANGE}"/>
    <rect x="24" y="41" width="52" height="18" rx="4" fill="${ORANGE}"/>
  `,
  family: `
    <circle cx="35" cy="34" r="16" fill="${NAVY}" opacity="0.92"/>
    <circle cx="66" cy="34" r="16" fill="${NAVY}" opacity="0.7"/>
    <circle cx="50" cy="60" r="11" fill="${ORANGE}"/>
    <path d="M14 90 C14 70 24 58 35 58 C46 58 54 68 54 82 L54 90 Z" fill="${NAVY}" opacity="0.92"/>
    <path d="M50 90 C50 72 58 60 66 60 C76 60 86 72 86 90 Z" fill="${NAVY}" opacity="0.7"/>
  `,
  shield: `
    <path d="M50 10 L85 24 L85 48 C85 70 70 86 50 92 C30 86 15 70 15 48 L15 24 Z" fill="${NAVY}" opacity="0.92"/>
    <path d="M35 50 L46 61 L67 38" stroke="${ORANGE}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  pin: `
    <path d="M50 12 C30 12 18 27 18 45 C18 68 50 90 50 90 C50 90 82 68 82 45 C82 27 70 12 50 12 Z" fill="${NAVY}" opacity="0.92"/>
    <circle cx="50" cy="44" r="15" fill="${ORANGE}"/>
  `,
};

function iconBadge(icon, cx, cy, r) {
  return `<g transform="translate(${cx - r} ${cy - r}) scale(${(r * 2) / 100})">${ICONS[icon]}</g>`;
}

function dotTexture(seed) {
  let dots = "";
  const rnd = (n) => {
    const x = Math.sin(seed + n) * 10000;
    return x - Math.floor(x);
  };
  for (let i = 0; i < 22; i++) {
    dots += `<circle cx="${(rnd(i) * 100).toFixed(1)}%" cy="${(rnd(i + 50) * 100).toFixed(1)}%" r="${(1 + rnd(i + 100) * 2).toFixed(1)}" fill="#fff" opacity="${(0.04 + rnd(i + 150) * 0.05).toFixed(2)}"/>`;
  }
  return dots;
}

function placeholderCard(width, height, icon, caption, seed) {
  // Light card (not dark navy) — these sit on dark navy page sections, the
  // same way the live site's actual photos (light/neutral backdrops) do.
  const badgeR = Math.min(width, height) * 0.16;
  const cx = width / 2;
  const cy = height / 2 - height * 0.03;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdf1e1"/>
      <stop offset="100%" stop-color="#f6e2c9"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <rect width="${width}" height="${height}" fill="none" stroke="${ORANGE}" stroke-opacity="0.4" stroke-width="6"/>
  ${dotTexture(seed).replace(/fill="#fff"/g, `fill="${NAVY}"`)}
  <circle cx="${cx}" cy="${cy}" r="${badgeR}" fill="${ORANGE}" opacity="0.16"/>
  ${iconBadge(icon, cx, cy, badgeR * 0.62)}
  <text x="${cx}" y="${cy + badgeR + 34}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(14, width * 0.026)}" font-weight="700" fill="${NAVY}">${caption}</text>
  <text x="${width - 14}" y="${height - 14}" text-anchor="end" font-family="Arial, sans-serif" font-size="${Math.max(10, width * 0.014)}" fill="${NAVY}" opacity="0.5">Photo placeholder</text>
</svg>`;
}

// `onDark` swaps the wordmark to white so it stays legible on the footer's
// navy background — the navy wordmark used elsewhere disappears there.
function logoSvg(width, height, onDark = false) {
  const iconR = height * 0.42;
  const iconCx = iconR + 6;
  const iconCy = height / 2;
  const wordmarkColor = onDark ? "#ffffff" : NAVY;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>${gradientDefs("lg", ORANGE, ORANGE_LIGHT)}</defs>
  <circle cx="${iconCx}" cy="${iconCy}" r="${iconR}" fill="url(#lg)"/>
  <g transform="translate(${iconCx - iconR * 0.6} ${iconCy - iconR * 0.6}) scale(${(iconR * 1.2) / 100})">
    <path d="M22 46 C22 24 34 12 50 12 C66 12 78 24 78 46 L78 60 C78 76 66 88 50 88 C34 88 22 76 22 60 Z" fill="#fff"/>
    <path d="M30 44 Q50 8 70 44" stroke="${NAVY}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="52" r="13" fill="${NAVY}"/>
  </g>
  <text x="${iconCx + iconR + 14}" y="${height / 2 - 2}" font-family="Arial, sans-serif" font-size="${height * 0.36}" font-weight="800" fill="${wordmarkColor}">Baby Seat Taxi</text>
  <text x="${iconCx + iconR + 14}" y="${height / 2 + height * 0.34}" font-family="Arial, sans-serif" font-size="${height * 0.24}" font-weight="600" fill="${ORANGE}" letter-spacing="1">SYDNEY</text>
</svg>`;
}

function bannerSvg(width, height) {
  // Light, warm wash (not dark navy) so the hero's dark-navy heading text
  // stays legible — the live site's hero is a light photo background with
  // dark text on the left; the booking-form card covers the right side
  // regardless, so no need for a busy illustration back there.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="60%">
      <stop offset="0%" stop-color="#fffaf3"/>
      <stop offset="55%" stop-color="${ORANGE_LIGHT}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="${ORANGE}" stop-opacity="0.22"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  ${dotTexture(7).replace(/fill="#fff"/g, `fill="${NAVY}"`)}
  <g transform="translate(${width * 0.74} ${height * 0.4}) scale(${height * 0.0034})" opacity="0.14">${ICONS.family}</g>
  <g transform="translate(${width * 0.9} ${height * 0.72}) scale(${height * 0.0022})" opacity="0.16">${ICONS.capsule}</g>
</svg>`;
}

// Baby capsule / child seat / logo / hero banner now use real photos and
// real logo crops captured from the live site (public/images/*-real.png,
// *-logo-header.png, *-logo-footer.png, *-hero.png) instead of these
// generated icon cards — see the summary notes. logoSvg/bannerSvg are kept
// around only in case those real captures ever need a placeholder fallback.
const CARDS = [
  ["sydney-airport-transfers-with-baby-seats.svg", 800, 533, "plane", "Airport Transfers", 3],
  ["hospital-transfers-with-baby-seats.svg", 800, 533, "hospital", "Hospital Transfers", 4],
  ["family-transport-across-sydney.svg", 800, 533, "family", "Family Transport", 5],
  ["child-safety-information.svg", 740, 603, "shield", "Child Safety", 6],
  ["blog-benefits-of-baby-seat-taxi.svg", 1024, 683, "capsule", "Blog", 8],
  ["blog-nsw-baby-seat-laws.svg", 1024, 683, "shield", "Blog", 9],
  ["blog-royal-prince-alfred-hospital.svg", 1024, 683, "hospital", "Blog", 10],
];

for (const [name, w, h, icon, caption, seed] of CARDS) {
  fs.writeFileSync(path.join(outDir, name), placeholderCard(w, h, icon, caption, seed));
  console.log("wrote", name, `${w}x${h}`);
}
