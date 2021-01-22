import React from 'react';
import './dvheader.css';

export default function Dvheader() {
	return (
		<div id="dvheader">
			<div className="container">
				<div className="non_login_header">
					<div className="btn-register">
					</div>
					<div className="btn-login" id="btnlogin">
					</div>
					<span className="btn-facebook"></span>
				</div>
				<div className="login_header" style={{ display: 'none' }}>
					<div className="backingame">
						<a href="/#">aa</a>
					</div>

					<div className="info">

						<div className="bgava">
							<div className="ava" style={{ backgroundSize: '100%', width: '78px', height: '78px', marginLeft: '9px', marginTop: '8px' }}></div>
						</div>
						<div className="accout">
							<h2 className="dong1" id="NicknameId">admin</h2>
							<h2 className="dong2" id="VPId">LP:0</h2>
						</div>

					</div>

					<h3 className="tien1">
						<a href="/#" id="rechargewinId">aa</a>
						<span className="spanMoney" id="goldLabel">0</span>
					</h3>


					<div className="btn-menu"></div>
					<div className="btn-mail">
						<div className="count"></div>
					</div>

					<div className="btn-dongbang">
					</div>
					<div className="btn-cardBlock">
					</div>

					<div className="setting-board">

						<span className="btn-history"></span>
						<span className="btn-exit"></span>
					</div>


				</div>
			</div>
		</div>
	)
}
