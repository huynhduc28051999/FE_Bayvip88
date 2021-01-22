import React from 'react';
import './popup.css';

export default function Login() {
  return (
    <div className="over_poup_child">
      <div className="popup_normal formlogin">
        <button className="btn-close_popupmini"></button>
        <div className="tab_popupmini">Đăng nhập</div>
        <div className="textbox input1">
          <input type="text" maxLength="18" placeholder="Tên tài khoản" name="username" id="txtUserName" autoComplete="off" />
        </div>
        <div className="textbox input2">
          <input type="password" maxLength="30" placeholder="Mật khẩu" name="password" id="txtPass" />
        </div>
        <div className="bt_login_form"></div>
        <div className="bt_loginfb_form">
        </div>
        <button className="text_register_new">Đăng ký</button>
        <button className="text_forget_pass">Quên mật khẩu</button>
        <div className="message"></div>
      </div>
    </div>
  )
}
