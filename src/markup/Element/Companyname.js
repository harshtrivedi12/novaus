<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';

const companyName =[
	{ title:'A', },	{ title:'B', }, { title:'C', },	{ title:'D', },	{ title:'E', },	{ title:'F', },
	{ title:'G', },	{ title:'H', }, { title:'I', },	{ title:'J', },	{ title:'K', },	{ title:'L', },
	{ title:'M', },	{ title:'N', }, { title:'O', },	{ title:'P', },	{ title:'Q', },	{ title:'R', },
	{ title:'S', },	{ title:'T', }, { title:'U', },	{ title:'V', },	{ title:'W', },	{ title:'X', },
	{ title:'Y', },	{ title:'Z', }, { title:'0-99',},
]

function Companyname(){
	return(
		<div className="site-filters clearfix m-b30">
			<ul className="filters" data-toggle="buttons">
				
				<li data-filter="data-up" className="btn active">
					<input type="radio" />
					<Link to={"#"} className="site-button-secondry radius-sm"><span>Top 100</span></Link> 
				</li>
				{companyName.map((item,index)=>(
					<li data-filter="data-a" className="btn" key={index}>
						<input type="radio" />
						<Link to={"#"} className="site-button-secondry radius-sm"><span>{item.title}</span></Link> 
					</li>
				))}
				
			</ul>
		</div>
	)
} 
=======
import React from 'react';
import {Link} from 'react-router-dom';

const companyName =[
	{ title:'A', },	{ title:'B', }, { title:'C', },	{ title:'D', },	{ title:'E', },	{ title:'F', },
	{ title:'G', },	{ title:'H', }, { title:'I', },	{ title:'J', },	{ title:'K', },	{ title:'L', },
	{ title:'M', },	{ title:'N', }, { title:'O', },	{ title:'P', },	{ title:'Q', },	{ title:'R', },
	{ title:'S', },	{ title:'T', }, { title:'U', },	{ title:'V', },	{ title:'W', },	{ title:'X', },
	{ title:'Y', },	{ title:'Z', }, { title:'0-99',},
]

function Companyname(){
	return(
		<div className="site-filters clearfix m-b30">
			<ul className="filters" data-toggle="buttons">
				
				<li data-filter="data-up" className="btn active">
					<input type="radio" />
					<Link to={"#"} className="site-button-secondry radius-sm"><span>Top 100</span></Link> 
				</li>
				{companyName.map((item,index)=>(
					<li data-filter="data-a" className="btn" key={index}>
						<input type="radio" />
						<Link to={"#"} className="site-button-secondry radius-sm"><span>{item.title}</span></Link> 
					</li>
				))}
				
			</ul>
		</div>
	)
} 
>>>>>>> 59bc75c7856c6c589f93f17cc6de3354c2f0c7c0
export default Companyname;