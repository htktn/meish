import React from "react";
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";

// @withStyles(theme => ({
//   container: {
//     background: 'red',
//   },
// }))
export default class Show extends React.Component {
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
      <div className={classes.container}>
        <h1 onClick={this.onClick}>Show Page</h1>
      </div>
    );
  }
}
