import React from "react";
import NormalShow from '../components/NormalShow';
import { getBelongingCard } from '../modules/cards';

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
      this.setState({res: result})
    }).catch(err => console.log(err))
  }

  render() {
    let { name, role, kana, theme_id, informations } = this.state.res
    let card = {
      name: name,
      kana: kana,
      role: role,
      theme_id: theme_id,
      informations: informations
    }
    return (
      <>
        {
          card.theme_id ? <NormalShow card={card} />
          : <div />
        }
      </>
    )
  }
}
export default Show
