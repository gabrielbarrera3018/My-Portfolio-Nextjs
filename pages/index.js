import Head from "next/head";
import Intro from "../components/Intro";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Head>
				<title>Patel Parth</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
					crossOrigin="anonymous"
				/>
			</Head>
			<Intro />
			<AboutMe />
			<Skills />
			<ContactMe />
			<Footer />
		</div>
	);
}
