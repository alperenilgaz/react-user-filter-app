import {useState} from 'react'
const initalFormValues={fullname:"",phone_number:""}
function Form({addcontacts,contacts}) {

    const [form,setForm] = useState(initalFormValues)
    const onChangeForm=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const submitButton=(event)=>{
        event.preventDefault()
        if(form.fullname==="" || form.phone_number==="" )
        {
            return false
        }
        
        addcontacts([...contacts,form])

        setForm(initalFormValues)

       
    }
  return (
    <form>
    <div>
        <input placeholder='fullname' onChange={onChangeForm} name='fullname' value={form.fullname}/>
    </div>
    
    <div>
        <input placeholder='phone_number' onChange={onChangeForm} name='phone_number' value={form.phone_number}/>
    </div>
    
    <button onClick={submitButton}>Add</button>

    </form>
  )
}

export default Form