import React from 'react'

function Card({fetchDetails}) {
  const name = fetchDetails[0]
  const number = fetchDetails[1]
  const month = fetchDetails[2]
  const year = fetchDetails[3]
  const cvc = fetchDetails[4]

  let first = ""
  let second = ""
  let third = ""
  let fourth = ""
  if(name){
    first = number.substr(0,4)
    second = number.substr(4,4)
   third = number.substr(8,4)
    fourth = number.substr(12,4)
  }
 



  const result = ` ${first} ${second} ${third} ${fourth}`
  console.log(result)

  return (
    <div className='cardContainer'>
        <div className='card'>
        <svg className='cardLogo' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
        <span className='cardNumber'>{number? result : "0000 0000 0000 0000"}</span>
        <span className='cardName'>{name? name : "MIRALI ABDULLAYEV"}</span>
        <span className='cardExp'>{month? month :"00"}/{year? year : "00"}</span>
        </div>
        <div className='cvc'>
            <span className='cardCvc'>{cvc? cvc : "000"}</span>
        </div>
    </div>
  )
}

export default Card