export const Avatar = () => {
    return (
        <div className="w-48 flex flex-col  justify-center items-center mr-8">
            <img className="w-28 rounded-full" src="img/profile.jpeg" alt="avatar"/>
                <a href="https://github.com/BOSEES" target="_blank" rel="noreferrer">
                    <div className="flex items-center">
                        <h2 className="text-2xl text-white">BOSEES</h2>
                        <div className="w-6 h-6 ml-1">
                                <img className="w-full rounded-full" src="img/github.png" alt="github"/>
                        </div>
                    </div>
                </a>
            <div className="bg-white w-44 rounded-lg p-2 m-2">
                <i className="text-1xl">Blockchain Developer</i>
            </div>
        </div>
    );
}