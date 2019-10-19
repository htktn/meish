import React from "react";
import { withStyles } from '@material-ui/core';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";
import "./css/lp.css";

@withStyles(theme => ({
  container: {
    background: 'red',
  },
}))
class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onClick = () => {
    this.props.history.push("/");
    this.setState({ redirect: true });
  };

  render() {
    const { classes } = this.props;
    // const { redirect } = this.state;
    return (
      <div className="lp-comntainer">
        <div className="sec01">
          <img src={`${process.env.PUBLIC_URL}/lp/lp-01.png`} />
          <a href="http://localhost:3000/user/auth/twitter/">
            <img className="login-btn01" src={`${process.env.PUBLIC_URL}/lp/lp-login.png`} />
          </a>
        </div>
        <div className="sec02">
          <img className="image1" src={`${process.env.PUBLIC_URL}/lp/lp-02.png`} />
          <img className="image2" src={`${process.env.PUBLIC_URL}/lp/lp-03.png`} />
        </div>
        <div className="sec03">
          <img src={`${process.env.PUBLIC_URL}/lp/lp-04.png`} />
          <a href="http://localhost:3000/user/auth/twitter/">
            <img className="login-btn02" src={`${process.env.PUBLIC_URL}/lp/lp-login.png`} />
          </a>
        </div>
      </div>
    );
  }
}
export default Login
