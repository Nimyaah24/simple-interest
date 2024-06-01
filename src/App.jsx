
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  // state to hold values from input filed
  //  user input cheyunnath access chynm
  const [Principle, setPrinciple] = useState(0)
  const [Rate, setRate] = useState(0)
  const [Year, setYear] = useState(0)
  // finall output kanikan
  const [Interest, setInterest] = useState(0)

// conditionaly render chyn oru variable indakunu
const [isPrinciple,setIsPrinciple] = useState(true)
const[IsRate,setIsRate] = useState(true)
const[IsYear,setIsYear] = useState(true)

const validate=(e)=>{
  // type chyunna value mathrm varan
  // console.log(e.target.value);
  // console.log(e.target.name);
let name =e.target.name
let value=e.target.value
// nmml kodkunna regular expressionile conditionum nmmde stringum match aavnindon nokunna method aan match expression match aayal array kittum otherwise null
// true or falseilki matteneghi !!
// !! ith kodkunnath false aayal mathrame invalid input kannolu
console.log(!!value.match(/^[0-9]*$/));

// ifil kodtha condition true aaneghil ullile code wrk aavm
if(!!value.match(/^[0-9]*$/)){

    // valuene stateilki veknu
  if(name=='Principle'){
    setPrinciple(value)

    // match aavndeghil
    setIsPrinciple(true)
  }
  else if(name=='Rate'){
    setRate(value)
      // match aavndeghil
    setIsRate(true)
  }else{
    setYear(value)
      // match aavndeghil
    setIsYear(true)
  }

}

//ifil kodtha condition false aaneghil else part wrk chym
else{

  if(name=='Principle'){
    // setPrinciple(value) :- invalid aavmbo data edth veknda comment ittal

    setPrinciple(value)
    // match aavnileghil
    setIsPrinciple(false)
  }
  else if(name=='Rate'){
    // setRate(value):- invalid aavmbo data edth veknda  comment ittal
    setRate(value)
      // match aavnilleghil
    setIsRate(false)
  }else{
    // setYear(value):- invalid aavmbo data edth veknda comment ittal
    setYear(value)
      // match aavnileghil
    setIsYear(false)
  }

}

}
console.log("Principle",Principle);
console.log("Rate",Rate);
console.log("Year",Year);


{/* button click chythal reset aavnm so call chyunnu functione */}
const handleRest = ()=>{
  // refresh aay povn
setPrinciple(0)
setRate(0)
setYear(0)
setIsPrinciple(true)
setIsRate(true)
setIsYear(true)
setInterest(0)
}

        {/* button click chythal calculate aavnm so call chyunnu functione*/}
const calculate = ()=>{
  // ella datatenm multiply and divide set interest
  setInterest((Principle * Rate * Year)/100)
}


  return (

    <div className='d-flex justify-content-center aligin-items-center mt-5' >
      <div className='bg-light p-5 rounded' style={{ width: "500px" }}>
        <h3>Simple Interest App</h3>
        <p>Calculate your simple interest Easily</p>

        <div className='mt-4 flex-column text-center bg-secondary shadow d-flex justify-content-center aligin-items-center p-4'>

          <h3>₹ {Interest}</h3>

          <h5 style={{ fontSize: '16px' }}>Total simple interest</h5>

        </div>

        <form className='mt-5'>
          <div className="mb-3 " >
          {/* evde aan type aakiyathen manasilak name */}
          {/*  */}
            <TextField id="outlined-basic"  name='Principle'  label="₹ principle amount" variant="outlined" onChange={(e)=>validate(e)} className='w-100' value={Principle || ""} />
            {/* value enter chymbo thettaneghil ath kaniknm (conditionaly renter cheyya)*/}
            {/* truthy vech chynm false aavmbho aa tagine kanikolu */}

           {!isPrinciple &&
            <p className='text-danger'>*Invalid Input</p>
            } 
          </div>

          <div className="mb-3 " >
            <TextField id="outlined-basic" name='Rate' label="Rate of interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>validate(e)}  value={Rate || ""}/>

{ !IsRate &&   
        <p className='text-danger'>*Invalid Input</p>
}         
 </div>

          <div className="mb-3 " >
            <TextField id="outlined-basic" name='Year' label="Year (Yr)" variant="outlined" className='w-100'  onChange={(e)=>validate(e)} value={Year || ""}/>

{  !IsYear &&
          <p className='text-danger'>*Invalid Input</p>
}          
</div>

        </form>

        <div className="d-flex justify-content-between w-100 mt-4">
            {/* button click chythal calculate aavnm */}
          {/* isPrinciple&& IsRate&& IsYear true aaneghil button kanna alleghil disable aayirikm thettaya input adichal */}
          <Button variant="contained" color="success" style={{ width: "130px", height: "50px" }} disabled={isPrinciple&& IsRate&& IsYear? false:true} onClick={calculate} >Calculate</Button>

          {/* button click chythal reset aavnm */}
          <Button variant="outlined" style={{ width: "130px", height: "50px" }} onClick={handleRest} className=''>Rest</Button>
        </div>
      </div>
    </div>

  )
}

export default App
