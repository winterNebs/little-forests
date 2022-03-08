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
import { ForestType} from "./forestType";
import { SiteConditionRule } from "./siteConditionRule";
import { Plant } from "./plants";


export class LittleForest{
    @prop()
    public name!: string;

    @prop({type: [String, SiteConditionRule], required: true, default: []})
    public siteConditions!: [String, SiteConditionRule][];

    @prop()
    public forestType!: ForestType;

    @prop({type: [Plant, Number], required: true, default: []})
    public plants!: [Plant, number][];  //plant and how many are ordered

    @prop({type: Boolean, required: true, default: false})
    public isPublic!: boolean;

    @prop({type: String, required: true, default: []})
    public images!: string[];

}

export const LittleForests:ReturnModelType<
    typeof LittleForest,
    {}
> = getModelForClass(LittleForest, {schemaOptions: {collection: "littleForests"}});