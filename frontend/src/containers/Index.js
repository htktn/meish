import React from "react";
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateMenu from '../components/CreateMenu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Fade';
import Card from '../components/Card'
import { getAllBelongingCards, getAllReceivedCards } from '../modules/cards';
import "./css/index.css";

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
    this.state = {
      clicked: false,
      tabIndex: 0,
    }
  }

  componentDidMount() {
    getAllBelongingCards().then(result => {
      this.setState({cards: result})
    }).catch(err => console.log(err))
    getAllReceivedCards().then(result => {
      this.setState({receivedCards: result})
    }).catch(err => console.log(err))
  }

  onClick = () => {
    this.setState({clicked: this.state.clicked ? false : true})
  }

  handleTabChange = val => {
    this.setState({ tabIndex: val === 0 ? 1 : 0})
  }

  render() {
    const {classes} = this.props
    const {tabIndex, clicked, cards, receivedCards} = this.state

    return (
      <div className={classes.container}>
        <p className={classes.logo}>meish</p>
        <TabHeader handleChange={this.handleTabChange} value={tabIndex} className={classes.tabHeader} />
        {(cards !== undefined && receivedCards !== undefined) ?
            tabIndex === 0 ?
              <Cards cards={cards} /> :
              <Cards cards={receivedCards} />
            : null
        }
        {clicked ?
          <>
            <Fab color="primary" aria-label="add" style={{background: 'white'}} className={classes.addButton + ' ' + classes.active} onClick={this.onClick}>
              <AddIcon />
            </Fab>
            <CreateMenu />
          </>
        :
          <Fab color="primary" aria-label="add" style={{background: 'white'}} className={classes.addButton} onClick={this.onClick}>
            <AddIcon />
          </Fab>
        }
      </div>
    )
  }
}

const TabHeader = props => {
  const { handleChange, value} = props
  return (
      <Tabs
        value={value}
        onChange={() => handleChange(value)}
        indicatorColor="primary"
        textColor="inherit"
        centered
      >
        <Tab label="作った名刺一覧" key='created'/>
        <Tab label="貰った名刺一覧" key='received'/>
      </Tabs>
  )
}

const Cards = withStyles((theme) => ({
}))((props) => {
  const {cards} = props
  return (
    <Slide direction='down' in={true} timeout={1000}>
      <div className="tab_mycard">
        {cards.map((card, i) => <Card card={card} key={i} link />)}
        <img className="ad-box" src='../../public/component/add-meishi.png' alt="いろんな名刺を増やせます" />
      </div>
    </Slide>
  )
})

export default Index
