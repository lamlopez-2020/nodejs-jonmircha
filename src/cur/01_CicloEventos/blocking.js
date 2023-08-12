import fs from 'fs';

export const blockingNodeJS = () => {
    console.log('Inicio del programa');

    const data = fs.readFileSync('archivo.txt', 'utf8');

    console.log(data);

    console.log('Fin del programa');
};

blockingNodeJS();
