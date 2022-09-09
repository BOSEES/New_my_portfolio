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
	return (
		<div className="flex flex-col justify-center p-10 h-screen w-7/12">
			<div className="flex items-center flex-wrap	">
				<Avatar />
				<div className="min-w-200">
					<h1 className="text-5xl font-bold text-white mb-4">
						안녕하세요.
					</h1>
					<h2 className="text-2xl font-bold text-make-light-green">
						블록체인 프론트엔드
					</h2>
					<h2 className="text-2xl font-bold text-white">
						개발자 김영일입니다.
					</h2>
				</div>
			</div>
			<div className="flex justify-between">
				<div className="mt-10">
					<h2 className="text-white">현재 사이트는</h2>
					<h2 className="text-white">React / tail-wind </h2>
					<h2 className="text-white">등을 사용하여 제작되었습니다.</h2>
					<br />
					<h2 className="text-white">저에게 관심이 있으시거나,</h2>
					<h2 className="text-white">관심사에 대해 궁금한 점이 있다면,</h2>
					<br />
					<div className="flex">
						<img className="mr-2 w-6 h-6" src="img/mail1.png" />
						<h2 className="text-make-light-green">rladuddlf320@gmail.com</h2>
					</div>
					<h2 className="text-white">위의 이메일로 언제든지 연락을 주세요.</h2>
					<h2 className="text-white">당신과 함께 성장하고 싶습니다.</h2>
					<br />
					<h2 className="text-white">봐주셔서 감사합니다 :D</h2>
					<h2 className="text-white">김영일 올림.</h2>
					<br />
					<h2 className="text-white">© 2022 Created by BOSEES</h2>
				</div>
				<div>
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
