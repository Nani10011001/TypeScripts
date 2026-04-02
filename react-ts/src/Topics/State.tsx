import {  useState } from "react"

// production level pattern things
/* const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
 */
const State = () => {
    const [count,setCount]=useState<number>(0)
  return (
    <div>
      <p className="text-center my-2 text-2xl">{count}</p>
      <button className="bg-blue-400 p-1 rounded-sm " onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default State
// type define for the object things
type User = {
    name:string;
    age: number
}
export function ObjectState(){
    const [user,setUser]=useState<User>({
        name:"Nani",
        age:22
    })
    //const [users, setUsers] = useState<User[]>([]);
    const [userData,setUserData]=useState<User | null>(null)
    //initially no data when the api call it fill it 
return (
    <div>
        <p>Object type defining in useState:</p>
        <p>My name is {user.name}</p>
        <p>My age is {user.age}</p>
    </div>
)

}