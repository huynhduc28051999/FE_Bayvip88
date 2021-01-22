import React from 'react';
import './popup.css'

export default function Register() {
  return (
    <div className="over_poup_child">
      <div className="popup_normal">
        <button className="btn-close_popupmini"></button>
        <div className="tab_popupmini">Đăng ký</div>
        <div className="textbox input1">
          <input type="text" maxLength="18" placeholder="Tên tài khoản" name="username" id="username" autoComplete="off" />
        </div>
        <div className="textbox input2">
          <input type="password" maxLength="30" placeholder="Mật khẩu" name="password" id="password" />
        </div>
        <div className="textbox input3">
          <input type="password" maxLength="30" placeholder="Nhập lại mật khẩu" name="password" id="rePassword" />
        </div>
        <div className="captra" style={{ fontSize: '200%' }}>
          <input type="text" maxLength="10" placeholder="Nhập mã" name="captra" id="txtCaptra" />
          <input id="captcha_verify_register" type="hidden" />
          123
          <div className="refesh">
          </div>
        </div>
        <div className="bt_rigister_form"></div>
        <div className="message"></div>
      </div>
    </div>
  )
}
