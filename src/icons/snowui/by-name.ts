import Add from './Add.svelte';
import Ai from './Ai.svelte';
import ArrowFall from './ArrowFall.svelte';
import ArrowLineDown from './ArrowLineDown.svelte';
import ArrowLineLeft from './ArrowLineLeft.svelte';
import ArrowLineRight from './ArrowLineRight.svelte';
import ArrowLineUp from './ArrowLineUp.svelte';
import ArrowLineUpDown from './ArrowLineUpDown.svelte';
import ArrowRight from './ArrowRight.svelte';
import ArrowRise from './ArrowRise.svelte';
import ArrowsDown from './ArrowsDown.svelte';
import ArrowsDownUp from './ArrowsDownUp.svelte';
import ArrowsUp from './ArrowsUp.svelte';
import Badge from './Badge.svelte';
import ChatDashed from './ChatDashed.svelte';
import CheckboxFalse from './CheckboxFalse.svelte';
import CheckboxMultiple from './CheckboxMultiple.svelte';
import CheckboxTrue from './CheckboxTrue.svelte';
import Chip from './Chip.svelte';
import Clipboard from './Clipboard.svelte';
import Close from './Close.svelte';
import Copy from './Copy.svelte';
import DotCircle from './DotCircle.svelte';
import DotSquare from './DotSquare.svelte';
import Explain from './Explain.svelte';
import FourLeafClover from './FourLeafClover.svelte';
import FourPointedStar from './FourPointedStar.svelte';
import Goto from './Goto.svelte';
import Help from './Help.svelte';
import HorizontalScreen from './HorizontalScreen.svelte';
import IconSet from './IconSet.svelte';
import IconSize16 from './IconSize16.svelte';
import IconSize20 from './IconSize20.svelte';
import IconSize24 from './IconSize24.svelte';
import IconSize28 from './IconSize28.svelte';
import IconSize32 from './IconSize32.svelte';
import IconSize40 from './IconSize40.svelte';
import IconSize48 from './IconSize48.svelte';
import IconSize80 from './IconSize80.svelte';
import ImageLoading from './ImageLoading.svelte';
import Line from './Line.svelte';
import Maximize from './Maximize.svelte';
import Minimize from './Minimize.svelte';
import PayWave from './PayWave.svelte';
import RadioFalse from './RadioFalse.svelte';
import RadioTrue from './RadioTrue.svelte';
import RadioTrueAlt from './RadioTrueAlt.svelte';
import Rating1 from './Rating1.svelte';
import Rating2 from './Rating2.svelte';
import Rating3 from './Rating3.svelte';
import Rating4 from './Rating4.svelte';
import Rating5 from './Rating5.svelte';
import Repost from './Repost.svelte';
import Rightbar from './Rightbar.svelte';
import RightbarMode from './RightbarMode.svelte';
import Round from './Round.svelte';
import RoundedCorner from './RoundedCorner.svelte';
import Search from './Search.svelte';
import Selected from './Selected.svelte';
import SnowIcon from './SnowIcon.svelte';
import StarFour from './StarFour.svelte';
import Stars from './Stars.svelte';
import StopAlt from './StopAlt.svelte';
import StopSecondary from './StopSecondary.svelte';
import SwitchFalse from './SwitchFalse.svelte';
import SwitchPoint from './SwitchPoint.svelte';
import SwitchTrue from './SwitchTrue.svelte';
import TextA from './TextA.svelte';
import ThreeDots from './ThreeDots.svelte';
import Variables from './Variables.svelte';
import VerticalScreen from './VerticalScreen.svelte';
import Windowed from './Windowed.svelte';
import XCircle from './XCircle.svelte';

export const iconsByName = {
  'add': Add,
  'ai': Ai,
  'arrow-fall': ArrowFall,
  'arrow-line-down': ArrowLineDown,
  'arrow-line-left': ArrowLineLeft,
  'arrow-line-right': ArrowLineRight,
  'arrow-line-up': ArrowLineUp,
  'arrow-line-up-down': ArrowLineUpDown,
  'arrow-right': ArrowRight,
  'arrow-rise': ArrowRise,
  'arrows-down': ArrowsDown,
  'arrows-down-up': ArrowsDownUp,
  'arrows-up': ArrowsUp,
  'badge': Badge,
  'chat-dashed': ChatDashed,
  'checkbox-false': CheckboxFalse,
  'checkbox-multiple': CheckboxMultiple,
  'checkbox-true': CheckboxTrue,
  'chip': Chip,
  'clipboard': Clipboard,
  'close': Close,
  'copy': Copy,
  'dot-circle': DotCircle,
  'dot-square': DotSquare,
  'explain': Explain,
  'four-leaf-clover': FourLeafClover,
  'four-pointed-star': FourPointedStar,
  'goto': Goto,
  'help': Help,
  'horizontal-screen': HorizontalScreen,
  'icon-set': IconSet,
  'icon-size-16': IconSize16,
  'icon-size-20': IconSize20,
  'icon-size-24': IconSize24,
  'icon-size-28': IconSize28,
  'icon-size-32': IconSize32,
  'icon-size-40': IconSize40,
  'icon-size-48': IconSize48,
  'icon-size-80': IconSize80,
  'image-loading': ImageLoading,
  'line': Line,
  'maximize': Maximize,
  'minimize': Minimize,
  'pay-wave': PayWave,
  'radio-false': RadioFalse,
  'radio-true': RadioTrue,
  'radio-true-alt': RadioTrueAlt,
  'rating-1': Rating1,
  'rating-2': Rating2,
  'rating-3': Rating3,
  'rating-4': Rating4,
  'rating-5': Rating5,
  'repost': Repost,
  'rightbar': Rightbar,
  'rightbar-mode': RightbarMode,
  'round': Round,
  'rounded-corner': RoundedCorner,
  'search': Search,
  'selected': Selected,
  'snow-icon': SnowIcon,
  'star-four': StarFour,
  'stars': Stars,
  'stop-alt': StopAlt,
  'stop-secondary': StopSecondary,
  'switch-false': SwitchFalse,
  'switch-point': SwitchPoint,
  'switch-true': SwitchTrue,
  'text-a': TextA,
  'three-dots': ThreeDots,
  'variables': Variables,
  'vertical-screen': VerticalScreen,
  'windowed': Windowed,
  'x-circle': XCircle,
} as const;

export type IconName = keyof typeof iconsByName;
