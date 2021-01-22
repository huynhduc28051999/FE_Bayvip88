import React from 'react'
import Dvheader from '../components/dvheader/Dvheader'
import Winners from '../components/winners/Winners'
import Appgame from '../components/appgame/Appgame'
import Bannners from '../components/banners/Bannners'
import Lobby from '../components/lobby/Lobby'
import Cardgame from '../components/cardgame/Cardgame'

export default function Game() {
	return (
		<div className="baywin">
			<div>
				<div className="wrapper resizeable" id="wrapper">
					<Dvheader />
					<Winners />
					<Appgame />
					<Bannners />
					<Lobby />
					<Cardgame />
				</div>
				<div className="over_poup resizeable" style={{ zoom: '0.3' }}>
				</div>
			</div>
		</div>
	)
}
