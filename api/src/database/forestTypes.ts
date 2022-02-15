import { ForestTypes, ForestType, SiteConditionRule } from "./schema/forestType";

export function createForestType(){
    return ForestTypes.create(ForestType);
}

export function getByName(name: any){
    return ForestTypes.find(name).exec();
}

export function getByCondition(condition: SiteConditionRule){
    return ForestTypes.find(condition).exec();
}

export function markInactive(name: any){
    return ForestTypes.updateOne({name: name}, {$set: {active: false}}).exec();
}

export function getAllActive(){
    return ForestTypes.find({active : true}).exec();
}