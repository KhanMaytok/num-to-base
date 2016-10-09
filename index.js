/**
 * Convert decimal integer numbers to another base
 *
 * @param  {Integer} num
 * @param  {Integer} b
 * @return {String}
 */
module.exports = {
    toBase: function(num, b = 62) {
        var base = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var q = Math.abs(num);
        var r = q % b;
        var res = base[r];
        while (q = Math.floor(q / b)) {
            r = q % b;
            res = base[r] + res;
        }
        if(num < 0)
		return '-' + res;
	else
		return res;
    },
    to10: function(num, b) {
    	if (b == undefined) {
            b = 62;
        }
        var base = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var limit = (num + '').length;
        var res = base.indexOf(num[0]);
        for (var i = 1; i < limit; i++) {
            res = b * res + base.indexOf(num[i]);
        }
        return res;
    }
};
