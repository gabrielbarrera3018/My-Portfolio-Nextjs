import React from "react";
import styles from "../styles/Skills.module.css";
import Project from "./Project";
import data from "../components/ProjectData.json";

function Skills() {
	return (
		<div className={styles.SkillsContainer}>
			<h1
				className={styles.SkillsTitle}
				data-aos="fade-up"
				data-aos-duration="1500">
				Skills
			</h1>
			<div
				className={styles.SkillsTitleUnderline}
				data-aos="fade-up"
				data-aos-duration="1500"></div>
			<div
				className={styles.GridContainerSkills}
				data-aos="zoom-in-up"
				data-aos-duration="2000">
				<h2>HTML</h2>
				<h2>CSS</h2>
				<h2>Javascript</h2>
				<h2>Bootstrap</h2>
				<h2>React</h2>
				<h2>NextJS</h2>
				<h2>Node</h2>
				<h2>Python</h2>
				<h2>Flask</h2>
				<h2>Scikit-Learn</h2>
				<h2>Numpy</h2>
				<h2>Pandas</h2>
				<h2>Matplotlib</h2>
			</div>
			<h1
				className={styles.SkillsTitle}
				data-aos="fade-up"
				data-aos-duration="1500">
				Projects
			</h1>
			<div
				className={styles.SkillsTitleUnderline}
				data-aos="fade-up"
				data-aos-duration="1500"></div>
			<div
				className={styles.GridContainerProjects}
				data-aos="zoom-in-up"
				data-aos-duration="2000">
				{data.map((value, i) => {
					return (
						<Project
							link={value.link}
							projectName={value.projectName}
							imgSrc={value.imgSrc}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Skills;
