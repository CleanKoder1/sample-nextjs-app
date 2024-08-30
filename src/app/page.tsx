"use client"

import { FormEvent, useEffect, useState } from "react";

type TPendiente = {
  name: string;
}
export default function Home() {
  const [pendientes, setPendientes] = useState<Array<TPendiente>>([])
  const [showList, setShowList] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await fetch(`/api/pendientes`)
    const response = await result.json();
    setShowList(true)
    setPendientes(response.data.pendientes)
  }
  return (
    <main className="h-screen w-screen flex items-center justify-center flex-col">
      <form className="flex w-1/2 items-center justify-center" onSubmit={handleSubmit}>
        <button className="w-1/3 bg-slate-900 outline-none p-3 text-white font-bold">
          Obtener lista de pendientes
        </button>
      </form>

      <ul className={`transition-opacity ${showList ? "opacity-100 " : "opacity-0"} mt-10`}>
        {pendientes && pendientes.map((pendiente, idx) => (<li key={idx}>{pendiente.name}</li>))}
      </ul>
    </main>
  );
}
