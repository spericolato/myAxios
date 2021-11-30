import React,{useState,useEffect} from "react";
import axios from "axios"

const App = ()=>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(data => setUsers([...users,...data.data]))
             .catch(err => console.log(err))
    },[])
    return(
        <div className="users" style={styles.users}>
            {users.map(x=>(
                <div className="user" style={styles.user}>
                    <h1 style={styles.text}>{x.name}</h1>
                    <h2 style={styles.text}>{x.username}</h2>
                    <h2 style={styles.text}>{x.email}</h2>
                    <address style={styles.text}>{x.address.city}</address>
                </div>
            ))}
        </div>
    )
}

const styles = {
    users : {
        backgroundColor: 'rgb(116, 116, 116)',
        textAlign:'center',
        padding: '20px'
    },
    user: {
        backgroundColor: 'snow',
        margin: 30,
        padding: 50,
    },

    text: {
        margin: 10
    }
}

export default App;