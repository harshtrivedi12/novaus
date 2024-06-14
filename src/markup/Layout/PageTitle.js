<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';

const PageTitle = ({activeName, motherName})=>{
	return(
		<>
			<div className="container">
				<div className="dez-bnr-inr-entry">
					<h1 className="text-white">{activeName}</h1>
					<div className="breadcrumb-row">
						<ul className="list-inline">
							<li><Link to={"#"}>{motherName}</Link></li>
							<li>{activeName}</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
=======
import React from 'react';
import {Link} from 'react-router-dom';

const PageTitle = ({activeName, motherName})=>{
	return(
		<>
			<div className="container">
				<div className="dez-bnr-inr-entry">
					<h1 className="text-white">{activeName}</h1>
					<div className="breadcrumb-row">
						<ul className="list-inline">
							<li><Link to={"#"}>{motherName}</Link></li>
							<li>{activeName}</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
>>>>>>> 59bc75c7856c6c589f93f17cc6de3354c2f0c7c0
export default PageTitle;