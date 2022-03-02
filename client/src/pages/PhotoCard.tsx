import { Col, Container, Row } from "react-bootstrap";


type PhotoCardProps = {
    title: string,
    body: string,
    photoSource: string,
};

const PhotoCardRight = ({title, body, photoSource}: PhotoCardProps) => <Container>
    <Row className="align-items-center">
        <Col md={8}>
            <p>{body}</p>
            <h2>{title}</h2>
        </Col>
        <Col md={4}>
            <img src={photoSource} width={311} height={551} alt=""/>
        </Col>
    </Row>
</Container>

const PhotoCardLeft = ({title, body, photoSource}: PhotoCardProps) => <Container>
    <Row className="align-items-center">
        <Col md={4}>
            <img src={photoSource} width={311} height={551} alt=""/>
        </Col>
        <Col md={8}>
            <p>{body}</p>
            <h2>{title}</h2>
        </Col>
    </Row>
</Container>

export { PhotoCardLeft, PhotoCardRight }