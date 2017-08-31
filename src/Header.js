import React from 'react';
import {Devices} from "./Devices";
import {Logo} from "./Logo";
import './media.css';
import Scroll from 'react-scroll';
import Typing from 'react-typing-animation'

// for scrolling
var scroll = Scroll.animateScroll;
//list of item to show on homepage
const items = ['mattress','loft kit', 'skis', 'boxes', 'clothes', 'furniture'];
export class Header extends React.Component {

    // componentWillMount() {
    //     this.setState({
    //         currentItem: items[0],
    //         count: 0,
    //     })
    // }


    componentDidMount() {

        //update item every 3 seconds

        setInterval(() => {

            this.setState({
                count: this.state.count + 1
            })
            if(this.state.count < items.length) {
                this.setState({

                    currentItem: items[this.state.count]
                })
            }
        }, 3000);

    }

    // componentWillUnmount() {
    //     clearInterval(this.state.intervalId);
    // }


    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            currentItem: items[0],
            count: 0
        }
        this.handleHover = this.handleHover.bind(this)
        //this.timer = this.timer.bind(this)
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }




    handleHover() {

        this.setState({
            hover: !this.state.hover
        })
    }

    //after 3 seconds, change item to showcase, then stop after
    //all items are done showing
    // timer(){
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     if(this.state.count < items.length) {
    //         this.setState({
    //             currentItem: items[this.state.count]
    //         })
    //     }
    // }


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
                        <h1 style={headerStyle}> <b> Find cheaper storage for your <Typing> <Typing.Delay ms={1000}/> {this.state.currentItem} <Typing.Backspace count = {20} delay={2000}/> </Typing>  </b> </h1>
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