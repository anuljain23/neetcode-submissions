class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let i = 0;
        let j = str.length - 1;
        while(i<j){
            if(str.charAt(i) !== str.charAt(j)){
                return false
            }
            i++;
            j--;
        }
        return true;
    }
}
