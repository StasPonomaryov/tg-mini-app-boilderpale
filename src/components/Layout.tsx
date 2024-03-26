import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="main-wrapper">
      <header>
        <div className="logo-wrapper">
          <h1>
            Web Application <span>boilerplate</span>
          </h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        &copy; 2024
      </footer>
    </div >
  )
}

export default Layout;
