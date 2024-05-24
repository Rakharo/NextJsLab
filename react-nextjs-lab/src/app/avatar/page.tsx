'use client';

import InputTest from "@/components/InputTest";
import CharacterInfo from "@/components/CharacterInfo";

import {Button, Box} from "@mui/joy";

export default function Avatar() {

    return (
        <Box>
            <InputTest />
            <Box>
                <h1 className="text-black flex justify-center font-bold text-[24pt] mt-[1em]">Coleção Diária</h1>
                <CharacterInfo />
            </Box>
        </Box>
    )
}