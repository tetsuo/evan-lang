import {util} from "./metamodel";
import {IIssue} from "./latest";

export function makeIssue(message: string, object?: Object): IIssue {
	const issue: IIssue = {
		"$sType": "issue",
		"message": message
	};
	if (object) {
		issue["object"] = object;	// (property 'object' not expressed in meta model)
	}
	return issue;
}

export function isIssue(object: any) {
	return util.isObject(object) && object.$sType === "issue";
}
