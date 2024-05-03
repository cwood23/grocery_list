import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import ItemAdd from "./Components/ItemAdd/ItemAdd";
import RecipeAdd from "./Components/RecipeAdd/RecipeAdd";

function App() {
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
