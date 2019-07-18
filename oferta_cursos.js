//arreglo de objetos para almacenar la información de los cursos

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

const fs = require('fs');

const argv = require('yargs')
             .command('inscribir','inscribirme a un curso', opciones)
             .argv

if (process.argv.length <= 2) {
  
//Para ejecutar las iteraciones de un loop con delay s edebe usar una Immediate Invoking Function Expression(IIFE)  
    for (let i = 1; i < cursos.length + 1; i++) {

        (function(i){
            setTimeout(function(){
                texto = disp_curso(i);
                console.log(texto);
            },2000*i);
        })(i); 
    };

}else{
    if (argv.identificacion <= 3) {
        console.log('id valido');
        //console.log(argv.identificacion);
        let curso_encontrado = cursos.find(course => course.id == argv.identificacion);
        name = curso_encontrado.nombre;
        iden = curso_encontrado.id;
        cost = curso_encontrado.valor;
        hours = curso_encontrado.duracion;

        texto = 'El estudiante ' + argv.nombre + '\n' +
                'Con cedula ' + argv.cedula + '\n' +
                'Se ha matriuculado en el curso llamado ' + name + '\n' +  
                'El cual tiene una duración de ' + hours + ' horas y un valor de ' + cost;

        fs.writeFile('matricula.txt',texto,(err) => {
            if(err) throw err;
            console.log('Se ha creado el archivo exitsamente')
        });      

    }else{
        console.log('id invalido, no se encuentran cursos asociados');
        console.log(argv.identificacion);
    }
}  