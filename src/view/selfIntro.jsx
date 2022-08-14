import { Avatar } from "../components/avatar";

export const SelfIntro = () => {
	return (
		<div className="flex flex-col justify-center p-14 bg-red-300 h-screen w-7/12">
			<div className="flex items-center flex-wrap	">
				<Avatar />
				<div className="min-w-200">
					<h1 className="text-5xl font-bold text-make-light-green mb-4">
						안녕하세요.
					</h1>
					<h2 className="text-2xl font-bold text-make-light-green">
						블록체인 프론트엔드 개발자
					</h2>
					<h2 className="text-2xl font-bold text-make-light-green">
						김영일입니다.
					</h2>
				</div>
			</div>
			<div className="flex justify-between">
				<div className="mt-10">
					<h2>현재 사이트는</h2>
					<h2>React / tail-wind </h2>
					<h2>등을 사용하여 제작되었습니다.</h2>
					<br />
					<h2>저에게 관심이 있으시거나,</h2>
					<h2>관심사에 대해 궁금한 점이 있다면,</h2>
					<br />
					<div className="flex">
						<img className="mr-1" src="img/mail.png" />
						<h2 className="text-make-dark-green">rladuddlf3@naver.com</h2>
					</div>
					<h2>위의 이메일로 언제든지 연락을 주세요.</h2>
					<h2>당신과 함께 성장하고 싶습니다.</h2>
					<br />
					<h2>봐주셔서 감사합니다 :D</h2>
					<h2>김영일 올림.</h2>
					{/* <br />
					<br />
					<br /> */}
					<h2>© 2020 Created by BOSEES</h2>
				</div>
				<div>
					<img className="mb-8" src="img/bill.png"></img>
					<img className="mb-8" src="img/bill.png"></img>
					<img className="mb-8" src="img/bill.png"></img>
					<img className="mb-8" src="img/bill.png"></img>
				</div>
			</div>
		</div>
	);
};
