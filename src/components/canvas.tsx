import { createElement, FunctionComponent, useRef } from 'react'

import { Component, Doc } from '../types'

type Props = {
  doc: Doc

  onChange: (doc: Doc) => void
}

export const Canvas: FunctionComponent<Props> = ({ onChange, doc }) => {
  const index = useRef(1)

  const { height, width, components } = doc

  const render = (component: Component) => {
    if (component.components) {
      return render(component)
    }

    const { props, tag } = component

    return createElement(tag, {
      ...props,
      key: index.current++
    })
  }

  return (
    <div
      style={{
        height,
        width
      }}
      className="bg-white text-base leading-normal shadow relative">
      {components.map((component) => render(component))}
    </div>
  )
}
