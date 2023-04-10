import { ReactNode } from "react"
type LayoutProps = {
  children: ReactNode
}
import * as L from './styles'
const Layout:React.FC<LayoutProps> = ({children}) => {
  let categories = [
    "Healty & Care",
    "Food",
    "Pet",
    "Hardware",
    "Flowers",
    "Garden's",
    "Beauty & Hair"
  ]
  return (
    <>
    <L.Header>
        <h1>
          My products
        </h1>
      </L.Header>
      <L.ContainerBody className="main-body">
        <aside>
          <nav>
            <h4>Categories</h4>
            <ul>
              {categories.map((category, i) => (
                <li key={i}>{category}</li>
              ))}
            </ul>
          </nav>
        </aside>
        {children}
        </L.ContainerBody>
    </>
  )
}

export {Layout}