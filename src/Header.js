import React from 'react';
import {Devices} from "./Devices";
import {Logo} from "./Logo";
import './media.css';
import Scroll from 'react-scroll';


var scroll = Scroll.animateScroll;

export class Header extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.handleHover = this.handleHover.bind(this)
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }



    handleHover() {

        this.setState({
            hover: !this.state.hover
        })
    }


    render(){

        const headerStyle = {
            fontSize: '2.5em',
            paddingTop: 100

        }
        var buttonStyle = {

            borderRadius: '5px',

        }

        const divStyle = {

            marginTop: 100
        }

        if(this.state.hover){
            buttonStyle = {
                marginTop: 25,
                backgroundColor: 'red',
                color: 'white'
            }
        }
        else{

            buttonStyle = {
                marginTop: 25,
                backgroundColor: 'white',
                borderColor: 'red',
                color: 'red'
            }
        }

        return(
            <div>
                <Logo/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center header" style={divStyle}>
                        <h1 style={headerStyle}> <b> Find cheaper storage for your belongings </b> </h1>
                        <button onClick={this.scrollToBottom} style={buttonStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} type="button" className="btn btn-outline">Learn More</button>
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