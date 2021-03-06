import {observer} from "mobx-react";
import * as React from "react";

import {editorState} from "../state";
import {IIssue} from "../../../core/semantics-types_gen";


@observer
export class Issue<T> extends React.Component<{ issue: IIssue; }, {}> {

	render() {
		const {issue} = this.props;
		return (
			<div onClick={editorState.actionSelectItem(this)} className={"issue " + editorState.cssClassForSelection(this)}>
				<span>{issue.message}</span>
				// TODO  object?
				{issue.causedBy ? <Issue issue={issue.causedBy} /> : null}
			</div>
		);
	}

}
