import { useRef } from "react";
import { Avatar } from "../components/avatar";
import { CategoryModal } from "../components/categoryModal";

const images = [
	{
		title: "About",
		image: "img/picture.png"
	},
	{
		title: "Resume",
		image: "img/cv.png"
	},
	{
		title: "Portfolio",
		image: "img/folder.png"
	},
	{
		title: "Blog",
		image: "img/coffee.png"
	},
]

export const SelfIntro = ({ setPage, page }) => {
	const navRef = useRef();
	// let flag = false;

	// const handleScroll = (y) => {
	// 	window.addEventListener("scroll", () => {
	// 		const value = window.scrollY;
	// 		const selector = navRef.current.className;
	// 		if (value > y && !flag) {
	// 			flag = true;
	// 			navRef.current.className = `${selector} scrollOn`;
	// 		} else if (value < y && flag){
	// 			const selectorJoin = selector.split(" ");
	// 			selectorJoin.pop();
	// 			navRef.current.className = selectorJoin.join(" ");
	// 			flag = false;
	// 		}
	// 	})
	// }

	// useEffect(() => {
	// 	const scroll = handleScroll(navRef.current.offsetTop);

	// 	return () => scroll;
	// }, [])

	return (
		<div className="flex flex-col justify-center p-10 h-screen w-7/12 md:w-full md:h-auto md:pb-0 md:pt-8 md:pl-8 md:pr-8 md:w-full">
			<div className="flex items-center flex-wrap md:flex-row md:justify-between">
				<Avatar />
				<div className="min-w-200">
					<h1 className="text-5xl font-bold text-white mb-4 md:text-[1rem] md:mb-0">
						안녕하세요.
					</h1>
					<div className="flex">
						<h2 className="text-2xl font-bold text-make-light-green mr-2 md:text-[1rem]">
							블록체인
						</h2>
						<h2 className="text-2xl font-bold text-white md:text-[1rem]">
							개발자
						</h2>
					</div> 
					<h2 className="text-2xl font-bold text-white md:text-[1rem]">
						김영일입니다.
					</h2>
				</div>
			</div>
			<div ref={navRef} className="flex justify-between pt-8 pb-8">
				<div className="mt-10 md:hidden md:mt-0">
					<h2 className="text-white">현재 사이트는</h2>
					<h2 className="text-white">React / tail-wind </h2>
					<h2 className="text-white">등을 사용하여 제작되었습니다.</h2>
					<br />
					<h2 className="text-white">저에게 관심이 있으시거나,</h2>
					<h2 className="text-white">관심사에 대해 궁금한 점이 있다면,</h2>
					<br />
					<div className="flex">
						<img className="mr-2 w-6 h-6" src="img/mail1.png" alt="email"/>
						<h2 className="text-make-light-green">rladuddlf320@gmail.com</h2>
					</div>
					<h2 className="text-white">위의 이메일로 언제든지 연락을 주세요.</h2>
					<h2 className="text-white">같이 성장하고 싶습니다.</h2>
					<br />
					<h2 className="text-white">짧지 않은 내용 봐주셔서 감사합니다 :D</h2>
					<h2 className="text-white">김영일 올림.</h2>
					<br />
					<h2 className="text-white">© 2022 Created by BOSEES</h2>
				</div>
				<div className="md:flex md:justify-between md:w-full">
					{images.map((category, index) => {
						const { title, image } = category;
						return (
							<CategoryModal key={index} title={title} image={image} index={index} setPage={setPage} page={page}/>
						)
					})}
				</div>
			</div>
		</div>
	);
};
