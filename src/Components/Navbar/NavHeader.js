import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavHeader() {
    const navigate = useNavigate();

    const handleHomeLink = () => {
        navigate('/')
    }

    const handleAddItemLink = () => {
        navigate('/itemadd')
    }

    const handleAddRecipeLink = () => {
        navigate('/recipeadd')
    }

    return (
        <Navbar bg='light' data-bs-theme='light'>
            <Container>
                <Navbar.Brand>Grocery List</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link onClick={handleHomeLink}>List</Nav.Link>
                        <Nav.Link onClick={handleAddItemLink}>Add an Item</Nav.Link>
                        <Nav.Link onClick={handleAddRecipeLink}>Create a Recipe</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default NavHeader