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

    @prop()
    public siteConditions!: SiteConditionRule[];

    @prop()
    public forestType!: ForestType;

    @prop()
    public plants!: [Plant, number];  //plant and how many are ordered

    @prop()
    public images!: string[];

}

export const LittleForests:ReturnModelType<
    typeof LittleForest,
    {}
> = getModelForClass(LittleForest, {schemaOptions: {collection: "littleForests"}});