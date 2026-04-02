 import Props from "./Topics/Props.tsx"
 import State from "./Topics/State.tsx"
 import { ObjectState } from "./Topics/State.tsx"
 import TypeSafeEvent from "./Topics/TypeSafeEvent.tsx"
const App = () => {


  return (
    <div className="bg-black min-h-screen  flex flex-col gap-4 items-center text-white">
{/*   props */}
    <div> 
       <Props name="Nani" age={22}/>
       </div>
{/* state */}
      <div><State/></div>
{/* 
      objectState */}
      <div>
        <ObjectState/>
      </div>
      {/*TypeSafeEvent */}
      <div>
<TypeSafeEvent/>
      </div>
    </div>
  )
}

export default App
