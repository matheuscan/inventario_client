import "../../public/css/home.css"
function Home(){
    return (
        <>
            <div id="promo-container">
                <div id="p-content">
                    <h1>Página de inicio</h1>
                    <p>Sistema de inventario de prueba hecho con React.js y Node.js</p>
                    <button id="first-button">Leer más</button>
                </div>
            </div>
            <div className="contenedor-caracteristicas">
                    <div className="fila">
                    <div className="car1">
                        <h3>Uso de rest api</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nisi eveniet placeat, laboriosam nostrum pariatur molestiae, fuga similique repellendus dolor soluta eius
                             tempora voluptatem ullam, fugiat quia modi. Perspiciatis, deserunt?</p>
                    </div>
                    <div className="car1">
                        <h3>Aplicación dividida en backend y frontend</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nisi eveniet placeat, laboriosam nostrum pariatur molestiae, fuga similique repellendus dolor soluta eius
                             tempora voluptatem ullam, fugiat quia modi. Perspiciatis, deserunt?</p>
                    </div>
                    <div className="car1">
                        <h3>React.js como librería para el frontend</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nisi eveniet placeat, laboriosam nostrum pariatur molestiae, fuga similique repellendus dolor soluta eius
                             tempora voluptatem ullam, fugiat quia modi. Perspiciatis, deserunt?</p>
                    </div>
                    </div>
            </div>
        </>
    )
}
export default Home