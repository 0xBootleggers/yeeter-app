import { Outlet, useParams } from "react-router-dom";

import { ValidNetwork } from "@daohaus/keychain-utils";
import { CurrentDaoProvider } from "@daohaus/moloch-v3-hooks";
import { MainLayout } from "./Layouts";

export const DaoContainer = () => {
  const { proposalId, memberAddress, daoChain, daoId } = useParams<{
    daoChain: ValidNetwork;
    daoId: string;
    proposalId: string;
    memberAddress: string;
  }>();

  if (!daoId || !daoChain) return null;

  return (
    <Dao
      daoId={daoId}
      daoChain={daoChain}
      proposalId={proposalId}
      memberAddress={memberAddress}
    />
  );
};

const Dao = ({
  daoId,
  daoChain,
  proposalId,
  memberAddress,
}: {
  daoId: string;
  daoChain: ValidNetwork;
  proposalId?: string;
  memberAddress?: string;
}) => {
  return (
    <CurrentDaoProvider
      // userAddress={address}
      targetDao={{
        daoChain: daoChain,
        daoId: daoId,
        proposalId,
        memberAddress,
      }}
    >
      <MainLayout>
        <Outlet />
      </MainLayout>
    </CurrentDaoProvider>
  );
};
