import React, {Component} from 'react';

class About extends  Component{
	render(){
		return(
			<div className="about" id="about">
				<h3 data-aos="zoom-in">About me</h3>
				<div className="col-md-6 about-left">
					<h3 data-aos="slide-up">Hello</h3>
					<p>Ut enim ad minima veniam, quis nostrum 
							exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							nisi ut aliquid ex ea commodi consequatur? Quis autem exercitationem ullam corporis suscipit laboriosam, 
							vel eum iure reprehenderit qui in ea voluptate velit 
							esse quam nihil molestiae consequatur, vel illum qui 
							dolorem eum fugiat quo voluptas nulla pariatur.</p>
					<p>Ut enim ad minima veniam, quis nostrum 
							exercitationem ullam corporis suscipit laboriosam, 
							nisi ut aliquid ex ea commodi consequatur? Quis autem 
							vel eum iure reprehenderit.</p>
					<img src="images/signature.jpg" alt="" />
				</div>
				<div data-aos="flip-right" className="col-md-6 about-right">
					<img src="images/about.jpg" alt="" />
				</div>
				<div className="clearfix"></div>
			</div>
						

		);
	}
}

export default About;
