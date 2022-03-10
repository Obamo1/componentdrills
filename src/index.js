//basic starting code 
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Accordion from './state-drills/Accordion'
import HelloWorld from './state-drills/HelloWorld'
import TheDate from './state-drills/TheDate'

ReactDOM.render(
  
    <TheDate/>
    ,
  document.getElementById('root')
)


// <Accordion sections={[{title:'title1', content:'content1'}, {title:'title2', content:'content2'}]}/>
// <HelloWorld/>