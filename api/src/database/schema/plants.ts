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
import { PlantAttribute } from "./plantAttribute";

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

    @prop({type: String, required: true, default: []})
    public advantages!: string[];

    @prop({type: String, required: true, default: []})
    public images!: string[];
}

export const Plants:ReturnModelType<
    typeof Plant,
    {}
> = getModelForClass(Plant, {schemaOptions: {collection: "plants"}});