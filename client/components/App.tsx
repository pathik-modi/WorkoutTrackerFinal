import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Link to={'/'}>
            <h1>Workout App</h1>
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
