import { Route, Routes } from "react-router-dom";

import { routes } from "./routes/routes";
import { Container } from "./ui/layout/Container";
import { Main } from "./ui/layout/Main";
import { Header } from "./ui/layout/Header";

function App() {
  return (
    <Main>
      <Header />
      <Container>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Container>
    </Main>
  );
}

export default App;
