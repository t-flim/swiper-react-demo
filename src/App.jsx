import "./App.css"

// components
import Carousel from "./components/Carousel/Carousel"

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Carousel />
      <footer>
          <p>
            &copy; {currentYear} | thefulim.my
          </p>
      </footer>
    </div>
  )
}

export default App
