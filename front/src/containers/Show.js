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
    let themeId = this.state.res.theme_id
    //TODO 後で消す
    themeId = 13
    name = "稲垣光輝"
    kana = "いながきこうき"
    role = "Meish株式会社CEO"
    let infoArray = [
      {'key': 'phone', 'val': '09048338999'},
      {'key': 'email', 'val': 'koki892jj@gmail.com'},
      {'key': 'address', 'val': '埼玉県熊谷市熊谷1-9-3 リバーフロント710'},
    ]
    //let info = this.state.res.informations
    //let infoArray = []
    //if(info) {
    //  info.map(info => {
    //    infoArray.push({
    //      "val": `${info.content}`,
    //      "key": `${info.type}`
    //    })
    //  })
    //}
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
