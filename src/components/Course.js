import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from "reactstrap";
import axios from "axios";
import base_url from "../API/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{
    const deleteCourse =(id)=>{
        axios.delete(`${base_url}/course/${id}`).then(
            (response)=>{
                toast.success("course is deleted")
                update(id);
            },
            (error)=>{
                toast.error("not delted something went wrong")
            }
        )
    };
   

    return (
        <Card className="my-2">
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.tittle}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button onClick={()=>{
                        deleteCourse(course.id);
                    }} color="danger ml-3">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;