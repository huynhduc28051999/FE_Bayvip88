import React from 'react';
import './dvheader.css';
import NonLogin from './NonLogin';
import Logined from './Logined';

export default function Dvheader() {
	return (
		<div id="dvheader">
			<div className="container">
				<Logined />
			</div>
		</div>
	)
}
