//Importerar uuid-funktionen från paketet uuid som genererar unika id:n
import {v4 as uuid} from 'uuid'; 

export const assignIdAndCleanBlocks = (blocksJSON) => {
    //Koden med JSON.parse är för att vi inte kan modifiera blocks eftersom cashningsfunktionen i apollo förhindrar detta.
    //Nedan är det rekomenderade sättet att lösa problemet genom att "tvätta" blocken (även om det kan tyckas lite omständigt)
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (bloques) => {
        bloques.forEach(bloque => {
            bloque.id = uuid();
            if(bloque.innerBlocks?.length)
                assignIds(bloque.innerBlocks);
        });
    }
    assignIds(blocks);
    return blocks;
}













