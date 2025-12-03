const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(express.json()); // Análisis de JSON requerido 

// Rutas
app.use('/api/users', userRoutes);

// Middleware para manejo de errores (404)
app.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});