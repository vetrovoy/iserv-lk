import { Route, Routes } from "react-router-dom";

import { routes } from "./routes/routes";
import { Container } from "./ui/layout/Container";
import { Main } from "./ui/layout/Main";

function App() {
  return (
    <Main>
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
