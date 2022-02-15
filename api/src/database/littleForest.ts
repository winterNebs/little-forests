import { LittleForest, LittleForests } from "./schema/littleForests";
import { SiteConditionRule, ForestType } from "./schema/forestType";
import { PlantAttribute } from "./schema/plants";
import { UserClass } from "./schema/user";

export function createLittleForest(littleForest: LittleForest){
    return LittleForests.create(littleForest);
}

export function getLFByForestType(type: ForestType){
    return LittleForests.find(type).exec();
}

export function getLFByAttrib(attrib: PlantAttribute){
    return LittleForests.find(attrib).exec();
}

export function getLFByForestName(name: string){
    return LittleForests.find({name : name}).exec();
}

export function getLFByCondition(condition: SiteConditionRule){
    return LittleForests.find(condition).exec();
}

export function getAllLittleForests(){
    return LittleForests.find({}).lean<LittleForest>().exec();
}

export function getAllPublicLittleForests(){
    return LittleForests.find({isPublic: true}).exec();
}