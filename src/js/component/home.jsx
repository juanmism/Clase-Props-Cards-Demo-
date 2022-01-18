import React from "react";

import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const card1 = "titulo 1";
	const card2 = "titulo 2";
	return (
		<div className="row">
			<Card id={1} title={"titulo 1"} message={"card 1 message"}>
				<h1> Esto es un h1 </h1>
			</Card>
			<Card id={2} title={card2} message={"card 2 message"}>
				<p> Esto es una p </p>
			</Card>
		</div>
	);
};

export default Home;
