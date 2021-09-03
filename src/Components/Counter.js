import React,{  useState,useEffect} from "react";

function Counter(){

    const [value, setvalue] = useState(1)
    const [maxValue, setmaxValue] = useState(1000)
    const [initial, setinitial] = useState(false)
    const [ismax, setismax] = useState(false)
    
    const DecreaseCount = () => {
        if (value-1>=1){
            setvalue(value-1)
        }
        else{
            alert('minLimit Reached')
        }
        console.log('decrement',value)
    }

    const IncreaseCount = () => {
        if (value==''){
            setvalue(1)
        }
        else{
        if (value+1<=maxValue){

            setvalue(prevalue => prevalue+1)
        }
        else{
            alert('maxLimit Reached')
        }
        console.log('increment',value,maxValue)
    }
    }

    const handleChange = (e) => {
        if (e.target.value){
        setvalue(parseInt(e.target.value))
        console.log(typeof(value),value)
        }
        else{
            setvalue('')
        }
    }
    
    const handleInitial = (e) => {
        if(e.target.value){
        setvalue(parseInt(e.target.value))
        setinitial(true)
        console.log(maxValue,value)
        }
        else{
            e.target.value=1
            setvalue(1)
        }
    }
    const handleMax = (e) => {
        //     if (parseInt(e.target.value) > value){
        // setmaxValue(parseInt(e.target.value))
        //     }
        //     else{
        //         alert('val less than initial')
        //         e.target.value =''
        //     }
        
        // if (e.target.value =''){
        //     setmaxValue(1000)
        // }
        // else{
        // setvalue(1000)
        // setmaxValue(parseInt(e.target.value))
        // }
        setmaxValue(parseInt(e.target.value))
        console.log(maxValue,value)
    }

    return(
        <div className='mainDiv'>
        <div id='counter'>
        <div id='counter-decrement' onClick={() => {return DecreaseCount()}}><span>-</span></div>
        <div id='counter-text-div'><input id='counter-input' type="text" value={value} onChange={(e) => {return handleChange(e)}} /></div>
        <div id='counter-increment' onClick={IncreaseCount}><span>+</span></div>
      </div>
      
      <div>
        <label htmlFor="initailValue">Initial Value : &nbsp;</label>
        <input id='initialValue' type="text" placeholder='enter initial  value' name='initialValue' onChange={(e) => {return handleChange(e)}}/>
        <br />
        <label htmlFor="maxValue">Max Value &nbsp; : &nbsp;</label>
        <input id='maxValue' type="text" placeholder='enter max value' name='maxValue' onChange={(e) => {return handleMax(e)}}/>
        
        </div>
      </div>
    )
}

export default Counter;