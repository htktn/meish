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
  const {classes} = props
  const {name, kana, role, theme_id, informations} = props.card
  return (
    <div className="meishi-outer">
      <div className="meish-body" theme={theme_id.toString()}>
        <img src={`${process.env.PUBLIC_URL}/themes/background/${theme_id}_background.jpg`} />
        <span className="kana">{kana}</span>
        <span className="name">{name}</span>
        <span className="role">{role}</span>
        {informations.map((info, index) => {
          return <span className="info" info={index.toString()}><span type={info.type}></span>{info.content}</span>
        })}
      </div>
    </div>
  )
})

export default Card
