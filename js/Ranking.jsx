import React from 'react';
import Template from './Template.jsx';


class Ranking extends React.Component {
    render(){
        return(
            <Template>
                <section className="body">
                    <section className="box mainWidth">
                        <div>Top ten players:</div>
                    </section>
                </section>
            </Template>
        )
    }
}

module.exports = Ranking;

