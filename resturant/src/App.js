
import "./App.css";
import { Routes ,Route , Link} from 'react-router-dom';
import Home from "./components/Home";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";

function App() {
  return (
    <>
    <h1>Hello</h1>
   
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/detail">Details</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="list" element={<RestaurantList />} />
        <Route path="create" element={<RestaurantCreate />} />
        <Route path="search" element={<RestaurantSearch />} />
        <Route path="detail" element={<RestaurantDetail />} />
        <Route path="update" element={<RestaurantUpdate />} />
      </Routes>

     
    </>
  );
}

export default App;
