import React from 'react'

function CallBackFunction() {
    let calculateResult = (telMarks,hinMarks,engMarks,mathsMarks,sciMarks,socMarks,Name,passFn,failFn,)=>{
        let passMarks =35;
        if(telMarks >= passMarks && hinMarks >= passMarks && engMarks >= passMarks &&
            mathsMarks >= passMarks && sciMarks >= passMarks && socMarks >= passMarks
        ){
            passFn(Name); 
        }else{
            failFn(Name);
        }
    }
    calculateResult (56,45,38,77,87,54,"Gopi",(studentName)=>{
        console.log(`${studentName} Passed in Tenth`)
    },(studentName)=>{
        console.log(`${studentName} Failed in Tenth`)
    });
  return (
    <div>
      <h1>CallBackFunction</h1>
      <button type='Button' onClick={()=>{
       calculateResult (56,45,38,77,87,54,"Gopi",(studentName)=>{
        console.log(`${studentName}  Passed in Tenth`)
    },(studentName)=>{
        console.log(`${studentName} Failed in Tenth`)
    });
    
      }}>CallBackFunction</button>
    </div>
  )
}

export default CallBackFunction
