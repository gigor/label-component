
/** 
 * @param {number} value
 * @returns {'insignificant'|'normal'|'positive'|'negative'}
 */
export const getTrend = (value) =>{
    if (value > 0.01) {
        return 'positive';
    } else if (value < -0.01) {
        return 'negative';
    } else if (value > 0.0001 || value < -0.0001) {
        return 'normal'
    } else {
        return 'insignificant';
    }
}

