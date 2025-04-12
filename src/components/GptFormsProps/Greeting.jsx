import { useState } from "react";
import UserList from "./UserList.jsx";

const Greeting = ({ name }) => {
    const [isOn, setIsOn] = useState(false);
    const [input, setInput] = useState('');

    return (
        <div>
            <div>
                {name || 'Welcome'}
            </div>
            <div>
                {/* ternary! */}
                <div>Status: {isOn ? "ON" : "OFF"}</div>
                
                {/* notice why we need an empty callback func */}
                {/* is this inline arrow func ok? */}
                <button onClick={() => setIsOn(!isOn)}>Toggle Me</button>
            
                {/* dont always need to abstract out to a handleChange input */}
                <form onSubmit={(e) => e.preventDefault()}>
                    Name: <input value={input} onChange={(e) => setInput(e.target.value)}/>
                </form>

                <button onClick={() => setInput('')}>reset</button>
                <div>
                    {input}
                </div>
                <UserList />
            
            </div>
        </div>

    )
}

// RULE: Pass a function to the event listener, not the result of calling a function "setInput()"", invoking func immediately defeats the purpose of event listerners
// 1 Call a function with your own arguments
// Call a function with no arguments    onClick={someFunction}

// 2 Call a function with no arguments (except the event, which React gives you automatically)
// Call a function with arguments	    onClick={() => someFunction(arg)}
// Reset state on click	                onClick={() => setInput('')}
// Log an event	                        onClick={(e) => console.log(e)}

export default Greeting;