import './App.css';
import { Button, Navbar, Nav, NavDropdown, Container, Jumbotron } from 'react-bootstrap';
import { useState } from 'react';
import data from "./data";
import Detail from './component/view/Detail/Detail';
import ProductList from "./component/view/ProductList/ProductList"
import {Link, Route, Switch} from "react-router-dom";


function App() {

  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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
          <div className="row">
            {
              shoes.map((e, i)=>{
                return   <ProductList key={i} i={i} shoes={shoes[i]}></ProductList>
              })
            }
          </div>
          </div>
        </Route>
      <Route path="/detail">
        <Detail shoes={shoes}/>
      </Route>
</Switch>


    </div>
  );
}

export default App;
