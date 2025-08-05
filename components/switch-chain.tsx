"use client";

import { useTypink } from "typink";
import { Button } from "./ui/button";

export function SwitchChain() {
  const {
    client,
    setNetworkId,
    network: currentNetwork,
    supportedNetworks,
  } = useTypink();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        {supportedNetworks.map((network) => (
          <div key={network.id}>
            <Button
              variant={network.id === currentNetwork.id ? "default" : "outline"}
              onClick={() => setNetworkId(network.id)}
            >
              {network.name} {network.id}
              {network.id === currentNetwork.id ? (
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              ) : null}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
