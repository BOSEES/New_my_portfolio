import { useRef, useState } from "react";

export const CategoryModal = ({title, index, setPage}) => {
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
            <img ref={pageRef} key={index + 1} className="mt-8 hover:cursor-pointer bg-white"
                src="img/bill.png" 
                onClick={() => setPage(index + 1)}
                onMouseMove={() => handleMouseMove(title)}
                onMouseOut={() => handleMouseOut()}
            />
            {hover && 
                <div className="shadow-pixelSmall absolute top-0 right-10 pl-2 pr-2">
                    <h2 className="text-white">{hover}</h2>
                </div>
            }
        </div>
    )
}

