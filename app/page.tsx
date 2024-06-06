"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import {
	About,
	Assignments,
	Disscussion,
	Features,
	Footer,
	Hero,
	Integration,
	Managment,
	OurFeature,
	Partners,
	Resources,
	Testimonials,
	Tools,
} from "@/components";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Hero />
			<Partners />
			<Features />
			<About />
			<OurFeature />
			<Tools />
			<Assignments />
			<Managment />
			<Disscussion />
			<Integration />
			<Testimonials />
			<Resources />
			<Footer />
		</>
	);
}
