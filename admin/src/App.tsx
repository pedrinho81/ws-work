import { useContext } from "react"
import { useMutation, useQuery } from "react-query"
import { api } from "./api/api"
import { errorMessage, formatPrice } from "./utils/utils";
import { AppContext } from "./context/AppContext";
function App() {
  const { handleAdd, handleEdit } = useContext(AppContext)

  const { data, isLoading, error } = useQuery('products', api.getProducts)

  const excludeProduct = useMutation((id: number) => api.deleteProduct(id), {
    onSuccess: () => alert("Produto excluído")
  })


  const handleExcludeProduct = (id: number): void => {
    excludeProduct.mutate(id)
  }

  return (
    <>
      <header>
        <h1>
          My products admin
        </h1>
      </header>
      <main className="main-body">
        <aside>
          <nav>
            <h4>Products</h4>
            <ul>
              <li>Company profile</li>
              <li>Logout</li>
            </ul>
          </nav>
        </aside>
        <main >
          <div className="header">
            <h2>List of products</h2>
            <button onClick={handleAdd} >+ New </button>
          </div>
          {isLoading ? (
            <h1>carregando...</h1>
          ) : error ? <h1>{errorMessage}</h1> 
            : (
              data && data.length > 0 ? data.map(({ id, name, price, description, image }) => (
                <table>
                  <tbody>
                    <tr key={id}>
                      <td className="name">{name}</td>
                      <td className="price">{formatPrice(price)}</td>
                      <td className="btns">
                        <div className="container-btn">
                          <button onClick={() => handleEdit(id, name, price, description, image)}>Edit</button>
                          <button onClick={() => handleExcludeProduct(id)}
                            className="exclude-btn">X</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )) : (
                <h1 style={{
                  textAlign: "center",
                  padding: '1rem',
                  fontSize: '1.5rem'
                }}>Nenhum produto cadastrado</h1>
              )
            )}
        </main>
      </main >
    </>
  )
}

export default App
