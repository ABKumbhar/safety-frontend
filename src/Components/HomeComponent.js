import React,{useState,useEffect} from 'react'
import {Input,Form,Button} from 'reactstrap'
import CardComponent from './CardComponent'
import axios from 'axios'
function HomeComponent() {
    const [query,setQuery]=useState("helo")
    const [item,setItem] = useState([])
    const [queryi,setQueryi]=useState("")
    useEffect(() => {
        axios
        .get(`https://abkumbhar.pythonanywhere.com/list?search=${query}`)
        .then((res)=> 
           {console.log(res)
        setItem(res.data)}
            
        )
        .catch((error)=>
        {console.log(error.message)
        
        }
        )

     ;
      }, [query]);
 

    return (
        <div>
        <Form >
        <Input type="search" placeholder="search here ..." name="search" onChange={e => setQueryi(e.target.value)}/>
        <Button onClick={e => setQuery(queryi)}>Submit</Button>
        
        </Form>
       <div>
           {item.length ? item.map(i =>
           <li key={i.id}><CardComponent ind={i}/></li>
           ) : (<div style={{textAlign:"center"}}>Search box is empty or result not found</div>)}
       </div>
        </div>
    )
}

export default HomeComponent
