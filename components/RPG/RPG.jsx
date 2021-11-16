import Player from "./Player"

function RPG() {

  return (
  <>    
    <h1 className="font-semibold text-5xl p-4 text-red-600">RPG</h1>
    {/*Zone-Container*/}
    <div className="border-box border-4 border-blue-700 w-500px h-500px">
      <Player skin={"m3"} />
    </div>
    <h1 className="font-semibold text-xl p-4 text-black">WASD to Move | Mouse to aim and shoot</h1>
  </>
  )
}

export default RPG

// Sprite > Actor > Player