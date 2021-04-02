import { Route } from 'react-router-dom';
import SearchUserRepos from "./components/SearchUserRepos";
import RegisterUser from "./components/RegisterUser";

import './App.css';
import './styles/Form.css';
import './styles/Table.css';

function App() {
  return (
    <div>
      <header>
        <div className="AppHeader">
            <nav role="navigation">
              <ul id="menu">
                  <img src="images/icons/user_icon.png" alt="" />
                  <li><a className="amenu" href="/"><i className="fa fa-fw fa-user"></i>Inicio</a></li>
                  <li><a className="amenu" href="#/register"><i className="fa fa-fw fa-user"></i>Registrar usuario</a></li>
                  <li><a className="amenu" href="#/search"><i className="fa fa-fw fa-commenting"></i>Buscar github repos</a></li>
              </ul>
            </nav>
        </div>
      </header>
      <div className="App">
        <Route path="/" />
        <Route path="/register" component={RegisterUser} />
        <Route path="/search" component={SearchUserRepos} />
      </div>
    </div>
  );
}

export default App;
