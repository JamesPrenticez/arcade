import Player from "../components/Character/Player"

const Home = () => {

  return (
    <>    
    <h1 className="font-semibold text-5xl p-4 text-red-600">Game</h1>
    {/*Zone-Container*/}
    <Player skin={"f2"} />
    <h1 className="font-semibold text-xl p-4 text-black">Left | Right | Up | Down Arrow Keys to move </h1>
  </>
  )
}

export default Home