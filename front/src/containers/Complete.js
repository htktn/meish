import React from "react";
import { withStyles } from '@material-ui/core';
import QRCode from "qrcode.react"
import Card from '../components/Card'
import GreenBtn from '../components/GreenBtn';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";
import "./css/complete.css";
import "./css/header.css";

@withStyles(theme => ({

}))
class Complete extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onClick = () => {
    this.props.history.push("/");
    this.setState({ redirect: true });
  };

  onRedirect = to => {
    //TODO historyにpushするようにしてから、引数で指定されたtoへ遷移するようにする
    this.props.history.push(to);
    this.setState({redirect: true, redirectTo: to});
  }

  render() {
    const { classes, location } = this.props;
    const state = location.state;
    const {name, kana, role, infoArray, selectedThemeId, createdCardId } = state;
    return (
      <div className="complete-container">
        <div className="header" type="complete">
          <p className="back" onClick={this.onClick}><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <Card name={name} kana={kana} role={role} infoArray={infoArray} themeId={selectedThemeId} />
        <div className="qr-body">
          <p className="title">QRコードで共有</p>
          <QRCode value={`http://localhost:8080/cards/${createdCardId}`} />
          <div className="qr-share">
            <div className="qr-share-body">
              <img src={`${process.env.PUBLIC_URL}/icon/link.png`} />
              <span>リンクをコピー</span>
            </div>
            <div className="qr-share-body">
              <img src={`${process.env.PUBLIC_URL}/icon/share.png`} />
              <span>その他で共有</span>
            </div>
          </div>
        </div>
        <div onClick={() => this.onRedirect('/')}>
          <GreenBtn title="会員登録をして保存"  />
        </div>
      </div>
    );
  }
}
export default Complete
