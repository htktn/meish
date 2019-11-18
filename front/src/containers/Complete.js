import React from "react";
import QRCode from "qrcode.react"
import Card from '../components/Card'
import GreenBtn from '../components/GreenBtn';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";
import "./css/complete.css";
import "./css/header.css";

class Complete extends React.Component {

  onClick = () => {
    this.props.history.push("/");
    this.setState({ redirect: true });
  };

  onRedirect = to => {
    this.props.history.push(to);
    this.setState({redirect: true, redirectTo: to});
  }

  render() {
    const {classes, location} = this.props;
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
          <p className="back" onClick={this.onClick}><span className="arrow"></span>戻る</p>
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
        <div onClick={() => this.onRedirect('/cards')}>
          <GreenBtn title="名刺の一覧に戻る"  />
        </div>
      </div>
    );
  }
}
export default Complete
