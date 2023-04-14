import './App.css'
import { Welcome } from './WelcomeRichard'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

function App() {
    return (
        <>
            <NavBar>
                <ul className="links">
                    <li className="link1">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="link2">
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </NavBar>

            <Msg>
                <Welcome.Provider value={'Välkommen Richard'}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Welcome.Provider>
            </Msg>
            <div className="App"></div>
        </>
    )
}

export default App

const NavBar = styled.div`
    background-color: transparent;
    position: fixed;

    a {
        color: white;
        list-style: none;
        text-decoration: none;
        font-size: 1.25rem;
    }

    .links {
        display: flex;
        padding-left: 30%;
        padding-top: 1%;
    }
`
const Msg = styled.div`
    color: white;
    background-color: #16153d;
    text-align: center;
`
