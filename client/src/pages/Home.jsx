import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardTarefa from "../components/CardTarefa";
import { useListaTarefas } from "../hooks/useTarefa";

const KANBAN = () => {
  const tarefas = useListaTarefas();

  return (
    <div>
      <Row>
        <Col>
          <h1>A Fazer</h1>
          {tarefas.map(
            (tarefa) =>
              tarefa.status === "A Fazer" && (
                <CardTarefa
                  key={tarefa.id}
                  id={tarefa.id}
                  descricao={tarefa.descricao}
                  setor={tarefa.autor}
                  status={tarefa.status}
                  usuario={tarefa.usuario}
                />
              )
          )}
        </Col>
        <Col xs={4}>
          <h1>Fazendo</h1>
          {tarefas.map(
            (tarefa) =>
              tarefa.status === "Fazendo" && (
                <CardTarefa
                  key={tarefa.id}
                  id={tarefa.id}
                  descricao={tarefa.descricao}
                  setor={tarefa.autor}
                  status={tarefa.status}
                  usuario={tarefa.usuario}
                />
              )
          )}
        </Col>
        <Col xs={4}>
          <h1>Feito</h1>
          {tarefas.map(
            (tarefa) =>
              tarefa.status === "Feito" && (
                <CardTarefa
                  key={tarefa.id}
                  id={tarefa.id}
                  descricao={tarefa.descricao}
                  setor={tarefa.autor}
                  status={tarefa.status}
                  usuario={tarefa.usuario}
                />
              )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default KANBAN;
