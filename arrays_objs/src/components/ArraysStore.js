import React from 'react'

function ArraysStore() {
    let ChiranjeeeviDetails = ['FirstName:SivasankaraVaraprasad',
                               'LastName:Konidela',
                               'StarName:Chiranjeevi',
                               'Age:69',
                               'Nationality:Indian',
                               'Wife:Surekha',
                               'Daughters:SushmithaandSreeja',
                               'Son:RamCharan',
                               'Brothers:NagendraBabuandPawanKalyan',
                               'UncletoActors:AlluArjunVarunTejNiharikaSaiDharamTejandPanjaVaisshnavTej',
                               ['salary:25crore','NetWorth:$16million']];
console.log(ChiranjeeeviDetails)
console.log(ChiranjeeeviDetails[10][1])

  return (
    <div>
        <h1>Arrays</h1>
        <button type='button' onClick={()=>{
            console.log(ChiranjeeeviDetails)
            console.log(ChiranjeeeviDetails[10][1])
        }}>Arrays</button>
    </div>
  )
}

export default ArraysStore
