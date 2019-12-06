import React from "react";
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import GreenBtn from '../components/GreenBtn';
import WhiteBtn from '../components/WhiteBtn';

const CreateMenu = withStyles((theme) => ({
  modalBack: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(180deg, rgba(95, 95, 95, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  createNewBtn: {
    position: 'absolute',
    bottom: '100px',
    width: '100%'
  }
}))((props) => {
  const {classes} = props;

  return (
    <div className={classes.modalBack}>
      <div className={classes.createNewBtn}>
        <Link to='cards/new' style={{textDecoration: 'none'}}>
          <GreenBtn title="新規プロフィールで作る" />
        </Link>
        <Link to='cards/new' style={{textDecoration: 'none'}}>
          <WhiteBtn title="デフォルトの名刺で作る" />
        </Link>
      </div>
    </div>
    )
  })

export default CreateMenu
