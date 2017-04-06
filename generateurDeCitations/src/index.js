import React from 'react';
import ReactDom from 'react-dom';
import quotes from './quotes.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {

    state = {};

    componentWillMount() {
        this.quoteGenerator();
    }

    quoteGenerator = event => {
        const quotesArray = Object.keys(quotes)
        const randomNumber = Math.floor(Math.random() * quotesArray.length);
        const randomQuote = quotesArray[randomNumber];
        if (this.state.quote === quotes[randomQuote].quote) {
            this.quoteGenerator();
            return;
        }
        this.setState(quotes[randomQuote]);
    }; 

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-offset-2 col-xs-12 col-sm-8">
                        <div className="quote-card">
                            <img className="actor-avatar" src={"./" + this.state.actor + ".jpg"} alt={this.state.actor} />
                            <blockquote className="quote blockquote">{'"' + this.state.quote + '"'}</blockquote>
                         </div>
                    </div>
                </div>   
                <button className="btn btn-primary btn-lg" onClick={e => this.quoteGenerator(e)}>Click here for a new fact!</button>
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);