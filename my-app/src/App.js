
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import { useEffect } from "react";

import Weather from './components/Weather'
import Test from './components/Test'




// const App = () => {
//   useEffect(() => {
//     fetch("https://service-12345.onrender.com")
//       .then((res) => res.json())
//   },[]);
//   return (
//         <div className="App">
// TEST
//     </div>

//   );
// };

// export default App;

import './App.css';

function App() {
    useEffect(() => {
    fetch("https://service-12345.onrender.com")
      .then((res) => res.json())
  },[]);
  return (
        <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Weather />} />
        </Routes>
      </div>
     </Router>
//     <div className="App">
// TEST2
//     </div>
  );
}

export default App;
