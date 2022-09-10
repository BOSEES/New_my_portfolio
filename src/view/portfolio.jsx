import { useState } from "react";
import { NavigationDot } from "../components/navigation_dot";
import { PortfolioItem } from "../components/portfolio_item";
import portfolioData from "../data/portfolio.json";

export const Portfolio = ({ parentNode }) => {
    const imageWidth = parentNode.current.clientWidth / 15;
    const imageHeight = parentNode.current.clientHeight / 15;
    const [ page, setPage ] = useState();
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
            {page === 1 && }
            {/* {portfolioData.map((item) => {
                const { img } = item;
                return <PortfolioItem pixelStruct={pixelStruct} img={img}/>
            })} */}
            <div className="flex mt-5">
                <img src="img/left_arrow.png" className="w-10 h-10 m-1" alt="right arrow"/>
                <img src="img/right_arrow.png" className="w-10 h-10 m-1" alt="left arrow"/>
            </div>
            <div className="flex">
                {portfolioData.map((dot ,index) => {
                    return <NavigationDot index={index}/>
                })}
            </div>
            <div>
                <h1 className="text-[5vh]">PERI Finance NEND Project</h1>
                <h2 className="text-[3vh]">기간</h2>
                <h3 className="text-[2vh]">설명</h3>
            </div>
        </div>
    );
}