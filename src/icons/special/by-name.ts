import DefaultIcon from './DefaultIcon.svelte';
import DocxIcon from './DocxIcon.svelte';
import FormIcon from './FormIcon.svelte';
import Notepad from './Notepad.svelte';
import OnenoteIcon from './OnenoteIcon.svelte';
import PptIcon from './PptIcon.svelte';
import RoundAlt from './RoundAlt.svelte';
import SearchIcon from './SearchIcon.svelte';
import TxtIcon from './TxtIcon.svelte';
import XlsxIcon from './XlsxIcon.svelte';

export const iconsByName = {
  'default-icon': DefaultIcon,
  'docx-icon': DocxIcon,
  'form-icon': FormIcon,
  'notepad': Notepad,
  'onenote-icon': OnenoteIcon,
  'ppt-icon': PptIcon,
  'round-alt': RoundAlt,
  'search-icon': SearchIcon,
  'txt-icon': TxtIcon,
  'xlsx-icon': XlsxIcon,
} as const;

export type IconName = keyof typeof iconsByName;
