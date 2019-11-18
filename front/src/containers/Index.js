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
    this.props.history.push(to);
    this.setState({redirect: true, redirectTo: to});
  }

  handleTabChange = (val) => {
    this.setState({ tabIndex: val === 0 ? 1 : 0})
  }

  render() {
    const {classes} = this.props;
    const {tabIndex, clicked, redirect, redirectTo, cards} = this.state;

    return (
      <>
        {redirect && <Redirect to={`/${redirectTo}`} /> }
        { !clicked ?
          <div className={classes.container}>
            <p className={classes.logo}>meish</p>
            <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader} />
            {tabIndex === 0 && cards ?
              <CreatedCards cards={cards}/> :
              <ReceivedCards />
            }
            <Fab color="primary" aria-label="add" style={{background: 'white'}} className={classes.addButton} onClick={this.onClick}>
              <AddIcon />
            </Fab>
          </div>
          :
          <div className={classes.container}>
            <p className={classes.logo}>meish</p>
            <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader} />
              {tabIndex === 0 && cards ?
                <CreatedCards cards={cards} /> :
                <ReceivedCards />
              }
            <Fab color="primary" aria-label="add" style={{background: 'white'}} className={classes.addButton + ' ' + classes.active} onClick={this.onClick}>
              <AddIcon />
            </Fab>
            <CreateMenu onRedirect={this.onRedirect} />
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

//TODO useEffectを使ってcardsをとってこれるようにする
//TODO CreatedCardsとReceivedCardsはcardsさえ変えれば同じcomponentにできそう(渡す関数だけ変えれば良さそう)
//TODO placeholderをつけたい
const CreatedCards= withStyles((theme) => ({
}))((props) => {
  const {cards} = props
  return (
    <div className="tab_mycard">
      {cards.map(card => <Card card={card} />)}
      <img className="ad-box" src={`${process.env.PUBLIC_URL}/component/add-meishi.png`} alt="いろんな名刺を増やせます" />
    </div>
  )
})

//TODO useEffectを使ってcardsをとってこれるようにする
const ReceivedCards = (props) => {
  // const { cards } = props
  const cards = [
    {name: "津村光輝", kana: "つむらこうき", role: "カリスマエンジニア", theme_id: "2", informations: [{type:'email', content:'yuya'}]},
    {name: "津村光輝", kana: "つむらこうき", role: "カリスマエンジニア", theme_id: "3", informations: [{type: 'email', content:'yuya'}]},
    {name: "津村光輝", kana: "つむらこうき", role: "カリスマエンジニア", theme_id: "4", informations: [{type: 'email', content:'yuya'}]},
  ]

  return (
    <div>
      {cards.map(card => <Card card={card} />)}
    </div>
  )
}

export default Index
