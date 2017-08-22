import React from 'react';




export class Header extends React.Component {
    render(){

        const headerStyle = {
            fontStyle: 'bold',
            marginTop: 200,
            display: 'flex',
            fontSize: '2.5em',
            marginLeft: 100,
            width: '10em'
            
        }

        return(
            <div>
                <h1 style={headerStyle}> Find cheaper storage for your mattress </h1>
            </div>
        )
    }
}