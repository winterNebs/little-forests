/*
little forests schema
from class diagram:

_id: ObjectId
SiteConditions: <SiteConditionRule, String>
plants: <Plant, PlantOrderValue>
forestType: ForestType
images: String[]

*/

import { getModelForClass, prop, ReturnModelType } from "@typegoose/typegoose";
import { ForestType, SiteConditionRule } from "./forestType";
import { Plant } from "./plants";


export class LittleForest{
    @prop()
    public name!: string;

    @prop({type: SiteConditionRule, required: true, default: []})
    public siteConditions!: SiteConditionRule[];

    @prop()
    public forestType!: ForestType;

    @prop({type: [Plant, Number], required: true, default: []})
    public plants!: [Plant, number][];  //plant and how many are ordered

    @prop()
    public isPublic!: false;

    @prop({type: String, required: true, default: []})
    public images!: string[];

}

export const LittleForests:ReturnModelType<
    typeof LittleForest,
    {}
> = getModelForClass(LittleForest, {schemaOptions: {collection: "littleForests"}});