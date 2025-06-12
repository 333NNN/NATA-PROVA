import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useBuscarTarefaPorId, useAtualizaTarefa } from "../hooks/useTarefa";
import { useState, useEffect } from "react";

import { useListaUsuarios } from "../hooks/useUsuario";

const EditarTarefa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { buscarTarefaPorId } = useBuscarTarefaPorId();
  const { atualizaTarefa } = useAtualizaTarefa();
  const { id } = useParams();
  const [carregado, setCarregado] = useState(false);
  const usuarios = useListaUsuarios();

  useEffect(() => {
    async function fetchTarefa() {
      try {
        if (usuarios.length === 0) return; 
        const tarefa = await buscarTarefoPorId(id);
        if (tarefa && !carregado) {
          reset({
            descricao: tarefa.descricao,
            nome_setor: tarefa.nome_setor,
            prioridade: tarefa.prioridade,
            data_cadastro: tarefa.data_cadastro,
            status: tarefa.status,
            usuario_id: tarefa.usuario,
          });
          setCarregado(true);
        }
      } catch (erro) {
        console.error("Erro ao buscar tarefa:", erro);
        if (erro.message.includes("Unexpected")) {
          alert("Tarefa não encontrada!");
          navigate("/home");
        }
      }
    }
    fetchTarefa();
  }, [usuarios]);

  return (
    <div className="text-center">
      <Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Col xs={12}>
            {/* Descrição */}
            <FloatingLabel
              controlId="floatingInputDescricao"
              label="Descrição"
              className="mb-5"
            >
              <Form.Control
                type="text"
                placeholder="Digite a descrição da tarefa"
                {...register("descricao", {
                  required: "A descrição é obrigatório",
                  minLength: {
                    value: 2,
                    message: "A descrição deve ter pelo menos 2 caracteres",
                  },
                  maxLength: {
                    value: 45,
                    message: "A descrição deve ter ate 45 caracteres",
                  },
                })}
              />
              {errors.titulo && (
                <p className="error">{errors.descricao.message}</p>
              )}
            </FloatingLabel>

            {/* Setor */}
            <FloatingLabel
              controlId="floatingInputSetor"
              label="Setor"
              className="mb-5"
            >
              <Form.Control
                type="text"
                placeholder="Digite o setor"
                {...register("setor", {
                  required: "O setor é obrigatório",
                  minLength: {
                    value: 2,
                    message: "O setor deve ter pelo menos 2 caracteres",
                  },
                  maxLength: {
                    value: 45,
                    message: "O setor deve ter ate 45 caracteres",
                  },
                })}
              />
              {errors.autor && <p className="error">{errors.setor.message}</p>}
            </FloatingLabel>

            {/* Select de usuarios */}
            <FloatingLabel
              controlId="floatingSelectUsuario"
              label="Usuário"
              className="mb-5"
            >
              <Form.Select
                {...register("usuario", {
                  validate: (value) =>
                    value != "Nenhum" || "Escolha uma usuario ",
                })}
              >
                <option value="Nenhum"> Escolha um usuário </option>
                {usuarios.map((user) => (
                  <option key={user.id} value={user.nome}>
                    {user.nome}
                  </option>
                ))}
              </Form.Select>
              {errors.usuario && (
                <p className="error">{errors.usuario.message}</p>
              )}
            </FloatingLabel>

            {/* Select de status */}
            <FloatingLabel
              controlId="floatingSelectStatus"
              label="Status"
              className="mb-5"
            >
              <Form.Select value="A Fazer" {...register("status")}>
                <option value="A Fazer"> A Fazer</option>
                <option value="Fazendo"> Fazendo </option>
                <option value="Feito"> Feito </option>
              </Form.Select>
              {errors.status && (
                <p className="error">{errors.status.message}</p>
              )}
            </FloatingLabel>
          </Col>
        </Row>
        <Button variant="primary" size="lg" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default EditarTarefa;
