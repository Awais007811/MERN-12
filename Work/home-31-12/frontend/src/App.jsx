import React from "react"
import Navbar from "./components/Nav";
import Footer from "./components/Footer"
import MainContent from "./components/MainContent";
import Aside from "./components/Aside"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar />
      {/* <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">My Blog</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MainContent />
        <Aside />
      </main>

      </div> */}

      <MainContent />

      <Footer />
    </React.Fragment>
  )
}

export default App
