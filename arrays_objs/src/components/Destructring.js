import React from 'react'

function Destructring() {
    let pavanKalyanDetails =
  {
    firstName : "Pavan Kalyan",
    lastName : "Konidela",
    nickName : "powerStar",
    profession : "Actor , Writer and Politician ",
    nationality : "Indian",
    salary: "18cr",
    netWorth : "$15million"
  }
  let {firstName,lastName,nickName,profession,salary,netWorth} = pavanKalyanDetails;

  console.log(firstName,lastName,nickName,profession,salary,netWorth)
  console.log(salary)

  let ChiranjeeeviDetails = ['FirstName:SivasankaraVaraprasad',
    'LastName:Konidela',
    'StarName:Chiranjeevi',
    'Age:69',
    'Nationality:Indian',
    'Wife:Surekha',
    'Daughters:SushmithaandSreeja',
    'Son:RamCharan'];
 let [FirstName,LastName,StarName,Age,Nationality,Wife,Daughters,Son] = ChiranjeeeviDetails;
 console.log(FirstName,LastName,StarName,Age,Nationality,Wife,Daughters,Son)
 console.log(Son)
  return (
    <div>
      <h1>Destructring</h1>
      <button type='button' onClick={()=>{
        console.log(firstName,lastName,nickName,profession,salary,netWorth)
        console.log(salary)
        
        console.log(FirstName,LastName,StarName,Age,Nationality,Wife,Daughters,Son)
        console.log(Son)
      }}>Destructring</button>
    </div>
  )
}

export default Destructring
