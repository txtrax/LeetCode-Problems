/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    var results = [];
    
    //recursion function
    var dfs = (i, s, letters) => {
        //base case
        if (i === s.length) {
            var string = letters.join('');
            if (!results.includes(string)) {
                results.push(string);
            }
            return;
        }
        
        //recursive case
        var char = s[i];
        
        //letter case
        if (typeof char !== "number") {
            //uppercase
            letters.push(char.toUpperCase());
            dfs(i + 1, s, letters);
            letters.pop();
            
            //lowercase
            letters.push(char.toLowerCase());
            dfs(i + 1, s, letters);
            letters.pop();
            
        //number case
        } else {
            letters.push(char);
            dfs(i + 1, s, letters);
            letters.pop();
        }
    }
    
    //call recursion function
    dfs(0, s, []);
    
    return results;
};