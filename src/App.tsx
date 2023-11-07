import { useState } from "react";
import { Routes } from "./Routes";

function App() {
  const [daoChainId, setDaoChainId] = useState<string | undefined>();

  return (
    <>
      <Routes setDaoChainId={setDaoChainId} />
    </>
  );
}

export default App;
