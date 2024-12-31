import React from 'react'

function Object() {
  let pavanKalyanDetails =
  {
    FirstName : "Pavan Kalyan",
    LastName : "Konidela",
    NickName : "powerStar",
    Profession : "Actor , Writer and Politician ",
    Nationality : "Indian",
    PhysicalStatus:{
      Height : 5.10,
      EyeColour : "Black",
      HairColour : "Black",
    },
    PersonalLife:{
      DateofBirth: 1971,
      Age: 53,
      Birthplace: "Bapatla",
      Nationality: "Indian",
      Hometown: "Hyderabad",
      DebutMovie: "Akkada Ammayi Ikkada Abbayi",
    },
    Family:{
      Father: "Venkat Rao Konidela",
      Mother: "Anjana Devi Konidela",
      Brothers: "Chiranjeevi (Actor, Elder Brother), Nagendra Babu (Actor, Elder Brother)",
      Sisters: "NA"
    },
    Wife: "Anna Lezhneva",
    Children:{
      Daughter1: "Aadya Konidela",
      Daughter2: "Polina Anjani Konidela",
      Son1: "Akira Nandan",
      Son2: "Mark Shankar Pawanovich"
    },
    MoneyFactor:{
      Salary: "18cr",
      NetWorth : "$15million"
    },
    Favourites:{
      Food: "Aratikaya Vepudu",
      Actor: "Chiranjeeevi and Amitabh Bachchan",
      Actrees: "Savitri",
      Flim: "Khaidi",
      Colors: "Black and White Blue", 
      Books: "Aghore by Robert Svoboda",
    }

  }

  console.log(pavanKalyanDetails);
  console.log(pavanKalyanDetails.Favourites.Actor);



  return (
    <div>
      <h1>Objects</h1>
      <button type='Button' onClick={()=>{
        console.log(pavanKalyanDetails);
        console.log(pavanKalyanDetails.Favourites.Actor);
      }}>Objects</button>
    </div>
  )
}

export default Object
