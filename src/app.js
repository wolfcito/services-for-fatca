var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var morgan = require("morgan");
var express = require("express");

var app = express();

var Alumno = require("./models/alumno");
var mongoDB = "mongodb://127.0.0.1:27017/alumno";
var AlumnoService = require("./services/alumnoServices");

mongoose.connect(mongoDB,{ useNewUrlParser: true })
.then( () => console.log("Mongo conectado"))
.catch( err => console.error("Error conexión Mongo",err));

app.use(morgan('dev'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//Variable para registro
/* var alumno = new Alumno({
    cedula: "1716151413",
    nombre: "Merari",
    apellido: "Beria",
    edad: 24,
    estatura: 1.60,
    fechaNacimiento: Date.now()
});  */

//variable para busqueda CI
var cedula = "1716151413";

//Servicios

app.get('/api/alumnos', async function (req, res) {
    await AlumnoService.buscar()
    .then( alumnosEncontrados =>{
        console.log(alumnosEncontrados);
        res.status(200).send(alumnosEncontrados);
    })
    .catch( error =>{
        console.log(error);
        res.send(error);
    });
})

app.get('/api/buscar/:ci', async function(req, res){
    await AlumnoService.buscarByCI(req.params.ci)
    .then( unAlumno =>{
        res.send(unAlumno);
    })
    .catch( error => {
        res.send("Error: ",error);
    });
});

app.get('/api/buscarTelefono/:ci', async function(req, res){
    await AlumnoService.buscarTelefonosByCI(req.params.ci)
    .then( telefonos =>{
        res.send(telefonos);
    })
    .catch( error => {
        res.send("Error: ",error);
    });
});

app.delete('/api/eliminar/:ci',async function(req, res){
    await AlumnoService.eliminarByCI(req.params.ci)
    .then( alumnox =>{
        res.send(alumnox);
    })
    .catch(error =>{
        res.send(error);
    });
});

app.delete('/api/eliminarID/:id', async function(req,res){
    await AlumnoService.eliminarAlumnoByID(req.params.id)
    .then( result =>{ res.send(result)})
    .catch( error =>{ res.send(error)});
});

app.post('/api/crear', async function (req, res) {
    const alumnoGuardar = new Alumno(req.body);
    await AlumnoService.crear(alumnoGuardar)
    .then(aguardado => { res.send(aguardado); })
    .catch(err => { res.send(err); });
})

app.put('/api/actualizar/:ci', async function(req, res){
    await AlumnoService.actualizarByCI(req.params.ci, req.body.edad)
    .then( result => { res.send(result)})
    .catch( error => { res.send(error) });
})

app.put('/api/asginarDireccion/:ci', async function(req, res){
    await AlumnoService.asignaDireccionByCI(req.params.ci, req.body.direccion)
    .then( result => { res.send(result)})
    .catch( error => { res.send(error) });
})

app.put('/api/agregarTelefono/:ci', async function(req, res){
    console.log("telefono ",req.body.telefono)
    await AlumnoService.agregarTelefonoByCI(req.params.ci, req.body.telefono)
    .then( result => { res.send(result)})
    .catch( error => { res.send(error) });
})

app.delete('/api/eliminarTelefono/:ci', async function(req, res){
    console.log(req.body.telefono)
    await AlumnoService.eliminarTelefonoByCI(req.params.ci, req.body.telefono)
    .then( result => { res.send(result)})
    .catch( error => { res.send(error) });
})

  app.listen(3000);
  console.log("Escuchando en 3000");