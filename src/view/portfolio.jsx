import { useState } from "react";
import { NavigationDot } from "../components/navigation_dot";
import { PortfolioItem } from "../components/portfolio_item";
import portfolioData from "../data/portfolio.json";
import { PortfolioModal } from "../components/portfolio_modal";

export const Portfolio = ({ parentNode }) => {
    const imageWidth = parentNode.current.clientWidth / 15;
    const imageHeight = parentNode.current.clientHeight / 20;
    let [ page, setPage ] = useState(0);
    let [ detail, setDetail ] = useState(false);
    let [ onModal, setOnModal ] = useState(false);
    let pixelStruct = [];

    for(let i = 0; i <= imageHeight; i++) {
        let temp = []
        for(let j = 0; j <= imageWidth; j++) {
            temp.push("")
        }
        pixelStruct.push(temp)
    }

    const handleRightArrow = () => {
        if (page < portfolioData.length - 1) setPage(page + 1);
    }

    const handleLeftArrow = () => {
        if (page > 0) setPage(page - 1);
    }

    const handleDetailView = () => {
        setDetail(true);
    }

    const handleGoBack = () => {
        setDetail(false);
    }

    const handleOnModal = (flag) => {
        setOnModal(flag)
    }

    return (
        <>
        {
            detail ?
                <div>
                    <div className="flex cursor-pointer">
                        <div className="flex items-center hover:shadow-pixelSmall cursor-pointer" onClick={handleGoBack}>
                            <img src="img/left_arrow.png" className="w-10 h-10 m-1" alt="right arrow"/>
                            <h1 className="text-[5vh]">Back</h1>
                        </div>
                    </div>
                    <div className="m-2">
                        <PortfolioItem pixelStruct={pixelStruct} img={portfolioData[page].img} detail={detail}/>
                            {onModal && <PortfolioModal handleOnModal={handleOnModal}/>}
                        <div className="shadow-pixelSmall p-2 mt-4">
                            <h2 className="text-xSmall mb-5">주 사용기술: {portfolioData[page].usedSkill}</h2>
                            <h2 className="text-xxSmall mb-2 hover:underline cursor-pointer text-make-light-green" 
                                onClick={() => handleOnModal(true)}>
                                프로젝트 상세 보기
                            </h2>
                            <p className="mb-5">{portfolioData[page].description}</p>
                            <ul className="list-disc ml-5">
                                {portfolioData[page].ing.map((e) => {
                                    return <li className="text-xxSmall">{e}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            :
            <div className="p-10 md:p-0">
                {page === 0 && <PortfolioItem pixelStruct={pixelStruct} img={portfolioData[page].img} detail={detail}/>}
                {page === 1 && <PortfolioItem pixelStruct={pixelStruct} img={portfolioData[page].img} detail={detail}/>}
                {page === 2 && <PortfolioItem pixelStruct={pixelStruct} img={portfolioData[page].img} detail={detail}/>}
                {page === 3 && <PortfolioItem pixelStruct={pixelStruct} img={portfolioData[page].img} detail={detail}/>}
                <div className="flex mt-5">
                    <img src="img/left_arrow.png" className="w-10 h-10 m-1 hover:shadow-pixelSmall" alt="right arrow" onClick={handleLeftArrow}/>
                    <img src="img/right_arrow.png" className="w-10 h-10 m-1 hover:shadow-pixelSmall" alt="left arrow" onClick={handleRightArrow}/>
                </div>
                <div className="flex items-center">
                    {portfolioData.map((dot, index) => {
                        return <NavigationDot key={index} page={page} index={index}/>
                    })}
                </div>
                <div className="hover:underline cursor-pointer" onClick={handleDetailView}>
                    <h1 className="text-[5vh]">{portfolioData[page].title}</h1>
                    <h2 className="text-[3vh]">{portfolioData[page].period}</h2>
                    <h3 className="text-[2vh]">{portfolioData[page].stack}</h3>
                </div>
            </div>
        }
        </>
    );
}