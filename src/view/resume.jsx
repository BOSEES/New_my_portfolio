import resumeList from "../data/resumeList.json";

export const Resume = () => {

	return (
		<div className="flex-col text-white">
			{resumeList.map((data, idx) => (
				<div className="flex flex-col w-full mb-10 border-b-[1px] border-dashed" key={`data${idx}`}>
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
