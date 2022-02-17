import { ForestType, SiteConditionRule } from "./database/schema/forestType";

export function recommend_plant(user_siteConditions: SiteConditionRule[], model_foresTypes: ForestType[]) {
    
    var closestMatching!: ForestType;
    var counter:number = 0;

    // iterate and add to siteConditions
    var siteConditions: SiteConditionRule[] = [];
    for (var site_con of user_siteConditions) {
        siteConditions.push(site_con);
    }

    // go through model forest types and find the closest matching forest type
    for (var forest_type of model_foresTypes) {
        var tempSet: SiteConditionRule[] = [];
        for (var site_condition of forest_type.siteConditions) {
            if (siteConditions.includes(site_condition)) {
                tempSet.push(site_condition);
            }
        }
        if (tempSet.length > counter) {
            counter = tempSet.length;
            closestMatching = forest_type;
        }
    }
    return closestMatching;

}