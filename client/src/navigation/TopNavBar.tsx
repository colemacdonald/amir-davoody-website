import { Component } from "react";
import { Dropdown } from "react-bootstrap";

class TopNavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <a href="#/"><h1>Amir Davoody</h1></a>

                <Dropdown className="ml-auto">
                     <Dropdown.Toggle className="hide-after">
                         <div className="small-line"/>
                         <div className="small-line"/>
                         <div className="small-line"/>
                     </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/about">About</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
            </div>
        );
    }
}
export { TopNavBar };
