/**
 * Convert decimal integer numbers to another base
 *
 * @param  {Integer} num
 * @param  {Integer} b
 * @return {String}
 */
module.exports = {
    toBase: function(num, b) {
        if (b == undefined) {
            b = 62;
        }
        var base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var r = num % b;
        var res = base[r];
        var q = Math.floor(num / b);
        while (q) {
            r = q % b;
            q = Math.floor(q / b);
            res = base[r] + res;
        }
        return res;
    },
    to10: function(num, b) {
    	if (b == undefined) {
            b = 62;
        }
        var base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var limit = (num + '').length;
        var res = base.indexOf(num[0]);
        for (var i = 1; i < limit; i++) {
            res = b * res + base.indexOf(num[i]);
        }
        return res;
    }
};