import React from 'react';
import './appgame.css';

export default function Appgame() {
	return (
		<div className="app">
			<div className="button-jackpot ui-draggable ui-draggable-handle">
				<canvas style={{ width: "120", height: "120", touchAction: "none", cursor: "inherit" }}></canvas>
			</div>
			<div className="noti-jackpot">
				<canvas style={{ width: "190", height: "400", touchAction: "none", cursor: "inherit" }}></canvas>
			</div>
		</div>
	)
}
