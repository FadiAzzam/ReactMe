import React from 'react';
import Progress from "../components/common/Progress"
const skills = [
	{
		title: 'React js',
		body: 'Verschiedene Projekte aus Studium und Arbeit mit der Verwendung von:',
		frameworks: ['Class Components', 'React Hooks', 'JSX']
	},
	{
		title: 'JavaScript',
		body: 'Verschiedene Projekte aus Studium und Arbeit mit der Verwendung von:',
		frameworks: ['React', 'Redux', 'JQuery']
	},
	{
		title: 'HTML5 | CSS3 | Sass',
		body: 'Die Umsetzung von Webseiten mit der Verwendung von verschiedenen Frameworks wie z.b.:',
		frameworks: ['Bootstrap 5', 'StyledComponent', "Semantic UI", "Font Awesome 6"]
	},
	{
		title: 'Wordpress',
		body:
			'Erstellung von verschiedenen Designvorlagen für Wordpress-Websites und die Designs-Umsetzung in Wordpress-Websites',
		frameworks: ['Elementor']
	},
	{
		title: 'Adobe XD',
		body: 'Uni-Projkten, Erstellung von UI/UX einer mobile application und von Nutzerszenarien.',
		frameworks: ['']
	},
	{
		title: 'Affinity Designer & Photo',
		body: 'Im Rahmen der Arbeit wurden verschiedenen Grafiken sowohl für Websites als auch für Viedeos erstellt.',
		frameworks: ['']
	},
	{
		title: 'MS Office',
		body: 'Datenanalyse, Datenvisualisierung, Daten validieren, Dokumente erstellen, Tabellenkalkulation erstellen',
		frameworks: ['']
	},
	{
		title: 'Adobe InDesign',
		body: 'Konzeption von Broschüren und Design-Vorlagen, Design Umsetzung',
		frameworks: ['']
	},
	{
		title: 'Unity',
		body: 'Gamedesign, Leveldesign und -planung',
		frameworks: ['']
	}
];


const SkillsInProgress = [
	{
		title: 'React Native',
		body: '',
		frameworks: [""]
	},
	{
		title: 'Node.js',
		body: '',
		frameworks: [""]
	},
	{
		title: 'Figma',
		body: '',
		frameworks: [""]
	}
]

const Skills = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-1 p-1" />
				<div className="col-md-10 p-1">
					<div>
						<div className="d-flex mb-2">
							<div className="subTitleBox">
								<span className="pl-1 pr-1">meine kenntnisse</span>
							</div>
						</div>
						<h1 className="font-weight-bold ">
							Folgende Programmier-, Auszeichnungs- und Skript- sprachen, die ich durch mein Studium und
							Arbeit erworben habe.
						</h1>
					</div>

					<article className="MosaicLayout">
						{skills.map((item, i) => {
							return (
								<div key={i} className="card">
									<div className="card-body">
										<div>
											<h5 className="card-title">{item.title}</h5>
											<p className="fw-light">{item.body}</p>
										</div>
										<div>
											{item?.frameworks.map((framework, j) => {
												return (
													<React.Fragment key={framework}>
														<span className="text-info">
															{framework}
														</span>
														{item?.frameworks?.length === j + 1 ? "" : <span>|</span>}
													</React.Fragment>
												)
											})}
										</div>
									</div>
								</div>
							)
						})}
					</article>



					<article className="MosaicLayout">
						<div className="card">
							<div className="card-body">
								<div className="d-flex mb-2">
									<div className="subTitleBox">
										<span className="pl-1 pr-1">skills in progress</span>
									</div>
								</div>
								<h1 className="font-weight-bold ">
									Checkliste Weiterbildungsziele
								</h1>
								<Progress />

							</div>
							{SkillsInProgress.map((item, i) => {
								return (
									<div key={i} className="card-body">
										<div>
											<h5 className="card-title">{item.title}</h5>
											<p className="fw-light">{item.body}</p>
										</div>
										<div>
											{item?.frameworks.map((framework, j) => {
												return (
													<React.Fragment key={framework}>
														<span className="text-info">
															{framework}
														</span>
														{item?.frameworks?.length === j + 1 ? "" : <span>|</span>}
													</React.Fragment>
												)
											})}
										</div>
									</div>
								)
							})}
						</div>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Skills;
