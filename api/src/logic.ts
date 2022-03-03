import { ForestType, SiteConditionRule } from "./database/schema/forestType";

export function recommend_plant(userSiteConditions: string[], modelForestTypes: ForestType[]) {
    
    // a list of dicts containing the count of matched site conditions 
    //           for every model forest types
    // {'a': 5} --> meaning forest type a has 5 matched site conditions with userSiteConditions
    let closestMatching: Record<string, number> = {};

    // go through model forest types and find the matching site conditions
    for (var forest_type of modelForestTypes) {
        let tempSet: string[] = [];
        for (var site_condition of forest_type.siteConditions) {
            // check if userSiteConditions includes the site_condition string
            if (userSiteConditions.includes(site_condition.name)) {
                // add to the temp set if exist
                tempSet.push(site_condition.name);
            }
        }

        // add the count of tempSet to closestMatching
        closestMatching[forest_type.name] = tempSet.length;
    }
    
    // sort the scores and get the top five matched forest type name
    let sortedMatching = Object.entries(closestMatching).sort((a, b) => b[1] - a[1]);
    let topMatching = sortedMatching.slice(0,5)

    // return top five matched type names and #number of matches#
    // e.g. [["a", 6],["b", 5],["c",4],...]
    return topMatching;

}