import numeral from 'numeral'

/**
 *
 * @param {number} number
 * @param {string} format
 * @returns {string}
 */
export const formatNumber = (number, format) => {
	return numeral(number).format(format)
}
