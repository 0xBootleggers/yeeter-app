import { Box, Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg="brandColors.2" height="100vh">
      <ConnectButton
        label="connect"
        showBalance={false}
        accountStatus="address"
      />
      <Flex direction="column">
        <Box>{children}</Box>
      </Flex>
    </Box>
  );
};
