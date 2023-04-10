import { FormEvent } from "react";
export type AppContextProps = {
  handleAdd: () => void,
  handleEdit: (id:number, name:string, price:number, description:string, image:string) => void,
  handleCloseModal: () => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: number | null
  values: {
    name:string,
    price: string | number
    description: string
    image: string
  }
}

export type handleEditProps = {
  id: number, 
  name:string, 
  price: number | string
  description: string
  image: string
}