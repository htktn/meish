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
      informations: [
        {
          'type': 'email',
          'content': ''
        },
        {
          'type': 'phone',
          'content': ''
        },
        {
          'type': 'address',
          'content': ''
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

  //TODO refactor and move this to module so that update method might be able to use this method
  prepareSubmitData = () => {
    const { name, kana, role, informations, selectedThemeId } = this.state;
    let infos = []
    informations.map(info => {
      let typeId = 1
      if (info.type === 'phone') typeId = 2
      if (info.type === 'address') typeId = 3
      infos.push({
        "content": `${info.content}`,
        "type_id": typeId,
      })
      return info
    })
    return {
      "informations": infos,
      "role": role,
      "name": name,
      "kana": kana,
      "theme_id": selectedThemeId,
    }
  }

  onSubmit = () => {
    const body = this.prepareSubmitData()
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
    let { informations } = this.state
    informations[index].type = text
    this.setState({ informations })
  }

  onSelectTheme = (e, id) => {
    this.setState({selectedThemeId: id})
  }

  onPullTextChange = (e, index) => {
    const text = e.target.value.trim();
    let { informations } = this.state;
    informations[index].content = text
    this.setState({ informations })
  }

  onClick = () => {
    this.props.history.push("/cards");
    this.setState({ redirect: true });
  }

  render() {
    const { classes } = this.props;
    let { tabIndex, name, kana, role, informations, themes, selectedThemeId, redirect } = this.state;
    const card = {
      name: name,
      kana: kana,
      role: role,
      theme_id: selectedThemeId,
      informations: informations
    }
    return (
      <div className={classes.container}>
        {redirect && (<Redirect to={{pathname: '/cards/complete', state: this.state}} />)}
        <div className="header" type="new">
          <p className="back" onClick={this.onClick}><span className="arrow"></span>戻る</p>
          <p className="logo">meish</p>
        </div>
        <div className="subHeader">
          <p className="themeTitle">シンプル1</p>
          <span className="completeBtn" onClick={this.onSubmit}>完了</span>
        </div>
        <div className={classes.cardWrapper}>
          <Card card={card} />
        </div>
        <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader}/>
        {tabIndex === 0 ?
          <ProfileForm onToggle={this.onToggle} onChange={this.onChange} onPullTextChange={this.onPullTextChange} card={card} /> :
          <LayoutSelect themes={themes} selectedThemeId={selectedThemeId} onClick={this.onSelectTheme}/>
        }
      </div>
    );
  }
}

const TabHeader = withStyles((theme) => ({
  container: {
    background: '#585858',
  },
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
const ProfileForm = withStyles((theme) => ({
}))((props) => {
  const { onPullTextChange, onToggle, onChange, card } = props;
  return (
    <div className="tab_info">
      <span className="message">入力したプロフィールは名刺にすぐに反映されるよ</span>
      <form>
        <span className="label complete">名前</span>
        <input type="text" onChange={e => onChange(e, 'name')} value={card.name} />
        <span className="label complete">名前の読み方</span>
        <input type="text" onChange={e => onChange(e, 'kana')} value={card.kana} />
        <span className="label">名前下小文字</span>
        <span className="explain">役職・所属など(例：株式会社トマト 事務)</span>
        <input type="text" onChange={e => onChange(e, 'role')} value={card.role} />
        {card.informations.map((info, index) => {
          return(
            <>
              <span className="label">{index + 1}|通常文</span>
              <span className="explain">郵便番号・住所・電話番号など</span>
              <div className="info-menu">
                <select className="type-select" value={info.type} onChange={e => onToggle(e, index)}>
                  <option value="email">email</option>
                  <option value="phone">Tel</option>
                  <option value="address">〒</option>
                </select>
                <input className="content" type="text" onChange={e => onPullTextChange(e, index)} value={info.content} />
              </div>
            </>
          )
        })}
      </form>
    </div>
  )
})

const LayoutSelect = withStyles((theme) => ({
}))((props) => {
  const { themes, selectedThemeId, onClick } = props
  return (
    <div className="tab_theme">
      <div className="theme_list">
        {themes.map(theme => {
          return (
            <div className={['theme', selectedThemeId === theme.id ? 'select' : ''].join(' ')} onClick={(e) => onClick(e, theme.id)}>
              <img alt="" src={`${process.env.PUBLIC_URL}/themes/sample/${theme.id}_sample.jpg`} />
              <span>{theme.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default New
