import React from "react";
import { withStyles } from '@material-ui/core';
import WhiteBtn from "./WhiteBtn";

const GreenBtn = withStyles((theme) => ({
  btn: {
    background: '#0FA369',
    borderRadius: '6px',
    padding: '20px 0',
    margin: '10px 32px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.03em',
    color: 'white'
  }
}))((props) => {
  const {classes} = props;
    
  return (
    <div className={classes.btn}>
      { props.title }
    </div>
  )
})

export default GreenBtn
