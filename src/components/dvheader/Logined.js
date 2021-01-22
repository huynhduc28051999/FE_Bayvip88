import React from 'react'

export default function Logined() {
  return (
    <div className="login_header">
      <div className="backingame">
        <button></button>
      </div>

      <div className="info">

        <div className="bgava">
          <div className="ava" style={{ width: '78px', height: '78px', backgroundSize: '100%', marginLeft: '9px', marginTop: '8px' }}>
          </div>
        </div>
        <div className="accout">
          <h2 className="dong1" id="NicknameId">asdasdasdaaa</h2>
          <h2 className="dong2" id="VPId">LP:0</h2>
        </div>

      </div>

      <h3 className="tien1">
        <button id="rechargewinId"></button>
        <span className="spanMoney" id="goldLabel">0</span>
      </h3>


      <div className="btn-menu"></div>
      <div className="btn-mail">
        <div className="count" style={{ display: 'block' }}>1</div>
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
  )
}
