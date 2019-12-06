import React from "react";
import Card from './Card'
import { Link } from 'react-router-dom'
import "../containers/css/header.css";
import "../containers/css/normalshow.css";
import GreenBtn from './GreenBtn';

const NormalShow = (props) => {
  const {card} = props
  return (
    <div className="normalshow-container">
      <div className="header" type="complete">
          <Link to={'/cards'}>
            <p className="back"><span className="arrow"></span>戻る</p>
          </Link>
          <p className="logo">meish</p>
        </div>
        <Card card={card} />
        <div className="sec01">
          <GreenBtn title="画像をカメラロールに保存する" to='/'/>
          <p class="message">ログインすると名刺の情報をもっと便利に保存できます</p>
          <a href="http://localhost:3000/user/auth/twitter/">
            <img className="login-btn01" src={`${process.env.PUBLIC_URL}/lp/lp-login.png`} alt="ログイン" />
          </a>
        </div>
        <div className="sec02">
          <img className="image1" src={`${process.env.PUBLIC_URL}/lp/lp-show.png`} alt="もっと早く簡単に名刺を交換できればもっと広がる" />
          <a href="http://localhost:3000/user/auth/twitter/">
            <img className="login-btn02" src={`${process.env.PUBLIC_URL}/lp/lp-login.png`} alt="ログイン" />
          </a>
        </div>
        <div className="sec03">
          <img className="logo-mini" src={`${process.env.PUBLIC_URL}/lp/meish-mini.png`} alt="ロゴミニ" />
        </div>
    </div>
  )
}

export default NormalShow
