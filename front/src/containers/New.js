import React from "react";
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '../components/Card';
import { getThemes, createCard } from '../modules/cards';
import { Redirect } from "react-router-dom";

import "./css/header.css";
import "./css/create_tab.css";


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
      tabIndex: 0,
      selectedThemeId: 1,
      redirect: false,
      kana: '',
      name: '',
      role: '',
      infoArray: [
        {
          'key': 'email',
          'val': ''
        },
        {
          'key': 'phone',
          'val': ''
        },
        {
          'key': 'address',
          'val': ''
        },
      ]
    }
  }

  componentDidMount() {
    getThemes().then(result => {
      this.setState({themes: result})
    }).catch(err => console.log(err))
  }

  onChange = (e, stateName) => {
    const text = e.target.value.trim();
    this.setState({ [stateName]: text });
  };

  onSubmit = () => {
    const { name, kana, role, infoArray, selectedThemeId } = this.state;
    let infos = []
    infoArray.map(info => {
      let typeId = 1
      if (info.key === 'phone') typeId = 2
      if (info.key === 'address') typeId = 3
      infos.push({
        "content": `${info.val}`,
        "type_id": typeId,
      })
    })
    const body = {
      "informations": infos,
      "role": role,
      "name": name,
      "kana": kana,
      "theme_id": selectedThemeId,
    }
    createCard(body).then(result => {
      this.props.history.push("/cards/new");
      this.setState({redirect: true, createdCardId: result.id })
    }).catch(err => console.log(err))
  }

  handleTabChange = (val) => {
    this.setState({ tabIndex: val === 0 ? 1 : 0})
  }

  onToggle = (e, index) => {
    const text = e.target.value.trim()
    let { infoArray } = this.state
    infoArray[index].key = text
    this.setState({ infoArray })
  }

  onSelectTheme = (e, id) => {
    this.setState({selectedThemeId: id})
  }

  onPullTextChange = (e, index) => {
    const text = e.target.value.trim();
    let { infoArray } = this.state;
    infoArray[index].val = text
    this.setState({ infoArray })
  }

  render() {
    const { classes } = this.props;
    let { tabIndex, name, kana, role, infoArray, themes, selectedThemeId, redirect } = this.state;
    // name = "稲垣光輝"
    // kana = "いながきこうき"
    // role ='Qulii株式会社'
    // infoArray = [
    //   {'key': 'phone', 'val': '08049339028'},
    //   {'key': 'email', 'val': 'inagakikk@gmail.com'},
    //   {'key': 'address', 'val': '埼玉県熊谷市1-2-37アクアフロント'},
    // ]
    return (
      <div className={classes.container}>
        {redirect && (<Redirect to={{pathname: '/cards/complete', state: this.state}} />)}
        <div className="header" type="new">
          <p className="back"><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <div className="subHeader">
          <p className="themeTitle">シンプル1</p>
          <span className="completeBtn" onClick={this.onSubmit}>完了</span>
        </div>
        <div className={classes.cardWrapper}>
          <Card name={name} kana={kana} role={role} infoArray={infoArray} themeId={selectedThemeId} />
        </div>
        <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader}/>
        {tabIndex === 0 ?
          <TabForm1 onToggle={this.onToggle} onChange={this.onChange} onPullTextChange={this.onPullTextChange} name={name} kana={kana} role={role} infoArray={infoArray} /> :
          <TabForm2 themes={themes} selectedThemeId={selectedThemeId} onClick={this.onSelectTheme}/>
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
  const { onPullTextChange, onToggle, onChange, name, kana, role, infoArray } = props;
  return (
    <div className="tab_info">
      <span className="message">入力したプロフィールは名刺にすぐに反映されるよ</span>
      <form>
        <span className="label complete">名前</span>
        <input type="text" onChange={e => onChange(e, 'name')} value={name} />
        <span className="label complete">名前の読み方</span>
        <input type="text" onChange={e => onChange(e, 'kana')} value={kana} />
        <span className="label">名前下小文字</span>
        <span className="explain">役職・所属など(例：株式会社トマト 事務)</span>
        <input type="text" onChange={e => onChange(e, 'role')} value={role} />
        {infoArray.map((info, index) => {
          return(
            <>
              <span className="label">{index + 1}|通常文</span>
              <span className="explain">郵便番号・住所・電話番号など</span>
              <div className="info-menu">
                <select className="type-select" value={info.key} onChange={e => onToggle(e, index)}>
                  <option value="email">email</option>
                  <option value="phone">Tel</option>
                  <option value="address">〒</option>
                </select>
                <input className="content" type="text" onChange={e => onPullTextChange(e, index)} value={info.val} />
              </div>
            </>
          )
        })}
      </form>
    </div>
  )
})

const TabForm2= withStyles((theme) => ({
}))((props) => {
  const { classes, themes, selectedThemeId, onClick } = props
  return (
    <div className="tab_theme">
      <div className="theme_list">
        {themes.map(theme => {
          return (
            <div className={['theme', selectedThemeId === theme.id ? 'select' : ''].join(' ')} onClick={(e) => onClick(e, theme.id)}>
              <img src={`${process.env.PUBLIC_URL}/themes/sample/${theme.id}_sample.jpg`} />
              <span>{theme.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default New
