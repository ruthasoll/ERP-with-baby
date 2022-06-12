import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <input className='search' type='text' placeholder='Search...'></input>
        <button className='btnsearch'>Search</button>
        <h1 className="title">My React App</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

export default App
