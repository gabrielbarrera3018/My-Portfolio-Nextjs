import React from "react";
import styles from "../styles/AboutMe.module.css";

function AboutMe() {
	return (
		<div className={styles.containerAboutMe}>
			<img
				className={styles.dots}
				data-aos="fade-right"
				data-aos-offset="100"
				data-aos-easing="ease-in-sine"
				data-aos-duration="1500"
				src="/1.png"
				alt="dots"
			/>
			<div className={styles.AboutMeProfilePic}>
				<img
					src="/profilePic.jpg"
					data-aos="fade-up"
					data-aos-offset="100"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className={styles.profilePicImg}></img>
			</div>
			<div className={styles.AboutMeInfo}>
				<div className={styles.AboutMeHeading}>
					<h1
						data-aos="zoom-out"
						data-aos-offset="100"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="1500">
						About Me
					</h1>
					<div
						data-aos="fade-right"
						data-aos-offset="100"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="1500"
						className={styles.AboutMeHeadingUnderline}></div>
				</div>
				<p
					data-aos="fade-left"
					data-aos-offset="100"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className={styles.AboutMeTitle}>
					I am <b>Patel Parth,</b>
				</p>
				<p
					data-aos="fade-left"
					data-aos-offset="100"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className={styles.AboutMeDescription}>
					Currently Pursuing <b>B.E</b> in <b>Computer Engineering</b> from
					<b> LDCE</b>.
				</p>
				<p
					data-aos="fade-left"
					data-aos-offset="100"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className={styles.AboutMeDescription}>
					A <b>Full Stack Web Developer</b>, Also have experience of App
					Development using <b>Flutter</b> & have a experience in{" "}
					<b>Machine Learning</b>. Currently exploring <b>openCV</b>. Always
					ready to collaborate and work with other.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
