import Head from 'next/head'
import Canvas from '../components/Canvas'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen w-full">
      
        <Canvas />
      </div>

    </>
  )
}