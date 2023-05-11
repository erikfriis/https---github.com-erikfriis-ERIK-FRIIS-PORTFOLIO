import HeaderCss from "./Header.module.css";

const Header = () => {
	return (
		<div className={HeaderCss.container}>
			<h1 className={HeaderCss.headingMain}>Exploring tools to innovate</h1>
			<h1 className={`${HeaderCss.headingMain} ${HeaderCss.headerTwo}`}>
				Frontend developer with background in music production
			</h1>
		</div>
	);
};

export default Header;
