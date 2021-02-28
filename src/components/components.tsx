import React, { FunctionComponent, useState } from 'react'
import html2canvas from 'html2canvas'

import { Doc } from '../types'
import { Header } from './header'
import { Icon } from './icon'
import { nanoid } from 'nanoid'

type Props = {
  doc: Doc

  onChange: (doc: Doc) => void
}

export const Components: FunctionComponent<Props> = ({ doc, onChange }) => {
  const [exporting, setExporting] = useState(false)

  const layouts = [
    {
      height: 600,
      width: 600
    },
    {
      height: 800,
      width: 600
    },
    {
      height: 600,
      width: 800
    }
  ]

  const components = [
    {
      name: 'Section',
      tag: 'div'
    },
    {
      name: 'Image',
      tag: 'img'
    },
    {
      name: 'Text',
      tag: 'div'
    }
  ]

  return (
    <aside className="bg-white w-60 shadow rounded fixed top-4 left-4 z-10 overflow-hidden">
      <Header />

      <div className="border-t border-gray-200 max-h-sidebar overflow-y-auto">
        <div className="text-base font-medium m-3">Layout</div>
        <div className="flex items-center mx-3">
          {layouts.map((layout, index) => (
            <button
              onClick={() =>
                onChange({
                  ...doc,
                  height: layout.height,
                  width: layout.width
                })
              }
              className="ml-4 first:ml-0"
              key={`layout-${index}`}>
              <div
                className={`transition-colors ${
                  doc.height === layout.height && doc.width === layout.width
                    ? 'bg-emerald-400'
                    : 'bg-gray-300'
                }`}
                style={{
                  height: layout.height / 25,
                  width: layout.width / 25
                }}
              />
            </button>
          ))}
        </div>

        <div className="text-base font-medium m-3 mt-6">Components</div>
        {components.map((component) => (
          <button
            className="flex items-center px-3 py-2 w-full"
            key={component.name}>
            <div className="flex-1">{component.name}</div>
            <Icon size={16} name="add" />
          </button>
        ))}

        <button
          disabled={exporting}
          onClick={async () => {
            setExporting(true)

            try {
              const canvas = await html2canvas(
                document.getElementById('canvas')
              )

              const link = document.createElement('a')

              link.href = canvas.toDataURL('png', 1)
              link.download = `${nanoid()}.png`
              link.click()

              link.remove()
            } finally {
              setExporting(false)
            }
          }}
          className="mt-6 mb-2 px-3 py-2 font-medium w-full">
          {exporting ? 'Exporting' : 'Export'}
        </button>
      </div>
    </aside>
  )
}
