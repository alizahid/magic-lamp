import { AnimatePresence, motion } from 'framer-motion'
import { FunctionComponent, useState } from 'react'

import { Component, Doc } from '../types'
import { Icon } from './icon'

type Props = {
  component?: Component

  onChange?: (component: Component) => void
}

export const Inspector: FunctionComponent<Props> = () => {
  const [visible, setVisible] = useState(true)

  return (
    <aside className="w-80 bg-white shadow rounded-lg fixed top-4 right-4 z-20 overflow-hidden">
      <div className="flex">
        <div className="flex-1 m-3 font-medium">Inspector</div>
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
            <div className="m-3">Inspector</div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}
