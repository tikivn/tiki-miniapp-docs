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
    <path
      d="M8 92H92C92 96.4183 88.4183 100 84 100H16C11.5817 100 8 96.4183 8 92Z"
      fill="url(#svg-service)"
    />
    <path
      opacity={0.5}
      d="M8 92H92C92 96.4183 88.4183 100 84 100H16C11.5817 100 8 96.4183 8 92Z"
      fill="url(#paint1-service)"
    />
    <rect width={100} height={92} rx={8} fill="url(#paint2_linear)" />
    <mask
      id="mask0"
      maskType="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={100}
      height={92}
    >
      <rect width={100} height={92} rx={8} fill="url(#paint3_linear)" />
    </mask>
    <g>
      <ellipse
        cx={50}
        cy={46}
        rx={50}
        ry={50.5}
        fill="white"
        fillOpacity={0.1}
      />
      <path
        d="M50 97.5C78.1759 97.5 101 74.4333 101 46C101 17.5667 78.1759 -5.5 50 -5.5C21.8241 -5.5 -1 17.5667 -1 46C-1 74.4333 21.8241 97.5 50 97.5Z"
        stroke="#242424"
        strokeOpacity={0.1}
        strokeWidth={2}
      />
      <ellipse
        cx={50}
        cy={46}
        rx={46}
        ry={46.5}
        fill="white"
        fillOpacity={0.2}
      />
      <path
        d="M50 93.5C75.9675 93.5 97 72.2233 97 46C97 19.7767 75.9675 -1.5 50 -1.5C24.0325 -1.5 3 19.7767 3 46C3 72.2233 24.0325 93.5 50 93.5Z"
        stroke="#242424"
        strokeOpacity={0.2}
        strokeWidth={2}
      />
      <ellipse
        cx={50}
        cy={46}
        rx={42}
        ry={42.5}
        fill="#C4C4C4"
        fillOpacity={0.3}
      />
      <path
        d="M50 89.5C73.7594 89.5 93 70.0132 93 46C93 21.9868 73.7594 2.5 50 2.5C26.2406 2.5 7 21.9868 7 46C7 70.0132 26.2406 89.5 50 89.5Z"
        stroke="#FF424E"
        strokeOpacity={0.6}
        strokeWidth={2}
      />
      <ellipse
        cx={50}
        cy={46}
        rx={38}
        ry={38.5}
        fill="white"
        fillOpacity={0.4}
      />
      <path
        d="M50 85.5C71.5514 85.5 89 67.8029 89 46C89 24.1971 71.5514 6.5 50 6.5C28.4486 6.5 11 24.1971 11 46C11 67.8029 28.4486 85.5 50 85.5Z"
        stroke="#FDD835"
        strokeOpacity={0.8}
        strokeWidth={2}
      />
      <circle cx={50} cy={46} r={34} fill="white" fillOpacity={0.5} />
      <circle
        cx={50}
        cy={46}
        r={35}
        stroke="#2DC275"
        strokeOpacity={0.9}
        strokeWidth={2}
      />
      <circle
        cx={50}
        cy={46}
        r={31}
        fill="url(#paint4_linear)"
        stroke="white"
        strokeWidth={2}
      />
      <path
        d="M49.9993 71.9091C63.2541 71.9091 73.9993 61.164 73.9993 47.9091C73.9993 45.64 73.6844 43.4444 73.0959 41.3637H26.9027C26.3142 43.4444 25.9993 45.64 25.9993 47.9091C25.9993 61.164 36.7444 71.9091 49.9993 71.9091Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="svg-service"
        x1={8}
        y1={92}
        x2={9.51011}
        y2={107.856}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CE22EA" />
        <stop offset={1} stopColor="#35AAFF" />
      </linearGradient>
      <linearGradient
        id="paint1-service"
        x1={67.5}
        y1={92}
        x2={67.5}
        y2={99.6785}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#002873" />
        <stop offset={0.9986} stopColor="#1B6BFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1={0}
        y1={0}
        x2={91.6811}
        y2={99.6534}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#35AAFF" />
        <stop offset={1} stopColor="#CE22EA" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1={0}
        y1={0}
        x2={91.6811}
        y2={99.6534}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#35AAFF" />
        <stop offset={1} stopColor="#CE22EA" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1={37.9278}
        y1={73.5886}
        x2={62.8565}
        y2={18.7746}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BA8FF" />
        <stop offset={0.9986} stopColor="#4ACAFF" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
