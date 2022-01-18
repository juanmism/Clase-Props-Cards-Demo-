import React from "react";

import PropTypes from "prop-types";

const Card = (props) => {
	console.log(props);
	return (
		<div id={props.id} className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.message}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
				{props.children}
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	Id: PropTypes.number,
	title: PropTypes.string,
	message: PropTypes.string,
};

export default Card;
