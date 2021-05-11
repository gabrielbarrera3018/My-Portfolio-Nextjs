import React from "react";
import styles from "../styles/Intro.module.css";
import { motion } from "framer-motion";

function Intro() {
	return (
		<div className={styles.containerIntro}>
			<h1
				className={styles.containerIntroInfo}
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="1500">
				; Hi, I am Parth
			</h1>
			<motion.div
				animate={{ scale: 0.5 }}
				transition={{ duration: 2 }}
				className={styles.containerIntroInfoBorder}
			/>
			<div className={styles.socialLinks}>
				<a
					href="https://github.com/Parth-2000"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1500"
					target="_blank">
					<i className={"fa fa-github " + styles.icon} aria-hidden="true"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/parth-patel-1478071b2/"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1500"
					target="_blank">
					<i
						className={"fa fa-linkedin-square icon " + styles.icon}
						aria-hidden="true"></i>
				</a>
				<a
					href="https://www.instagram.com/p_a_r_t_h_2809"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1500"
					target="_blank">
					<i
						className={"fa fa-instagram icon " + styles.icon}
						aria-hidden="true"></i>
				</a>

				<a
					href="https://www.facebook.com/profile.php?id=100027807610053"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1500"
					target="_blank">
					<i
						className={"fa fa-facebook-square " + styles.icon}
						aria-hidden="true"></i>
				</a>
			</div>
		</div>
	);
}

export default Intro;
