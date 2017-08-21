import React, {Component} from 'react';

class Header extends  Component{
	render(){
		return(
			<div className="banner" id="home">
				<div className="agileinfo-dot">
					<div className="container">
					
					<div className="header-w3layouts"> 
						
						<nav className="navbar navbar-default navbar-fixed-top"> 
								<div className="navbar-header page-scroll">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
										<span className="sr-only">My_Design</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<h1><a className="navbar-brand" href="index.html">My Design</a></h1>
								</div> 
								
								<div className="collapse navbar-collapse navbar-ex1-collapse">
									<ul className="nav navbar-nav navbar-right cl-effect-15">
										
										<li className="hidden"><a className="page-scroll" href="#page-top"></a>	</li>
										<li><a className="page-scroll scroll" href="#home">Home</a></li>
										<li><a className="page-scroll scroll" href="#about">About</a></li>
										<li><a className="page-scroll scroll" href="#skills">Skills</a></li>
										<li><a className="page-scroll scroll" href="#education">Education & Experience </a></li>
										<li><a className="page-scroll scroll" href="#portfolio">Portfolio</a></li>
										<li><a className="page-scroll scroll" href="#contact">Contact</a></li>
									</ul>
								</div>
							
						</nav>  
					</div>	
					

						<div className="w3_banner_info">
							<div className="w3_banner_info_grid">
								<h2 data-aos="fade-right">Hi, iam </h2>
								<h2 data-aos="fade-right">Ankur Gautam.</h2>
								<h5>UI/UX Designer.</h5>
								<p>Aenean congue vitae mauris sed tristique. Mauris quis nulla at sapien blandit.
										Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
								<ul data-aos="slide-up">
									<li><a href="#" className="w3ls_more" data-toggle="modal" data-target="#myModal">Know More</a></li>
									<li><a href="#" className="scroll w3l_contact"><i className="fa fa-download" aria-hidden="true"></i> Download CV</a></li>
								</ul>
							</div>
						</div>
						<div className="thim-click-to-bottom">
							<a href="#about" className="scroll">
								<i className="fa fa-arrows-v" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Header;
