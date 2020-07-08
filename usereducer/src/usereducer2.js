import React, {useReducer, useState} from "react"


// function for a set of particular action
function reducer2(state, action){

    switch(action.type){

        case "add_todo":
            return { 
                // the rendered todo list has the action text and compteled status 
                todos : [...state.todos, {text: action.text, completed : false}],
                todoCount: state.todoCount + 1

            }
        case "toggle_todo":
            return { 
                // the rendered todo list has the action text and compteled status 
                todos : state.todos.map((t, i) => 
                i === action.i ? {...t, completed : !t.completed} : t ),
                todoCount: state.todoCount - 1
            }
        default:
            return state
    }

}


const Usereducer2 = () => {

    //  dispatch => action  type="text"
    // control mutiple action and mutiple state 
    // single action map mutiple state
    const [{todos, todoCount}, dispatch] = useReducer(reducer2, {
        todos : [], 
        todoCount: 0 
    })
    const [text, setText] = useState()

    return (
        <>
            <form 
                onSubmit={e =>{
                e.preventDefault()
                // payload => text / payload : text 
                dispatch({ type : "add_todo", text })
                setText("")
            }}>
                <input value={text} onChange={e => setText(e.target.value)} />

            </form>

            <pre>{JSON.stringify(todos, null, 2 )}</pre>
            
        <div>number of todos : {todoCount}</div>

{/* use bracket */}
            {todos.map(
                    (t, i) => (
                    <div key={i} onClick={()=> dispatch({type: 'toggle_todo', i})}
                    style={{textDecoration: t.completed ? "line-through" : "" }}
                    > {t.text}</div>
                    )
             )}

        
        </>
    )

}


export default Usereducer2;