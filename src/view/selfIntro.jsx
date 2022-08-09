import { Avatar } from "../components/avatar";

export const SelfIntro = () => {
    return (
        <div>
            <Avatar />
            <h1 className="text-3xl font-bold text-make-light-green">
                안녕하세요.
            </h1>
            <h2 className="text-2xl font-bold text-make-light-green">
                블록체인 프론트엔드 개발자 김영일입니다.
            </h2>
        </div>
    );
}