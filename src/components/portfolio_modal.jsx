import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const PortfolioModal = ({ handleOnModal }) => {
    
    return (
        <div className="flex items-center justify-center fixed w-screen h-screen bg-modal-bgc top-0 left-0 p-10">
            <div className="flex flex-col w-3/5 h-full shadow-pixelMedium bg-black p-2 md:w-full">
                <div className="flex w-full">
                    <div className="flex items-center hover:shadow-pixelSmall cursor-pointer m-2" onClick={() => handleOnModal(false)}>
                        <img src="img/left_arrow.png" className="w-5 h-5 m-1" alt="right arrow"/>
                        <h1 className="text-[3vh]">Back</h1>
                    </div>
                </div>
                <Swiper
                    className="w-full h-full justify-center items-center"
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                    enabled: true,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "20px" 
                    }}
                >
                    <SwiperSlide>
                        <div className="flex items-center w-full h-full">
                            <img className="w-full h-3/5" src="img/dex_chart.png"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center w-full h-full">
                            <img className="w-full h-3/5" src="img/aws_pixel.png"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center w-full h-full">
                            <img className="w-full h-3/5" src="img/dex_chart.png"></img>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}