"use client";

import { popTestnet, shibuyaTestnet, TypinkProvider } from "typink";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TypinkProvider
      appName="Typink Dapp"
      deployments={[]}
      defaultCaller={"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"}
      defaultNetworkId={popTestnet.id}
      supportedNetworks={[popTestnet, shibuyaTestnet]}
    >
      {children}
    </TypinkProvider>
  );
}
