import React from 'react'
import TopHu from '../../assets/images/topHu.png'
import vongQuay from '../../assets/images/banners/banner_VQMM.png'
import chuaDao from '../../assets/images/banners/banner_web_chuadao2.png'
import huDai from '../../assets/images/banners/banner_web_hudai.png'
import taiXiu from '../../assets/images/games/taixiu.png'
import chuaDaoSK from '../../assets/images/games/chuadao.png'
import mangTienCa from '../../assets/images/games/nangtienca.png'
import candy from '../../assets/images/games/candy.png'
import caDau from '../../assets/images/games/caDau.png'
import kong from '../../assets/images/games/kong.png'
import traiCay from '../../assets/images/games/traicay.png'
import miniPocker from '../../assets/images/games/minipocker.png'
import daoVang from '../../assets/images/games/daovang.png'
import caoThap from '../../assets/images/games/caothap.png'
import monster from '../../assets/images/games/monster.png'
import poker from '../../assets/images/games/poker.png'
import xocxoc from '../../assets/images/games/xocxoc.png'
import samloc from '../../assets/images/games/samloc.png'
import tienlen from '../../assets/images/games/tienlen.png'
import bacay from '../../assets/images/games/bacay.png'
import maubinh from '../../assets/images/games/maubinh.png'
import buttonSwitchGame from '../../assets/images/button-switch-game.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './index.scss'

export default function Lobby() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    accessibility: false,
  }
  return (
    <div className="lobby">
      <div className="lobby__header">
        <div className="lobby__header__top">
          <img src={TopHu} alt="nút top hũ" />
        </div>
        <div className="action-button-list">
          {/* <button className="action-button active">Tất cả</button>
          <button className="action-button">Slot Game</button>
          <button className="action-button">Mini Game</button>
          <button className="action-button">Game Bài</button> */}
          <img src={buttonSwitchGame} alt="" />
        </div>
      </div>
      <div className="lobby__content">
        <div className="lobby__content__banner">
          <Slider {...settings} slidesToShow={1} slidesToScroll={1} infinite>
            <div>
              <img src={vongQuay} alt="vòng quay" />
            </div>
            <div>
              <img src={chuaDao} alt="chúa đảo" />
            </div>
            <div>
              <img src={huDai} alt="hũ đại" />
            </div>
          </Slider>
          {/* <img src={vongQuay} alt="vòng quay" />
          <img src={chuaDao} alt="chúa đảo" />
          <img src={huDai} alt="hũ đại" /> */}
        </div>
        <div className="lobby__content__list-game">
          <Slider {...settings}>
            <div className="item-game">
              <img alt="" className="img" src={taiXiu} />
              <img alt="" className="img" src={chuaDaoSK} />
            </div>
            <div className="item-game">
              <img alt="" className="img" src={candy} />
              <img alt="" className="img" src={miniPocker} />
            </div>
            <div className="item-game only-one">
              <img alt="" className="img" src={caDau} />
            </div>
            <div className="item-game only-one">
              <img alt="" className="img" src={kong} />
            </div>
            <div className="item-game only-one">
              <img alt="" className="img" src={traiCay} />
            </div>
            <div className="item-game only-one">
              <img alt="" className="img" src={mangTienCa} />
            </div>
            <div className="item-game only-one">
              <img alt="" className="img" src={daoVang} />
            </div>
            <div className="item-game">
              <img alt="" className="img" src={caoThap} />
              <img alt="" className="img" src={monster} />
            </div>
            <div className="item-game">
              <img alt="" className="img" src={poker} />
              <img alt="" className="img" src={xocxoc} />
            </div>
            <div className="item-game">
              <img alt="" className="img" src={samloc} />
              <img alt="" className="img" src={tienlen} />
            </div>
            <div className="item-game">
              <img alt="" className="img" src={tienlen} />
              <img alt="" className="img" src={samloc} />
            </div>
            <div className="item-game">
              <img alt="" className="img" src={bacay} />
              <img alt="" className="img" src={maubinh} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
