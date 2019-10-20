import React from "react";
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from "react-router-dom";
import Guidance from '../components/Guidance';
import CreateMenu from '../components/CreateMenu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '../components/Card'
import { getAllCards } from '../modules/cards';

import "./css/index.css";

//TODO functional componentにする
@withStyles(theme => ({
  container: {
    background: 'linear-gradient(203.97deg, rgba(0, 0, 0, 0.7) 0%, #000000 42.95%, rgba(0, 0, 0, 0.8) 99.36%) ',
    width: '100%',
    height: '100%',
    paddingTop: 44,
    paddingBottom: 180,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
  },
  title: {
    width: 99,
    height: 28,
    fontSize: 24,
    margin: '0 0 20px 24px',
  },
  logo: {
    textAlign: 'center',
    width: 51,
    height: 21,
    margin: '0px auto 26px',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: 900,
  },
  addButton: {
    background: '#FFFFFF',
    color: '#0FA369',
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    zIndex: '1',
    transform: 'translateX(-50%)',
    transition: 'all 300ms ease-out',
    ':*': {
      background: '!#FFFFFF'
    }
  },
  active: {
    transform: 'scale(0.8) translateX(-35px) rotateZ(45deg)',
    background: '#FFFFFF',

  }
}))
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      clicked: false,
      redirect: false,
      tabIndex: 0,
    }
  }

  componentDidMount() {
    getAllCards().then(result => {
      this.setState({cards: result})
    }).catch(err => console.log(err))
  }

  onClick = () => {
    this.setState({clicked: this.state.clicked ? false : true})
  }

  onRedirect = to => {
    //TODO historyにpushするようにしてから、引数で指定されたtoへ遷移するようにする
    this.props.history.push(to);
    this.setState({redirect: true, redirectTo: to});
  }

  handleTabChange = (val) => {
    this.setState({ tabIndex: val === 0 ? 1 : 0})
  }

  render() {
    const { classes } = this.props;
    // const { clicked, redirect } = this.state;
    const { tabIndex, clicked, redirect, redirectTo, cards } = this.state;

    //TODO redirectフラグを見て、遷移するかどうか判断するようにする、遷移先をonClickのときに指定できるようにする
    return (
      <>
        {redirect && <Redirect to={`/${redirectTo}`}/> }
        { !clicked ?
          <div className={classes.container}>
            <p className={classes.logo}>meish</p>
            {/* <h1 className={classes.title}>名刺一覧</h1>
            <Guidance /> */}
            <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader}/>
            {tabIndex === 0 && cards ?
              <TabCard1 cards={cards}/> :
              <TabCard2 />
            }
            <Fab color="primary" aria-label="add" style={{background: 'white'}} className={classes.addButton} onClick={this.onClick}>
              <AddIcon />
            </Fab>
          </div>
          : 
          <div className={classes.container}>
            <p className={classes.logo}>meish</p>
            {/* <h1 className={classes.title}>名刺一覧</h1>
            <Guidance /> */}
            <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader}/>
              {tabIndex === 0 && cards ?
                <TabCard1 cards={cards} /> :
                <TabCard2 />
              }
            <Fab color="primary" aria-label="add" style={{background: 'white'}} className={classes.addButton + ' ' + classes.active} onClick={this.onClick}>
              <AddIcon />
            </Fab>
            <CreateMenu onRedirect={this.onRedirect}/>
          </div>
        }
      </>
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
      <Tabs
        value={value}
        onChange={() => handleChange(value)}
        indicatorColor="primary"
        textColor="white"
        centered
      >
        <Tab label="作った名刺一覧" />
        <Tab label="貰った名刺一覧" />
      </Tabs>
  )
})

//TODO class componentにする
//TODO placeholderをつけたい
const TabCard1= withStyles((theme) => ({
}))((props) => {
  const {cards} = props
  let allInfoArray = []
  cards.map(card => {
    let infoArray = []
    card.informations.map(info => {
      infoArray.push({
        "val": `${info.content}`,
        "key": `${info.type}`
      })
    })
    allInfoArray.push(infoArray)
  })
  return (
    <div className="tab_mycard">
      {
        cards.map((card, index) => {
          return (
            <Card name={card.name} kana={card.kana} role={card.role} infoArray={allInfoArray[index]} themeId={card.theme_id} />
          )
        })
      }
      <img className="ad-box" src={`${process.env.PUBLIC_URL}/component/add-meishi.png`} alt="いろんな名刺を増やせます" />
    </div>
  )
})

const TabCard2= withStyles((theme) => ({
}))((props) => {
  const { } = props
  return (
    <div className="tab_getcard">
      <Card name={"津村光輝"} kana={"つむらこうき"} role={"カリスマエンジニア"} infoArray={[{key:'email', val:'yuya'},{key: 'email',val:'yuya'},{key: 'email',val:'yuya'}]} themeId={"2"} />
      <Card name={"津村光輝"} kana={"つむらこうき"} role={"カリスマエンジニア"} infoArray={[{key:'email', val:'yuya'},{key: 'email',val:'yuya'},{key: 'email',val:'yuya'}]} themeId={"3"} />
      <Card name={"津村光輝"} kana={"つむらこうき"} role={"カリスマエンジニア"} infoArray={[{key:'email', val:'yuya'},{key: 'email',val:'yuya'},{key: 'email',val:'yuya'}]} themeId={"9"} />
    </div>
  )
})

export default Index
