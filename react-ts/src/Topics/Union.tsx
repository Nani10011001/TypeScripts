import { useState } from "react"
type User = {
    name:string;
    age:number;
}
const Union = () => {
    const [user,setUser]=useState<User | null>(null)
    // this uinon thing | allow us it may this or this for api data fetching initialize it will be the null then data will come after words
  return (
    <div>
      
    </div>
  )
}

export default Union
