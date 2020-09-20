const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next )  => {
   // crear objeto de paciente con datos de req.body
   const paciente = new Paciente(req.body)
  try {
     await paciente.save();
     res.json({ mensaje: "el cliente se agrego correctamente"})

  } catch (error) {
     console.log(error)
     next();
  }

}

/* Obtiene todos los pacientes*/
exports.obtenerPacientes = async(req, res, next) => {
   try {
      const pacientes = await Paciente.find({});
      res.json(pacientes);
   } catch (error) {

   }
}

/* Obtiene pacientes especificos por id */
exports.obtenerPaciente = async (req, res, next) => {
   try {
      const paciente = await Paciente.findById(req.params.id);
      res.json(paciente)
   } catch(error) {
      console.log(error);
      next();
   }
}
// Actualizar paciente

exports.actualizarPaciente = async (req, res, next) => {
   try {
      const paciente = await Paciente.findByIdAndUpdate({_id: req.params.id}, req.body, {
         new: true
      })
      res.json(paciente)
   } catch (error) {
      console.log(error);
      next();
   }
}

// Eliinar paciente por un ID

exports.eliminarPaciente = async (req, res, next) => {
   try {
      await Paciente.findByIdAndDelete({_id: req.params.id})
      res.json({mensaje: "Paciente fue eliminado"})
   } catch (error) {
      console.log(error);
      next();
      
   }
}