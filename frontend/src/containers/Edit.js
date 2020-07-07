import React from "react";
import { withStyles } from '@material-ui/core';

@withStyles(theme => ({
  container: {
    background: 'red',
  },
}))
class Edit extends React.Component {
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
        <h1 onClick={this.onClick}>Edit Page</h1>
      </div>
    );
  }
}

export default Edit
