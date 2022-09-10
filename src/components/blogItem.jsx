export const BlogItem = ({ img, title, description }) => {
    return (
        <div className="shadow-pixelMedium w-44 h-72 p-2 m-4">
            <img className="w-full"src={img} alt="item"/>
            <h2 className="text-2xl">{title}</h2>
            <p>{description}</p>
        </div>
    )
}