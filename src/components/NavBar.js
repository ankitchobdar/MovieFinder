import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/">MovieFinder</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link mx-2" href="/">Movies</a>
            <a className="nav-link" href="/">TV Shows</a>
        </div>
        </div>
    </div>
    </nav>
  )
}
