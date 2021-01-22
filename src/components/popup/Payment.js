import React from 'react';
import './popup.css';

export default function Payment() {
  return (
    <div className="over_poup_child">
      <div className="popup_lagre">
        <button className="btn-close_popuplare"></button>
        <div className="charge-tab-controllers tapcharg">
          <span className="button tab active" data-index="1">
            <span data-index="1">Nạp thẻ</span>
          </span>
          <span className="button tab" data-index="2">
            <span data-index="2">Ví điện tử</span>
          </span>
          <span className="button tab" data-index="3">
            <span data-index="3">Đại lý</span>
          </span>
        </div>
        <div className="contentCharge">
          <div className="left_charge">
            <div className="boxcharge nap1">
              <select name="telcoName" id="cardtype" defaultValue={"viettel"}>
                <option value="viettel">Thẻ Viettel</option>
                <option value="vinaphone">Thẻ Vinaphone</option>
                <option value="mobifone">Thẻ Mobifone</option>
              </select>
            </div>
            <div className="boxcharge nap2">
              <select name="amount" id="cardAmount" defaultValue={'0'}>
                <option value="0">Chọn mệnh giá thẻ</option>
                <option value="10000">10.000</option>
                <option value="20000">20.000</option>
                <option value="30000">30.000</option>
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="200000">200.000</option>
                <option value="300000">300.000</option>
                <option value="500000">500.000</option>
                <option value="1000000">1.000.000</option>
              </select>
            </div>
            <div className="boxcharge nap3">
              <input type="text" maxLength="18" placeholder="Nhập số seri" name="cardseri" id="cardseri" autoComplete="off" />
            </div>
            <div className="boxcharge nap4">
              <input type="text" maxLength="18" placeholder="Nhập mã thẻ" name="cardcode" id="cardcode" autoComplete="off" />
            </div>
            <div className="boxcharge napcaptra" style={{ fontSize: '200%', textAlign: 'center'}}>
              <input type="text" maxLength="18" placeholder="Nhập mã" name="cardcaptra" id="cardcaptra" autoComplete="off" />
              <input id="captcha_verify_nap" type="hidden" value="637469525489529740-e32149b12019c2576fac35d076564abd" />
              123
              <div className="refesh">
              </div>
            </div>
            <div className="bt_charge_nap"></div>
            <div className="popup_complet">
              <div className="content_complet">
                <p style={{ padding: '15px', fontSize: '20px', textAlign: 'justify', color: '#fff' }}>
                  Bạn đã nhập mã thẻ
                    <span style={{ color: 'yellow' }} id="lbseri">
                      100.000
                       </span>,
                       <span style={{ color: 'yellow' }} id="lbcartype">
                      vietel
                        </span> ,mệnh giá
                       <span style={{ color: 'yellow' }} id="lbamount">
                      100.000
                       </span> , vui lòng kiểm tra đúng mệnh giá thẻ, nếu sai Nhà Phát Hành không chịu trách nhiệm 
                </p>
                <div className="bt_cancel">Hủy bỏ</div>
                <div className="bt_ok">Xác nhận</div>
              </div>
            </div>
          </div>
          <div className="right_charge">
            <table className="tablelist">
              <thead>
                <tr>
                  <th width="30%">Mệnh giá</th>
                  <th width="30%">Khuyến mại</th>
                  <th width="30%">Tổng B</th>
                </tr>
              </thead>
              <tbody id="table_body">
                <tr>
                  <td width="30%">10.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">10.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">20.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">20.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">30.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">30.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">50.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">50.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">100.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">100.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">200.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">200.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">300.000</td>
                  <td width="30%">0%</td>
                  <td width="35%">
                    <span className="t-pink">300.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">500.000</td>
                  <td width="30%">-20%</td>
                  <td width="35%">
                    <span className="t-pink">400.000</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%">1.000.000</td>
                  <td width="30%">-20%</td>
                  <td width="35%">
                    <span className="t-pink">800.000</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '22px;color: #fff' }}>Lưu ý:
                <span style={{ color: 'yellow' }}>Hãy chọn đúng mệnh giá thẻ của bạn nếu chọn sai mệnh giá thẻ sẽ bị nuốt thẻ!
                </span> Nhà phát hành sẽ không hỗ trợ những trường hợp này
                
            </p>
          </div>
          <div className="message">adada
          </div>
        </div>
      </div>
    </div>
  )
}
