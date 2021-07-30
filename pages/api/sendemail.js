const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.NEXT_SECRET_KEY);

export default (req, res) => {
	if (req.method === "GET") {
		return res.status(200).json({
			msg: "UnAuthorised User",
		});
	}

	if (
		(req.method === "POST") &
		(JSON.parse(req.body).from_email === "parthp123123@gmail.com")
	) {
		const data = JSON.parse(req.body);
		const msg = {
			to: "parthp123123@gmail.com",
			from: "parthp123123@gmail.com", // Use the email address or domain you verified above
			subject: `${data.subject}`,
			text: `${data.message}`,
		};
		const msg_client = {
			to: `${data.to_email}`,
			from: `${data.from_email}`,
			subject: `${data.subject}`,
			html: `Thank You <b>${data.to_email}</b>, for contacting me.<br /> I will surely look at your suggestions. I will connect to you as soon as possible.<br /> Thanks & Regards, <br /> <b>Patel Parth (parthp123123@gmail.com).</b>`,
		};

		sgMail.send(msg).then(
			result => {
				sgMail.send(msg_client).then(
					result => {
						return res.status(200).json({
							msg: "Thanks for Connecting to me. I will connect to you as soon as possible.",
						});
					},
					error => {
						if (error.response) {
							return res.status(500).json({ msg: "Something Went Wrong!" });
						}
					}
				);
			},
			error => {
				if (error.response) {
					return res.status(500).json({ msg: "Something Went Wrong!" });
				}
			}
		);
	}
};
