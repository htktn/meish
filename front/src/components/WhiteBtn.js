import React from "react";
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

const WhiteBtn = withStyles((theme) => ({
  btn: {
    background: '#ffffff',
    borderRadius: '6px',
    padding: '10px 0',
    margin: '10px 32px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.03em',
    color: '#0FA369'
  }
}))((props) => {
  const {classes, title, to} = props
  return (
    <Link to={to} style={{textDecoration: 'none'}}>
      <div className={classes.btn}>
        {title}
      </div>
    </Link>
  )
})

export default WhiteBtn
