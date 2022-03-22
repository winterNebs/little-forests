import { ForestTypes, ForestType } from "./schema/forestType";
import { SiteConditionRule } from "./schema/siteConditionRule";

export function createForestType(forestType: ForestType) {
	return ForestTypes.create(forestType);
}

export function getForestTypeByID(id: string) {
	return ForestTypes.findById(id).lean<ForestType>().exec();
}

export function getByName(name: string) {
	return ForestTypes.find({ name: name }).lean<ForestType>().exec();
}

export function getByCondition(condition: SiteConditionRule) {
	return ForestTypes.find(condition).lean<ForestType>().exec();
}

export function markInactive(name: string) {
	return ForestTypes.updateOne(
		{ name: name },
		{ $set: { active: false } }
	).exec();
}

export function getAllActive() {
	return ForestTypes.find({ active: true }).lean<ForestType>().exec();
}

export function getAllForestTypes() {
	return ForestTypes.find({}).lean<ForestType>().exec();
}

