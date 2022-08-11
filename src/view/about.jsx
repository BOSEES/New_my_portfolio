import aboutData from "../data/about.json";
import { AboutItem } from "../components/aboutItem";

export const About = () => {
    return (
        <div className="p-2 bg-blue-200">
            <div className="border-t-4 border-indigo-600 relative mt-10">
                <h1 className="text-1xl absolute left-10 -top-4 bg-yellow-200">
                    {aboutData.introduce.title}
                </h1>
                <p className="text-2xl p-5" >
                    {aboutData.introduce.description}
                </p>
            </div>
            {aboutData.skills.map((skill, index) => {
                const { title, stack } = skill;

                return (
                    <div key={index} className="border-t-4 border-indigo-600 relative mt-10">
                        <h1 className="text-1xl absolute left-10 -top-4 bg-yellow-200">
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