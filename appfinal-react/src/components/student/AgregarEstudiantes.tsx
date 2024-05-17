import { Button, CircularProgress, Input, Stack } from "@mui/joy";
import { useState } from "react";
import { postStudents } from "../../services/students-service";
import { redirect, useNavigate } from "react-router-dom";

export function AgregarEstudiante() {

    const [loading, setLoading] = useState<Boolean>(false)
    

    const navigate = useNavigate()

   


    const agregarEstudiante = (body: any) => {
        postStudents(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();

        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        formJson.uuid = crypto.randomUUID()
        agregarEstudiante(formJson)
        setLoading(false)

        navigate('/')

    }

    return (
        <>
            <form onSubmit={handleAgregarDB}>
                <Stack spacing={1}>
                    <Input placeholder="Nombre" name="nombre" />
                    <Input placeholder="Apellido" name="apellido" />
                    <Button type="submit">Guardar</Button>
                </Stack>
            </form>
            {loading &&
                <CircularProgress />
            }


        </>
    )
}