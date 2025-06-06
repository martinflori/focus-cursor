import { Plugin } from "obsidian";
import {
	EditorView,
	Decoration,
	DecorationSet,
	ViewPlugin,
	ViewUpdate,
	WidgetType
} from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";

export default class FocusCursorPlugin extends Plugin {
	async onload() {
		// Register our custom cursor plugin (no CSS injected here)
		this.registerEditorExtension(cursorPlugin);

		console.log("Focus Cursor Plugin loaded.");
	}

	onunload() {
		console.log("Focus Cursor Plugin unloaded.");
	}
}

const cursorPlugin = ViewPlugin.fromClass(
	class {
		decorations: DecorationSet;

		constructor(view: EditorView) {
			this.decorations = this.createDecorations(view);
		}

		update(update: ViewUpdate) {
			if (update.docChanged || update.selectionSet) {
				this.decorations = this.createDecorations(update.view);
			}
		}

		createDecorations(view: EditorView): DecorationSet {
			const builder = new RangeSetBuilder<Decoration>();
			for (const range of view.state.selection.ranges) {
				const cursorDeco = Decoration.widget({
					widget: new CursorWidget(),
					side: 1
				});
				builder.add(range.head, range.head, cursorDeco);
			}
			return builder.finish();
		}
	},
	{
		decorations: (v) => v.decorations
	}
);

class CursorWidget extends WidgetType {
	eq(other: WidgetType): boolean {
		return other instanceof CursorWidget;
	}

	toDOM(): HTMLElement {
		const span = document.createElement("span");
		span.className = "custom-cursor";
		return span;
	}
}