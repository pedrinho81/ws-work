import { createContext, useState } from "react"
import { AppContextProps } from "./appContext.types";
import { Modal } from "../components/Modal";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import { api } from "../api/api";
import {  moneyMask } from "../utils/utils";
export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [values, setValues] = useState({
    name: "",
    price: 0,
    description: "",
    image: ""
  });

  const addProduct = useMutation((data: BodyInit) => api.addProduct(data), {
    onSuccess: () => alert("Produtos adicionados")
  })

  const editProduct = useMutation((data: BodyInit) => api.editProduct(id, data), {
    onSuccess: () => alert("Produto editado")
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (id) {
      editProduct.mutate(JSON.stringify(values))
      handleCloseModal()
      return
    } else {
      addProduct.mutate(JSON.stringify(values))
      handleCloseModal()
      return
    }
  }


  let handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let validPrice = !isNaN(Number(moneyMask(value)))
    setValues(prev => ({
      ...prev,
      [name]: name === 'price'  && validPrice ? Number(moneyMask(value))  : value
    }));
  };


  const handleAdd = () => {
    setOpenFormModal(true)
  }


  function handleEdit(id: number, name: string, price: string | number, description: string, image: string) {
    setValues({
      name: name,
      price: Number(price),
      description: description,
      image: image
    })
    setId(id)
    setOpenFormModal(true)
  }

  const handleCloseModal = () => {
    setOpenFormModal(false)
    setValues({
      name: '',
      price: 0,
      description: '',
      image: ''
    })
    setId(0)
  }
  return (
    <AppContext.Provider
      value={{
        handleAdd,
        handleEdit,
        handleSubmit,
        handleCloseModal,
        handleInputChange,
        id,
        values
      }}>
      {children}
      {openFormModal && <Modal />}
    </AppContext.Provider>
  )
}