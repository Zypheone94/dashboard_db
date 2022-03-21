import React from "react"
import "./styles/app.scss"
import 'normalize.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

function App() {

  return (
    <section id="body">
      <section id="sideBar">
        <div id="title_sideBar"></div>
        <div id="content_sideBar">
          <Router>
            <Link to="/">
              <div className="link_router">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0ZM1.55556 12.4444V1.55556H6.22222V12.4444H1.55556ZM12.4444 12.4444H7.77778V7H12.4444V12.4444ZM12.4444 5.44444H7.77778V1.55556H12.4444V5.44444Z" fill="white"/>
                </svg>
                <p>Dashboard</p>
              </div>
            </Link>
          </Router>
        </div>
        <div id="footer_sideBar"></div>
      </section>
      <section id="content"></section>
    </section>
  )
}



export default App
