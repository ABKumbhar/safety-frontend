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
          <Link to ={{pathname:'/detail',indi : props.ind }}>

            <Row>
            <Col xl="4" lg="6">
            </Col>
            <Col xl="4" lg="6">

            <Card className="mb-5">
            <CardBody>
              <CardTitle className="card-title font-weight-bold font-size-lg">{props.ind.name}</CardTitle>
              <CardText>
                {props.ind.adinfo}
                <br/>
    {props.ind.url ? <a href={props.ind.url} target=" "> {props.ind.adinfo} reference URL </a> : <div></div>}
              </CardText>
              </CardBody>
              <Button onClick= {handleClick}>
                { isOpen ?
                (<div>Read Below</div>):(<div>More ...</div>)}
              </Button>

              
              
              <table className="table table-hover">
                
                
            {
              isOpen ? (
                <tbody>
                <tr>
                
                         {props.ind.questioni &&
                props.ind.questioni.map((q) => 
                
                <div>
                <li key={q.id}>
                <td>
                <b>Question {q.number} : {q.question}</b>
                <br/>
                Ans : {q.answer}
                <br/>
                Further info / Ref : {q.urlref}
                </td>
                </li>
                </div>
                )} 
                {props.ind.questione &&
                props.ind.questione.map((q) => 
                <div>
                  <li key={q.id}>
                  <tr>
                    <td>
                <b>Question {q.number} : {q.question}</b>
                <br/>
                Ans : {q.answer}
                <br/>
                Further info / Ref : {q.urlref}
                </td>
                </tr>
                </li>
                </div>
                )}
                </tr>
                </tbody>
                ) : (<tbody><tr></tr></tbody> )
                
            } 
            
            </table>
              
               <br/>
              

              
              
              
            </Card >
            </Col>
            <Col xl="4" lg="6">
            </Col>
            </Row>
           </Link>
        </div>
    )
}

export default CardComponent
