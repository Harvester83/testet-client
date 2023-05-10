import * as React from 'react';
import {Card, Button, Navbar, Container, Nav} from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><h1>TestEt</h1></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#home">Login</Nav.Link>
                </Navbar.Collapse>
            </Navbar>

            <Card border="primary" style={{width: '18rem'}}>
                <Card.Header>Тест по математике</Card.Header>
                <Card.Body>
                    <Card.Text>
                        25 ворпосов. 2 часа времени.
                    </Card.Text>
                </Card.Body>
                <Button variant="primary" href="/exam">Начать</Button>
            </Card>
        </Container>
    );
};

export default Home;
