import React, { useEffect } from 'react'
import { CardText,Card, CardBody } from 'reactstrap'

function DetailComponent(props) {
    
    return (
        <div>
            <Card>
                <CardBody>
                    <h3>
                {props.location.indi.name}
                </h3>
                <br/>
                <h4>Reference URL (click next): <a href={props.location.indi.url} target=" "> {props.location.indi.adinfo} </a></h4>

                </CardBody>

                <CardText>

                <table className="table table-hover">
                
                
               
                    <tbody>
                    <tr>
                    
                             {props.location.indi.questioni &&
                    props.location.indi.questioni.map((q) => 
                    
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
                    {props.location.indi.questione &&
                    props.location.indi.questione.map((q) => 
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
                    
                
                </table>
                  
                </CardText>
            </Card>
        </div>
    )
}

export default DetailComponent
