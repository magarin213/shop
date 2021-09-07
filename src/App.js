import './App.css';
import { Button, Navbar, Nav, NavDropdown, Container, Jumbotron } from 'react-bootstrap';
import React, { useState } from 'react';
import data from "./data";
import Detail from './component/view/Detail/Detail';
import ProductList from "./component/view/ProductList/ProductList"
import {Link, Route, Switch} from "react-router-dom";
import axios from 'axios';

export let Amountcontext = React.createContext();


function App() {



  const [shoes, setShoes] = useState(data);
  const [productamount, setProductamount] = useState([1,2,3,4,5])

  const buttonMore = ()=> {
    
    //로딩 ui 출력
    //axios.post("서버URL", { id : "codingapple", pw : 1234})

    axios.get("https://codingapple1.github.io/shop/data2.json")
    .then((res)=>{
      //로딩중ui 제거
      setShoes([...shoes, ...res.data])
    })
    .catch(()=>{
      console.log("실패했어요")
    })
  }


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


<Switch>
      <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">

            <Amountcontext.Provider value={productamount}>
            <div className="row">
              {
                shoes.map((e, i)=>{
                  return   <ProductList key={i} i={i} shoes={shoes[i]}></ProductList>
                })
              }
            </div>
            </Amountcontext.Provider>


            <button className="btn btn-primary" onClick={buttonMore}>더보기</button>
          </div>
        </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes} productamount={productamount} setProductamount={setProductamount}/>
      </Route>
</Switch>





    </div>
  );
}

export default App;
