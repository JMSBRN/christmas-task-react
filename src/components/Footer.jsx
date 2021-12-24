import React from 'react';
import logoSvg from './assets/svg/logo-rs.svg'
import logoCourseSvg from './assets/svg/rs_school_js.svg'


const Footer = () => {
	return (
		<footer className="footer">
		<div className="footer-logo-container">
				<img className="footer-logo" src={logoCourseSvg} alt="logo-school"/>
				<a href="https://rs.school/js/">The Rolling Scopes</a>
		</div>
		<div className="footer-course-logo"><img src= {logoSvg} alt="logo-course"/></div>
		<div className="foter-author-container">
				<div className="copyright">Copyright  </div>
				<a href="https://github.com/JMSBRN">JMSBRN</a>
		</div>
</footer>
	)
}

export default Footer;
