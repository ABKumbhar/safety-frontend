import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

import { Jumbotron } from 'reactstrap'

function HeaderComponent() {
    return (
    <div className="Header">
              

        <Jumbotron>
            <h1> Process safety App </h1>
                <br />
            <span className="fa fa-home fa-lg">  Information about startup, shutdowm and maintenance availaible at the touch of your screen for free!</span>

        </Jumbotron>

    </div>);
}

export default HeaderComponent