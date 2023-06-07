import { IconType } from "../../../types"

export default function FranceFlag({ size = 24, className, style }: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 3 3"
      className={className}
      style={style}
    >
      <path fill="#EC1920" d="M2 0h1v3H2z" />
      <path fill="#fff" d="M1 0h1v3H1z" />
      <path fill="#051440" d="M0 0h1v3H0z" />
    </svg>
  )
}
