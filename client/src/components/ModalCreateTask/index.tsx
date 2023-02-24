import { useForm } from "react-hook-form";
import task from "../../assets/block.svg";
import { Container } from "./style";
import { Button } from "../Button";
import x from "../../assets/X.svg";
import { Input } from "../Input";
import { ITask } from "../../interfaces";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

interface IModalCreateTask {
  handleListTasks: (task: ITask) => void;
  setOpenModalCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateTask = ({
  handleListTasks,
  setOpenModalCreateTask,
}: IModalCreateTask) => {
  const token = sessionStorage.getItem("Do it: token");

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    description: yup
      .string()
      .required("Email obrigatório")
      .max(100, "Máximo 100 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunc = (data: object) => {
    setLoad(true);

    api
      .post("tasks", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        handleListTasks(res.data);

        setOpenModalCreateTask(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <header>
        <div>
          <figure>
            <img src={task} alt="task" />
          </figure>

          <h2>Adicionar</h2>
        </div>

        <Button
          color="miniModal"
          size="miniButton"
          type="button"
          onClick={() => setOpenModalCreateTask(false)}
        >
          <img src={x} alt="x" />
        </Button>
      </header>

      <form onSubmit={handleSubmit(onSubmitFunc)}>
        <Input
          label="Título"
          message="Ex: Estudar React - Chakra UI"
          alt=""
          src=""
          register={register}
          name="title"
          type="text"
          autoComplete="off"
          placeholder="Digite seu título"
          error={errors.title?.message}
        />
        <Input
          label="Descrição"
          message="Máximo 100 caracteres"
          alt=""
          src=""
          register={register}
          name="description"
          type="text"
          autoComplete="off"
          placeholder="Digite sua descrição"
          error={errors.description?.message}
        />

        <Button color="primary" size="modalTwo" type="submit" disabled={load}>
          {load ? "Adicionando..." : "Adicionar Tarefa"}
        </Button>
      </form>
    </Container>
  );
};

export { ModalCreateTask };
