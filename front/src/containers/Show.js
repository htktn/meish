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
    let { name, role, kana } = this.state.res
    // let theme_id = this.state.res.theme_id
    let card = {
      name: "津村光輝",
      kana: "つむらこうき",
      role: "Meish株式会社CEO",
      theme_id: 13,
      informations: [
        {'type': 'phone', 'content': '09048338999'},
        {'type': 'email', 'content': 'koki892jj@gmail.com'},
        {'type': 'address', 'content': '埼玉県熊谷市熊谷1-9-3 リバーフロント710'},
      ]
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
