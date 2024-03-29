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
    <rect width={100} height={100} rx={8} fill="url(#svg-tool)" />
    <mask
      id="mask0"
      maskType="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={100}
      height={100}
    >
      <rect width={100} height={100} rx={8} fill="#1BA8FF" />
    </mask>
    <g mask="url(#mask0)">
      <g opacity={0.2}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 -0.5H10.5V10.5H-0.5V-0.5ZM0.5 0.5V9.5H9.5V0.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 9.5H10.5V20.5H-0.5V9.5ZM0.5 10.5V19.5H9.5V10.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 19.5H10.5V30.5H-0.5V19.5ZM0.5 20.5V29.5H9.5V20.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 29.5H10.5V40.5H-0.5V29.5ZM0.5 30.5V39.5H9.5V30.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 39.5H10.5V50.5H-0.5V39.5ZM0.5 40.5V49.5H9.5V40.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 49.5H10.5V60.5H-0.5V49.5ZM0.5 50.5V59.5H9.5V50.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 59.5H10.5V70.5H-0.5V59.5ZM0.5 60.5V69.5H9.5V60.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 69.5H10.5V80.5H-0.5V69.5ZM0.5 70.5V79.5H9.5V70.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 79.5H10.5V90.5H-0.5V79.5ZM0.5 80.5V89.5H9.5V80.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.5 89.5H10.5V100.5H-0.5V89.5ZM0.5 90.5V99.5H9.5V90.5H0.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 -0.5H30.5V10.5H19.5V-0.5ZM20.5 0.5V9.5H29.5V0.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 9.5H30.5V20.5H19.5V9.5ZM20.5 10.5V19.5H29.5V10.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 19.5H30.5V30.5H19.5V19.5ZM20.5 20.5V29.5H29.5V20.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 29.5H30.5V40.5H19.5V29.5ZM20.5 30.5V39.5H29.5V30.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 39.5H30.5V50.5H19.5V39.5ZM20.5 40.5V49.5H29.5V40.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 49.5H30.5V60.5H19.5V49.5ZM20.5 50.5V59.5H29.5V50.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 59.5H30.5V70.5H19.5V59.5ZM20.5 60.5V69.5H29.5V60.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 69.5H30.5V80.5H19.5V69.5ZM20.5 70.5V79.5H29.5V70.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 79.5H30.5V90.5H19.5V79.5ZM20.5 80.5V89.5H29.5V80.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 89.5H30.5V100.5H19.5V89.5ZM20.5 90.5V99.5H29.5V90.5H20.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 -0.5H50.5V10.5H39.5V-0.5ZM40.5 0.5V9.5H49.5V0.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 9.5H50.5V20.5H39.5V9.5ZM40.5 10.5V19.5H49.5V10.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 19.5H50.5V30.5H39.5V19.5ZM40.5 20.5V29.5H49.5V20.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 29.5H50.5V40.5H39.5V29.5ZM40.5 30.5V39.5H49.5V30.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 39.5H50.5V50.5H39.5V39.5ZM40.5 40.5V49.5H49.5V40.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 49.5H50.5V60.5H39.5V49.5ZM40.5 50.5V59.5H49.5V50.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 59.5H50.5V70.5H39.5V59.5ZM40.5 60.5V69.5H49.5V60.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 69.5H50.5V80.5H39.5V69.5ZM40.5 70.5V79.5H49.5V70.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 79.5H50.5V90.5H39.5V79.5ZM40.5 80.5V89.5H49.5V80.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.5 89.5H50.5V100.5H39.5V89.5ZM40.5 90.5V99.5H49.5V90.5H40.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 -0.5H70.5V10.5H59.5V-0.5ZM60.5 0.5V9.5H69.5V0.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 9.5H70.5V20.5H59.5V9.5ZM60.5 10.5V19.5H69.5V10.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 19.5H70.5V30.5H59.5V19.5ZM60.5 20.5V29.5H69.5V20.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 29.5H70.5V40.5H59.5V29.5ZM60.5 30.5V39.5H69.5V30.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 39.5H70.5V50.5H59.5V39.5ZM60.5 40.5V49.5H69.5V40.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 49.5H70.5V60.5H59.5V49.5ZM60.5 50.5V59.5H69.5V50.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 59.5H70.5V70.5H59.5V59.5ZM60.5 60.5V69.5H69.5V60.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 69.5H70.5V80.5H59.5V69.5ZM60.5 70.5V79.5H69.5V70.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 79.5H70.5V90.5H59.5V79.5ZM60.5 80.5V89.5H69.5V80.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.5 89.5H70.5V100.5H59.5V89.5ZM60.5 90.5V99.5H69.5V90.5H60.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 -0.5H90.5V10.5H79.5V-0.5ZM80.5 0.5V9.5H89.5V0.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 9.5H90.5V20.5H79.5V9.5ZM80.5 10.5V19.5H89.5V10.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 19.5H90.5V30.5H79.5V19.5ZM80.5 20.5V29.5H89.5V20.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 29.5H90.5V40.5H79.5V29.5ZM80.5 30.5V39.5H89.5V30.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 39.5H90.5V50.5H79.5V39.5ZM80.5 40.5V49.5H89.5V40.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 49.5H90.5V60.5H79.5V49.5ZM80.5 50.5V59.5H89.5V50.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 59.5H90.5V70.5H79.5V59.5ZM80.5 60.5V69.5H89.5V60.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 69.5H90.5V80.5H79.5V69.5ZM80.5 70.5V79.5H89.5V70.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 79.5H90.5V90.5H79.5V79.5ZM80.5 80.5V89.5H89.5V80.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.5 89.5H90.5V100.5H79.5V89.5ZM80.5 90.5V99.5H89.5V90.5H80.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 -0.5H20.5V10.5H9.5V-0.5ZM10.5 0.5V9.5H19.5V0.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 9.5H20.5V20.5H9.5V9.5ZM10.5 10.5V19.5H19.5V10.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 19.5H20.5V30.5H9.5V19.5ZM10.5 20.5V29.5H19.5V20.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 29.5H20.5V40.5H9.5V29.5ZM10.5 30.5V39.5H19.5V30.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 39.5H20.5V50.5H9.5V39.5ZM10.5 40.5V49.5H19.5V40.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 49.5H20.5V60.5H9.5V49.5ZM10.5 50.5V59.5H19.5V50.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 59.5H20.5V70.5H9.5V59.5ZM10.5 60.5V69.5H19.5V60.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 69.5H20.5V80.5H9.5V69.5ZM10.5 70.5V79.5H19.5V70.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 79.5H20.5V90.5H9.5V79.5ZM10.5 80.5V89.5H19.5V80.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 89.5H20.5V100.5H9.5V89.5ZM10.5 90.5V99.5H19.5V90.5H10.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 -0.5H40.5V10.5H29.5V-0.5ZM30.5 0.5V9.5H39.5V0.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 9.5H40.5V20.5H29.5V9.5ZM30.5 10.5V19.5H39.5V10.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 19.5H40.5V30.5H29.5V19.5ZM30.5 20.5V29.5H39.5V20.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 29.5H40.5V40.5H29.5V29.5ZM30.5 30.5V39.5H39.5V30.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 39.5H40.5V50.5H29.5V39.5ZM30.5 40.5V49.5H39.5V40.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 49.5H40.5V60.5H29.5V49.5ZM30.5 50.5V59.5H39.5V50.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 59.5H40.5V70.5H29.5V59.5ZM30.5 60.5V69.5H39.5V60.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 69.5H40.5V80.5H29.5V69.5ZM30.5 70.5V79.5H39.5V70.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 79.5H40.5V90.5H29.5V79.5ZM30.5 80.5V89.5H39.5V80.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5 89.5H40.5V100.5H29.5V89.5ZM30.5 90.5V99.5H39.5V90.5H30.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 -0.5H60.5V10.5H49.5V-0.5ZM50.5 0.5V9.5H59.5V0.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 9.5H60.5V20.5H49.5V9.5ZM50.5 10.5V19.5H59.5V10.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 19.5H60.5V30.5H49.5V19.5ZM50.5 20.5V29.5H59.5V20.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 29.5H60.5V40.5H49.5V29.5ZM50.5 30.5V39.5H59.5V30.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 39.5H60.5V50.5H49.5V39.5ZM50.5 40.5V49.5H59.5V40.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 49.5H60.5V60.5H49.5V49.5ZM50.5 50.5V59.5H59.5V50.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 59.5H60.5V70.5H49.5V59.5ZM50.5 60.5V69.5H59.5V60.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 69.5H60.5V80.5H49.5V69.5ZM50.5 70.5V79.5H59.5V70.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 79.5H60.5V90.5H49.5V79.5ZM50.5 80.5V89.5H59.5V80.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.5 89.5H60.5V100.5H49.5V89.5ZM50.5 90.5V99.5H59.5V90.5H50.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 -0.5H80.5V10.5H69.5V-0.5ZM70.5 0.5V9.5H79.5V0.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 9.5H80.5V20.5H69.5V9.5ZM70.5 10.5V19.5H79.5V10.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 19.5H80.5V30.5H69.5V19.5ZM70.5 20.5V29.5H79.5V20.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 29.5H80.5V40.5H69.5V29.5ZM70.5 30.5V39.5H79.5V30.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 39.5H80.5V50.5H69.5V39.5ZM70.5 40.5V49.5H79.5V40.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 49.5H80.5V60.5H69.5V49.5ZM70.5 50.5V59.5H79.5V50.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 59.5H80.5V70.5H69.5V59.5ZM70.5 60.5V69.5H79.5V60.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 69.5H80.5V80.5H69.5V69.5ZM70.5 70.5V79.5H79.5V70.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 79.5H80.5V90.5H69.5V79.5ZM70.5 80.5V89.5H79.5V80.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5 89.5H80.5V100.5H69.5V89.5ZM70.5 90.5V99.5H79.5V90.5H70.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 -0.5H100.5V10.5H89.5V-0.5ZM90.5 0.5V9.5H99.5V0.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 9.5H100.5V20.5H89.5V9.5ZM90.5 10.5V19.5H99.5V10.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 19.5H100.5V30.5H89.5V19.5ZM90.5 20.5V29.5H99.5V20.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 29.5H100.5V40.5H89.5V29.5ZM90.5 30.5V39.5H99.5V30.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 39.5H100.5V50.5H89.5V39.5ZM90.5 40.5V49.5H99.5V40.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 49.5H100.5V60.5H89.5V49.5ZM90.5 50.5V59.5H99.5V50.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 59.5H100.5V70.5H89.5V59.5ZM90.5 60.5V69.5H99.5V60.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 69.5H100.5V80.5H89.5V69.5ZM90.5 70.5V79.5H99.5V70.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 79.5H100.5V90.5H89.5V79.5ZM90.5 80.5V89.5H99.5V80.5H90.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.5 89.5H100.5V100.5H89.5V89.5ZM90.5 90.5V99.5H99.5V90.5H90.5Z"
          fill="white"
        />
      </g>
    </g>
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 83.5C67.1208 83.5 81 69.6208 81 52.5C81 35.3792 67.1208 21.5 50 21.5C32.8792 21.5 19 35.3792 19 52.5C19 69.6208 32.8792 83.5 50 83.5ZM50 84.5C67.6731 84.5 82 70.1731 82 52.5C82 34.8269 67.6731 20.5 50 20.5C32.3269 20.5 18 34.8269 18 52.5C18 70.1731 32.3269 84.5 50 84.5Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96 44L4 44L4 43L96 43L96 44Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.91667 50L4 50L4 49L5.91667 49L5.91667 50ZM13.5833 50L9.75 50L9.75 49L13.5833 49L13.5833 50ZM21.25 50L17.4167 50L17.4167 49L21.25 49L21.25 50ZM28.9167 50L25.0833 50L25.0833 49L28.9167 49L28.9167 50ZM36.5833 50L32.75 50L32.75 49L36.5833 49L36.5833 50ZM44.25 50L40.4167 50L40.4167 49L44.25 49L44.25 50ZM51.9167 50L48.0833 50L48.0833 49L51.9167 49L51.9167 50ZM59.5833 50L55.75 50L55.75 49L59.5833 49L59.5833 50ZM67.25 50L63.4167 50L63.4167 49L67.25 49L67.25 50ZM74.9167 50L71.0833 50L71.0833 49L74.9167 49L74.9167 50ZM82.5833 50L78.75 50L78.75 49L82.5833 49L82.5833 50ZM90.25 50L86.4167 50L86.4167 49L90.25 49L90.25 50ZM96 50L94.0833 50L94.0833 49L96 49L96 50Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96 85L4 85L4 84L96 84L96 85Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96 20.5L4 20.5L4 19.5L96 19.5L96 20.5Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96 9.99999L4 10L4 9L96 8.99999L96 9.99999Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96 90L4 90L4 89L96 89L96 90Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4L10 96H9L9 4H10Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90 4V96H89V4H90Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M82 4V96H81V4H82Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 94.0833V96H49V94.0833H50ZM50 86.4167V90.25H49V86.4167H50ZM50 78.75V82.5833H49V78.75H50ZM50 71.0833V74.9167H49V71.0833H50ZM50 63.4167V67.25H49V63.4167H50ZM50 55.75V59.5833H49V55.75H50ZM50 48.0833V51.9167H49V48.0833H50ZM50 40.4167V44.25H49V40.4167H50ZM50 32.75L50 36.5833H49V32.75H50ZM50 25.0833V28.9167H49V25.0833H50ZM50 17.4167V21.25H49V17.4167H50ZM50 9.74999V13.5833H49V9.74999H50ZM50 4V5.91666H49V4H50Z"
      fill="white"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 4L18.5 96H17.5L17.5 4H18.5Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 87C70.4345 87 87 70.4345 87 50C87 29.5655 70.4345 13 50 13C29.5655 13 13 29.5655 13 50C13 70.4345 29.5655 87 50 87ZM50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.999 81.5454C66.0153 81.5454 78.999 68.5617 78.999 52.5454C78.999 50.5825 78.8044 48.6677 78.4342 46.8181H21.5639C21.1936 48.6677 20.999 50.5825 20.999 52.5454C20.999 68.5617 33.9828 81.5454 49.999 81.5454ZM19.2036 43.8181H80.7945C81.5791 46.5924 81.999 49.5199 81.999 52.5454C81.999 70.2185 67.6721 84.5454 49.999 84.5454C32.3259 84.5454 17.999 70.2185 17.999 52.5454C17.999 49.5199 18.4189 46.5924 19.2036 43.8181Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="svg-tool"
        x1={50}
        y1={0}
        x2={50}
        y2={100}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BA8FF" />
        <stop offset={1} stopColor="#1B69FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
