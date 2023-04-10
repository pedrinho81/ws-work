import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Modal: React.FC = () => {

  const { handleSubmit, values,
    handleInputChange, handleCloseModal, id
  } = useContext(AppContext)

  const inputs = [
    {name: 'name', value: values.name, label: 'Nome:'},
    {name: 'price', value: (values.price)  , label: 'Preço:'},
    {name: 'description', value: values.description, label: 'Descrição:'},
    {name: 'image', value: values.image, label: 'Url da imagem:'},
    ]

  return (
    <>
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <h1>{id ? 'Editar produto' : 'Adicionar produto'}</h1>
            {inputs.map((field, i) => (
              <>
              <label key={i} htmlFor={field.name}>{field.label}</label>
              <input
                name={field.name}
                required
                value={field.value}
                onChange={handleInputChange}
                type="text" />
              </>
            ))}
            <div className="container-btn modal-btn">
              <button type="submit">{id ? 'Editar' : 'Adicionar'}</button>
              <button onClick={handleCloseModal}>Fechar</button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export { Modal };
