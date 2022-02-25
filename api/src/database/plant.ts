import { Plant, Plants, PlantAttribute } from "./schema/plants";

export function createPlant(plant: Plant){
    return Plants.create(plant);
}

export function getPlantByCommon(common: string){
    return Plants.find({commonName : common}).lean<Plant>().exec();
}

export function getPlantById(id: string){
    return Plants.findById(id).lean<Plant>().exec();
}

export function getPlantsByType(layer: string){
    return Plants.find({layer : layer}).lean<Plant>().exec();
}

export function getPlantsByAttrib(attrib: PlantAttribute){
    return Plants.find(attrib).lean<Plant>().exec();
}

export function getAllPlants(){
    return Plants.find({}).lean<Plant>().exec();
}
