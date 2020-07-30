import React from "react";
// import NormalShow from '../components/NormalShow';
import SignedInShow from '../components/SignedInShow';
import { getBelongingCard, deleteCard } from '../modules/cards';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: ''
    }
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    getBelongingCard(id).then(result => {
      this.setState({ res: result })
    }).catch(err => console.log(err))
  }

  onClick = () => {
    this.props.history.push('/cards');
    this.setState({ redirect: true });
  }

  onDeleteCard = (card) => {
    deleteCard(card.id);
    this.props.history.push('/cards');
  }

  render() {
    let { name, role, kana, theme_id, informations, id } = this.state.res
    let card = {
      id: id,
      name: name,
      kana: kana,
      role: role,
      theme_id: theme_id,
      informations: informations
    }
    return (
      <>
        {
          card.theme_id ? <SignedInShow card={card} onClick={this.onClick} onDeleteCard={this.onDeleteCard} />
            : <div />
        }
      </>
    )
  }
}
export default Show
