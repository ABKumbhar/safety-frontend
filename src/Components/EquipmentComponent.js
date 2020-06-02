import React, {Fragment, useEffect, useState} from 'react';
import {fetchEquipment} from '../redux'
import {connect} from 'react-redux';
import { Button, Card, CardBody, CardText, CardTitle,Spinner } from 'reactstrap';
import CardComponent from './CardComponent'

function EquipmentComponent({EquipmentData,fetchEquipment}) {
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [search, setSearch] = useState("");

  const [isOpen, setisOpen] = useState(false) 
  useEffect(() => {
    fetchEquipment()
  },[])
 
  useEffect(() => {
    setFilteredEquipments(
      EquipmentData.equipment.filter(ind =>
        ind.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, EquipmentData]);


    return EquipmentData.loading ? (
<Spinner >

</Spinner>
      ) : EquipmentData.error ? (
      <h2>{EquipmentData.error}</h2>
    ) : (
      <div style = {{textAlign:"center"}}>
        <h2 style = {{textAlign:"center"}}>Equipment List</h2>
        <div>
        <input 
        type="text"
        placeholder="Search Equipments"
        onChange={e => setSearch(e.target.value)}/>

          {
            filteredEquipments.map(ind => 
          //  <Row>
          //   <Col xl="4" lg="6">
          //   </Col>
          //   <Col xl="4" lg="6">
          //   <Card className="mb-5" e-card-horizontal	>
          //   <CardBody>
          //     <CardTitle className="card-title font-weight-bold font-size-lg">{ind.name}</CardTitle>
          //     <CardText>
          //       {ind.adinfo}
          //     </CardText>
          //     </CardBody>
          //     <Button onClick= {handleClick}>
          //       More ...
          //     </Button>
              
          //     <CardText>
          //       <div>
          //   {
          //     isOpen ? (
          //       <div>
          //       {
          //       ind.questioni.map((q) => 
          //       <div>
          //       <b>{q.question}</b>
          //       <br/>
          //       {q.answer}
          //       </div>
          //       )} </div>
          //       ) : (<div></div> )
                
          //   }</div>
          //      </CardText>
              
              
              
          //   </Card >
          //   </Col>
          //   <Col xl="4" lg="6">
          //   </Col>
          //   </Row>
          <li key={ind.id}>
          <CardComponent ind = {ind}/>
          </li>
            )}
        </div>
      </div>
    )
        
}

const mapStateToProps = state => {
    return {
      EquipmentData: state.equipments
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchEquipment: () => dispatch(fetchEquipment())
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EquipmentComponent)