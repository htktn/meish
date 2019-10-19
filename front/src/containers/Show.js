import React from "react";
import { withStyles } from '@material-ui/core';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";
import SignedInShow from '../components/SignedInShow';

@withStyles(theme => ({
  // container: {
  //   background: 'red',
  // },
}))
class Show extends React.Component {
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
      <SignedInShow onClick={this.onClick} />
    );
  }
}
export default Show
