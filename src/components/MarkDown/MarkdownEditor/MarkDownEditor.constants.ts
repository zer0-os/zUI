export enum MarkdownEditorTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export enum MarkdownEditorModes {
  EDIT = 'edit',
  PREVIEW = 'preview'
}

export const MARKDOWN_EDITOR_TOOLBAR_TITLES = {
  [MarkdownEditorModes.EDIT]: 'Edit',
  [MarkdownEditorModes.PREVIEW]: 'Preview'
};
