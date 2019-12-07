import React from "react";
import { withStyles } from '@material-ui/core';
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
    position: 'fixed',
    bottom: '100px',
    width: '100%'
  }
}))((props) => {
  const {classes, onRedirect} = props;

  return (
    <div className={classes.modalBack}>
      <div className={classes.createNewBtn}>
        <div onClick={() => onRedirect('cards/new')}>
          <GreenBtn title="新規プロフィールで作る" />
        </div>
        <div onClick={() => onRedirect('cards/new')}>
          <WhiteBtn title="デフォルトの名刺で作る" />
        </div>
      </div>
    </div>
    )
  })

export default CreateMenu
