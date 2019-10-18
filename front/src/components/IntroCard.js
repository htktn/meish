import React from "react";
import { withStyles } from '@material-ui/core';

const IntroCard = withStyles((theme) => ({
  container: {
    width: 272,
    height: 170,
    background: 'linear-gradient(239.58deg, #3BC48E 0.86%, #169F6B 50.42%, #0FA369 99.98%)',
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
    <div className={classes.container}>
      <p className={classes.title}>meish</p>
      <p className={classes.phrase}>早く簡単に名刺をもらえる</p>
    </div>
  )
})

export default IntroCard
