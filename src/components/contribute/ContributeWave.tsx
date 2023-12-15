import React from "react";

export default function ContributeWave() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_1497_1059)">
          <path
            d="M1440 1440L1440 237.405C1067.5 458.319 1136.22 49.3874 743 166.996C267.262 309.283 130.08 2.27438e-05 0.000251778 0L0.00047543 8.09229L0.000480937 1440L1440 1440Z"
            fill="#0A2471"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_1497_1059"
            x="0"
            y="0"
            width="1440"
            height="1444"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="34" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1497_1059"
            />
          </filter>
        </defs>
      </svg>

      <div className=" mt-[-4px] min-h-[689px] sm:min-h-[530px] xl:min-h-[389px]   bg-gpgp-blue "></div>
    </>
  );
}
