import React, { FunctionComponent } from 'react'
import { Logo } from './logo'

export const Header: FunctionComponent = () => (
  <header className="flex items-center p-3">
    <Logo size={24} />
    <h1 className="font-semibold ml-2">Magic Lamp</h1>
  </header>
)
