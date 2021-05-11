import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Project.module.css";

function Project({ link, imgSrc, projectName }) {
	return (
		<motion.div
			className={styles.ProjectContainer}
			whileHover={{ scale: 1.05, height: "100%" }}
			whileTap={{ scale: 1 }}>
			<div className={styles.overlay}>
				<div className={styles.link}>
					<a href={link}>
						<img
							src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png"
							style={{ width: "50px", height: "50px" }}
							alt="link-icon"
						/>
					</a>
				</div>
			</div>
			<img className={styles.ProjectImage} src={imgSrc} alt={imgSrc} />
			<h3>{projectName}</h3>
		</motion.div>
	);
}

export default Project;
