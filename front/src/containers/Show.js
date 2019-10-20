import React from "react";
import { withStyles } from '@material-ui/core';
// import { Redirect } from "react-router-dom";
// import background from "../../static/background.png";
import SignedInShow from '../components/SignedInShow';
import NormalShow from '../components/NormalShow';
import { getUserCard, getCard } from '../modules/cards';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: ''
    }
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    getUserCard(id).then(result => {
      this.setState({res: result})
    }).catch(err => console.log(err))
  }

  // onClick = () => {
  //   this.props.history.push("/");
  //   this.setState({ redirect: true });
  // };

  render() {
    const { classes } = this.props;
    const { name, role, kana } = this.state.res
    const themeId = this.state.res.theme_id
    let info = this.state.res.informations
    let infoArray = []
    if(info) {
      info.map(info => {
        infoArray.push({
          "val": `${info.content}`,
          "key": `${info.type}`
        })
      })
    }
    return (
      // <SignedInShow onClick={this.onClick} />
      <>
        {themeId ?
        <NormalShow onClick={this.onClick} infoArray={infoArray} name={name} kana={kana} role={role} themeId={themeId} />  :
        <div />
        }
      </>
      
      // <h1>hello</h1>
    );
  }
}
export default Show
