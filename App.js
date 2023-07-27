import "./styles.css";
import {useState} from 'react'
const countries=[
  {
    name:'India', value:'IN',cities:['Delhi','Mumbai']
  },
  {
    name:'Pak', value:'PK',cities:['Lahore','Karachi']
  },
  {
    name:'Bangladesh', value:'BG',cities:['Dahaka','Chittagong']
  }
]

export default function App() {
  const [countryName, setCountryName]=useState("")
  const handleChange=(e)=>{
    console.log(e.target.value);
    setCountryName(e.target.value)
    console.log("city",countries[e.target.value]);
    
    
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select value={countryName} onChange={(e)=>handleChange(e)}>
      {countries.map((country,index)=>(
        <option value={index}>{country.name}</option>
      ))
      }</select>
      {(countryName!=="")?
      <select  >
      {
        countries[countryName].cities?.map((city,ind)=>(
        <option value={city}>{city}</option>
      ))}
      </select>:<></>}

    </div>
  );
}
