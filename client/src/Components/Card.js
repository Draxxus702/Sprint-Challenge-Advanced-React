import React from 'react'
import axios from 'axios'


class Card extends React.Component{



constructor(){
    super()
    this.state={
      players:[]
    }
  }
  
  componentDidMount() {
    console.log("component did mount");
    fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(result => { console.log('axios', result); this.setState({ players: result }) })
        .catch(err => console.log('Error fetching players.', err))
  }
  
  
  render(){
    return(
        <div className='overlord'>
            

            {this.state.players.map((p =>
                <div className='players' key={p.name}><p>{p.name}</p>
                <p> {p.country}</p>
                </div>
            ))}
        </div>
    )
}
}
export default Card