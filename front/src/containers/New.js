import React from "react";
import { withStyles } from '@material-ui/core';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";

@withStyles(theme => ({
  container: {
    background: 'linear-gradient(221.89deg, #C3C3C3 0%, rgba(162, 162, 162, 0.3) 100%)',
    width: '100%',
    height: '100%',
    paddingTop: 44,
    paddingBottom: 180,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
  },
}))
class New extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes } = this.props;
    // const { redirect } = this.state;
    return (
      <div className={classes.container}>
        <h1 onClick={this.onClick}>New Page</h1>
      </div>
    );
  }
}
export default New
