import React from 'react';
import {Devices} from "./Devices";
import {Logo} from "./Logo";



export class Header extends React.Component {
    render(){

        const headerStyle = {
            fontStyle: 'bold',
            fontSize: '2.5em',
            paddingTop: 100

        }
        const buttonStyle = {
            color: 'red',
            backgroundColor: 'white',
            //border: 'solid',
            borderRadius: '5px',
            borderColor: 'red',
            marginTop: 25
        }

        const divStyle = {
            //border: 'solid',
            marginTop: 100
        }

        return(
            <div>
                <Logo/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center" style={divStyle}>
                        <h1 style={headerStyle}> Find cheaper storage for your mattress </h1>
                        <button style={buttonStyle} type="button" className="btn btn-outline">Learn More</button>
                    </div>
                    <div className="col-sm-8" style={divStyle}>
                        <Devices/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}