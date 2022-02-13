import { Plant, Plants, PlantAttribute } from "./schema/plants";

export function createPlant(plant: Plant){
    return Plants.create(plant);
}

export function getPlantByCommon(common: any){
    return Plants.find(common);
}

export function getPlantsByType(layer: any){
    return Plants.find(layer);
}

export function getPlantsByAttrib(attrib: any){
    return Plants.find(attrib);
}

export function getAllPlants(){
    return Plants.find({});
}
