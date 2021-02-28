import { ReactNode } from 'react'

export type Doc = {
  height: number
  width: number

  components: Component[]
}

export type Component = {
  tag: 'div' | 'img'
  props: {
    className?: string
    src?: string
    children?: ReactNode
  }
  components?: Component[]
}
