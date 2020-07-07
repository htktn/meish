import React from "react";
import { withStyles } from '@material-ui/core';
import "./css/lp.css";
import background from '../../public/lp/lp-01.png'
import login from '../../public/lp/lp-login.png'
import image1 from '../../public/lp/lp-02.png'
import image2 from '../../public/lp/lp-03.png'
import footer from '../../public/lp/lp-04.png'

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
          <img src={background} alt="もっと簡単に名刺を交換できればもっと広がる" />
          <a href={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/user/auth/twitter/`}>
            <img className="login-btn01" src={login} alt="ログイン" />
          </a>
        </div>
        <div className="sec02">
          <img className="image1" src={image1} alt="QRコードで簡単共有" />
          <img className="image2" src={image2} alt="簡単に名刺作成" />
        </div>
        <div className="sec03">
          <img src={footer} alt="フッター" />
          <a href="http://stg.meish.jp:3000/user/auth/twitter/">
            <img className="login-btn02" src={login} alt="ログイン" />
          </a>
        </div>
      </div>
    );
  }
}
export default Login
