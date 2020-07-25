import React from 'react';
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action " tag="a" to="/home" action>
                Home
            </Link>
            <Link  className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>
                View Courses
            </Link>
            <Link  className="list-group-item list-group-item-action"tag="a" to="/about" action>
                About Us
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>
                Contact Us
            </Link>
        </ListGroup>
    );
};

export default Menus;