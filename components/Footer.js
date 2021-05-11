import React from "react";
import styles from "../styles/Footer.module.css";
function Footer() {
	return (
		<div className={styles.Footer}>
			<div className={styles.FooterTop}>
				<p>Patel Parth</p>
				<p>+91 6354680937</p>
			</div>
			<div className={styles.FooterMiddle}>
				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=parthp123123@gmail.com"
					target="_blank">
					<i
						className={"fa fa-envelope-o " + styles.icon}
						aria-hidden="true"></i>
				</a>
				<a href="https://github.com/Parth-2000" target="_blank">
					<i className={"fa fa-github " + styles.icon} aria-hidden="true"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/parth-patel-1478071b2/"
					target="_blank">
					<i
						className={"fa fa-linkedin-square icon " + styles.icon}
						aria-hidden="true"></i>
				</a>
				<a href="https://www.instagram.com/p_a_r_t_h_2809" target="_blank">
					<i
						className={"fa fa-instagram icon " + styles.icon}
						aria-hidden="true"></i>
				</a>

				<a
					href="https://www.facebook.com/profile.php?id=100027807610053"
					target="_blank">
					<i
						className={"fa fa-facebook-square " + styles.icon}
						aria-hidden="true"></i>
				</a>
			</div>
			<div className={styles.FooterBottom}>
				<p>Copyright © 2020</p>
			</div>
		</div>
	);
}

export default Footer;
