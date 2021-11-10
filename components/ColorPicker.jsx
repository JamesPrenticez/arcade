//const colors = ["#b80000", "#db3e00", "#fccb00", "#008b02", "#006b76", "#1273de", "#004dcf", "#5300eb", "#000", "#FFF"]
const colors = ["bg-red-600", "bg-yellow-400", "bg-green-600", "bg-blue-600", "bg-indigo-600", "bg-purple-600", "bg-pink-500", "bg-green-400", "bg-black", "bg-white"]

export default function ColorPicker() {
    function handleClick(color){
        console.log(color)
    }

    return (
        <div className="grid grid-cols-2 grid-rows-5 border border-black ml-10 hover:cursor-pointer">
            {colors.map((color) => {
                return (
                <div
                    className={`${color} h-10 w-10`}
                    onClick={() => handleClick(color)}
                ></div>
                );
            })}

        </div>
    )
}