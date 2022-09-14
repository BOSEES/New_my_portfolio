export const Avatar = () => {
    return (
        <div className="w-30 flex flex-col justify-center items-center mr-8 md:mr-0">
            <div className="md:flex md:items-center">
                <img className="w-28 h-28 rounded-full md:w-14 md:h-14 md:mr-1" src="img/profile.jpeg" alt="avatar"/>
                <a href="https://github.com/BOSEES" target="_blank" rel="noreferrer">
                    <div className="flex items-center md:flex-col">
                        <h2 className="text-2xl text-white">BOSEES</h2>
                        <div className="w-6 h-6 ml-1">
                                <img className="rounded-full w-5 h-5" src="img/github.png" alt="github"/>
                        </div>
                    </div>
                </a>
            </div>
            <div className="bg-white rounded-lg p-2 m-2 md:p-1 text-center">
                <i className="text-xl md:text-[0.8rem]">Blockchain Developer</i>
            </div>
        </div>
    );
}