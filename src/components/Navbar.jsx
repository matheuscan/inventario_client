import { Navbar,Nav, NavItem, NavLink, Container, Button } from "react-bootstrap";
function Navigation(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Inventario</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="" style={{columnGap: "1rem"}}>
                            <Nav.Link href="/info">Sobre el producto</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                            <Button style={{backgroundColor: "blueviolet", border: "none"}} href="/login">Iniciar sesión</Button>
                            <Button style={{backgroundColor: "darkblue", border: "none"}} href="/signup">Registrarse</Button>
                        </Nav>

                     </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation