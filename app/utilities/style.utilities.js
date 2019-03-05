// packages
import { PixelRatio } from 'react-native'

/**
 * Style utility functions
 */

/**
 * Stringifies a percentage.
 *
 * @param {number} num percentage
 * @returns {string} percentage as a string
 */
export const percentage = num => `${num}%`

/**
 * Scales the number argument to the device's font scale.
 *
 * @param {number} num percentage
 * @returns {string} percentage as a string
 */
export const size = num => num / PixelRatio.getFontScale()
