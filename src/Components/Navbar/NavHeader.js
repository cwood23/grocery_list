import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavHeader() {
    return (
        <Navbar bg='light' data-bs-theme='light'>
            <Container>
                <Navbar.Brand>Grocery List</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link>List</Nav.Link>
                        <Nav.Link>Add an Item</Nav.Link>
                        <Nav.Link>Create a Recipe</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default NavHeader