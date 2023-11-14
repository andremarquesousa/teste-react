import { createContext, useState } from "react";

export const TodoContext = createContext<any>('');

export const TodoProvider = (props:any) => {
    const [todos, setTodos] = useState( [] );

    return (
        <TodoContext.Provider value={[ todos, setTodos ]}>
            {props.children}
        </TodoContext.Provider>
    );
}