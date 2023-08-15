import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardDetails from './components/CardDetails'

function App() {
  const [data, setData] = useState([])
  const Details = (name,number,month,year,cvc)=>{
    const datas=[  
    name,
    number,
    month,
    year,
    cvc
]
setData(datas) 
}


  return (
    <div className='container'>
      <Card fetchDetails={data}/>
      <CardDetails sendDetails={Details}/>
    </div>
  )
}

export default App
