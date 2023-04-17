import {useState,useEffect} from 'react'
import Form from './form/form'
import List from './list/list'
import './index.css'

function Contacts() {
  const [contacts,setContacts]=useState([
    {
      fullname:'alperen',
      phone_number:3454353
    },
    {
      fullname:'sonay',
      phone_number:34834733
    },
    
    {
      fullname:'seko',
      phone_number:357566874733
    },

  ])
  useEffect(()=>{
  console.log(contacts);    
  },[contacts])
  return (
    <div id='container'>

    <List contacts={contacts}/>
    <Form addcontacts={setContacts} contacts={contacts}/>
 
    </div>

  )
}

export default Contacts