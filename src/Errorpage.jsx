import React,{useEffect} from 'react'
import Nav from './Nav.jsx'

const Errorpage = () => {
  useEffect(() => {
    document.title="Error Page"
  }, []);
  return (
    <>
    <Nav/>
    <h1>404 Error</h1>
    <p>page not found</p>
    </>
  )
}

export default Errorpage