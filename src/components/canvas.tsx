import { createElement, FunctionComponent, ReactNode } from 'react'

import { Component, Doc } from '../types'

type Props = {
  doc: Doc

  onChange: (doc: Doc) => void
}

export const Canvas: FunctionComponent<Props> = ({ onChange, doc }) => {
  const { height, width, components } = doc

  const render = ({ props, type, children }: Component): ReactNode =>
    createElement(
      type,
      props,
      Array.isArray(children) ? children.map((node) => render(node)) : children
    )

  return (
    <div
      id="canvas"
      style={{
        height,
        width
      }}
      className="bg-white text-base leading-normal shadow relative">
      {components.map((component) => render(component))}
    </div>
  )
}
