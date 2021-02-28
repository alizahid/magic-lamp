import { ReactNode } from 'react'

export type Doc = {
  height: number
  width: number
  components: Component[]
}

export type Component = {
  type: string
  children?: string | Component[]
  props: {
    key: string
    className?: string
    src?: string
  }
}
