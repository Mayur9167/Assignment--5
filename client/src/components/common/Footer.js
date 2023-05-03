const Footer = () => {
	const link = "https://github.com/Mayur9167";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Mayuresh Chodankar{" "}
			<a href={link} target={target}>
				Mayuresh.github
			</a>
		</div>
	);
};

export default Footer;
