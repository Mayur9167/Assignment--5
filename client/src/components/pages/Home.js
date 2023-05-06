import React from "react";

const link="https://github.com/Mayur9167"

function Home() {


	return (
		<div className="container">
			<h1>MERN Stack CRUD</h1>
			<p>
				<b>Front-end</b>: React.js v17+ with RRDv6+
			</p>
			<p>
				<b>Back-end</b>: Node.js, Express.js
			</p>
			<p>
				<b>Database</b>: MongoDB Atlas with Mongoose ODM
			</p>
			<p>
				<b>Developed By</b>: Mayuresh Chodankar
				<p>
					<a href={link}>
						https://assignment-5-hbi2av1jc-mayur9167.vercel.app
					</a>
				</p>
			</p>
		</div>
	);
}

export default Home;
