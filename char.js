/**
 *  write a js program to print a to z characters , don't use exteranal libraries
 */


console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122

for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++){
    console.log(String.fromCharCode(i));
}
