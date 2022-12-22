import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import {  BrowserRouter as Router,  Routes,  Route, Navigate} from "react-router-dom";
import {useContext} from "react";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import ListList from "./pages/listList/ListList";
import NewList from "./pages/newList/NewList";


import { AuthContext } from "./context/authContext/AuthContext";


import "./app.css"
import List from "./pages/list/List";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
      {user && 
      <Route
        path="*"
        element={(
          <>
          <Topbar/> 
            <div className="container">
             <Sidebar />
             <Routes>
                <Route exact path='/' element={<Home/>}/>
    
                <Route  path="/users" element={<UserList/>}/>
    
                <Route  path="/user/:userId" element={<User/>}/>
               
                <Route  path="/newUser" element={<NewUser/>}/>
    
                <Route  path="/movies" element={<ProductList/>}/>
    
                <Route  path="/product/:productsId" element={<Product/>}/>
               
                <Route  path="/newProduct" element={<NewProduct/>}/>

                <Route  path="/lists" element={<ListList/>}/>
    
                <Route  path="/lists/:listId" element={<List/>}/>
               
                <Route  path="/newList" element={<NewList/>}/>
              </Routes>

            </div>
          </>
        )} 
      />
    }
      <Route  path='/login' element={user? <Navigate to="/"/> : <Login/>}/>
      </Routes>


    </Router>
  );
}

export default App;
