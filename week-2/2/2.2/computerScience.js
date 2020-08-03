// #1
function palindrome(str) {
    var re = /[\W_]/g
    var lowRegStr = str.toLowerCase().replace(re, '')
    // str.toLowerCase() = "kasur rusak".toLowerCase() = "kasur rusak"
    // str.replace(/[\W_]/g, '') = "kasur rusak".replace(/[\W_]/g, '') = "kasurrusak"
    // var lowRegStr = "kasurrusak";

    var reverseStr = lowRegStr.split('').reverse().join('')
     
    if (reverseStr === lowRegStr) {
        console.log("Ini adalah palindrome")
    } else {
        console.log("Ini bukan palindrome")
    }
}

palindrome("kasur rusak")

// ======================================================================

// #2
let str = "Saya belajar JavaScript"
let strWordArr = str.split(' ')
let reverseWord = []
for(let i = (strWordArr.length)-1; i>= 0; i--) {
    reverseWord.push(strWordArr[i])
}
console.log(reverseWord.join(' '))
