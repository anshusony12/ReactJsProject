
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {button, Button, Container,Row,Col} from "reactstrap";
import {ToastContainer,toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Options';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const msg=()=>{
    toast.success("wow done !",{
      position:"top-center"
    });
  };
  return (
    
    <div>
        <ToastContainer/>
        <Router>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/> 
            </Col>
            <Col md={8}>
                <Route path="/home" component={Home}/>
                <Route path="/add-course" component={AddCourse}/>
                <Route path="/view-course" component={AllCourses}/>
            </Col>
          </Row>
        </Container>
        </Router>
    </div>  
  );
}

export default App;
