import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return <div>custome app</div>
}
const anotherElement =( 
   <a href="https://google.com" target='_blank'>VisitGoogle</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <anotherElement />
    
)
