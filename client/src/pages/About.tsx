import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PhotoCardLeft, PhotoCardRight } from "./PhotoCard";

class About extends Component {
    render() {
        return (
           <div>
               <Container>
                    <Row className="align-items-center">
                        <Col>
                                <h2>About Me</h2>
                                <p>I am a proud resident of beautiful Langley B.C. My young family and I have called Langley our home for the past few years and could not imagine living in a better place.</p>
                                <p>I am a proud father of an amazing, energetic daughter; whom fills our everyday lives with laughter and some cries. We enjoy every minute of parenthood and can't wait to see our family grow in this amazing community.</p>
                        </Col>
                        <Col>
                                <img src={require("../resources/amir.jpeg")} height={600} width={600} alt=""/>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col>
                            <h2>My Life</h2>
                            <p>I grew up in Richmond B.C and after attending Simon Fraser University started working in healthcare industry for Fraser Health. Few years ago my life was blessed with my beautiful wife and our little princess followed. </p>
                            <p>I have always been passionate about real estate and enjoy every minute of this wonderful career. I am blessed with great family and friends support and have been furtunate enough to have their help when this amazing career gets demanding.</p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                    <Row>
                        <PhotoCardLeft photoSource={require("../resources/amir-and-wife.png")}  title="Be Happy." body="Big smiles are part of everyday life." />
                    </Row>

                    <Row>
                        <PhotoCardRight photoSource={require("../resources/daughter.jpeg")} title="HO! HO! HO!" body="Our little lady loves Christmas , all smiles while playing with the ornaments." />
                    </Row>
                </Container>
            </div>
        );
    }
}
export { About };
