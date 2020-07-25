import React, { Fragment, useEffect, useState } from 'react';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap';
import base_url from '../API/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCourse = ()=> {
    useEffect(()=>{
        document.title = "Add Course"
    },[]);

    const [course,setCourse]=useState({});
    // form handller
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };
    //creating function to post data on server
    const postDataToServer=(data)=>{
    axios.post(`${base_url}/course`,data).then(
        (response)=>{
            console.log("success");
            console.log(response);
            toast.success("added successfully")
            
        },
        (error)=>{
            console.log(error)
            console.log("error");
            toast.error("something wrong")
        }
    )
    };
    const updatingCourse=(course)=>{
        axios.put(`${base_url}/course`,course).then(
            (response)=>{
                console.log(course);
                toast.success("course is updated successfully..");
            },
            (error)=>{
                console.log(course)
                toast.error("something went wrong");
            }
        )
    };
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="courseId">Course ID:</label>
                    <Input type="text" name="courseId" placeholder="Enter herer" id="courseId"
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="titel">Course Title:</label>
                    <Input type="text" placeholder="enter title" name="courseTitle" id="courseTitle"
                    onChange={(e)=>{
                        setCourse({...course,tittle:e.target.value})
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="CourseDescription">Course Descripiton</label>
                    <Input type="textarea" placeholder="Enter description" id="courseDescription" style={{height: 150}}
                        onChange={(e)=>{
                            setCourse({...course, description:e.target.value})
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add</Button>
                    <Button type="reset" color="warning ml-3">Clear</Button>
                    <Button color="warning ml-3"
                    onClick={()=>{
                        updatingCourse(course);
                    }}>Update</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;