import React from "react";
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// TODO selectをmaterial uiからimportするなりして、値を入力できるようにする

// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";

//TODO ulとかliに直せるところは直していってほしい
@withStyles(theme => ({
  container: {
    background: 'linear-gradient(221.89deg, #C3C3C3 0%, rgba(162, 162, 162, 0.3) 100%)',
    width: '100%',
    height: '100%',
    paddingTop: 44,
    paddingBottom: 180,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
  },
  cardWrapper : {
    padding: '100px 5px',
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
        <div className={classes.header}>
          <p>戻る</p>
          <p>meish</p>
        </div>
        <div className={classes.subHeader}>
          <p>シンプル1</p>
          <button>完了</button>
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
  title: {
    margin: '0 auto',
    paddingTop: 50,
    height: 46,
    fontSize: 35,
  },
  phrase: {
    fontSize: 12,
  },
}))((props) => {
  const {classes} = props
  return (
    <div>
      <p className={classes.title}>meish</p>
      <p className={classes.phrase}>早く簡単に名刺をもらえる</p>
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
  container: {
    background: '#585858',
  },
}))((props) => {
  const {classes} = props
  return (
    <div className={classes.container}>
      hello
    </div>
  )
})

const TabForm2= withStyles((theme) => ({
  container: {
    background: '#585858',
  },
}))((props) => {
  const {classes} = props
  return (
    <div className={classes.container}>
      bye
    </div>
  )
})

export default New
