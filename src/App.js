import React, { Component } from 'react';

import './App.css';





class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> SophistiDrinker </h1>
        <RandomBeer  />

      </div>
    );
  }
}

class RandomBeer extends Component {
  constructor(props){
    super(props)

    this.state = {
      beerName:'',
            tagline:'',
            food_pairing:[],
            image_url:'',
            abv:'',
            first_brewed:'',
    }

  }
  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => res.json())
    .then((result) => {
      this.setState({
        beerName:result[0].name,
        tagline:result[0].tagline,
        food_pairing:result[0].food_pairing,
        image_url:result[0].image_url,
        abv:result[0].abv,
        first_brewed:result[0].first_brewed
      })
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="sideBySide">
        <img className="beerPicture" src={this.state.image_url} />
        <div className="rightSideInfo">
        <h2 className="todaysBeerH2"> Your Random Beer </h2>
        < br />
        <h2>Name:<small>{this.state.beerName}</small> </h2>
        <h3>First Brewed In:<small>{this.state.first_brewed}</small> </h3>
        <h3>Great with these dishes: </h3>
        <ul>
          <li>
            {this.state.food_pairing[0]}
          </li>
          <li>
            {this.state.food_pairing[1]}
          </li>
          <li>
            {this.state.food_pairing[2]}
          </li>
        </ul>
        <h3> ABV: <small> {this.state.abv} </small> %</h3>
        <h4>Tagline:<small> {this.state.tagline} </small></h4>

        </div>
        </div>

      </div>
    );
  }
}

// class BeerSearchForm extends Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       name:'',
//       tagline:'',
//       food_pairing:[],
//       image_url:'',
//       abv:''
//     }
//     function handleSearch(beer){
//       let url = "https://api.punkapi.com/v2/beers/" + beer + ''
//       fetch(url)
//       .then(response => response.json()).then((data) => {
//         console.log(data);
//       })
//     }
//
//   function handleSubmit(event){
//       event.preventDefault();
//       const beerName = event.target.name.value
//       this.props.handleSubmit(beerName);
//     }
//   }
//   render(){
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             name="name"
//             type="text"
//             placeholder="Enter Beer name for more info!"
//             className="form-control"
//           />
//           <button type="submit" >Search </button>
//         </form>
//         {
//           (this.state.name !== '')
//           ?
//           <p> {this.state.name} </p>
//           :
//           ''
//         }
//       </div>
//     )
//   }
// }
export default App;
