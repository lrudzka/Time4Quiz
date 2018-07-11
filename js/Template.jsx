import React from 'react';
import {Route, Link} from 'react-router-dom';
import Footer from './Footer.jsx';

class Template extends React.Component {

    render(){
        return(
            <div>
                <section id="header">
                    <h2>Countries Quiz</h2>
                    <ul>
                        <li><Link to="/">Play</Link></li>
                        <li><Link to="/rules">Rules</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                    </ul>
                </section>
                {this.props.children}
                <Footer/>
            </div>


        )
    }
}

module.exports = Template;