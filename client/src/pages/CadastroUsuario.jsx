import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useInserirUsuario } from "../hooks/useUsuario";

const CadastroUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { inserirUsuario } = useInserirUsuario();

  const onSubmit = (data) => {
    console.log("Dados:", data);
    inserirUsuario(data);
    alert("Usuario cadastrado com sucesso!");
    navigate("/home");
  };

  const onError = (errors) => {
    console.log("Erros:", errors);
  };
  return (
    <div className="text-center">
      <Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Col xs={12}>
            <FloatingLabel
              controlId="floatingInputNome"
              label="Nome"
              className="mb-5"
            >
              <Form.Control
                type="text"
                placeholder="Digite o nome do produto"
                {...register("nome", {
                  required: "O nome é obrigatório",
                  minLength: {
                    value: 2,
                    message: "O nome deve ter pelo menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "O nome deve ter ate 20 caracteres",
                  },
                })}
              />
              {errors.nome && <p className="error">{errors.nome.message}</p>}
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-5"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Email inválido",
                  },
                  validate: (value) => value.includes("@") || "Email inválido",
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
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

export default CadastroUsuario;
