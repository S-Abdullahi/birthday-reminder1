import React, {useState} from "react";
import Data from '../data'



export default function Main() {

  const [data, setData]  = useState(Data)

  const birthday = data.map((d)=>{
    return (
    <div className="card-item" key={d.id}>
    <img src={d.image} alt="pic" className="card-image"/>
    <div className="card-detail">
      <span className="card-name">{d.name}</span>
      <span className="card-year">{d.age}</span>
    </div>
  </div>)
  })

  function clearData(){
    setData([])
  }

  return (
    <div className="card">
      <h2 className="card-count"> {data.length} birthday today</h2>
      {birthday}
      <button onClick={clearData}>Clear all</button>
    </div>
  );
}
