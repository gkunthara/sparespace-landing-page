import React from 'react';


export class Logo extends React.Component {

    render(){
        const logoStyle = {
            color: 'red',
            display: 'flex',
            fontStyle: 'bold',
            fontSize: '2em',
            marginLeft: 100

        };

        return(
            <div>
                <h1 style={logoStyle}>sparespace</h1>
            </div>
        )
    }

}