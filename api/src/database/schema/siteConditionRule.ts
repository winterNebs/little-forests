import { getModelForClass, prop, ReturnModelType } from "@typegoose/typegoose";

export class SiteConditionRule {
	@prop()
	public name!: string; //name of rule

	@prop({ type: String, required: true, default: [] })
	public allowedValues!: string[]; //values allowed in the rule

	@prop({ type: String, required: true, default: [] })
	public images!: string[];
}

export const SiteConditionRules: ReturnModelType<
	typeof SiteConditionRule,
	{}
> = getModelForClass(SiteConditionRule, {
	schemaOptions: { collection: "siteConditionRules" },
});
