import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import Rules from './Rules.jsx';
import Home from './Home.jsx';
import Ranking from './Ranking.jsx';
import {HashRouter,
    Route,
    Link,
    Switch,
    NavLink  } from 'react-router-dom';


class App extends React.Component{


    render(){

        return(
            <HashRouter>
                <section>
                    <Route exact path ='/' component={Home}  />
                    <Route path="/rules" component={Rules} />
                    <Route path="/ranking" component = {Ranking}/>
                </section>
            </HashRouter>

        )
    }
}

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})