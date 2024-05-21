'use client';

import zuko from "@/assets/zuko_1.jpg"
import azula from "@/assets/azula.jpeg"

import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { Button, Divider } from "@mui/joy"


export default function Home() {
  const router = useRouter()
  return (
    <div className="h-[100vh] w-[100vw] p-[2em]">
      <h1 className="text-black flex justify-center font-bold text-[24pt]">AVATAR THE LAST AIRBENDER</h1>
      <div className="flex justify-center items-center gap-[1em] p-[1em]">
        <div className='h-1/2 w-1/2 border-[3px] border-black flex flex-col items-center rounded-[1rem] p-[0.5em]'>
          <Image src={azula} alt="img" className="rounded-[1rem]" />
          <Divider sx={{margin: "0.5em"}} />
          <h3 className="mb-[0.5em] text-[18pt]">Entre ou Cadastre-se</h3>
          <Button onClick={() => router.push('/user')} fullWidth className="text-black">Entrar</Button>
        </div>
        <div className='h-1/2 w-1/2 border-[3px] border-black flex flex-col items-center rounded-[1rem] p-[0.5em]'>
          <Image src={zuko} alt='img' className="rounded-[1rem]" />
          <Divider sx={{margin: "0.5em"}} />
          <h3 className="mb-[0.5em] text-[18pt]">Veja os personagens queridos do mundo de Avatar!</h3>
          <Button onClick={() => router.push('/avatar')} fullWidth className="text-black">Navegar</Button>
        </div>
      </div>
    </div>
  );
}
