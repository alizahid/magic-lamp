import { AnimatePresence, motion } from 'framer-motion'
import React, { FunctionComponent, useState } from 'react'
import { Doc } from '../types'
import { Header } from './header'
import { Icon } from './icon'

type Props = {
  doc: Doc

  onChange: (doc: Doc) => void
}

export const Components: FunctionComponent<Props> = ({ doc, onChange }) => {
  const [visible, setVisible] = useState(true)

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
    <aside className="bg-white w-60 shadow rounded-lg fixed top-4 left-4 z-10 overflow-hidden">
      <div className="flex justify-between">
        <Header />
        <button onClick={() => setVisible(!visible)} className="p-3">
          <Icon
            className={`text-gray-500 transition-transform transform ${
              visible ? '' : '-rotate-90'
            }`}
            name="expand"
          />
        </button>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 max-h-sidebar overflow-y-auto">
            <div className="text-lg font-medium m-3">Layout</div>
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
                        : 'bg-gray-200'
                    }`}
                    style={{
                      height: layout.height / 25,
                      width: layout.width / 25
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="text-lg font-medium m-3 mt-6">Components</div>
            {components.map((component) => (
              <button
                className="flex items-center px-3 py-1 w-full"
                key={component.name}>
                <div className="flex-1">{component.name}</div>
                <Icon size={16} name="add" />
              </button>
            ))}

            <button className="mt-6 mb-2 px-3 py-1 font-medium w-full">
              Export
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}
