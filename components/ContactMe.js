import React from "react";
import styles from "../styles/ContactMe.module.css";

function ContactMe() {
	return (
		<div className={styles.ContactMeContainer}>
			<form className={styles.ContactMeForm}>
				<h1 className={styles.ContactMeTitle}>Get In Touch</h1>
				<input
					className={styles.ContactMeFormFeild}
					type="email"
					name="email"
					placeholder="Email"
				/>
				<br></br>
				<input
					className={styles.ContactMeFormFeild}
					type="text"
					name="subject"
					placeholder="Subject"
				/>
				<br></br>
				<textarea
					className={styles.ContactMeFormFeild}
					type="text"
					name="message"
					placeholder="Comment or Message"
				/>
				<br></br>
				<button className={styles.ContactMeButton} type="button" name="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactMe;
