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

    @prop()
    public allowedValues!: string[];  //values allowed in the rule

    @prop()
    public images!: string[];
}


export class ForestType{
    @prop()
    public name!: string;

    @prop()
    public siteConditions!: SiteConditionRule[];

    @prop()
    public layersRatio!: number[][]; //min and max of recommended layer ratios

    @prop()
    public domSpecies!: Plant[]; //list of plants

    @prop()
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

