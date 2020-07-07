import React from "react";
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

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
  const {classes, to, title} = props;
  return (
    <Link to={to} style={{textDecoration: 'none'}}>
      <div className={classes.btn}>
        {title}
      </div>
    </Link>
  )
})

export default GreenBtn
