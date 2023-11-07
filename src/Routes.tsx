import { useEffect } from "react";
import {
  Routes as Router,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";

import { ReactSetter } from "@daohaus/utils";

import { MULTI_DAO_ROUTER } from "@daohaus/moloch-v3-hooks";
import { HomeContainer } from "./components/layouts/HomeContainer";
import { Home } from "./pages/Home";
import { DaoContainer } from "./components/layouts/DaoContainer";
import { Dao } from "./pages/Dao";
import { Explore } from "./pages/Explore";
import { Launch } from "./pages/Launch";

export const Routes = ({
  setDaoChainId,
}: {
  setDaoChainId: ReactSetter<string | undefined>;
}) => {
  const location = useLocation();
  const pathMatch = matchPath("molochv3/:daochain/:daoid/*", location.pathname);

  useEffect(() => {
    if (pathMatch?.params?.daochain) {
      setDaoChainId(pathMatch?.params?.daochain);
    }
    if (!pathMatch?.params?.daochain) {
      setDaoChainId(undefined);
    }
  }, [pathMatch?.params?.daochain, setDaoChainId]);

  return (
    <Router>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="launch" element={<Launch />} />
      </Route>
      <Route path={MULTI_DAO_ROUTER} element={<DaoContainer />}>
        <Route index element={<Dao />} />
        {/* <Route path="formtest" element={<FormTest />} /> */}
      </Route>
    </Router>
  );
};
