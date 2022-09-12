export const Splash = ({ setToggle }) => {
    return (
        <div className="flex flex-col justify-center align-center w-full h-screen bg-neutral-900 text-white relative">
            <h1 className=" flex justify-center shadow-white-600 text-large mb-10 z-10">
                Hello World
            </h1>
            <img
                className="flex w-96 my-0 mx-auto bottom-0 z-0 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                src="img/profile.png"
                alt="_"
            />
            <span className="flex justify-center text-make-light-green text-5xl mb-56 z-10">
                Hello World Hello World
            </span>
            <button
                onClick={() => setToggle(true)}
                className="text-5xl z-10 shadow-pixel"
            >
                PRESS START
            </button>
            
        </div>
    )
}