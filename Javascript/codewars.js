// You're a square 7kyu
//Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function (n) {
    return Math.sqrt(n) % 1 == 0 ? true : false
}

//Find the next perfect square! 7kyu
// link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Math.sqrt(sq) % 1 === 0) {
        return ((Math.sqrt(sq) + 1) ** 2)
    } else {
        return -1
    }
}

//List Filtering 7Kyu
//Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
function filter_list(l) {
    return l.filter(n => typeof n === "number");
}

// Exes and Ohs 7Kyu
//link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
    let hold = str.toLowerCase().split("")
    let xs = hold.filter(x => x === 'x')
    let os = hold.filter(o => o === 'o')
    return xs.length == os.length
}
// Mumbling 7kyu
//Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
    let hold = s.split("")
    let v = ''
    for (let i = 0; i < hold.length; i++) {
        v += hold[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            v += hold[i].toLowerCase()
        }
        (i !== hold.length - 1) ? v += '-' : v
    }
    return v
}

// Shortest Word 7Kyu
//Link https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s) {
    s = s.split(" ")
    s = s.sort(function (a, b) { return b.length - a.length }).reverse();
    return s[0].length
}



//Get the Middle Character 7Kyu
//Link: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript:

function getMiddle(s) {
    //Code goes here!
    let v = s.length / 2
    return s.length % 2 === 0 ? (s.substring(v - 1, v + 1)) :
        s.substring(Math.round(v) - 1, Math.round(v))

}

//Isograms 7kyu
//Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascripts

function isIsogram(str) {
    let v = str.toLowerCase().split('')
    let ans = 1
    v.forEach((element, index) => v.indexOf(element, index + 1) > -1 ? ans = 0 : ans)
    return ans > 0
}

// Small enough? - Beginne 7kyu
// Link: https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit) {
    return a.filter(e => e <= limit).length === a.length ? true : false
}

// to JadenCase 7kyu
//Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
    c = this.split(' ')
    return c.map(e => e[0].toUpperCase() + e.substring(1, e.length)).join(" ")
};

//Complementary DNA 7kyu
//Link https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna) {
    c = dna.split('')
    c.forEach((e, i) => {
        if (e === 'A') {
            c[i] = 'T'
        } else if (e === 'T') {
            c[i] = 'A'
        } else if (e === 'G') {
            c[i] = 'C'
        } else if (e === 'C') {
            c[i] = 'G'
        }
    })
    return c.join('')
}
// pairs is a better option in stead of using an if statement

// The highest profit wins! 7kyu
//Link: https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr) {
    if (arr.length > 1) {
        arr = arr.sort(function (a, b) {
            return a - b
        })
        const arry = arr.filter((e, i) => 0 == i || i > arr.length - 2)
        return arry
    } else {
        arr.push(arr[0])
        return arr
    }
}

//Remove the minimum 7kyu
//Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
    return numbers.filter((e, i) => i !== numbers.indexOf(Math.min(...numbers)))

}

// Vowel Count 7kyu
//link https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let val = str.toLowerCase().split('').filter(e => e === 'a'
        || e === 'e'
        || e === 'i'
        || e === 'o'
        || e === 'u')

    return val.length;
}

// Binary Addition 7kyu
//Link: https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
function addBinary(a, b) {
    return parseInt(a + b).toString(2)
}// Beginner Series #1 School Paperwork 8 kyu
//Link: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m
    } else {
        return 0
    }
}

// Factorial 7kyu
//Link: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
    let c = 1
    if (n === 0) {
        return 1
    } else if (0 < n && n <= 12) {
        for (let i = 1; i <= n; i++) {
            c *= i
        }
        return c
    } else {
        throw RangeError
    }
}

// Beginner Series #3 Sum of Numbers 7kyu
//link https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b) {
    let low = Math.min(a, b)
    const high = Math.max(a, b)
    for (let c = 0; low <= high; low++) {
        c += low
        if (low === high) {
            return c
        }
    }
}


//Credit Card Mask 7kyu
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// return masked string
function maskify(str) {
    let nstr = ''
    if (str.length <= 4) {
        return str
    } else {
        for (let i = 0; i < str.length - 4; i++) {
            nstr += '#'
            if (i === str.length - 5) {
                nstr += str.substring(str.length - 4, str.length)
                return nstr
            }
        }
    }
}

// Stop gninnipS My sdroW! 6kyu
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(str) {
    let arrtemp = str.split(' ')
    let map1 = arrtemp.map(x => x.length >= 5 ? x.split('').reverse().join('') : x)
    return (map1.join(' '));
}

