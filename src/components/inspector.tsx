import { FunctionComponent, useState } from 'react'

import { Component, Doc } from '../types'
import { Icon } from './icon'

type Props = {
  component?: Component

  onChange?: (component: Component) => void
}

export const Inspector: FunctionComponent<Props> = () => {
  return (
    <aside className="w-80 bg-white shadow rounded fixed top-4 right-4 z-20 overflow-hidden">
      <div className="flex-1 m-3 font-medium">Inspector</div>

      <div className="border-t border-gray-200 max-h-sidebar overflow-y-auto">
        <div className="m-3">Details</div>
      </div>
    </aside>
  )
}
