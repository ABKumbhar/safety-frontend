import React,{useState,useEffect} from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Form, Input, Button } from 'reactstrap'
import NavbarComponent from './NavbarComponent'
import axios from 'axios'
import { Jumbotron } from 'reactstrap'

function HeaderComponent() {
    return (
    <div className="Header">
              

        <Jumbotron>
            <h1> Process safety App </h1>
                <br />
                <div className="form">
                </div>
            <br />
            <span className="fa fa-home fa-lg">  Information about startup, shutdown and maintenance availaible at the touch of your screen for free!</span>
        <NavbarComponent/>

        </Jumbotron>
        


    </div>);
}

export default HeaderComponent