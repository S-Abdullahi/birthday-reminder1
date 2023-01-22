import React from "react";

export default function Main() {
  return (
    <div className="card">
      <h2 className="card-count"> 5 birthday today</h2>
      <div className="card-item">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pic" className="card-image"/>
        <div className="card-detail">
          <span card-name>Salawu Abdullahi</span>
          <span className="card-year">26 years</span>
        </div>
      </div>
      <button>Clear all</button>
    </div>
  );
}
