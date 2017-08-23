import React from 'react';



export class WhatIsSS extends React.Component {
    render(){

        const subText = {
            textAlign: 'center',
            fontStyle: 600,
            fontSize: '1.5em',
        }

        const subText2 = {
            fontSize: '1.5em',
            textAlign: 'center',
            marginTop: 30
        }

        const divStyle = {
            marginTop: 200,
            //backgroundImage: 'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)'
            borderTop: '1px solid #EBECED',
            backgroundColor: '#FCFBFC'

        }

        const subHeader = {
            marginTop: 50,
        }


        return(

            <div className="container-fluid" style={divStyle}>
                <h1 className="text-center"> What is sparespace?</h1>
                <div className="container" style={subHeader}>
                    <p style={subText}> Sparespace is an upcoming web and mobile application which will connect users who are in need of storage space with users who have storage space to offer.
                        Currently being developed by Gonzaga students, sparespace will act as a service to
                        provide a cheaper and easier alternative storage solution. Our goal is to have current Gonzaga Juniors and Seniors list space in their off campus house.
                        Through sparespace, Freshmen and Sophomores can get connected with older students and store their belongings for a fraction of the cost of a normal storage unit.
                        We then hope to expand this service to the greater Spokane community.</p>
                    <p style={subText2}> If you have any questions, would like to contribute, or any other inquiries, please feel free to email us at: <a href={'mailto:gkunthara1@gmail.com'}>hello@usesparespace.com</a></p>
                </div>
            </div>


        )
    }
}