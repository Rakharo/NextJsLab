'use client';

import { useRouter } from 'next/navigation'
import {Button, Box} from "@mui/joy"

export default function InputTest() {
    const router = useRouter();
    return (
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "2em", width: "100%", padding: "2em", backgroundColor: "gray" }}>
            <Button className="text-black" onClick={() => router.back()}>Voltar</Button>
            <h1 className="text-black">Usuário</h1>
        </Box>
    )
}