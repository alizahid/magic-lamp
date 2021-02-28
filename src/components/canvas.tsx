import { createElement, FunctionComponent } from 'react'

import { Component, Doc } from '../types'

type Props = {
  doc: Doc

  onChange: (doc: Doc) => void
}

export const Canvas: FunctionComponent<Props> = ({ onChange, doc }) => {
  const { height, width, components } = doc

  const render = (component: Component) => {
    if (component.components) {
      return render(component)
    }

    const { props, tag } = component

    return createElement(tag, props)
  }

  return (
    <div
      style={{
        height,
        width
      }}
      className="bg-white shadow relative">
      {components.map((component) => render(component))}
    </div>
  )
}
