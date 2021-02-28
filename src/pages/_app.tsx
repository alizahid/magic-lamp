import 'tailwindcss/tailwind.css'
import '../styles/index.scss'

import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'

const MagicLamp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MagicLamp
