import { useEffect, useState } from "react";
import api from "../services/api";

function Suscripciones() {

    const [suscripciones, setSuscripciones] = useState([]);

    const [nuevaSuscripcion, setNuevaSuscripcion] = useState({
        nombreCliente: "",
        correo: "",
        plan: "",
        activa: true
    });

    useEffect(() => {
        cargarSuscripciones();
    }, []);

    const cargarSuscripciones = async () => {
        try {

            const response =
                await api.get("/suscripciones");

            setSuscripciones(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const crearSuscripcion = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/suscripciones",
                nuevaSuscripcion
            );

            setNuevaSuscripcion({
                nombreCliente: "",
                correo: "",
                plan: "",
                activa: true
            });

            cargarSuscripciones();

        } catch (error) {

            console.error(error);
            alert("Error al crear suscripción");

        }
    };

    const eliminarSuscripcion = async (id) => {

        if (!window.confirm("¿Deseas eliminar esta suscripción?")) {
            return;
        }

        try {

            await api.delete(
                `/suscripciones/${id}`
            );

            cargarSuscripciones();

        } catch (error) {

            console.error(error);
            alert("Error al eliminar suscripción");

        }
    };

    return (

        <div className="page-container">

            <div className="form-card">

                <h2>📋 Crear Suscripción</h2>

                <form onSubmit={crearSuscripcion}>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre del cliente"
                            value={nuevaSuscripcion.nombreCliente}
                            onChange={(e) =>
                                setNuevaSuscripcion({
                                    ...nuevaSuscripcion,
                                    nombreCliente: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={nuevaSuscripcion.correo}
                            onChange={(e) =>
                                setNuevaSuscripcion({
                                    ...nuevaSuscripcion,
                                    correo: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Plan"
                            value={nuevaSuscripcion.plan}
                            onChange={(e) =>
                                setNuevaSuscripcion({
                                    ...nuevaSuscripcion,
                                    plan: e.target.value
                                })
                            }
                        />
                    </div>

                    <button type="submit">
                        ➕ Crear Suscripción
                    </button>

                </form>

            </div>

            <h2 className="section-title">
                Suscripciones Registradas
            </h2>

            <div className="grid">

                {suscripciones.map((s) => (

                    <div
                        key={s.id}
                        className="card"
                    >

                        <h3>
                            👤 {s.nombreCliente}
                        </h3>

                        <p>
                            ✉ {s.correo}
                        </p>

                        <p>
                            ⭐ Plan: {s.plan}
                        </p>

                        <span
                            className={
                                s.activa
                                    ? "badge badge-active"
                                    : "badge badge-inactive"
                            }
                        >
                            {s.activa
                                ? "Activa"
                                : "Inactiva"}
                        </span>

                        <br />
                        <br />

                        <button
                            onClick={() =>
                                eliminarSuscripcion(s.id)
                            }
                        >
                            🗑 Eliminar
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Suscripciones;