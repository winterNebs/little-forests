import { Plant, Plants, PlantAttribute } from "./schema/plants";

export function createPlant(plant: Plant){
    return Plants.create(plant);
}

export function getPlantByCommon(common: string){
    return Plants.find({commonName : common}).exec();
}

export function getPlantsByType(layer: string){
    return Plants.find({layer : layer}).exec();
}

export function getPlantsByAttrib(attrib: PlantAttribute){
    return Plants.find(attrib).exec();
}

export function getAllPlants(){
    return Plants.find({}).lean<Plant>().exec();
}
