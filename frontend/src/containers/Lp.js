import React from "react";
import { withStyles } from '@material-ui/core';
import "./css/lp.css";

@withStyles(theme => ({
  container: {
    background: 'red',
  },
}))
class Login extends React.Component {
  render() {
    return (
      <div className="lp-comntainer">
        <div className="sec01">
          <img src='../../public/lp/lp-01.png'  alt="もっと簡単に名刺を交換できればもっと広がる" />
          <a href={`${process.env.REACT_APP_BACKEND_URL}/user/auth/twitter/`}>
            <img className="login-btn01" src='../../public/lp/lp-login.png'  alt="ログイン" />
          </a>
        </div>
        <div className="sec02">
          <img className="image1" src='../../public/lp/lp-02.png' alt="QRコードで簡単共有" />
          <img className="image2" src='../../public/lp/lp-03.png' alt="簡単に名刺作成" />
        </div>
        <div className="sec03">
          <img src='../../public/lp/lp-04.png'  alt="フッター" />
          <a href={`${process.env.REACT_APP_BACKEND_URL}/user/auth/twitter/`}>
            <img className="login-btn02" src='../../public/lp/lp-login.png' alt="ログイン" />
          </a>
        </div>
      </div>
    );
  }
}
export default Login
