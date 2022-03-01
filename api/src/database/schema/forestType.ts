/*
from class diagram:
name: string
SiteConditions: <SiteConditionRule, String>
layer: [ratio, ratio, ratio, ratio]
attributes: plantAttribute[]
images: string[]
*/
import { getModelForClass, prop, ReturnModelType } from "@typegoose/typegoose";
import { Plant } from "./plants";

export class SiteConditionRule{
    @prop()
    public name!: string;  //name of rule

    @prop({type: String, required: true, default: []})
    public allowedValues!: string[];  //values allowed in the rule

    @prop({type: String, required: true, default: []})
    public images!: string[];
}


export class ForestType{
    @prop()
    public name!: string;

    @prop({type: SiteConditionRule, required: true, default: []})
    public siteConditions!: SiteConditionRule[];

    @prop({type: [Number, Number], required: true, default: []})
    public layersRatio!: [Number, Number][]; //min and max of recommended layer ratios

    @prop({type: Plant, required: true, default: []})
    public domSpecies!: Plant[]; //list of plants

    @prop({type: String, required: true, default: []})
    public images!: string[];

    @prop()
    active!: true;

}

export const SiteConditionRules:ReturnModelType<
    typeof SiteConditionRule,
    {}
> = getModelForClass(SiteConditionRule, {schemaOptions: {collection: "siteConditionRules"}});

export const ForestTypes: ReturnModelType<
    typeof ForestType,
    {}
> = getModelForClass(ForestType, {schemaOptions: {collection: "forestTypes"}});

