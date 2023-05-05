import FooterCss from "./Footer.module.css";
import FooterBreak from "./FooterBreak";
import InstagramIcon from "../../../assets/instagramSVG.svg";
import LinkedInIcon from "../../../assets/linkedinSVG.svg";
import EmailIcon from "../../../assets/envelopeSVG.svg";

const Footer = () => {
	return (
		<div className={FooterCss.container}>
			<FooterBreak />
			<div className={FooterCss.containerHeadings}>
				<h2>CONTACT ME</h2>
				<ul className={FooterCss.contactList}>
					<li>
						<img src={EmailIcon} alt="" />
						<div>erik.friis@hyperisland.se</div>
					</li>
					<li>
						<img src={LinkedInIcon} alt="" />
						<div>erikfriis</div>
					</li>
					<li>
						<img src={InstagramIcon} alt="" />
						<div>samuraiisounds</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
