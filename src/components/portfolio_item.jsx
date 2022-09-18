import { PixelAnimation } from "../components/pixelAnimation";

export const PortfolioItem = ({ pixelStruct, img }) => {
    return (
        <div className="flex relative w-full justify-center overflow-hidden">
            <img className="w-4/5 h-[50vh]" src={img} alt="items" />
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
    )
}