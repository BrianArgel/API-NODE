const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {
    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    );

    /* Obtiene pacientes especificos */
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un id especifico //
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    //elimina un rauter por un ID

    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )

    return router;
 
}