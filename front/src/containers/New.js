import React from "react";
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '../components/Card';
// import { allGuilts, createWarning } from '../api';

import "./css/header.css";
import "./css/create_tab.css";
// TODO selectをmaterial uiからimportするなりして、値を入力できるようにする

// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";

//TODO 後でwithStylesが必要ないものは外す
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
      // infoArray: [
      //   {'email': ''},
      //   {'tel': ''},
      //   {'address': ''},
      // ]
    }
  }

  // handleTextChange = () => {
  // }

  onChange = (e, stateName) => {
    const text = e.target.value.trim();
    this.setState({ [stateName]: text });
  };

  //TODO APIが完成したらつなぎ合わせる作業
  onSubmit = () => {
    const data = this.state
  }

  handleTabChange = (val) => {
    this.setState({ tabIndex: val === 0 ? 1 : 0})
  }

  onKeyToggle = () => {
  }

  //TODO 入力フォームに入力されたものはonChangeでsetするようにして、最終的にsubmitの中で、stateの中身を送信するようにする
  render() {
    const { classes } = this.props;
    const { tabIndex, name, kana, role, infoArray } = this.state;
    // const { redirect } = this.state;
    return (
      <div className={classes.container}>
        <div className="header" type="new">
          <p className="back"><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <div className="subHeader">
          <p className="themeTitle">シンプル1</p>
          <span className="completeBtn" onClick={this.onSubmit}>完了</span>
        </div>
        <div className={classes.cardWrapper}>
          <Card name={name} kana={kana} role={role} />
        </div>
        <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader}/>
        {tabIndex === 0 ?
          <TabForm1 onChange={this.onChange} name={name} kana={kana} role={role} /> :
          <TabForm2 />
        }
      </div>
    );
  }
}



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

//TODO placeholderをつけたい
const TabForm1= withStyles((theme) => ({
}))((props) => {
  const { onChange, name, kana, role, infoArray } = props;
  return (
    <div className="tab_info">
      <span className="message">入力したプロフィールは名刺にすぐに反映されるよ</span>
      <form>
        <span className="label complete">名前</span>
        <input type="text" onChange={e => onChange(e, 'name')}/>
        <span className="label complete">名前の読み方</span>
        <input type="text" onChange={e => onChange(e, 'kana')}/>
        <span className="label">名前下小文字</span>
        <span className="explain">役職・所属など(例：株式会社トマト 事務)</span>
        <input type="text" onChange={e => onChange(e, 'role')}/>
        <span className="label">1|通常文</span>
        <span className="explain">郵便番号・住所・電話番号など</span>
        <div className="info-menu">
          <select className="type-select" value='phone'>
            <option value="email">email</option>
            <option value="phone">Tel</option>
            <option value="address">〒</option>
          </select>
          <input className="content" type="text" value="株式会社ハック サーバーエンジニア" />
        </div>
        <span className="label">2|通常文</span>
        <span className="explain">郵便番号・住所・電話番号など</span>
        <div className="info-menu">
          <select className="type-select">
            <option value="email">email</option>
            <option value="phone">Tel</option>
            <option value="address">〒</option>
          </select>
          <input className="content" type="text" value="株式会社ハック サーバーエンジニア" />
        </div>
        <span className="label">3|通常文</span>
        <span className="explain">郵便番号・住所・電話番号など</span>
        <div className="info-menu">
          <select className="type-select">
            <option value="email">email</option>
            <option value="phone">Tel</option>
            <option value="address">〒</option>
          </select>
          <input className="content" type="text" value="株式会社ハック サーバーエンジニア" />
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
