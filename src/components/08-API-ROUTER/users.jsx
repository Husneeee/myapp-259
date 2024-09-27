import React from 'react'
import { User } from './user'


export const Users = () => {
  return (
    let  [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => setUsers(data))
.catch(error => console.log("Hata Alındı:"+error));
   
   <div className='d-flex flex-wrap justify-content-center'>
      {users.map((obj) => 
          <span key={obj.id}>
            <User {...obj} />
          </span>   
      )}
     
      </div>
  )
}


