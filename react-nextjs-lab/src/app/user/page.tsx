import InputTest from "@/components/InputTest"

export default function User() {
    return (
        <main className="overflow-hidden">
            <InputTest />
            <div  className="flex justify-center w-[100%] h-[100%]">
                <div className="flex flex-col justify-center items-center h-5/6 w-3/4 self-center border border-black rounded-xl">
                    <h1 className="text-red-800">teste de box componente</h1>
                    <input className="text-black w-96" placeholder="teste de input"></input>
                </div>
            </div>
        </main>
    )
}