import { useRef, useState } from "react";

export const CategoryModal = ({title, index, image, setPage, page}) => {
    const [hover, setHover] = useState(null);
    const pageRef = useRef();

	const handleMouseMove = (title) => {
        setHover(title);
	}

	const handleMouseOut = () => {
		setHover(null);
	}

    return (
        <div className="relative">
            <img ref={pageRef} key={index + 1} className="mt-8 hover:cursor-pointer w-6 h-6"
                src={image}
                onClick={() => setPage(index + 1)}
                onMouseMove={() => handleMouseMove(title)}
                onMouseOut={() => handleMouseOut()}
                alt="tab"
            />
            {hover && 
                <div className="shadow-pixelSmall absolute top-0 right-10 pl-2 pr-2">
                    <h2 className="text-white">{hover}</h2>
                </div>
            }
            {page = index + 1 &&
                <div className="w-2 h-2 rounded-full bg-make-light-green absolute -top-2 -right-2"/>    
            }
        </div>
    )
}

