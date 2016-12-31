import * as minimist from "minimist";
import { SemanticsNode } from "../metamodel";

const argv: any = minimist(process.argv.slice(2), {
	alias: {
		v: "version",
		h: "help"
	}
});

if (argv.help) {
	showUsage();
} else if (argv.semantics) {
	const data = require("../../latest.json");
	const node = new SemanticsNode(data);
	console.log(node.print());
	process.exit(0);
} else if (argv.version) {
	console.log("v" + require("../../package.json").version);
	process.exit(0);
} else {
	showUsage();
}

function showUsage() {
	const usage =
`evan FILE OPTIONS

Options:

  --semantics    Print TypeScript semantics.
  -v, --version  Show meta-model version.
  -h, --help     Show this message.
`;
	console.log(usage);
	process.exit(0);
}
