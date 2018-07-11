import React from 'react';
import Template from './Template.jsx';

class Home extends React.Component {

    render() {

        return (
            <Template>
                <section className="body">
                    <section className="box mainWidth">
                        <p>Lets' play</p>
                    </section>
                </section>
            </Template>
        )
    }

}

module.exports = Home;