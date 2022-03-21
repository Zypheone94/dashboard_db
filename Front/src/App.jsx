import React from "react"
import "./styles/app.scss"
import 'normalize.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import bg_test from './assets/bg_test.png'

function App() {

  return (
    <section id="body">
      <section id="sideBar">
        <div id="title_sideBar"></div>
        <div id="content_sideBar">
          <div id="userLink">
            <div>
              <img src={bg_test} alt="profil_pic" />
              <div id="user_content">
                <h3 id="user_name">Name</h3>
                <p id="user_title">Super Admin</p>
              </div>
            </div>
            <svg width="15" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
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
