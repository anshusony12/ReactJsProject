import React, { useEffect } from "react";
import {Jumbotron, Container, Button} from "reactstrap";

const Home=()=>{
    useEffect(()=>{
        document.title=" Home || Anshu Sony"
    },[])
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Learn Code with Anshu Sony </h1>
                <p>This is developed by Anshu Sony for learning purpose, backend is on spring boot and frontend on react js</p>
                <Container>
                <Button color="primary">Start Using!</Button>
            </Container>
            </Jumbotron>
        </div>
    );
};
export default Home;