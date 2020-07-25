import React from 'react'
import  Course from "./Course"
import { useState,useEffect } from 'react';
import base_url from '../API/bootapi';
import axios from "axios";
import { toast } from 'react-toastify';

const AllCourses=()=>{
    useEffect(()=>{
        document.title = "All Courses"
    },[]);

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                 console.log(response);
                 toast.success("courses has been loaded",{
                     position:"bottom-center",
                 });
                 setCourses(response.data);
            },
            (error)=>{
                //error
                console.log(error);
                toast.success("something went wrong",{
                    position:"bottom-center",
                });
            }
        )
    }
    //calling loading courses from server
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
    const [courses,setCourses]=useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follow:</p>
            {
                courses.length>0? courses.map((item)=>
                    <Course key={item.id} course={item} update={updateCourses}/>
                ):"no course available !"
            }
        </div>
    );
}

export default AllCourses;