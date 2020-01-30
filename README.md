## Global Light
The goal here is provide someone with a lightweight solution that will work out of the box all while bringing a high level of customizability to the table.

#### Goals of the library
- Be lightweight and customizable
- Have minimal/negible performance cost
- Ensure that integration is easy
- Function with or without customization
- Be Backwards Compatible, unless absolutely necessary to not be

### Rationale 
Are you tired of having to update your code frequently becasue React 
Router released a new version? Tired of getting way more functionality than required with Redux? Just curious, or something else? Welcome, the idea
behind this very small collection of hooks and components is to give
developers more choice for routing and state management past the well 
known solutions of Redux and React Router, while allowing developers to
control the bloat within their application as well as not have to worry
about updating their code quite as frequently, so that developers may work
on what they want and not spend all day maintaining an old application.
Thus this library will remain backwards compatibile for most versions
and be split into modules to maintain small size if necessary. While 
they are many other solutions avaliable they tend to be good at one
thing and try and conquoer one problem rather than solve multiple. 

#### Current Tasks
- [x] Bring over current code base
- [ ] ~~Make so single tag controls everything rather than dedicated file~~ Simplify props
- [x] Document code thoroughly (ish for now)
- [x] ~~Integrate into a routing library at some point~~ Routing is in ish...
- [ ] Integrate IndexedDB for serialization
- [ ] Investigate creating a collection of Contexts for mutation and access from one key

#### Future Tasks
- [ ] Create a way to pass to higher context on page, if possible
- [ ] Integrate component testing for a more proper check and examples
- [ ] Possbily move all routing into hooks (Have to see if this viable)

#### Global store
The reducer function built-in has a LIFO set with CRUD built-in that functions 
off of the value key in the action object sent inside of the reducer function:
- action object:
    + {type: [Actions], [key]: [Value]}
    + The above key is how the data will be stored
- setValue -or- SET:
    + Will check if they value has been deleted by looking for a graveyard attribute
      on the data
- deleteValue -or- DELETE:
    + Will add a graveyard attribute to the data and archieve the last known data-value
- recoverValue -or- RECOVER:
    + Will remove the graveyard attribute and place the last value as the current value

Please review the sequence diagram below to see how this functions

If you wish to create a global store/context you can use the store object
from the library, please use the following example:
```javascript
    import { Store } from 'react-global-light';

    const App = ({ children }) => {
        const initialState = {
            // Properties
        };
        // Reducer is optional and built into them
        // Logic
        return (
            <Store stateI={ initialState }>
                { children }
            </Store>
        );
    }
```
#### Creating context
If you wish to create a context container for any component within the file import and use as follows:
```javascript
    import { CustContextContainer } from 'react-global-light';
    const App = () => {
        const reducer = (state, action) => {
            switch (action.type) {
                case action[String]:
                    // Logic
                    return {
                        ...state,
                        [key]: action.key
                    }
                // ...actions
                default:
                    return state;
            }
        };

        const initialState = {
            ...
        };

        // Logic
        return (
            // Other outputs
            <CustContextContainer reducer={ reducer } initialState={ initialState }>
                // Children components
            </CustContextContainer>
        );
    }
```

This an example of how exactly to utilize the Context Container created.
Depending on the context desired use the following:
- global, Global inside of `useCustomContext([context])`
- routing, router, Router inside of `useCustomContext([context])`
- preset, Preset inside of `useCustomContext([context])`
- () will default to the Custom Context provider that access the next parent `CustContextContainer`

**Note: Eventually the above will not be necessary**

```javascript
    import { useCustContext } from 'react-light-global';

    const App = () => {
        // Use this form and follow rules of hooks
        const [{ [Property] }, use[Property]] = useCustomContext();

        // Render function
    }
```
##### Router Sequence Diagram
[![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5cbkN1c3RvbUNvbnRleHQtPj4rQ3VzdG9tU3RvcmU6IFdoYXQgaXMgeW91ciBpbml0aWFsIHN0YXRlP1xuXG5DdXN0b21TdG9yZS0-PkN1c3RvbUNvbnRleHQ6IFJlZHVjZXIgYW5kIEluaXRpYWwgU3RhdGVcblxuQ3VzdG9tQ29udGV4dC0-PitDdXN0b21TdG9yZTogVmFsdWUgb2YgdXNlUmVkdWNlciBIb29rXG5cbkN1c3RvbVN0b3JlLS14Q29tcG9uZW50OiBXYWl0aW5nIGZvciBBY3Rpb24_IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5cbkN1c3RvbUNvbnRleHQtPj4rQ3VzdG9tU3RvcmU6IFdoYXQgaXMgeW91ciBpbml0aWFsIHN0YXRlP1xuXG5DdXN0b21TdG9yZS0-PkN1c3RvbUNvbnRleHQ6IFJlZHVjZXIgYW5kIEluaXRpYWwgU3RhdGVcblxuQ3VzdG9tQ29udGV4dC0-PitDdXN0b21TdG9yZTogVmFsdWUgb2YgdXNlUmVkdWNlciBIb29rXG5cbkN1c3RvbVN0b3JlLS14Q29tcG9uZW50OiBXYWl0aW5nIGZvciBBY3Rpb24_IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

###### To utilize the Router
The router only needs routes passed to it. The rest will be handled automatically by the component. There 
will eventually be Route objects to go into the Routing component. Although, the navbar component will 
always be up to the user and accessible through the `useCustomContext()` hook within a 
child element of the `Routing` component. 

To create links for routing system use the `Link` component. This triggers
the context system's reducer function. The props are as follows:
- url: Url linked to new element within SPA
- name: Text to display as name of link 
- linkClass: CSS class for button

For the routing component that is pre-built into this package please use as follows:
```javascript
    import { Routing } from 'react-global-light';

    const routes = [
        ...{
            id: [Number],
            path: [String],
            name: [String],
            component: [React.Component]
        }
    ];

    const App = ({ initialState }) => {
        return (
            <Routing initialState={ initialState } routes={ routes }>
                ...<Link url={ [String ]} name={ [String] } linkClass={[String] }/>
                // Children
            </Routing>
        );
    }
```

###### Food for thought
Could Mutation Observers make this better and able to have little user intervention?
How large of a chunk can a Mutation Observer reside over before performance starts taking a hit?

###### Contact Information
If you wish to help please feel free to reach out with the following:
- Email: [shafferchance@gmail.com](mailto:shafferchance@gmail.com)
- [Twitter](https://twitter.com/shafferchance)
- [LinkedIn](https://www.linkedin.com/in/chance-shaffer-2b1511128/)