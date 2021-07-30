import React, { useState } from "react";
import styles from "../styles/ContactMe.module.css";
import { toast } from "react-toastify";

function ContactMe() {
	const [form, setForm] = useState({
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value });

	let templateParams = {
		to_email: form.email,
		from_email: "parthp123123@gmail.com",
		subject: form.subject,
		message: form.message,
	};

	const handleSubmit = e => {
		e.preventDefault();

		fetch("http://localhost:3000/api/sendemail", {
			method: "POST",
			body: JSON.stringify(templateParams),
		})
			.then(res => res.json())
			.then(data => {
				toast.success(`${data.msg}`, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch(err => {
				toast.error(`${err.message.msg}`, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});

		setForm({
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<div className={styles.ContactMeContainer}>
			<form className={styles.ContactMeForm} onSubmit={handleSubmit}>
				<h1 className={styles.ContactMeTitle}>Get In Touch</h1>
				<input
					className={styles.ContactMeFormFeild}
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					value={form.email}
					required
				/>
				<br></br>
				<input
					className={styles.ContactMeFormFeild}
					type="text"
					name="subject"
					placeholder="Subject"
					onChange={handleChange}
					value={form.subject}
					required
				/>
				<br></br>
				<textarea
					className={styles.ContactMeFormFeild}
					type="text"
					name="message"
					placeholder="Comment or Message"
					onChange={handleChange}
					value={form.message}
					required
				/>
				<br></br>
				<button className={styles.ContactMeButton} type="submit" name="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactMe;
