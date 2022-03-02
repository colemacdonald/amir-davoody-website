import { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

class TopNavBar extends Component {
    render() {
        return (
            <Nav>
                <Nav.Item>
                    <Nav.Link href="#/"><h1>Amir Davoody</h1></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#/about">About</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}
export { TopNavBar };
