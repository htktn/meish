import React from "react";
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import QRCode from "qrcode.react"
import Card from './Card'
import "../containers/css/header.css";
import "../containers/css/signedinshow.css";
import setting from '../../public/icon/setting.png'
import copyLink from '../../public/icon/link-w.png'
import share from '../../public/icon/share-w.png'

const SignedInShow = withStyles((theme) => ({

}))((props) => {
  const { card, onClick, onDeleteCard } = props

  return (
    <div className="sinshow-container">
      <div className="header" type="complete">
        <p className="back" onClick={onClick}><span className="arrow"></span>戻る</p>
        <p className="logo">meish</p>
      </div>
      <div class="card">
        <Link to={`/cards/${card.id}/edit`}>
          <img class="setting" src={setting} alt="設定" />
        </Link>
        <Card card={card} />
      </div>
      <p className="title">QRコードで共有</p>
      <div className="qr-body">
        <QRCode value="https://google.com" />
      </div>
      <div className="qr-share">
        <div className="qr-share-body">
          <img src={copyLink} alt="リンクをコピー" />
          <span>リンクをコピー</span>
        </div>
        <div className="qr-share-body">
          <img src={share} alt="その他で共有" />
          <span>その他で共有</span>
        </div>
      </div>
      <p className="delete" onClick={() => onDeleteCard(card)}>この名刺を削除する</p>
    </div >
  )
})

export default SignedInShow
