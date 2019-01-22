var mongoose = require("mongoose");
var Alumno = mongoose.model('Alumno', Alumno);

async function crearAlumno(alumno){
    return await alumno.save(function(err){
        if (err) return err;
    });
}

async function obtenerAlumnos(){
    return await Alumno.find();
}

async function buscarAlumnoByCI(_cedula) {
    return await Alumno.find({ cedula: _cedula });
}

async function buscarTelefonosByCI(_cedula) {
    return await Alumno.find({ cedula: _cedula })
    .select("telefono")
    .exec();
}

async function eliminarAlumnoByCI(_cedula){
    return await Alumno.deleteOne({ cedula: _cedula }, function(err){
        if (err) return err;
    });
}

async function eliminarAlumnoByID(_id){
    return await Alumno.deleteOne({ _id: _id }, function(err){
        if (err) return err;
    });
    
}

async function actualizarAlumnoByCI(_cedula, _edad){
    return await Alumno.updateOne({ cedula: _cedula }, { edad: _edad},function(err){
        if (err) return err;
    });
    
}

async function asignaDireccionByCI(_cedula, _direccion){
    return await Alumno.updateOne({ cedula: _cedula }, { direccion: _direccion},function(err){
        if (err) return err;
    });   
}

async function agregarTelefonoByCI(_cedula, _telefono){
    return await Alumno.findOneAndUpdate({ cedula: _cedula }, { $push: {telefono: _telefono}},function(err){
        if (err) return err;
    });   
}

async function eliminarTelefonoByCI(_cedula, _telefono){
    return await Alumno.findOneAndUpdate({ cedula: _cedula }, { $pull: {telefono: _telefono}},function(err){
    //.updateOne({ cedula: _cedula }, { $pull: {telefono: _telefono}},function(err){
        if (err) return err;
    });   
}

module.exports  = {
    crear: crearAlumno,
    buscar: obtenerAlumnos,
    buscarByCI: buscarAlumnoByCI,
    buscarTelefonosByCI: buscarTelefonosByCI,
    actualizarByCI: actualizarAlumnoByCI,
    eliminarByCI: eliminarAlumnoByCI,
    eliminarAlumnoByID: eliminarAlumnoByID,
    asignaDireccionByCI: asignaDireccionByCI,
    agregarTelefonoByCI: agregarTelefonoByCI,
    eliminarTelefonoByCI:eliminarTelefonoByCI
};  