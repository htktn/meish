import React from "react";
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import "./css/header.css";
import "./css/card.css";
import "./css/create_tab.css";
// TODO selectをmaterial uiからimportするなりして、値を入力できるようにする

// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";

//TODO ulとかliに直せるところは直していってほしい
@withStyles(theme => ({
  container: {
    background: 'linear-gradient(221.89deg, #C3C3C3 0%, rgba(162, 162, 162, 0.3) 100%)',
    width: '100%',
    height: '100%',
    fontFamily: 'Roboto',
    color: '#E5E5E5',
  }
}))
class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
  }

  //TODO APIが完成したらつなぎ合わせる作業
  submit = () => {
    const data = this.state
  }

  handleTabChange = (val) => {
    this.setState({ tabIndex: val === 0 ? 1 : 0})
  }

  //TODO 入力フォームに入力されたものはonChangeでsetするようにして、最終的にsubmitの中で、stateの中身を送信するようにする
  render() {
    const { classes } = this.props;
    const { tabIndex } = this.state;
    // const { redirect } = this.state;
    return (
      <div className={classes.container}>
        <div className="header" type="new">
          <p className="back"><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <div className="subHeader">
          <p className="themeTitle">シンプル1</p>
          <span className="completeBtn">完了</span>
        </div>
        <div className={classes.cardWrapper}>
          <Card />
        </div>
        <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader}/>
        {tabIndex === 0 ?
          <TabForm1/> :
          <TabForm2/>
        }
      </div>
    );
  }
}

const Card = withStyles((theme) => ({
  container: {
    width: 272,
    height: 170,
    background: '#FFFFFF',
    boxShadow: '0px 3.26844px 3.26844px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

}))((props) => {
  const {classes} = props
  return (
    <div className="meishi-outer">
      <div className="meish-body" theme="2">
        <img src={`${process.env.PUBLIC_URL}/themes/background/2_background.jpg`} />
        <span className="kana">やまだ たろう</span>
        <span className="name">山田太郎</span>
        <span className="role">株式会社ハック　サーバーエンジニア</span>
        <span className="info" info="0"><span type="address"></span> 100-1000　東京都 港区 12-3</span>
        <span className="info" info="1"><span type="phone"></span> 090-0090-0090</span>
        <span className="info" info="2"><span type="email"></span> yamada@hack.com</span>
      </div>
    </div>
  )
})

const TabHeader = withStyles((theme) => ({
  container: {
    background: '#585858',
  },
  // label: {
  // }
}))((props) => {
  const {classes, handleChange, value} = props
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={() => handleChange(value)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="プロフィール" />
        <Tab label="着せ替え" />
      </Tabs>
    </Paper>
  )
})

const TabForm1= withStyles((theme) => ({
  
}))((props) => {
  const {classes} = props
  return (
    <div className="tab_info">
      <span class="message">入力したプロフィールは名刺にすぐに反映されるよ</span>
      <form>
        <span class="label complete">名前</span>
        <input type="text" value="山田太郎" />
        <span class="label complete">名前の読み方</span>
        <input type="text" value="やまだたろう" />
        <span class="label">名前下小文字</span>
        <span class="explain">役職・所属など(例：株式会社トマト 事務)</span>
        <input type="text" value="株式会社ハック サーバーエンジニア" />
        <span class="label">1|通常文</span>
        <span class="explain">郵便番号・住所・電話番号など</span>
        <div class="info-menu">
          <select class="type-select">
            <option value="email">email</option>
            <option value="phone">Tel</option>
            <option value="address">〒</option>
          </select>
          <input class="content" type="text" value="株式会社ハック サーバーエンジニア" />
        </div>
        <span class="label">2|通常文</span>
        <span class="explain">郵便番号・住所・電話番号など</span>
        <div class="info-menu">
          <select class="type-select">
            <option value="email">email</option>
            <option value="phone">Tel</option>
            <option value="address">〒</option>
          </select>
          <input class="content" type="text" value="株式会社ハック サーバーエンジニア" />
        </div>
        <span class="label">3|通常文</span>
        <span class="explain">郵便番号・住所・電話番号など</span>
        <div class="info-menu">
          <select class="type-select">
            <option value="email">email</option>
            <option value="phone">Tel</option>
            <option value="address">〒</option>
          </select>
          <input class="content" type="text" value="株式会社ハック サーバーエンジニア" />
        </div>
      </form>
    </div>
  )
})

const TabForm2= withStyles((theme) => ({

}))((props) => {
  const {classes} = props
  return (
    <div className="tab_theme">
      <div className="theme_list">
        <div className="theme select">
          <img src={`${process.env.PUBLIC_URL}/themes/sample/1_sample.jpg`} />
          <span>テーマ１</span>
        </div>
        <div className="theme">
          <img src={`${process.env.PUBLIC_URL}/themes/sample/2_sample.jpg`} />
          <span>テーマ2</span>
        </div>
        <div className="theme">
          <img src={`${process.env.PUBLIC_URL}/themes/sample/3_sample.jpg`} />
          <span>テーマ3</span>
        </div>
        <div className="theme">
          <img src={`${process.env.PUBLIC_URL}/themes/sample/4_sample.jpg`} />
          <span>テーマ4</span>
        </div>
        <div className="theme">
          <img src={`${process.env.PUBLIC_URL}/themes/sample/5_sample.jpg`} />
          <span>テーマ5</span>
        </div>
        <div className="theme">
          <img src={`${process.env.PUBLIC_URL}/themes/sample/6_sample.jpg`} />
          <span>テーマ6</span>
        </div>
      </div>
    </div>
  )
})

export default New
