'use client';

import { useRouter } from 'next/navigation'

export default function InputTest() {
    const router = useRouter();
    return (
        <div className="flex flex-row justify-between items-center h-24 w-[100%] p-6 bg-green-800">
            <button className="text-black" onClick={() => router.back()}>Voltar</button>
            <h1 className="text-black">Usuário</h1>
        </div>
    )
}