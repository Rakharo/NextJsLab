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
                <div key={char._id} className="mb-[20px] max-h-[298px] max-w-[333px]">
                    <span>ID: {char._id}</span><br />
                    <span>Name: {char.name}</span><br />
                    <img src={char.photoUrl} alt='img' />
                </div>
            ))}
        </div>
    )
}