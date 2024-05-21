import InputTest from "@/components/InputTest"

import { Input, Box, Grid } from "@mui/joy"

export default function User() {
    return (
        <div className="overflow-hidden h-[100vh] w-[100vw]">
            <InputTest />
            <Grid container spacing={2} className="h-full w-full p-[3em]">
                <Grid md={12}>
                    <h1 className="text-black text-[24pt] font-bold">Bem vindo, Avatar!</h1>
                </Grid>
                <Grid md={3} />
                <Grid md={6} className="border border-black rounded-xl">
                    <Input className="text-black" placeholder="teste de input"></Input>
                </Grid>
                <Grid md={3}/>
                <Grid md={12}/>
            </Grid>
        </div>
    )
}