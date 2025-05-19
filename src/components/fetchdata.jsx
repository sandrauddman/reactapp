import axios from "axios";
import { useEffect, useState } from "react";

function FetchData(){
 //const [data, setData]=useState(null);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/')
    //         .then(response => response.json())
    //         .then(data => setData(data));

    // })
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => {setUsers(response.data)})
        .catch(error=>{
            console.log('Error while trying to load data', error);
        }
        )
    })

 return(
    <>
    
    <div>
        {users.length > 0 ? (
        <table class="table">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th><th>User Name</th><th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>(
            <tr key={user.id}>
                <td>{user.name}</td><td>{user.username}</td><td>{user.email}</td>
            </tr>
        ))}
            </tbody>
        </table>
        ):(
            <p>loading...</p>
        )}
    </div>
    </>
 )

}
export default FetchData;