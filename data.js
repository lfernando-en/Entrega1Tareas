const opciones = {
    identificacion:{
        demand:true,
        alias: 'i',
        //default:0
    },
    cedula:{
        demand:true,
        alias: 'c'
    },
    nombre:{
        //default:0,
        demand: true,
        alias: 'n'
    }
}

let cursos = [{
    nombre: 'Node.JS',
    valor: 0,
    id:1,
    duracion:32
},
{
    nombre: 'Ingles',
    valor: 100000,
    id:2,
    duracion:64
},
{
    nombre: 'Bolsa de valores',
    valor: 150000,
    id:3,
    duracion:32
}];

let disp_curso = (id) => {

    let curso_encontrado = cursos.find(course => course.id == id);
    name = curso_encontrado.nombre;
    iden = curso_encontrado.id;
    cost = curso_encontrado.valor;
    hours = curso_encontrado.duracion;
    template = 'El curso se llama ' + name + ' Tiene una duración de ' + hours + ' horas Su ID es = ' +
                iden + ' y un valor de ' + cost;
    return template            
    //callback (template);
}

const argv = require('yargs')
             .command('promedio','Calcular el promedio', opciones)
             .argv

module.exports = {
    cursos,
    disp_curso,
    argv
};