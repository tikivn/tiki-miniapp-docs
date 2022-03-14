import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={520}
    height={230}
    viewBox="0 0 520 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.2}>
      <line
        x1={293}
        y1={8}
        x2={293}
        y2={222}
        stroke="#7835B7"
        strokeWidth={2}
      />
      <path
        d="M260.5 196C304.959 196 341 159.959 341 115.5C341 71.0411 304.959 35 260.5 35C216.041 35 180 71.0411 180 115.5C180 159.959 216.041 196 260.5 196Z"
        stroke="#7835B7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1={229}
        y1={8}
        x2={229}
        y2={222}
        stroke="#7835B7"
        strokeWidth={2}
      />
      <line
        x1={367}
        y1={147}
        x2={153}
        y2={147}
        stroke="#7835B7"
        strokeWidth={2}
      />
      <line
        x1={367}
        y1={83}
        x2={153}
        y2={83}
        stroke="#7835B7"
        strokeWidth={2}
      />
    </g>
    <rect x={221} y={75} width={80} height={80} rx={8} fill="url(#svg-ide)" />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M297.8 83L224.2 83L224.2 82L297.8 82L297.8 83Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M297.8 147L224.2 147L224.2 146L297.8 146L297.8 147Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M229 78.1999V151.8H228V78.1999H229Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M293 78.1999V151.8H292V78.1999H293Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M261 144C277.016 144 290 131.016 290 115C290 98.9837 277.016 86 261 86C244.984 86 232 98.9837 232 115C232 131.016 244.984 144 261 144ZM261 147C278.673 147 293 132.673 293 115C293 97.3269 278.673 83 261 83C243.327 83 229 97.3269 229 115C229 132.673 243.327 147 261 147Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M261 138C273.15 138 283 128.15 283 116C283 114.696 282.887 113.42 282.67 112.182H239.33C239.113 113.42 239 114.696 239 116C239 128.15 248.85 138 261 138ZM236.941 109.182H285.059C285.672 111.349 286 113.636 286 116C286 129.807 274.807 141 261 141C247.193 141 236 129.807 236 116C236 113.636 236.328 111.349 236.941 109.182Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="svg-ide"
        x1={261}
        y1={75}
        x2={261}
        y2={155}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BA8FF" />
        <stop offset={1} stopColor="#1B69FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
