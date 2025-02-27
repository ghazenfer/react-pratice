import React from 'react'
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'

const App = () => {
  return (
 <>
<Navbar/>
<div className="container">
<TextForm heading= " Enter your text"/>
</div>
 </>
  )
}

export default App
