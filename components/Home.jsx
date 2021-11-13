const games = [
    {   
        name: "Shooter",
        img: "/shooter.png",
        bgColor: "bg-red-500",
    },
    {   
        name: "Snake",
        img: "/snake.png",
        bgColor: "bg-green-600",
    },
    {   
        name: "Tetris",
        img: "/tetris.png",
        bgColor: "bg-yellow-300",
    },
    {   
        name: "Ski",
        img: "/ski.png",
        bgColor: "bg-blue-600",
    },
    {   
        name: "BBall",
        img: "/bball.png",
        bgColor: "bg-yellow-500",
    },
    {   
        name: "Racer",
        img: "/racer.png",
        bgColor: "bg-pink-500",
    },
    {   
        name: "Miner",
        img: "/miner.png",
        bgColor: "bg-gray-800",
    },
    {   
        name: "Flappy",
        img: "/flappy.png",
        bgColor: "bg-indigo-600",
    },
    {   
        name: "Hook",
        img: "/hook.png",
        bgColor: "bg-black",
    }
]


function Home() {
    return (
        <>
        <h1 className="font-semibold text-5xl p-4 text-purple-600">Bazinga!</h1>
        <div className="h-500px w-500px grid grid-cols-3 grid-rows-3">
            {games.map((game, index) => {
                return (
                <div key={index} className={`flex h-full w-full items-center justify-center text-white font-semibold ${game.bgColor}`}>
                    <p>{game.name}</p>
                </div>
                )
            })}
            
        </div>
        </>
    )
}

export default Home
