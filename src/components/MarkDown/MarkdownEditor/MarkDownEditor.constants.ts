export enum MARKDOWN_EDITOR_TYPES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export enum MARKDOWN_EDITOR_MODES {
	EDIT = 'edit',
	PREVIEW = 'preview',
}

export const MARKDOWN_EDITOR_TOOLBAR_TITLES = {
	[MARKDOWN_EDITOR_MODES.EDIT]: 'Edit',
	[MARKDOWN_EDITOR_MODES.PREVIEW]: 'Preview'
};
