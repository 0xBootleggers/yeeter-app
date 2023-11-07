import { Outlet } from "react-router-dom";
import { MainLayout } from "./Layouts";
import { TXBuilder } from "@daohaus/tx-builder";
import { usePublicClient } from "wagmi";

export const HomeContainer = () => {
  const publicClient = usePublicClient();

  return (
    <MainLayout>
      <TXBuilder
        // @ts-expect-error temp issue
        publicClient={publicClient}
        chainId={"0x5"}
      >
        <Outlet />
      </TXBuilder>
    </MainLayout>
  );
};
