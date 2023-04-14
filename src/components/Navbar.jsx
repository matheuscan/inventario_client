import { Navbar,Nav, NavItem, NavLink } from "react-bootstrap";
function Navigation(){
    return (
        <>
            <Navbar bg="primary" expand="lg">
                <NavItem>
                    <NavLink>about</NavLink>
                </NavItem>
            </Navbar>
        </>
    )
}
export default Navigation