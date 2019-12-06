import React from "react";
import QRCode from "qrcode.react"
import Card from '../components/Card'
import GreenBtn from '../components/GreenBtn';
import { Link } from 'react-router-dom'
import "./css/complete.css";
import "./css/header.css";

class Complete extends React.Component {

  render() {
    const {location} = this.props;
    const state = location.state;
    const {name, kana, role, informations, selectedThemeId, createdCardId} = state;
    const card = {
      name: name,
      kana: kana,
      role: role,
      theme_id: selectedThemeId,
      informations: informations
    }
    return (
      <div className="complete-container">
        <div className="header" type="complete">
          <Link to={'/cards'}>
            <p className="back"><span className="arrow"></span>戻る</p>
          </Link>
          <p className="logo">meish</p>
        </div>
        <p className="complete-title">完成！</p>
        <Card card={card} />
        <div className="qr-body">
          <p className="title">QRコードで共有</p>
          <QRCode value={`${process.env.PUBLIC_URL}/cards/${createdCardId}`} />
          <div className="qr-share">
            <div className="qr-share-body">
              <img src={`${process.env.PUBLIC_URL}/icon/link.png`} alt="リンクをコピー" />
              <span>リンクをコピー</span>
            </div>
            <div className="qr-share-body">
              <img src={`${process.env.PUBLIC_URL}/icon/share.png`} alt="その他で共有" />
              <span>その他で共有</span>
            </div>
          </div>
        </div>
        <Link to={'/cards'} style={{textDecoration: 'none'}}>
          <GreenBtn title="名刺の一覧に戻る"  />
        </Link>
      </div>
    );
  }
}
export default Complete
