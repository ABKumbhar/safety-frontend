import React from 'react'
import {useState} from 'react'
import { Row, Col, Button, Card, CardBody, CardText, CardTitle, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function CardComponent(props) {
    const [isOpen, setisOpen] = useState(false) 
    const handleClick = () => {
        setisOpen(!isOpen)

        }
      
    return (
        <div>

            <Row>
            <Col xl="4" lg="6">
            </Col>
            <Col xl="4" lg="6">

            <Card className="mb-5" outline color="info">
            <CardBody>
              <CardTitle className="card-title font-weight-bold font-size-lg">{props.ind.name}</CardTitle>
              <CardText>
                <br/>
    Data taken from (i.e. reference) :  {props.ind.url ? <a href={props.ind.url} target=" ">  <b> {props.ind.adinfo} </b> </a> : <div></div>}
              </CardText>
              </CardBody>

              <Button color="success" onClick= {handleClick}>
                
              <Link to ={{pathname:'/detail',indi : props.ind }}>
               <div style={{color:"white"}}>More ...</div></Link>
              </Button>
              

              
              
              
              

              
              
              
            </Card >
            </Col>
            <Col xl="4" lg="6">
            </Col>
            </Row>
        </div>
    )
}

export default CardComponent
