'use client';

import InputTest from "@/components/InputTest";
import CharacterInfo from "@/components/CharacterInfo";

import {Button, Box} from "@mui/joy";

export default function Avatar() {

    return (
        <Box>
            <InputTest />
            <Box>
                <h1 className="text-black">Avatar</h1>
                <CharacterInfo />
            </Box>
        </Box>
    )
}