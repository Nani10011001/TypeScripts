type userDetails =  {
    name: string;
    age: number
}

const Props = ({name, age}:userDetails) => {
  return (
    <div>
        <p>props usage :</p>
      <p>My name is {name}</p>
      <p>my age is {age}</p>
    </div>
  )
}

export default Props
