import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarra = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">KANBAN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cadastrar-usuario" className="active">
              Cadastrar usuário
            </Nav.Link>
            <Nav.Link href="/cadastrar-tarefa" className="active">
              Cadastrar tarefa
            </Nav.Link>
            <Nav.Link href="/editar-tarefa" className="active">
              Editar tarefa
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarra;
