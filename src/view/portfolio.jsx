import { PixelAnimation } from "../components/pixelAnimation";

export const Portfolio = ({ test }) => {
    const imageWidth = test.current.clientWidth / 15;
    const imageHeight = test.current.clientHeight / 15;
    let pixelStruct = [];

    for(let i = 0; i <= imageHeight; i++) {
        let temp = []
        for(let j = 0; j <= imageWidth; j++) {
            temp.push("")
        }
        pixelStruct.push(temp)
    }

    return (
        <div className="p-10">
            <div className="flex relative w-full justify-center overflow-hidden">
                <img className="w-4/5 h-[50vh]" src="img/ethers_pixel.png" alt="" /> 
                <div className="absolute top-0">
                    {pixelStruct.map((y, index) => {
                        return (
                            <div className="flex w-full" key={index}>
                                {y.map((x, index) => {
                                    return (
                                        <PixelAnimation key={index}/>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="">
                
            </div> 
            <div>
                <h1>PERI Finance NEND Project</h1>
                <h2>기간</h2>
                <h3>설명</h3>
            </div>
        </div>
    );
}