import { Link } from "react-router-dom"
import { Stack } from "@chakra-ui/react";
import '../App.css'
const Navbar = ()=>{
    return(
        <Stack spacing={3} direction={"row"}>
            <Link to="/">Home</Link>
            <Link to="/sign-up">Sign up</Link>
        </Stack>
    )
}

export default Navbar;