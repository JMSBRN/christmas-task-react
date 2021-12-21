import React from 'react';
import logoSvg from './assets/svg/logo-rs.svg'
import logoCourseSvg from './assets/svg/rs_school_js.svg'


const Footer = () => {
	return (
		<footer class="footer">
		<div class="footer-logo-container">
				<img class="footer-logo" src={logoCourseSvg} alt="logo-school"/>
				<a href="https://rs.school/js/">The Rolling Scopes</a>
		</div>
		<div class="footer-course-logo"><img src= {logoSvg} alt="logo-course"/></div>
		<div class="foter-author-container">
				<div class="copyright">Copyright  </div>
				<a href="https://github.com/JMSBRN">JMSBRN</a>
		</div>
</footer>
	)
}

export default Footer;
