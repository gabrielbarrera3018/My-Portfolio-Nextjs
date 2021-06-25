import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Project.module.css";

function Project({ link, imgSrc, projectName }) {
	return (
		<motion.a
			href={link}
			target="_blank"
			className={styles.ProjectContainer}
			transition={{ duration: 0.5, delay: 0.1 }}
			whileHover={{ scale: 1.05, height: "100%" }}
			whileTap={{ scale: 0.95 }}>
			<img className={styles.ProjectImage} src={imgSrc} alt={imgSrc} />
			<h3>{projectName}</h3>
		</motion.a>
	);
}

export default Project;
