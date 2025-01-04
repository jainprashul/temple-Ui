import type React from "react"

export type MenuItem = {
  name: string | React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
  hide?: boolean
  separatorBelow?: boolean
  separatorAbove?: boolean
  children?: MenuItem[]
}