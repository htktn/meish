import React from "react";
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IntroCard from './IntroCard';

const Guidance = withStyles((theme) => ({
  container: {
    width: 339,
    height: 349,
    background: '#BFCBD3',
    borderRadius: 12,
    margin: '0 auto 180px',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: '19px 0 0 18px',
    margin: '0 0 34px',
  },
  addButton: {
    fontWeight: 'bold',
    color: '#3A82F7',
    padding: '8px 17px',
    background: '#FFFFFF',
    borderRadius: 19,
    position: 'absolute',
    bottom: 22,
    right: 19,
  }
}))((props) => {
  const {classes} = props
  return (
    <div className={classes.container}>
      <p className={classes.title}>名刺を作りましょう</p>
      <IntroCard />
    </div>
  )
})

export default Guidance
