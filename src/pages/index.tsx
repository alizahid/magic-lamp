import Head from 'next/head'
import { FunctionComponent, useState } from 'react'

import { Canvas, Components, Header, Inspector } from '../components'
import { Component, Doc } from '../types'

const Home: FunctionComponent = () => {
  const [doc, setDoc] = useState<Doc>({
    height: 600,
    width: 600,
    components: [
      {
        tag: 'div',
        props: {
          className: 'absolute h-full w-full top-0 left-0'
        }
      }
    ]
  })

  const [component, setComponent] = useState<Component>()

  return (
    <>
      <Head>
        <title>Magic Lamp</title>
      </Head>

      <Components doc={doc} onChange={(doc) => setDoc(doc)} />

      <Canvas doc={doc} onChange={(doc) => setDoc(doc)} />

      <Inspector />
    </>
  )
}

export default Home
