/**
 * @file Following an atomic design workflow, this directory exposes the JS atom
 * components and styles in this directory.
 * [Reference]{@link http://atomicdesign.bradfrost.com/chapter-2/}
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// components
export Button from './Button/Button'
export Icon from './Icon/Icon'
export Input from './Input/Input'

// styles
export { BASE, GREEN, PURPLE, UI } from './base/colors.style'
export helpers from './base/helpers.style'
export {
  FONT_XXXXL, FONT_XXXL, FONT_XXL, FONT_XL, FONT_LARGE, FONT_MEDIUM, FONT_SMALL, FONT_XSMALL, FONT_XXSMALL, ICON_SIZE
} from './base/typography.style'
export {
  MARGIN, COLUMN_WIDTH, GUTTER_WIDTH, WRAPPER_HEIGHT, WRAPPER_WIDTH, WINDOW_WIDTH, WINDOW_HEIGHT
} from './base/variables.style'
