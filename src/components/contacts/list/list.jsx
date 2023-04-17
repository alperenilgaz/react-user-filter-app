import {useState} from 'react'


function List({contacts}) {
  const [filterText,setFilterText] = useState("")
  const filtered = contacts.filter((item)=>{
  return Object.keys(item).some((key)=>(
    item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
  ))
  })
  return (
    <div>
      <input placeholder='Search' onChange={(e)=>{setFilterText(e.target.value)}}  value={filterText}/>
      <ul className='list'>
        
          {filtered.map((contacts,i)=>(
            <li key={i}>
              <span>{contacts.fullname}</span> <span>{contacts.phone_number}</span>
              </li>
          ))}
      
      </ul>
    </div>
  )
}

export default List