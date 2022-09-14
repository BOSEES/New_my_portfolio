export const AboutItem = ({ title, img, isUsed }) => {
    return (
        <div className="flex flex-col items-center w-32 p-2">
            <img className="w-24 h-24 rounded"src={img} alt="logo"/>
            <div className="flex items-center mt-4">
                {isUsed ? 
                    <div className="w-2 h-2 rounded-full mr-2 bg-make-light-green"/> 
                    : 
                    <div className="w-2 h-2 rounded-full mr-2 bg-make-light-red"/>
                }
                <h2 className="text-white">{title}</h2>
            </div>
        </div>
    )
}

