const {cursos, disp_curso, argv} = require('./data.js')
const express = require('express')
const app = express()

if (argv._[0] == 'inscribir') {
    console.log(argv.i);
    if (argv.i <= 3) {
        console.log('entre al if')
        let curso_encontrado = cursos.find(course => course.id == argv.i);
        name = curso_encontrado.nombre;
        iden = curso_encontrado.id;
        cost = curso_encontrado.valor;
        hours = curso_encontrado.duracion;

        texto = 'El estudiante ' + argv.n + '\n' +
                'Con cedula ' + argv.c + '\n' +
                'Se ha matriuculado en el curso llamado ' + name + '\n' +  
                'El cual tiene una duración de ' + hours + ' horas y un valor de ' + cost;
        
        app.get('/', function (req, res) {
            res.send(texto)
          })
          app.listen(3000)
    }
}
else {
    for (let i = 1; i < cursos.length + 1; i++) {

        (function(i){
            setTimeout(function(){
                info = disp_curso(i);
                console.log(info);
            },2000*i);
        })(i); 
    };;
}

