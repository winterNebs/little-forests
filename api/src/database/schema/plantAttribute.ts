import { getModelForClass, index, prop, ReturnModelType } from "@typegoose/typegoose";

export class PlantAttribute{
    @prop()
    public name!: string;

}

export const PlantAttributes:ReturnModelType<
    typeof PlantAttribute,
    {}
> = getModelForClass(PlantAttribute, {schemaOptions: {collection: "plantAttributes"}});
