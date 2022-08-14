import aboutData from "../data/about.json";
import { AboutItem } from "../components/aboutItem";

export const About = () => {
    return (
        <div className="p-2">
            <div className="border-t-4 relative mt-10">
                <h1 className="text-1xl absolute left-10 -top-4 bg-black pl-4 pr-4 text-make-light-green">
                    {aboutData.introduce.title}
                </h1>
                <p className="text-2xl p-5 text-make-light-green" >
                    {aboutData.introduce.description}
                </p>
            </div>
            {aboutData.skills.map((skill, index) => {
                const { title, stack } = skill;

                return (
                    <div key={index} className="border-t-4 relative mt-10">
                        <h1 className="text-1xl absolute left-10 -top-4 bg-black pl-4 pr-4 text-make-light-green">
                            {title}
                        </h1>
                            <div className="flex pt-10 pl-5 pr-5 flex-wrap">
                                {stack.map((icon, index) => {
                                    const { title, img } = icon;

                                    return (
                                        <AboutItem key={index} title={title} img={img}/>
                                    )
                                })}
                            </div>
                    </div>
                )
            })}
        </div>
    );
}