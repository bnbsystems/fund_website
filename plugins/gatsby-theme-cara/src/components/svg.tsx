/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"
import btc from "../static/logos/btc.png";
import usdc from "../static/logos/usdc.png";
import usdt from "../static/logos/usdt.png";
import bnb from "../static/logos/bnb.png";
import sol from "../static/logos/sol.png";
import avax from "../static/logos/avax.svg";
import eth from "../static/logos/eth.png";
const icons = {
  triangle: {
    shape: (
      <image href={btc} />
    ),
    viewBox: `0 0 400 400`,
  },
  circle: {
    shape: (
      <image href={usdc} />
    ),
    viewBox: `0 0 2000 2000`,
  },
  arrowUp: {
    shape: (
      <image href={usdt} />
    ),
    viewBox: `0 0 512 512`,
  },
  upDown: {
    shape: (
      <image href={bnb} />
    ),
    viewBox: `0 0 300 300`,
  },
  box: {
    shape: (
      <image href={sol} />
    ),
    viewBox: `0 0 2000 2000`,
  },
  hexa: {
    shape: (
      <image href={avax} />
    ),
    viewBox: `0 0 1503 1504`,
  },
  cross: {
    shape: (
      <image href={eth} />
    ),
    viewBox: `0 0 3258 3258`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default Svg
