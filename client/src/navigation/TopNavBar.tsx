import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class TopNavBar extends Component {
    render() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#/">Amir Davoody</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="#/about">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export { TopNavBar };
