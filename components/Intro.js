import React from "react";
import styles from "../styles/Intro.module.css";
import { motion } from "framer-motion";

function Intro() {
	return (
		<div className={styles.containerIntro}>
			<motion.h1
				animate={{ opacity: 1 }}
				className={styles.containerIntroInfo}
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="1500">
				; Hi, I am Parth
			</motion.h1>
			<motion.div
				animate={{ scale: 0.5 }}
				transition={{ duration: 2 }}
				className={styles.containerIntroInfoBorder}
			/>
			<motion.div
				animate={{ opacity: 1 }}
				className={styles.socialLinks}
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="1500">
				<motion.a
					transition={{ duration: 0.5, delay: 0.1 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					href="https://github.com/Parth-2000"
					target="_blank">
					<i className={"fa fa-github " + styles.icon} aria-hidden="true"></i>
				</motion.a>
				<motion.a
					href="https://www.linkedin.com/in/parth-patel-1478071b2/"
					transition={{ duration: 0.5, delay: 0.1 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					target="_blank">
					<i
						className={"fa fa-linkedin-square icon " + styles.icon}
						aria-hidden="true"></i>
				</motion.a>
				<motion.a
					href="https://www.instagram.com/p_a_r_t_h_2809"
					transition={{ duration: 0.5, delay: 0.1 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					target="_blank">
					<i
						className={"fa fa-instagram icon " + styles.icon}
						aria-hidden="true"></i>
				</motion.a>

				<motion.a
					href="https://www.facebook.com/profile.php?id=100027807610053"
					transition={{ duration: 0.5, delay: 0.1 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					target="_blank">
					<i
						className={"fa fa-facebook-square " + styles.icon}
						aria-hidden="true"></i>
				</motion.a>
			</motion.div>

			<motion.div
				animate={{ opacity: 1 }}
				className={styles.download}
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="1500">
				<a href="./Resume.pdf" download>
					<button
						style={{
							borderRadius: "10px",
							borderColor: "transparent",
							background: "rgb(23, 42, 70)",
						}}>
						<div className={styles.downloadBtn}>
							<img
								className={styles.downloadLogo}
								src="https://img.icons8.com/pastel-glyph/32/c1cbe9/download--v2.png"></img>
							<span>Resume</span>
						</div>
					</button>
				</a>
			</motion.div>
		</div>
	);
}

export default Intro;
