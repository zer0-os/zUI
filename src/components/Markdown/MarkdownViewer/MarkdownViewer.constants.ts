import type { PluggableList } from 'react-markdown/lib/react-markdown';

import emoji from 'remark-emoji';
import remarkGemoji from 'remark-gemoji';

// We can add more plugins here
// We added emoji plugins here for now
// REF - https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
export const REMARK_PLUGINS: PluggableList = [emoji, remarkGemoji];
