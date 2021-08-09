import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        randomIndex: 0 ,
        quotes: [
          {
                  "quote": "Forget all the reasons why it won't work and believe the one reason why it will",
                  "author": "Unknown"
              },
              {
                  "quote": "Always do what you are afraid to do",
                  "author": "Ralph Waldo Emerson"
              },
            
              {
                  "quote": "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
                  "author": "Sara Blakely"
              },
              {
                  "quote": "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
                  "author": "Unknown"
              },
              {
                  "quote": " For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16",
                  "author": "Jesus Christ"
              },
              {
                  "quote": "The surest way to find your dream job is to create it.",
                  "author": "Unknown"
            
              }           
        ]
    }
}

randomQuotesGenerator() {
  this.setState ({
    randomIndex: Math.floor(Math.random()*this.state.quotes.length)
  })
}

render() {
      return (
        <div className="App">
          <div id="quote-box">
            <p id="text">{this.state.quotes[this.state.randomIndex].quote}</p>
            <p id="author">~ {this.state.quotes[this.state.randomIndex].author}</p>
            <div className="container">
              
                <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote"><i className="fa fa-twitter-square"></i></a>              
              <button id="new-quote" onClick={this.randomQuotesGenerator.bind(this)}>New Quote</button>
            </div>
          </div>
        </div>
      );
    }

}
export default App;
