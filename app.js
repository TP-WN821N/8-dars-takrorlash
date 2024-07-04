// 1. array ichidagi eng katta sonni toping
let array = [1, 2, 3, 4, 5, 6]
const maxNumber = (arr) => {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}
// console.log(maxNumber(array));




//  2. array ichidagi eng kichik sonni toping
const minNumber = (arr) => {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}
// console.log(minNumber(array));




// 3. Foydalanuvchi son kiritadi va arrey ichidagi foydalanuvchi sonidan kichik bo’lgan sonlarni ekranga chiqaring 
// let num = prompt("Biror son kiriting !")
const numbersMin = (num) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let retNums = []
  for (let item of arr) {
    if (num > item) {
      retNums.push(item)
    }
  }
  return retNums
}
// console.log(numbersMin(num))



// 4. argument sifatida qabul qilingan sonning mukammal yoki mukammal son emasligini aniqlaydigan function yarating
const perfectNum = (num) => {
  let count = 0
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      count += i
    }
  }
  return count === num ? `${num} bu son mukammal` : `${num} bu son mukammal emas`
}
// console.log(perfectNum(28));





// 5. raqamlar kiritilgan arreyni teskari qilish (for dan foydalaning)
const arrOverturn = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let arrLength = arr.length
  let revers = []
  for (let i = 0; i < arrLength; i++) {
    revers.push(arr[arrLength - i - 1])
  }
  return revers
}
// console.log(arrOverturn());




//  6. arrey ichidagi tub sonlar ni toping 
const tubNumbers = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  let tubs = []
  for (let item of arr) {
    let count = 0
    for (let i = 1; i < item; i++) {
      if (item % i == 0) {
        count++
      }
    }
    if (count == 1) {
      tubs.push(item)
    }
  }
  return tubs
}
// console.log(tubNumbers())




// 7. Ixtiyoriy function va value lari sonlardan iborat bo'lgan object yaratilsin, va object value laridan tashkil topgan arrayga function parametri ham oxiridan ham boshidan qo'shilsin
const objValues = (number) => {
  let obj = {
    num1: 2,
    num2: 3,
    num3: 5,
    num4: 7
  }
  let values = Object.values(obj)
  values.push(number)
  values.unshift(number)
  return values
}
console.log(objValues(12));