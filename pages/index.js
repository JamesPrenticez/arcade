import Head from 'next/head'
import { useState } from 'react'
import RPG from '../components/RPG/RPG'
import BBall from '../components/BBall'
import Flappy from '../components/Flappy'
import Home from '../components/Home'
import Hook from '../components/Hook'
import Miner from '../components/Miner'
import Racer from '../components/Racer'
import Shooter from '../components/Shooter'
import Ski from '../components/Ski'
import Snake from '../components/Snake'
import Tetris from '../components/Tetris'

const pages = ["RPG", "Shooter", "Snake", "Tetris", "Ski", "BBall", "Racer", "Miner", "Flappy", "Hook"]

export default function Index() {
  const [page, setPage] = useState("Home")
  const length = JSON.stringify(pages.length)
  console.log(length)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Arcade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center md:max-w-3xl xl:max-w-6xl">
        <h1 className="text-6xl font-bold mb-5">
          Welcome to the{' '}
          <a 
            onClick={() => setPage("Home")}
            className="text-gradient-to-r from-green-400 to-blue-500 hover:cursor-pointer"
          >
              Arcade!
          </a>
        </h1>

      <div className="h-10 bg-gray-100 grid grid-cols-10">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => (setPage(page), console.log(page))}
              className="text-blue-600 h-full"
            >
                {page}
            </button>
          )
        })}
      </div>
      </main>

      {/*Render Components Based on State*/}
      {
        page === "Home" ? (<Home />) :
        page === "RPG" ? (<RPG />) :
        page === "Shooter" ? (<Shooter />) :
        page === "Snake" ? <Snake /> :
        page === "Tetris" ? <Tetris /> :
        page === "Ski" ? <Ski /> :
        page === "BBall" ? <BBall /> :
        page === "Racer" ? <Racer /> :
        page === "Miner" ? <Miner /> :
        page === "Flappy" ? <Flappy /> :
        page === "Hook" ? <Hook /> :
        "Home"
        }
       

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Built by James Prentice
      </footer>
    </div>
  )
}
