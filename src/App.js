import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import ItemAdd from "./Components/ItemAdd/ItemAdd";
import RecipeAdd from "./Components/RecipeAdd/RecipeAdd";
import axios from "axios";

function App() {
  axios.defaults.baseURL = 'http://localhost:3001'
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/itemadd' element={<ItemAdd />}/>
          <Route path='/recipeadd' element={<RecipeAdd />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
