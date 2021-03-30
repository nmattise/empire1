import React from "react";
// import { useEffect, useState } from "react";
import "./App.css";

function App() {
	// const [date, setDate] = useState(null);
	// useEffect(() => {
	// 	async function getDate() {
	// 		const res = await fetch("/api/date");
	// 		const newDate = await res.text();
	// 		setDate(newDate);
	// 	}
	// 	getDate();
	// }, []);
	return (
		<main>
			<h1>Empire</h1>
			<h3>The Strava companion app to view and build your KOM/QOM Empire</h3>
			<img
				alt="icon"
				src={`${process.env.PUBLIC_URL}/empire_512.webp`}
				style={{ height: 100, width: 100, margin: "auto" }}
			></img>
			<h3 style={{ marginTop: 8 }}>Coming April 2021</h3>
		</main>
	);
}

export default App;
