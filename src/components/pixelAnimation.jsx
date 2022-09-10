import { useEffect, useRef } from "react"

export const PixelAnimation = () => {
    const pixelRef = useRef();
    const maxInterval = 500;

    useEffect(() => {
        const time = setTimeout(() => {
            pixelRef.current.className = "w-3 h-3";
        }, Math.random() * (maxInterval - 100) + 100)

        return () => clearTimeout(time);
    })
    return (
        <div ref={pixelRef} className="w-3 h-3 bg-black"></div>
    )

}