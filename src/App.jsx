import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from "./Home"
import ViewAll from './ViewAll'
import Errorpage from './Errorpage'
import SingleStudent from './SingleStudent'
import Update from './Update'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <>
    <div>
    <Toaster
      position="top-right"
      reverseOrder={true}
    />
    </div>

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
             <Route path="/" element={<Home/>}/>
             <Route path="/ViewAll" element={<ViewAll/>}/>
             <Route path='/singlestu/:id' element={<SingleStudent/>}/>
             <Route path="/update/:id" element={<Update/>}/>
             <Route path="*" element={<Errorpage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App