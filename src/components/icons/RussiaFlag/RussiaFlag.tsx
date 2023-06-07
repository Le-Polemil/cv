import { IconType } from "../../../types"

export default function RussiaFlag({ size = 24, className, style }: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 3 3"
      className={className}
      style={style}
    >
      <path fill="#fff" d="M0 0h3v1H0z" />
      <path fill="#DA291C" d="M0 1h3v1H0z" />
      <path fill="#0032A0" d="M0 2h3v1H0z" />
    </svg>
  )
}
