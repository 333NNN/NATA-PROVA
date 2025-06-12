import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDeletaTarefa } from "../hooks/useTarefa";

const CardTarefa = (props) => {
  const { deletarTarefa } = useDeletaTarefa();
  const handleDelete = async () => {
    const deletado = await deletarTarefa(props.id);
    alert(`Tarefa ${deletado.descricao} deletado com sucesso!`);
    window.location.reload();
  };

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>
          <b> Descrição:</b> <br /> {props.descricao}
        </Card.Text>
        <Card.Text>
          <b> Setor: </b> {props.setor}
        </Card.Text>
        <Card.Text>
          <b> Prioridade: </b> {props.prioridade}
        </Card.Text>
        <Card.Text>
          <b> Vinculado a: </b> {props.id_usuario}
        </Card.Text>
        <Button
          size="lg"
          variant="primary"
          type="button"
          href={`/editatarefa/${props.id}`}
          className="me-3"
        >
          Editar
        </Button>
        <Button size="lg" variant="danger" type="button" onClick={handleDelete}>
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardTarefa;
