import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={100} height={100} rx={8} fill="url(#svg-dev-assistant)" />
    <rect
      opacity={0.5}
      x={3}
      y={50}
      width={66.468}
      height={66.468}
      rx={4}
      transform="rotate(-45 3 50)"
      fill="white"
    />
    <g filter="url(#filter0_d)">
      <rect x={12} y={12} width={76} height={76} rx={4} fill="white" />
    </g>
    <circle cx={50} cy={50} r={32} fill="url(#paint1-dev-assistant)" />
    <path
      d="M49.9992 77.6364C64.1377 77.6364 75.5992 66.1749 75.5992 52.0364C75.5992 49.616 75.2633 47.274 74.6355 45.0546H25.3628C24.7351 47.274 24.3992 49.616 24.3992 52.0364C24.3992 66.1749 35.8607 77.6364 49.9992 77.6364Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d"
        x={6}
        y={10}
        width={88}
        height={88}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.105882 0 0 0 0 0.409882 0 0 0 0 1 0 0 0 0.8 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="svg-dev-assistant"
        x1={0}
        y1={0}
        x2={92.9401}
        y2={106.18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E3D6" />
        <stop offset={0.755208} stopColor="#1271FF" />
      </linearGradient>
      <linearGradient
        id="paint1-dev-assistant"
        x1={37.123}
        y1={79.4278}
        x2={63.7136}
        y2={20.9596}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BA8FF" />
        <stop offset={0.9986} stopColor="#4ACAFF" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
