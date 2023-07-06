import {useState} from 'react';
import myReduxStore from '../Store/Store';

function Comp2() {
    const [state,setState] = useState("")
     
    const submitData=()=>{

        var myActionObj = {
            type:"comp2",
            payload:state
        }

        myReduxStore.dispatch(myActionObj);
    }
   
    return (
        <div>
            <h2>Comp 2</h2>
            <input type='text' placeholder='Enter Text Here' onChange={(e)=>{setState(e.target.value)}}/>
            <button onClick={submitData}>Submit</button>
        </div>
    );
}

export default Comp2;