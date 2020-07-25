import React from "react"
import { CardBody,Card} from "reactstrap"

function Header({name, title}){
    return(
       <div>
           
           <Card className="my-1 bg-warning">
               <CardBody>
               <h1 className="text-center my-2">Welcome to Courses Application</h1>
               </CardBody>
           </Card>
       </div>
    );
}

export default Header;