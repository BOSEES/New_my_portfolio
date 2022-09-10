export const NavigationDot = ({ page, index }) => {

    return (
        <>
            {index === page ?
                <div className="w-3 h-3 m-0.5 rounded-full bg-make-light-green"/> 
                :
                <div className="w-2 h-2 m-0.5 rounded-full bg-make-dark-green"/>
            }
        </>
    )
}