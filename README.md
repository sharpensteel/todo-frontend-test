# Todo on react.js + redux.js + TypeScript
---
### Highlights of solution:

#### Redux Hooks
In expense of making component aware of redux store, we can select data
from store (`useSelector`) and dispatch events (`useDispatch`)
in any component in hierarchy.
No need to pass results of `connect(mapStateToProps, mapDispatchToProps)` through all ancestors.
   


#### TypeScript

TypeScript works great with redux.
For example, if we have interfaces for action creators: 
```
...
export interface ICreatorSavedAction {
    type: typeof TODO_CREATOR_SAVED;
    payload: ITodo;
}
...
export type ITodoActionTypes = ... | ICreatorSavedAction | ... ;
```
TypeScript can infer type of `action` based on `action.type`:
```
export function todoReducer(
    state = initialState,
    action: ITodoActionTypes
): ITodoState {

    switch (action.type) {
        case TODO_CREATOR_SAVED: {
            //
            //  here TypeScript infered that action.payload is instance of ITodo
            //
            let todo = action.payload;  
...            
```

#### Responsive design
Implemented for TODO list only.


