import { PageFeed } from './components/PageFeed';
import { PagePost } from './components/PagePost';
import { PageCadastro } from './components/PageCadastro';
import { PageLogin } from './components/PageLogin';
import { BrowserRouter, Route } from "react-router-dom";
import { createContext, useState } from 'react';

// interface TokenData {
//   token: string | null;
//   setToken: Dispatch<SetStateAction<TokenData>>;
// }

export const AuthContext = createContext<any | null>(null)

function App() {
  const [auth, setAuth] = useState({token: localStorage.getItem("token"), nome: localStorage.getItem("nome")})

  const verifyAuth = (newAuth: any) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  }

  return (
    <AuthContext.Provider value={{auth: auth, setAuth: verifyAuth}}>
      <BrowserRouter>
        <Route path="/" exact component={PageLogin} />
        <Route path="/feed" component={PageFeed} />
        <Route path="/post" component={PagePost} />
        <Route path="/cadastro" component={PageCadastro} />
        <Route path="/login" component={PageLogin} />
      </BrowserRouter>
    </AuthContext.Provider>
    
  );
}

export default App;
