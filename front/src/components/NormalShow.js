import React from "react";
import { withStyles } from '@material-ui/core';
import QRCode from "qrcode.react"
import Card from './Card'
import "../containers/css/header.css";
import "../containers/css/normalshow.css";
import GreenBtn from './GreenBtn';

const NormalShow = withStyles((theme) => ({

}))((props) => {
  // const {classes, onClick} = props
  return (
    <div className="normalshow-container">
      <div className="header" type="complete">
          <p className="back" ><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <Card />
        <div className="sec01">
          <div onClick={() => this.onRedirect('/')}>
            <GreenBtn title="画像をカメラロールに保存するする"  />
          </div>
          <p class="message">ログインすると名刺の情報をもっと便利に保存できます</p>
          <a href="http://localhost:3000/user/auth/twitter/">
            <img className="login-btn01" src={`${process.env.PUBLIC_URL}/lp/lp-login.png`} alt="ログイン" />
          </a>
        </div>
        <div className="sec02">
          <img className="image1" src={`${process.env.PUBLIC_URL}/lp/lp-show.png`} />
          <a href="http://localhost:3000/user/auth/twitter/">
            <img className="login-btn02" src={`${process.env.PUBLIC_URL}/lp/lp-login.png`} alt="ログイン" />
          </a>
        </div>
        <div className="sec03">
          <img className="logo-mini" src={`${process.env.PUBLIC_URL}/lp/meish-mini.png`} />
        </div>
    </div>
  )
})

export default NormalShow