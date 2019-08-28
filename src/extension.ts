import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.window.createTreeView('nodeDependencies', {
		treeDataProvider: {
			getTreeItem: e => e as vscode.TreeItem,
			getChildren: () => [<vscode.TreeItem>{
				label: 'Test'
			}]
		}
	}));
	for (const id of [
		'test.explorer.visible',
		'test.search.viewlet.visible',
		'test.scm.visible',
		'test.debug.visible',
		'test.markers.visible',
		'test.output.visible',
		'test.repl.visible',
		'test.terminal.visible',
		'test.search.panel.visible',
		'test.nodeDependencies.focused'
	]) {
		context.subscriptions.push(vscode.commands.registerCommand(id,
			() => vscode.window.showInformationMessage(id)
		));
	}
}

export function deactivate() { }
