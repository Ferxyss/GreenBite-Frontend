import { useEffect, useState } from "react";
import api from "../services/api";

function Productos() {

    const [productos, setProductos] = useState([]);

    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: "",
        precio: "",
        stock: ""
    });

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const response = await api.get("/productos");
            setProductos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const crearProducto = async (e) => {

        e.preventDefault();

        try {

            await api.post("/productos", {
                nombre: nuevoProducto.nombre,
                precio: Number(nuevoProducto.precio),
                stock: Number(nuevoProducto.stock)
            });

            setNuevoProducto({
                nombre: "",
                precio: "",
                stock: ""
            });

            cargarProductos();

        } catch (error) {

            console.error(error);
            alert("Error al crear producto");

        }
    };

    const eliminarProducto = async (id) => {

        if (!window.confirm("¿Deseas eliminar este producto?")) {
            return;
        }

        try {

            await api.delete(`/productos/${id}`);

            cargarProductos();

        } catch (error) {

            console.error(error);
            alert("Error al eliminar producto");

        }
    };

    return (
        <div className="page-container">

            <div className="form-card">

                <h2>Agregar Producto</h2>

                <form onSubmit={crearProducto}>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre del producto"
                            value={nuevoProducto.nombre}
                            onChange={(e) =>
                                setNuevoProducto({
                                    ...nuevoProducto,
                                    nombre: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Precio"
                            value={nuevoProducto.precio}
                            onChange={(e) =>
                                setNuevoProducto({
                                    ...nuevoProducto,
                                    precio: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Stock"
                            value={nuevoProducto.stock}
                            onChange={(e) =>
                                setNuevoProducto({
                                    ...nuevoProducto,
                                    stock: e.target.value
                                })
                            }
                        />
                    </div>

                    <button type="submit">
                        ➕ Agregar Producto
                    </button>

                </form>

            </div>

            <h2 className="section-title">
                Productos Registrados
            </h2>

            <div className="grid">

                {productos.map((producto) => (

                    <div
                        key={producto.id}
                        className="card"
                    >

                        <h3>
                            {producto.nombre}
                        </h3>

                        <p>
                            💰 Precio: ${producto.precio}
                        </p>

                        <p>
                            📦 Stock: {producto.stock}
                        </p>

                        <button
                            style={{ marginTop: "15px" }}
                            onClick={() =>
                                eliminarProducto(producto.id)
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

export default Productos;