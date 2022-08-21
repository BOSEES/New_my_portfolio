export const AboutItem = ({ title, img }) => {
    return (
        <div className="flex flex-col items-center w-36 p-2">
            <img className="w-24 h-24 rounded"src={img}/>
            <div className="flex items-center mt-4">
                <div className="w-2 h-2 rounded-full mr-2 bg-make-light-green"/>
                <h2 className="text-white">{title}</h2>
            </div>
        </div>
    )
}

