import Head from 'next/head'
import { FunctionComponent, useState } from 'react'

import { Canvas, Components, Inspector } from '../components'
import { nanoid } from '../lib'
import { Doc } from '../types'

const Home: FunctionComponent = () => {
  const [doc, setDoc] = useState<Doc>({
    height: 600,
    width: 600,
    components: [
      {
        type: 'div',
        props: {
          key: nanoid(),
          className:
            'bg-gradient-to-br from-amber-200 to-amber-300 absolute flex flex-col items-center justify-center h-full w-full top-0 left-0'
        },
        children: [
          {
            type: 'img',
            props: {
              key: nanoid(),
              className: 'h-32 w-32 bg-white rounded-full shadow',
              src: 'https://alizahid.dev/ali-zahid.jpg'
            }
          },
          {
            type: 'div',
            children: 'Ali Zahid',
            props: {
              key: nanoid(),
              className: 'text-4xl font-semibold mt-4'
            }
          },
          {
            type: 'div',
            children: 'hi@alizahid.dev',
            props: {
              key: nanoid(),
              className: 'text-sm mt-2'
            }
          }
        ]
      }
    ]
  })

  const [key, setKey] = useState<string>()

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
