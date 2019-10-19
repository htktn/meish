import React from "react";
import { withStyles } from '@material-ui/core';
import QRCode from "qrcode.react"
import Card from './Card'
import "../containers/css/header.css";
import "../containers/css/signedinshow.css";

const SignedInShow = withStyles((theme) => ({

}))((props) => {
  const {classes, onClick} = props
  return (
    <div className="sinshow-container">
      <div className="header" type="complete">
          <p className="back" ><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <div class="card">
          <img class="setting" src={`${process.env.PUBLIC_URL}/icon/setting.png`} />
          <Card />
        </div>
        <p className="title">QRコードで共有</p>
        <div className="qr-body">
          <QRCode value="https://google.com" />
        </div>
        <div className="qr-share">
          <div className="qr-share-body">
            <img src={`${process.env.PUBLIC_URL}/icon/link-w.png`} />
            <span>リンクをコピー</span>
          </div>
          <div className="qr-share-body">
            <img src={`${process.env.PUBLIC_URL}/icon/share-w.png`} />
            <span>その他で共有</span>
          </div>
        </div>
        <p className="delete">この名刺を削除する</p>
    </div>
  )
})

export default SignedInShow