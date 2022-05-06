'use strict'

const block = document.querySelector('.block')
const el = document.querySelector('li')

let arr = [
  '321',
  '4567',
  '891011',
  '22113',
  '1231',
  '4263461',
  '22223',
]

arr.forEach((item, index) => {

  if (item[0] === '2' || item[0] === '4') {
    console.log(item)
  }

})

const getPrimes = (num) => {
  const sieve = []
  const primes = []

  for (let i = 2; i <= num; i++) {
    if (!sieve[i]) {
      primes.push(i)
      for (let j = i * 2; j <= num; j += i) {
        sieve[j] = true
      }
    }
  }

  return primes
}

getPrimes(100).forEach(item => {
  let clonLi = el.cloneNode(true)
  block.append(clonLi)
  block.style.cssText = `background-color: #fefefe; padding: 25px; list-style: none; font-size: 33px;`
  if (document.documentElement.clientWidth < 992) {
    block.style.cssText += `font-size: 22px;`
  } else {

  }
  clonLi.innerHTML = item + ` Делитель этого чиста: 1 и <p style="display:inline-block; color: #7ccfd0;"> ${item}</p>`
})

