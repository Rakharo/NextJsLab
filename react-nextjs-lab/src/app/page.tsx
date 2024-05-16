'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (
    <main className="h-full w-full">
      <div className="text-black h-1/2 w-1/2">
        <h1>HOME PAGE</h1>
      </div>
      <button onClick={() => router.push('/user')} className="text-black">Usuário</button>
    </main>
  );
}
