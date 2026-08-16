import React from 'react'

interface Props {
    className? : string;
}

const PlusIconWithBorder = ({className}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
            <g clipPath="url(#clip0_290_5179)">
                <path d="M19 19V13H21V19H27V21H21V27H19V21H13V19H19Z" fill="#1d3649" />
            </g>
            <defs>
                <clipPath id="clip0_290_5179">
                    <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PlusIconWithBorder