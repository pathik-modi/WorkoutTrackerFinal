import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Link to={'/'} className="logo-link">
            <h1>Beef Cakes</h1>
          </Link>
        </header>
        <section className="main">
          <Outlet />
        </section>
        <footer></footer>
      </div>
    </>
  )
}

export default App
