"use client";

import { useTypink } from "typink";
import { Button } from "./ui/button";

export function RemarkBtn() {
  const { client, connectedAccount, ready } = useTypink();

  return (
    <Button
      onClick={() => {
        if (connectedAccount) {
          const tx = client?.tx.system.remark("Hello, world from typink!");
          console.log(tx);
          tx?.signAndSend(connectedAccount.address);
        }
      }}
      disabled={!ready}
    >
      {ready ? "Remark Tx" : "Connecting..."}
    </Button>
  );
}
