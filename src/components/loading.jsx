export const Loading = () => {
    return (
        <div className="w-full h-full absolute flex items-center justify-center bg-black z-50">
            <div className="flex flex-col items-center">
                <h2 className="text-xSmall text-white"> Loading ...</h2>
                <div>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-200"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-300"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-400"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-500"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-600"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-700"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-800"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-900"></span>
                    <span className="inline-block align-middle w-3 h-3 m-1 bg-make-light-green animate-[loading_1s_infinite_alternate] animation-delay-1000"></span>
                </div> 
            </div>
        </div>
    )
}