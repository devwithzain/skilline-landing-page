"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import {
	About,
	Features,
	Hero,
	Managment,
	OurFeature,
	Partners,
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
		</>
	);
}
