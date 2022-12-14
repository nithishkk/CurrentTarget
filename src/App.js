import React,{usestate} from 'react'


const App=()=>{
  const nithish=(e)=>{
    console.log("currenttarget",e.currentTarget)
  }
  const nithi=()=>{
    console.log("Normal button")
  }
  return (
    <div>
    <p>

      <button onClick={nithi}> Normal Buttton</button>
      </p>
  
      <p>
        Currenttarget: &nbsp;
      <button onClick={nithish} >currentTarget </button>
      <button onClick={nithish} >currentTarget </button>

      </p>
    </div>
  )
}
export default App; 