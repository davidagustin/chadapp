import { StyleSheet, PixelRatio } from 'react-native';

/*
 * Typography constants
 */

// font sizes
export const FONT_XXXXL = 90 / PixelRatio.getFontScale();
export const FONT_XXXL = 45 / PixelRatio.getFontScale();
export const FONT_XXL = 24 / PixelRatio.getFontScale();
export const FONT_XL = 22 / PixelRatio.getFontScale();
export const FONT_LARGE = 20 / PixelRatio.getFontScale();
export const FONT_MEDIUM = 18 / PixelRatio.getFontScale();
export const FONT_SMALL = 16 / PixelRatio.getFontScale();
export const FONT_XSMALL = 14 / PixelRatio.getFontScale();
export const FONT_XXSMALL = 12 / PixelRatio.getFontScale();

export const ICON_SIZE = FONT_XXL;

export const typography = StyleSheet.create({
  ada_text_italic: {
    fontStyle: 'italic'
  },
  ada_text_bold: {
    fontWeight: '700'
  },
  ada_text_light: {
    fontWeight: '300'
  },
  ada_text_caps: {
    textTransform: 'uppercase'
  },
  ada_text_h1: {
    fontSize: FONT_XXXXL
  },
  ada_text_h2: {
    fontSize: FONT_XXL
  },
  ada_text_h3: {
    fontSize: FONT_XL
  },
  ada_text_h4: {
    fontSize: FONT_LARGE
  },
  ada_text_h5: {
    fontSize: FONT_MEDIUM
  }
});
