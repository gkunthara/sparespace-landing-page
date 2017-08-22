import React from 'react';




export class Devices extends React.Component {
    render() {

        const deviceStyle = {
            position: 'relative',
            left: '200',
            bottom: '250',
            width: '55%',
            height: '55%'
        };


        return (
            <div>
                <img style={deviceStyle} alt="devices" src='https://i.imgur.com/vqYFCfC.png'/>
            </div>
        )
    }
}
