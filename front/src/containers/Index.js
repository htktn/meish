import React from "react";
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import { Redirect } from "react-router-dom";
import Guidance from '../components/Guidance';

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
  },
}))
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      clicked: false,
      redirect: false,
    }
  }

  onClick = () => {
    this.setState({clicked: true})
  }

  onRedirect = to => {
    //TODO historyにpushするようにしてから、引数で指定されたtoへ遷移するようにする
    this.setState({redirect: true})
  }

  render() {
    const { classes } = this.props;
    // const { clicked, redirect } = this.state;
    const { clicked } = this.state;
    //TODO 三項演算子を使ってclickedがtrueのときとそうでないときで分岐して表示できるようにする
    //TODO redirectフラグを見て、遷移するかどうか判断するようにする、遷移先をonClickのときに指定できるようにする
    return (
      <>
        { !clicked &&
          <div className={classes.container}>
            <p className={classes.logo}>meish</p>
            <h1 className={classes.title}>名刺一覧</h1>
            <Guidance />
            <Fab color="primary" aria-label="add" className={classes.addButton}>
              <AddIcon />
            </Fab>
          </div>
        }
      </>
    );
  }
}


export default Index
