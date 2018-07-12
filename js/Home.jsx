import React from 'react';
import Template from './Template.jsx';
import MixName from './Services/MixName';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countriesData: [],
            level: -1,
            selectedCountryData: {},
            answer: "",
            points: 0,
            mistakePoints: 5,
            mixedName: []
        }
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Network error")
                }
            }).then(data => {
            this.setState({
                countriesData: data,
                level: 0
            })
        }).catch(err => console.log(err));
    }

    handleStart = (e) => {
        e.preventDefault();

        let max = this.state.countriesData.length-1;
        let countryNumber1 = ( Math.random() * (max) ).toFixed(0) ;

        console.log(this.state.countriesData[countryNumber1]);
        let selectedCountry = this.state.countriesData[countryNumber1];
        let mixedName = MixName.MixSearchedCountryName(selectedCountry.name);
        this.setState({
            level: 1,
            selectedCountryData: selectedCountry,
            mixedName: mixedName
        })

    }

    handleAnswer = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    handleCheckAnswer = (e) => {
        e.preventDefault();

        if (this.state.answer.length==0) {
            alert("you haven't typed any country name yet");
        } else {


            if (this.state.answer == this.state.selectedCountryData.name) {
                let currentPoints = this.state.points;
                let currentLevel = this.state.level;

                this.setState({
                    points: currentPoints + 11 - currentLevel
                })

                alert("The answer is correct! You got new country to guess");
                let max = this.state.countriesData.length - 1;
                let countryNumber1 = (Math.random() * (max)).toFixed(0);

                console.log(this.state.countriesData[countryNumber1]);
                let selectedCountry = this.state.countriesData[countryNumber1];
                let mixedName = MixName.MixSearchedCountryName(selectedCountry.name);
                this.setState({
                    level: 1,
                    selectedCountryData: selectedCountry,
                    mixedName: mixedName,
                    answer: ""
                })
            } else {
                let currentMistakePoints = this.state.mistakePoints;

                if (currentMistakePoints == 1) {
                    alert("Game is over, your score is " + this.state.points + " points");
                    window.location.reload();
                } else {

                    this.setState({
                        mistakePoints: currentMistakePoints - 1
                    })
                }
            }
        }
    }

    handleNextHint = (e) => {
        e.preventDefault();
        let currentLevel = this.state.level;
        this.setState({
            level: currentLevel+1
        })
    }



    render() {

        return (
            <Template>
                <section className="body">
                    <section className="box mainWidth">
                        <section id='lifes'>
                            <div className={this.state.mistakePoints>0? 'heart' : 'noHeart'}></div>
                            <div className={this.state.mistakePoints>1? 'heart' : 'noHeart'}></div>
                            <div className={this.state.mistakePoints>2? 'heart' : 'noHeart'}></div>
                            <div className={this.state.mistakePoints>3? 'heart' : 'noHeart'}></div>
                            <div className={this.state.mistakePoints>4? 'heart' : 'noHeart'}></div>
                        </section>
                        <h2> Your score: {this.state.points} points </h2>
                        {this.state.level === 0 && <button onClick={this.handleStart} id='start'>Click to start</button>}
                        {this.state.level > 0 &&
                        <section >
                            <form onSubmit={this.handleCheckAnswer}>
                                <label id='answer'> The searched country is...
                                    <input onChange={this.handleAnswer} type='text' value={this.state.answer}></input>
                                </label>
                                <button id='check'> Check </button>
                            </form>
                            <h3>HINTS</h3>
                            <div className='hint'> 1. The flag: </div>
                            <div id='flag' style={{backgroundImage: 'url('+this.state.selectedCountryData.flag+')'}}></div>
                            {this.state.level > 1 && <div className='hint'> 2. Region: {this.state.selectedCountryData.region}</div>}
                            {this.state.level > 2 && <div className='hint'> 3. Subregion: {this.state.selectedCountryData.subregion}</div>}
                            {this.state.level > 3 && <div className='hint'> 4. Capital: {this.state.selectedCountryData.capital}</div>}
                            {this.state.level > 4 && <div className='hint'> 5. Borders: {this.state.selectedCountryData.borders.map( el => <span>{el}; </span>)}</div>}
                            {this.state.level > 5 && <div className='hint'> 6. Mixed name: <section>{this.state.mixedName.map( el => <div className="mixed">{el}</div> )}</section></div>}
                            <button onClick = {this.handleNextHint} id='nextHint'>Next hint</button>
                        </section>}
                    </section>
                </section>
            </Template>
        )
    }

}

module.exports = Home;