import { BrowserRouter as Router, Route ,Routes } from "react-router-dom"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
// import Navbar from "./Components/Navbar"
// import Card from "./Components/Card"
// import Slidebar from "./Components/Slidebar"
import BookingForm from "./Components/BookingForm"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/BookingForm" element={<BookingForm/>}/>
          {/* <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Card" element={<Card/>}/>
          <Route path="/Slidebar" element={<Slidebar/>}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
