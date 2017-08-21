import React, {Component} from 'react';

class Skills extends  Component{
	render(){
		return(
			<div className="skills" id="skills">
				<div className="container">
							<h3 data-aos="zoom-in">Skills</h3>
					<div className="skill-grids">
						<div className="col-md-6 skill-grids-left">
							<div data-aos="flip-left" className="col-md-6 w3labout-img"> 
							<div className="boxw3-agile"> 
								<img src="images/s1.jpg" alt="" className="img-responsive" />
								<div className="agile-caption">
									<h3>Html5</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div> 
							</div>
							</div>
							<div data-aos="flip-right" className="col-md-6 w3labout-img"> 
							<div className="boxw3-agile"> 
								<img src="images/s2.jpg" alt="" className="img-responsive" />
								<div className="agile-caption">
									<h3>Php</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div> 
							</div>
							</div>
							<div className="clearfix"></div>
							<div  data-aos="flip-left" className="col-md-6 w3labout-img"> 
							<div className="boxw3-agile"> 
								<img src="images/s3.jpg" alt="" className="img-responsive" />
								<div className="agile-caption">
									<h3>Jquery</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div> 
							</div>
							</div>
							<div data-aos="flip-right" className="col-md-6 w3labout-img"> 
							<div className="boxw3-agile"> 
								<img src="images/s4.jpg" alt="" className="img-responsive" />
								<div className="agile-caption">
									<h3>JavaScript</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div> 
							</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-6 skill-grids-right">
								
						
						<div className="skillbar clearfix " data-percent="80%">
							<div className="skillbar-title" ><span>HTML5</span></div>
							<div className="skillbar-bar" ></div>
							<div className="skill-bar-percent">80%</div>
						</div> 

						<div className="skillbar clearfix " data-percent="75%">
							<div className="skillbar-title" ><span>CSS3</span></div>
							<div className="skillbar-bar" ></div>
							<div className="skill-bar-percent">75%</div>
						</div> 

						<div className="skillbar clearfix " data-percent="60%">
							<div className="skillbar-title" ><span>jQuery</span></div>
							<div className="skillbar-bar" ></div>
							<div className="skill-bar-percent">60%</div>
						</div> 

						<div className="skillbar clearfix " data-percent="40%">
							<div className="skillbar-title" ><span>PHP</span></div>
							<div className="skillbar-bar" ></div>
							<div className="skill-bar-percent">40%</div>
						</div> 

						<div className="skillbar clearfix " data-percent="75%">
							<div className="skillbar-title" ><span>Wordpress</span></div>
							<div className="skillbar-bar" ></div>
							<div className="skill-bar-percent">75%</div>
						</div> 

							<p className="p1">Etiam sit amet porttitor nulla. Nullam tincidunt lectus vel euismodpulvi nar. 
								Aenean a facilisis augue, at convallis lacus. Interdum et malesuada fames ac ante
								ipsum primis in faucibus. Praesent faucibus massa elit, vitae ultrices libero dapibus nec. 
								Maecenas cursus rutrum odio ut convallis.</p>
						
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>

		);
	}
}

export default Skills;
