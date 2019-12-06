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

  onClick = () => {
    this.props.history.push("/cards");
    this.setState({ redirect: true });
  };

  render() {
    const { classes } = this.props;
    let { name, role, kana, theme_id, informations } = this.state.res
    let card = {
      name: name,
      kana: kana,
      role: role,
      theme_id: theme_id,
      informations: informations
    }
    return (
      // <SignedInShow onClick={this.onClick} />
      <>
        {
          card.theme_id ? <NormalShow onClick={this.onClick} card={card} /> 
          : <div />
        }
      </>
    )
  }
}
export default Show
