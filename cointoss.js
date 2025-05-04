import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickbutton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    this.setState(prevState => ({
      total: prevState.total + 1,
      heads: tossResult === 0 ? prevState.heads + 1 : prevState.heads,
      tails: tossResult !== 0 ? prevState.tails + 1 : prevState.tails,
      url: tossResult === 0 ? headsImage : tailsImage,
    }))
  }

  render() {
    const {total, heads, tails, url} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={url} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onClickbutton}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {heads}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
