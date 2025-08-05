"use client";

import { useTypink } from "typink";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExtensionWallet } from "typink";
import { useState, useEffect } from "react";
import { CheckIcon } from "lucide-react";

export function WalletSelect() {
  const [isMounted, setIsMounted] = useState(false);

  const {
    connectedAccount,
    wallets,
    setConnectedAccount,
    accounts,
    connectWallet,
    connectedWallet,
    disconnect,
    client,
  } = useTypink();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading wallet options...</div>;
  }

  return (
    <div>
      <div className="flex flex-row gap-2">
        {wallets.map((wallet) => {
          return (
            <div key={wallet.id}>
              {wallet.installed ? (
                <Button
                  key={wallet.id}
                  onClick={() => connectWallet(wallet.id)}
                >
                  <Image
                    src={wallet.options.logo}
                    alt={wallet.name}
                    width={20}
                    height={20}
                  />
                  {wallet.name}
                  {connectedWallet?.id === wallet.id && (
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  )}
                </Button>
              ) : wallet instanceof ExtensionWallet ? (
                <Link
                  key={wallet.id}
                  href={wallet.options.installUrl}
                  target="_blank"
                >
                  <Button>
                    <Image
                      src={wallet.options.logo}
                      alt={wallet.name}
                      width={20}
                      height={20}
                    />
                    Install {wallet.name}
                  </Button>
                </Link>
              ) : (
                <Button>Something else</Button>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-2 my-4">
        {connectedAccount && (
          <div>
            Connected to {connectedAccount.name} {connectedAccount.address}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {accounts.map((account) => (
          <div
            key={account.address}
            className={cn(
              " flex flex-row items-center justify-between gap-2 bg-gray-100 p-2 rounded-md",
              connectedAccount?.address === account.address && "bg-blue-100"
            )}
          >
            {account.name} {account.address} {account.type}{" "}
            {connectedAccount?.address === account.address ? (
              <Button
                onClick={() => {
                  const tx = client?.tx.system.remark(
                    "Hello, world from typink!"
                  );
                  console.log(tx);
                  tx?.signAndSend(connectedAccount.address);
                }}
              >
                Remark Tx
              </Button>
            ) : (
              <Button onClick={() => setConnectedAccount(account)}>
                Use this account
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
