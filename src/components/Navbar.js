import React from 'react'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">Krishi</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jobs
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/wager">Apply of Wagers</a></li>
            <li><a className="dropdown-item" href="/job">Need of Jobs</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            AgriMachinery
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/machines">Apply for AgriMachinery</a></li>
            <li><a className="dropdown-item" href="/mach">Need of Machines</a></li>
          </ul>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-success mx-2" type="submit">LogIn</button>
        <button class="btn btn-success" type="submit">SignUp</button>
      </form>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
