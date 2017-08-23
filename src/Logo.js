import React from 'react';


export class Logo extends React.Component {

    render(){
        const logoStyle = {
            color: 'red',
            fontStyle: '700',
            fontSize: '2em',
            marginTop: 25

        };

        return(
            <div className="container">
                <nav className="navbar">
                    <a className="navbar-brand" href="#" style={logoStyle}>sparespace</a>
                </nav>
            </div>
        )
    }

}