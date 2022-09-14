import aboutData from "../data/about.json";
import { AboutItem } from "../components/aboutItem";

export const About = () => {

    return (
        <div className="p-2">
            <div className="border-t-4 relative mt-5">
                <h1 className="text-1xl absolute left-10 -top-4 bg-black pl-4 pr-4 text-white">
                    {aboutData.introduce.title}
                </h1>
                <p className="text-2xl p-5 text-white whitespace-pre-line" >
                    {aboutData.introduce.description}
                </p>
            </div>
            <div className="flex justify-end md:mb-4">
                <span className="flex">
                    <div className="flex justify-center items-center">
                        <h4 className="text-[12px]">현재 진행 중인 프로젝트에서 사용중:</h4>
                        <div className="w-2 h-2 rounded-full mr-2 bg-make-light-green"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <h4 className="text-[12px]">그 이외:</h4>
                        <div className="w-2 h-2 rounded-full mr-2 bg-make-light-red"/>
                    </div>
                </span>
            </div>
            {aboutData.skills.map((skill, index) => {
                const { title, stack } = skill;

                return (
                    <div key={index} className="border-t-4 relative pb-10">
                        <h1 className="text-1xl absolute left-10 -top-4 bg-black pl-4 pr-4 text-white">
                            {title}
                        </h1>
                            <div className="flex pt-10 pl-5 pr-5 flex-wrap md:pl-0 md:pr-0">
                                {stack.map((icon, index) => {
                                    const { title, img, isUsed } = icon;

                                    return (
                                        <AboutItem key={index} title={title} isUsed={isUsed} img={img}/>
                                    )
                                })}
                            </div>
                    </div>
                )
            })}
        </div>
    );
}