import React, {useEffect} from "react"
import { Link } from "gatsby"
import Counter from "./counter"

export default function Home() {  

  useEffect(()=>{
    document.body.classList.add('asdf')
    return () => {
      document.body.classList.remove('asdf')
    }
  },[])
  return <div style={{ color: 'tomato' }}>
    <h1>Hello world!</h1>
    <p>Welcome to my first Gatsby site</p>
    <br></br>
    <br></br>
    <Counter></Counter>
    <br></br>
    <br></br>
    <Link to="/page-2/">Page 2</Link>
    <br></br>
    <Link to="/counter/">Counter</Link>
  </div>
}