function likes(names) {
    let namer = names
    const sEnder = 'likes this'
    const ender = 'like this'
    let nHold = ""
    if (names.length == 0 || names === null) {
        return (`no one ${sEnder}`)

    } else if (names.length <= 1) {
        nHold += `${names.shift()}`
        return (`${nHold} ${sEnder}`)
    }
    for (let i = 0; i <= namer.length; i++) {

        if (names.length >= 3) {
            nHold += `${names.shift()}, `


        } else if (names.length == 2) {
            nHold += `${names.shift()} and `
        }

    }
    if (names.length <= 1) {
        nHold += `${names.shift()}`

        return (`${nHold} ${ender}`)
    }
}
//Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/solutions/javascript
//Testing 1-2-3 7kyu
var number = function (array) {
    let newarr = array.map((e, i) => `${i + 1}: ${e}`)
    return newarr
}

// Who likes 6kyu
//Link https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript
function likes(names) {
    const pluralLike = 'like this'
    const singleLike = 'likes this'
    if (names.length <= 1) {
        return names.length === 1 ? `${names[0]} ${singleLike}` : `no one ${singleLike}`
    } else if (names.length <= 3 && names.length > 1) {
        return names.length === 2 ? `${names[0]} and ${names[1]} ${pluralLike}` :
            `${names[0]}, ${names[1]} and ${names[2]} ${pluralLike}`
    } else if (names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others ${pluralLike}`
    }
}

//test
// Sum of positive 8kyu
//link https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
function positiveSum(arr) {
    const initialValue = 0;
    const filterArr = arr.filter(e => e > 0)
    const sumArray = filterArr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue)
    return sumArray
}

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
//Array.diff 6kyu
//link https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript
function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        a = a.filter(e => e !== b[i])
    }
    return b.length > 0 ? a : a
}

// Which are in? 6kyu
//Link https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function inArray(arr1, arr2) {
    let arr3 = []
    let tempArr = []
    for (let n = 0; n < arr1.length; n++) {
        tempArr = arr2.map((e, i) => e.includes(arr1[n]))
        tempArr.indexOf(true) > -1 ? arr3.push(arr1[n]) : 0
    }
    return arr3.sort()
}

//7kyu Regex validate PIN code
// link https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
    if (pin.length === 6 || pin.length === 4) {
        return pin.split('').map(e => parseInt(e)).includes(NaN) === true ? false : true
    }
    return false
}

//6kyu Create Phone Number
//Link https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers) {
    let q = numbers.join('').toString()
    return `(${q.substring(0, 3)}) ${q.substring(3, 6)}-${q.substring(6,)}`
}

//6kyu Bit counting
//Link https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
var countBits = function (n) {
    return n.toString(2).split("").reduce((preVal, curVal) => preVal + parseInt(curVal), 0)
};

//6kyu Counting Duplicates
//Link https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
    holder = text.toLowerCase().split('')
    let vals = []
    let n
    for (let i = 0; i < text.length; i++)
        holder.filter(e => e === holder[i]).length > 1 ? vals.push(holder.filter(e => e === holder[i])[0]) : 0

    console.log(text)
    console.log(vals)
    vals.length > 0 ? n = [...new Set(vals)].length : console.log(0)
    console.log(n)
    //console.log(...new Set(vals).length)
}

//Find the parity outlier 6kyu
//link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers) {
    let odd = integers.filter(e => e % 2 !== 0)
    let even = integers.filter(e => e % 2 === 0)
    return odd.length === 1 ? odd[0] : even[0]
}


//Count characters in your string 6kyu
//link: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count(string) {
    let holder = string.split('')
    ObjLit = {}
    for (let n = 0; n < string.length; n++) {
        let q = holder.filter(e => e === holder[n])
        ObjLit[`${q[0]}`] = q.length
    }
    return ObjLit;
}

//8kyu Correct the mistakes of the character recognition software

//link https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
function correct(str) {
    holder = str.split('')
    correct.pairs = {
        5: 'S',
        0: 'O',
        1: 'I'
    }
    holder.map((e, i) => correct.pairs[e] === undefined ? e : holder[i] = correct.pairs[e])
    return holder.join('')

}
//6kyu Duplicate Encoder
//link https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
    let str = ''
    let holder = {}
    const wordTransform = word.toLowerCase().split('')
    for (let j = 0; j < wordTransform.length; j++) {
        let tempArr = wordTransform.filter(e => e === wordTransform[j])
        holder[tempArr[0]] = tempArr.length
    }
    for (let i = 0; i < wordTransform.length; i++) {
        holder[wordTransform[i]] === 1 ? str += '(' : str += ')'
    }
    return str
}

//7kyu Ones and Zeros
//link https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
};
//7kyu Count the divisors of a number
//Link https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
    let str = []
    let max = n
    for (let val = 1; val <= max; val++) {
        if (n % val === 0) {
            str.push(val)
            str.push(n / val)
            max = n / val
        }
    }
    return str = [...new Set(str)].length

}

// 6kyu Take a Ten Minutes Walk
// link https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
    if (walk.length === 10) {
        let p = {
            'n': 0,
            's': 0,
            'w': 0,
            'e': 0
        }
        const pKeys = Object.keys(p)
        for (let i = 0; i < pKeys.length; i++) {
            p[`${pKeys[i]}`] = walk.filter(e => e === pKeys[i]).length
        }
        return p['n'] === p['s'] && p['e'] === p['w']
    } else {
        return false
    }
}

//7kyu Two to One
//Link https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
    let a = (s1 + s2).trim().split('')
    return a = [...new Set(a)].sort().join('')
}

//6kyu Persistent Bugger.
//Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(n) {
    let j = 0
    for (let i = 1; n >= 10; i++) {
        n = n.toString().split('').reduce(
            (preVal, curVal) => parseInt(preVal) * parseInt(curVal))
        j = i
    }
    return j
}

//6kyu smile Counter
//link https://www.codewars.com/kata/583203e6eb35d7980400002a/solutions/javascript?filter=me&sort=best_practice&invalids=false

function countSmileys(arr) {
    let smileCount = arr.filter(function (e) {
        let j = true
        if (e.length === 3 || e.length === 2) {
            e[0] === ':' || e[0] === ';' ? j = true : j = false
            if (e.length === 3 && j === true) {
                e[1] === '-' || e[1] === '~' ? j = true : j = false
            }
            if (j === true) {
                e[(e.length - 1)] === 'D' || e[(e.length - 1)] === ')' ? j = true : j = false
            }
            if (j === true) { return e }
        }

    })
    return smileCount.length
}
// Tribonacci Sequence 6kyu
//link: https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(arr, n) {
    let holder = arr
    if (n > 2) {
        holder.push((holder[0] + holder[1] + holder[2]))
        for (let i = 0; i < (n - 4); i++) {
            let val = holder[(holder.length - 1)]
                + holder[(holder.length - 2)]
                + holder[(holder.length - 3)]
            holder.push(val)
        }
        return holder
    }
    return n < 0 ? [] : holder.slice(0, n)
}

// 8kyu Difference of Volumes of Cuboids
//link https://www.codewars.com/kata/58cb43f4256836ed95000f97/solutions/javascript
function findDifference(a, b) {
    let sumA = a.reduce((curVal, preVal) => curVal * preVal)
    let sumB = b.reduce((curVal, preVal) => curVal * preVal)
    return Math.abs(sumA - sumB)
}

//8kyu Square(n) Sum
//link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(num) {
    return num.length != 0 ? num.reduce((preVal, curVal) => preVal + Math.pow(curVal, 2), 0) : 0
}

//8kyu
//link https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
    return str.substring(1, str.length - 1)
}

//8kyu Find the smallest integer in the array
// link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

//6kyu Convert string to camel case
//link https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (str[i - 1] === '-' || str[i - 1] === '_') {
            arr[i] = arr[i].toUpperCase()
            arr[i - 1] = ''
        }
    }
    return arr.join('')
}
//8kyu Is the string uppercase ?
//link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.substring(0)
}


//Decode the Morse code 6kyu
//link https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
decodeMorse = function (morseCode) {
    let arr = morseCode.split(' ').map(e => e === '' ? ' ' : MORSE_CODE[e])
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ' && arr[i - 1] === ' ') {
            arr[i - 1] = ''
        }
    }
    return arr.join('').trim()
}

//8kyu Convert a Boolean to a String
//link: https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
function booleanToString(b) {
    return b.toString()
}
//8kyu Equal Sides Of An Array
//link https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
function findEvenIndex(arr) {
    let temp = Array.from(arr).reverse()
    for (let i = 0; i < arr.length; i++) {
        let right = arr.slice(i + 1).reduce((preVal, curVal) => preVal + curVal, 0)
        let left = temp.slice(arr.length - i).reduce((preVal, curVal) => preVal + curVal, 0)
        if (left === right) {
            return i
        }
    }
    return -1
}


//6kyu Find the unique number
//link https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) > -1 && arr[i] !== "") {
            let remove = arr[i]
            arr = arr.map(e => remove === e ? e = "" : e)
        }
    }
    return Number(arr.join(''))
}


//8kyu
//link
function repeatStr(n, s) {
    let str = ''
    for (let i = 0; i < n; i++) {
        str += s
    }
    return str;
}
// 5kyu Product of consecutive Fib numbers
//link https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
function productFib(prod) {
    let fib = [0, 1]
    let tempProd = 0
    for (let i = 0; tempProd < prod; i++) {
        tempProd = fib[i] * fib[i + 1]
        if (tempProd === prod) {
            return [fib[i], fib[i + 1], true]
        }
        fib.push(fib[i] + fib[i + 1])
    }
    return [fib[fib.length - 3], fib[fib.length - 2], false]
}

//refactored to smaller
function productFib(prod) {
    let fib = [0, 1]
    for (let i = 0; (fib[i] * fib[i + 1]) < prod; i++) {
        fib.push(fib[i] + fib[i + 1])
    }
    return (fib[fib.length - 2] * fib[fib.length - 1]) === prod ?
        [fib[fib.length - 2], fib[fib.length - 1], true] : [fib[fib.length - 2], fib[fib.length - 1], false]
}


//8kyu Remove String Spaces
//link https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
function noSpace(x) {
    return x.split(' ').join('')
}

// 8kyu Keep up the hoop
// link: https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

//6kyu Split Strings
//link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str) {
    let a = []
    let q = str.trim().split('')
    for (let i = 0; i < (str.length / 2); i++) {
        let val = q.splice(0, 2)
        val.length < 2 ?
            a.push((val[0] + '_')) : a.push(val.join(''))
    }
    return a
}
//8kyu Grasshopper - Summation
//link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
var summation = function (num) {
    let count = 0
    for (let i = 1; i <= num; i++){
      count += i
    }
    return count
  }
//8kyu The Feast of Many Beasts
//link: https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

  function feast(beast, dish) {
    return (dish[0] === beast[0] && dish[dish.length-1] === beast[beast.length-1])
    }

//6kyu Are they the "same"?
//link: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(arr1, arr2){
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false){
      return false
    }
     arr1.sort(function(a, b) {return a - b});
     arr2.sort(function(a, b) {return a - b});
     for (let i = 0; i < arr1.length; i++){
       if (arr1[i] ** 2 !== arr2[i]){
         return false
       }
     }
     return true
   }

   // 6 kyu Find the missing letter
   //link https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array){
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let array2 = array.join().toLowerCase().split(',').sort()
for (let i = 0; i < array.length; i++){
    let start = alphabet.indexOf(array2[0])
    if (array2[i] !== alphabet[start + i]){
    //check case
    return array[0] === array[0].toUpperCase() ? alphabet[start + i].toUpperCase() : alphabet[start + i]
    console.log(alphabet[start + i])
    }
}
}
// 6 kyu Sort the odd
//link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
    let oddFilter = array.filter(e => e % 2 !== 0).sort(function(a,b){
      return a-b
    })
    for (let i = 0; i < array.length; i ++){
      if (array[i] % 2 !== 0){
      array[i] = oddFilter.shift()
        }
    }
    return array
  }
// 6kyu Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(num, target) {
  for (let i = 0; i < num.length; i++ ){
    let check = target - num[i]
    if (num.indexOf(check, i) > -1 && num.indexOf(check) !== i){
      return ([num.indexOf(num[i]), num.indexOf(check, i)])
    }
  }
}


// 7 kyu Categorize New Member
//link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
    let temp = []
    for (let i = 0; i < data.length; i++){
      (data[i][0] >= 55 && data[i][1] > 7) ? temp.push('Senior') : temp.push('Open')
    }
    return temp
  }

  //6kyu Build Tower
  //link https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
  function towerBuilder(floors){
    let space,star, tower = [];
    for(i = 1; i <= floors; i++){
      space = " ".repeat(floors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower
    }
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr){
    arrFilter = arr.filter(e => e !== 0)
    for(let i = 0;i <= (arr.length - arrFilter.length); i++){
        arrFilter.push(0)
    }
    console.log(arrFilter)
  }
