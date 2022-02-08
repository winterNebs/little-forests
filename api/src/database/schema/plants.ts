/*
from class diagram:

_id: String
attributes: String[]
    - CommonName, ScientificName
    - Layer: Canopy, Tree, Understory Tree, Shrub
    - Type: Diceduous, Conifer, Evergreen
    - Height: max
    - Tags/Advantage: Medicine, Nut, Nitrogen, Flower, Sweetwater, Fruit, Birds, Wood, Wildlife, Habitat, Lumber, Dye, Edible Leaves, Windbreak, Whistles, Soap, Fuel, Silk
images: String[]
*/

import { getModelForClass, index, prop, ReturnModelType } from "@typegoose/typegoose";

export const layers: readonly["canopy", "tree", "understory tree", "shrub"] = [
    "canopy",
    "tree",
    "understory tree",
    "shrub",
];
export const treeType: readonly["diciduous", "conifer", "evergreen"] = [
    "diciduous",
    "conifer",
    "evergreen",
];

export const advantages: readonly["medicinal", "nut", "nitrogen", "flower", "sweetwater", "fruit", "birds", "wood", "wildlife", "habitat", "lumber", "dye", "edible leaves", "windbreak", "whistles", "soap", "fuel", "silk" ] = [
    "medicinal",
    "nut",
    "nitrogen",
    "flower",
    "sweetwater",
    "fruit",
    "birds",
    "wood",
    "wildlife",
    "habitat",
    "lumber",
    "dye",
    "edible leaves",
    "windbreak",
    "whistles",
    "soap",
    "fuel",
    "silk"
];

@index({name: 1}, {unique: true})

export class PlantAttributeClass{
    @prop()
    public name!: string;

}

export class Plant{
    @prop()
    public commonName!: string;
    @prop()
    public scientificName!: string;

    @prop({enum: layers,})
    public layer!: string;
    @prop({enum: treeType,})
    public treeType!: string;

    @prop()
    public maxHeight!: string;

    @prop({enum: advantages})
    public advantages!: string[];

    @prop()
    public images!: string[];
}


export const PlantAttribute:ReturnModelType<
    typeof PlantAttributeClass,
    {}
> = getModelForClass(PlantAttributeClass, {schemaOptions: {collection: "plantAttributes"}});