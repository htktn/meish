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
<<<<<<< HEAD
  const { classes, name, kana, role, infoArray } = props
  return (
    <div className="meishi-outer">
      <div className="meish-body" theme="2">
        <img src={`${process.env.PUBLIC_URL}/themes/background/2_background.jpg`} />
        <span className="kana">{kana}</span>
        <span className="name">{name}</span>
        <span className="role">{role}</span>
        {infoArray.map((info, index) => {
          return <span className="info" info={index.toString()}><span type={info.key}></span>{info.val}</span>
        })}
      </div>
    </div>
  )
})

export default Card
