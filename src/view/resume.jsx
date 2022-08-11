// import { resumeList } from "../lib/data";

export const Resume = () => {
	const resumeList = [
		{
			period: ["2022.04", "현재"],
			thumbnail: "img/NodeJs.png",
			title: "I2MAX",
			position: "세일즈포스 개발자(CommonDev Front & Back)",
			job: "개발센터 파트4 책임 개발자",
			status: ["프로젝트 진행중", true],
			projects: [
				{
					period: ["2022.04", "현재"],
					title: "삼성전자 Foundry 부문 비즈니스 시스템 구축 Phase 2",
					language: ["Salesforce LWC", "APEX"],
					description: [
						"Foundry 사업부 부분 비즈니스 레거시 시스템 세일즈포스 이관 및 시스템 개발",
						"개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
						"Lightning Web component(es6 web component)를 통한 Frontend 개발",
					],
				},
			],
		},
		{
			period: ["2022.04", "현재"],
			thumbnail: "img/NodeJs.png",
			title: "I2MAX",
			position: "세일즈포스 개발자(CommonDev Front & Back)",
			job: "개발센터 파트4 책임 개발자",
			status: ["프로젝트 진행중", true],
			projects: [
				{
					period: ["2022.04", "현재"],
					title: "삼성전자 Foundry 부문 비즈니스 시스템 구축 Phase 2",
					language: ["Salesforce LWC", "APEX"],
					description: [
						"Foundry 사업부 부분 비즈니스 레거시 시스템 세일즈포스 이관 및 시스템 개발",
						"개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
						"Lightning Web component(es6 web component)를 통한 Frontend 개발",
					],
				},
			],
		},
		{
			period: ["2022.04", "현재"],
			thumbnail: "img/NodeJs.png",
			title: "I2MAX",
			position: "세일즈포스 개발자(CommonDev Front & Back)",
			job: "개발센터 파트4 책임 개발자",
			status: ["프로젝트 진행중", true],
			projects: [
				{
					period: ["2022.04", "현재"],
					title: "삼성전자 Foundry 부문 비즈니스 시스템 구축 Phase 2",
					language: ["Salesforce LWC", "APEX"],
					description: [
						"Foundry 사업부 부분 비즈니스 레거시 시스템 세일즈포스 이관 및 시스템 개발",
						"개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
						"Lightning Web component(es6 web component)를 통한 Frontend 개발",
					],
				},
			],
		},
		{
			period: ["2022.04", "현재"],
			thumbnail: "img/NodeJs.png",
			title: "I2MAX",
			position: "세일즈포스 개발자(CommonDev Front & Back)",
			job: "개발센터 파트4 책임 개발자",
			status: ["프로젝트 진행중", true],
			projects: [
				{
					period: ["2022.04", "현재"],
					title: "삼성전자 Foundry 부문 비즈니스 시스템 구축 Phase 2",
					language: ["Salesforce LWC", "APEX"],
					description: [
						"Foundry 사업부 부분 비즈니스 레거시 시스템 세일즈포스 이관 및 시스템 개발",
						"개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
						"Lightning Web component(es6 web component)를 통한 Frontend 개발",
					],
				},
			],
		},
		{
			period: ["2022.04", "현재"],
			thumbnail: "img/NodeJs.png",
			title: "I2MAX",
			position: "세일즈포스 개발자(CommonDev Front & Back)",
			job: "개발센터 파트4 책임 개발자",
			status: ["프로젝트 진행중", true],
			projects: [
				{
					period: ["2022.04", "현재"],
					title: "삼성전자 Foundry 부문 비즈니스 시스템 구축 Phase 2",
					language: ["Salesforce LWC", "APEX"],
					description: [
						"Foundry 사업부 부분 비즈니스 레거시 시스템 세일즈포스 이관 및 시스템 개발",
						"개발언어 : Salesforce LWC(shadow dom 기반 Frontend 개발언어) / APEX(JAVA 기반 자체 Backend 개발언어)",
						"Lightning Web component(es6 web component)를 통한 Frontend 개발",
					],
				},
			],
		},
	];

	return (
		<div className="flex-col text-white">
			{resumeList.map((data, idx) => (
				<div className="flex flex-col w-full mb-10" key={`data${idx}`}>
					<div className="flex justify-between mb-10 ">
						<span>{`${data.period[0]} ~ ${data.period[1]}`}</span>
						<div
							className={`${
								data.status[1] ? "bg-cyan-500" : "bg-red-500"
							} p-1 rounded-md`}
						>
							{data.status[0]}
						</div>
					</div>
					<div className="flex align-center mb-5">
						<img
							className="min-w-15 w-15 min-h-15 h-15 mr-5 rounded-full"
							src={data.thumbnail}
							alt="_"
						/>
						<div>
							<h2 className="text-xl font-bold">{data.title}</h2>
							<span className="mr-5">직책: {data.job}</span>
							<span>포지션: {data.position}</span>
						</div>
					</div>

					{data.projects.map((project) => (
						<div key={project.title}>
							<h3 className="mb-3 text-xl font-bold">{project.title}</h3>
							<span>
								개발언어 :{" "}
								<span className="font-bold bg-zinc-500 p-1 rounded-md">
									{project.language.join(" / ")}
								</span>
							</span>
							<ul className="mt-3">
								{project.description.map((desc, idx) => (
									<li className="mb-2" key={`project${idx}`}>
										- {desc}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			))}
		</div>
	);
};
