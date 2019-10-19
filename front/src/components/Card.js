import React from "react";
import { withStyles } from '@material-ui/core';
import "../containers/css/card.css";

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

}))((props) => {
  const { classes, name, kana, role } = props
  return (
    <div className="meishi-outer">
      <div className="meish-body" theme="2">
        <img src={`${process.env.PUBLIC_URL}/themes/background/2_background.jpg`} />
        <span className="kana">{kana}</span>
        <span className="name">{name}</span>
        <span className="role">{role}</span>
        <span className="info" info="0"><span type="address"></span> 100-1000　東京都 港区 12-3</span>
        <span className="info" info="1"><span type="phone"></span> 090-0090-0090</span>
        <span className="info" info="2"><span type="email"></span> yamada@hack.com</span>
      </div>
    </div>
  )
})

export default Card
