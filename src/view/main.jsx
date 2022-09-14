import { useEffect, useRef, useState } from "react";
import { SelfIntro } from "./selfIntro";
import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./blog";

export const Main = () => {
    const [page, setPage] = useState(1);
    const parentNode = useRef();

    useEffect(() => {
		parentNode.current.scrollTop = 0;
    }, [page]);
    
    return (
        <>
            <SelfIntro setPage={setPage} page={page} />
            <div className="w-full p-6">
                    <div ref={parentNode} className="scrollHidden w-full h-[92vh] shadow-pixelMedium flex flex-col p-5 text-white">
                        {page === 1 && <About />}
                        {page === 2 && <Resume />}
                        {page === 3 && <Portfolio parentNode={parentNode} />}
                        {page === 4 && <Blog />}
                    </div>
            </div>
        </>
    )
}