import Image from "next/image";
import { WalletSelect } from "@/components/wallet-select";
import { SwitchChain } from "@/components/switch-chain";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link
          className="fixed top-4 right-4"
          href="https://github.com/Polkadot-UI-Initiative/typink-next-js-demo/tree/main"
          target="_blank"
        >
          <Button>
            <GithubIcon className="w-4 h-4 stroke-1" /> View on Github
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Typink Next.js Demo</h1>
        <SwitchChain />
        <WalletSelect />
      </main>
    </div>
  );
}
