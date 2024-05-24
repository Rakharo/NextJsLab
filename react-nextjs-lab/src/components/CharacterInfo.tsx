'use client';

import { useState, useEffect } from 'react';
import { Character } from '@/interface/Character';

import Image from 'next/image'

export default function CharacterInfo() {
    const [characters, setCharacters] = useState<Character[]>([])

    const callAPI = async (): Promise<Character[]> => {
        try {
            const res = await fetch(`https://last-airbender-api.fly.dev/api/v1/characters`);
            const data: Character[] = await res.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        const handleData = async () => {
            const data = await callAPI();
            if (data && data.length > 0) {
                setCharacters(data);
            }
        };
        handleData();
    }, [])

    return (
        <div className="flex p-[3em] flex-wrap justify-center gap-[2em]">
            {characters.map((char) => (
                <div key={char._id} className="mb-[20px] max-h-[298px] max-w-[333px] border-[1px] border-black rounded-[1rem] p-[1em] transition duration-200 ease-linear hover:scale-[1.1] hover:shadow-md">
                    {/* <span>ID: {char._id}</span><br /> */}
                    <span className="flex justify-center">Nome: {char.name}</span><br />
                    <img src={char.photoUrl} alt='img' className='rounded-[1rem]' />
                </div>
            ))}
        </div>
    )
}