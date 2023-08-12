import fs from 'fs';

export const nonBlockingNodeJS = () => {
    console.log('Inicio del programa');

    fs.readFile('archivo.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

    console.log('Fin del programa');
};

nonBlockingNodeJS();
