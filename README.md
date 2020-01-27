## Global Light
The goal here is provide someone with a lightweight solution that will work out of the box all while bringing a high level of customizability to the table.

#### Goals of the library
- Be lightweight and customizable
- Have minimal/negible performance cost
- Ensure that integration is easy
- Function with or without customization

#### Current Tasks
- [x] Bring over current code base
- [ ] ~~Make so single tag controls everything rather than dedicated file~~ Simplify props
- [x] Document code thoroughly (ish for now)
- [x] ~~Integrate into a routing library at some point~~ Routing is in ish...
- [ ] Integrate IndexedDB for serialization

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

This an example of how exactly to utilize the Context Container created
```javascript
    import { useCustContext } from 'react-light-global';

    const App = () => {
        // Use this form and follow rules of hooks
        const [{ [Property] }, use[Property]] = useCustContext();

        // Render function
    }
```
##### Router Sequence Diagram
<img src="data:image/svg+xml;base64,PHN2ZyBpZD0ibWVybWFpZC0xNTgwMTU2NTEwMjI2IiB3aWR0aD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMCUiIHN0eWxlPSJtYXgtd2lkdGg6NjUwcHg7IiB2aWV3Qm94PSItNTAgLTEwIDY1MCAzMDEiPjxzdHlsZT4NCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmxhYmVsIHsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOw0KICBjb2xvcjogIzMzMzsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5sYWJlbCB0ZXh0IHsNCiAgZmlsbDogIzMzMzsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5ub2RlIHJlY3QsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5ub2RlIGNpcmNsZSwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm5vZGUgZWxsaXBzZSwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm5vZGUgcG9seWdvbiwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm5vZGUgcGF0aCB7DQogIGZpbGw6ICNFQ0VDRkY7DQogIHN0cm9rZTogIzkzNzBEQjsNCiAgc3Ryb2tlLXdpZHRoOiAxcHg7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAubm9kZSAubGFiZWwgew0KICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAubm9kZS5jbGlja2FibGUgew0KICBjdXJzb3I6IHBvaW50ZXI7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuYXJyb3doZWFkUGF0aCB7DQogIGZpbGw6ICMzMzMzMzM7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZWRnZVBhdGggLnBhdGggew0KICBzdHJva2U6ICMzMzMzMzM7DQogIHN0cm9rZS13aWR0aDogMS41cHg7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZWRnZUxhYmVsIHsNCiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODsNCiAgdGV4dC1hbGlnbjogY2VudGVyOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmNsdXN0ZXIgcmVjdCB7DQogIGZpbGw6ICNmZmZmZGU7DQogIHN0cm9rZTogI2FhYWEzMzsNCiAgc3Ryb2tlLXdpZHRoOiAxcHg7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuY2x1c3RlciB0ZXh0IHsNCiAgZmlsbDogIzMzMzsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IGRpdi5tZXJtYWlkVG9vbHRpcCB7DQogIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCiAgdGV4dC1hbGlnbjogY2VudGVyOw0KICBtYXgtd2lkdGg6IDIwMHB4Ow0KICBwYWRkaW5nOiAycHg7DQogIGZvbnQtZmFtaWx5OiAndHJlYnVjaGV0IG1zJywgdmVyZGFuYSwgYXJpYWw7DQogIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTsNCiAgZm9udC1zaXplOiAxMnB4Ow0KICBiYWNrZ3JvdW5kOiAjZmZmZmRlOw0KICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYTMzOw0KICBib3JkZXItcmFkaXVzOiAycHg7DQogIHBvaW50ZXItZXZlbnRzOiBub25lOw0KICB6LWluZGV4OiAxMDA7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuYWN0b3Igew0KICBzdHJva2U6ICNDQ0NDRkY7DQogIGZpbGw6ICNFQ0VDRkY7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiB0ZXh0LmFjdG9yIHsNCiAgZmlsbDogYmxhY2s7DQogIHN0cm9rZTogbm9uZTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3Rvci1saW5lIHsNCiAgc3Ryb2tlOiBncmV5OyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm1lc3NhZ2VMaW5lMCB7DQogIHN0cm9rZS13aWR0aDogMS41Ow0KICBzdHJva2UtZGFzaGFycmF5OiAnMiAyJzsNCiAgc3Ryb2tlOiAjMzMzOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm1lc3NhZ2VMaW5lMSB7DQogIHN0cm9rZS13aWR0aDogMS41Ow0KICBzdHJva2UtZGFzaGFycmF5OiAnMiAyJzsNCiAgc3Ryb2tlOiAjMzMzOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgI2Fycm93aGVhZCB7DQogIGZpbGw6ICMzMzM7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuc2VxdWVuY2VOdW1iZXIgew0KICBmaWxsOiB3aGl0ZTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICNzZXF1ZW5jZW51bWJlciB7DQogIGZpbGw6ICMzMzM7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAjY3Jvc3NoZWFkIHBhdGggew0KICBmaWxsOiAjMzMzICFpbXBvcnRhbnQ7DQogIHN0cm9rZTogIzMzMyAhaW1wb3J0YW50OyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm1lc3NhZ2VUZXh0IHsNCiAgZmlsbDogIzMzMzsNCiAgc3Ryb2tlOiBub25lOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmxhYmVsQm94IHsNCiAgc3Ryb2tlOiAjQ0NDQ0ZGOw0KICBmaWxsOiAjRUNFQ0ZGOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmxhYmVsVGV4dCB7DQogIGZpbGw6IGJsYWNrOw0KICBzdHJva2U6IG5vbmU7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAubG9vcFRleHQgew0KICBmaWxsOiBibGFjazsNCiAgc3Ryb2tlOiBub25lOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmxvb3BMaW5lIHsNCiAgc3Ryb2tlLXdpZHRoOiAyOw0KICBzdHJva2UtZGFzaGFycmF5OiAnMiAyJzsNCiAgc3Ryb2tlOiAjQ0NDQ0ZGOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm5vdGUgew0KICBzdHJva2U6ICNhYWFhMzM7DQogIGZpbGw6ICNmZmY1YWQ7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAubm90ZVRleHQgew0KICBmaWxsOiBibGFjazsNCiAgc3Ryb2tlOiBub25lOw0KICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsOw0KICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSk7DQogIGZvbnQtc2l6ZTogMTRweDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmF0aW9uMCB7DQogIGZpbGw6ICNmNGY0ZjQ7DQogIHN0cm9rZTogIzY2NjsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmF0aW9uMSB7DQogIGZpbGw6ICNmNGY0ZjQ7DQogIHN0cm9rZTogIzY2NjsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmF0aW9uMiB7DQogIGZpbGw6ICNmNGY0ZjQ7DQogIHN0cm9rZTogIzY2NjsgfQ0KDQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLm1lcm1haWQtbWFpbi1mb250IHsNCiAgZm9udC1mYW1pbHk6ICJ0cmVidWNoZXQgbXMiLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb24gew0KICBzdHJva2U6IG5vbmU7DQogIG9wYWNpdHk6IDAuMjsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5zZWN0aW9uMCB7DQogIGZpbGw6IHJnYmEoMTAyLCAxMDIsIDI1NSwgMC40OSk7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuc2VjdGlvbjIgew0KICBmaWxsOiAjZmZmNDAwOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb24xLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuc2VjdGlvbjMgew0KICBmaWxsOiB3aGl0ZTsNCiAgb3BhY2l0eTogMC4yOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb25UaXRsZTAgew0KICBmaWxsOiAjMzMzOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb25UaXRsZTEgew0KICBmaWxsOiAjMzMzOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb25UaXRsZTIgew0KICBmaWxsOiAjMzMzOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb25UaXRsZTMgew0KICBmaWxsOiAjMzMzOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNlY3Rpb25UaXRsZSB7DQogIHRleHQtYW5jaG9yOiBzdGFydDsNCiAgZm9udC1zaXplOiAxMXB4Ow0KICB0ZXh0LWhlaWdodDogMTRweDsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZ3JpZCAudGljayB7DQogIHN0cm9rZTogbGlnaHRncmV5Ow0KICBvcGFjaXR5OiAwLjg7DQogIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfQ0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAgIC5ncmlkIC50aWNrIHRleHQgew0KICAgIGZvbnQtZmFtaWx5OiAndHJlYnVjaGV0IG1zJywgdmVyZGFuYSwgYXJpYWw7DQogICAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmdyaWQgcGF0aCB7DQogIHN0cm9rZS13aWR0aDogMDsgfQ0KDQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRvZGF5IHsNCiAgZmlsbDogbm9uZTsNCiAgc3Ryb2tlOiByZWQ7DQogIHN0cm9rZS13aWR0aDogMnB4OyB9DQoNCg0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrIHsNCiAgc3Ryb2tlLXdpZHRoOiAyOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRhc2tUZXh0IHsNCiAgdGV4dC1hbmNob3I6IG1pZGRsZTsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRhc2tUZXh0Om5vdChbZm9udC1zaXplXSkgew0KICBmb250LXNpemU6IDExcHg7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAudGFza1RleHRPdXRzaWRlUmlnaHQgew0KICBmaWxsOiBibGFjazsNCiAgdGV4dC1hbmNob3I6IHN0YXJ0Ow0KICBmb250LXNpemU6IDExcHg7DQogIGZvbnQtZmFtaWx5OiAndHJlYnVjaGV0IG1zJywgdmVyZGFuYSwgYXJpYWw7DQogIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dE91dHNpZGVMZWZ0IHsNCiAgZmlsbDogYmxhY2s7DQogIHRleHQtYW5jaG9yOiBlbmQ7DQogIGZvbnQtc2l6ZTogMTFweDsgfQ0KDQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRhc2suY2xpY2thYmxlIHsNCiAgY3Vyc29yOiBwb2ludGVyOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRhc2tUZXh0LmNsaWNrYWJsZSB7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgZmlsbDogIzAwMzE2MyAhaW1wb3J0YW50Ow0KICBmb250LXdlaWdodDogYm9sZDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dE91dHNpZGVMZWZ0LmNsaWNrYWJsZSB7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgZmlsbDogIzAwMzE2MyAhaW1wb3J0YW50Ow0KICBmb250LXdlaWdodDogYm9sZDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dE91dHNpZGVSaWdodC5jbGlja2FibGUgew0KICBjdXJzb3I6IHBvaW50ZXI7DQogIGZpbGw6ICMwMDMxNjMgIWltcG9ydGFudDsNCiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH0NCg0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dDAsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dDEsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dDIsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dDMgew0KICBmaWxsOiB3aGl0ZTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrMCwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRhc2sxLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAudGFzazIsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrMyB7DQogIGZpbGw6ICM4YTkwZGQ7DQogIHN0cm9rZTogIzUzNGZiYzsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dE91dHNpZGUwLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAudGFza1RleHRPdXRzaWRlMiB7DQogIGZpbGw6IGJsYWNrOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnRhc2tUZXh0T3V0c2lkZTEsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50YXNrVGV4dE91dHNpZGUzIHsNCiAgZmlsbDogYmxhY2s7IH0NCg0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmUwLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuYWN0aXZlMSwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZTIsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmUzIHsNCiAgZmlsbDogI2JmYzdmZjsNCiAgc3Ryb2tlOiAjNTM0ZmJjOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZVRleHQwLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuYWN0aXZlVGV4dDEsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmVUZXh0MiwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZVRleHQzIHsNCiAgZmlsbDogYmxhY2sgIWltcG9ydGFudDsgfQ0KDQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmRvbmUwLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZG9uZTEsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5kb25lMiwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmRvbmUzIHsNCiAgc3Ryb2tlOiBncmV5Ow0KICBmaWxsOiBsaWdodGdyZXk7DQogIHN0cm9rZS13aWR0aDogMjsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5kb25lVGV4dDAsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5kb25lVGV4dDEsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5kb25lVGV4dDIsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5kb25lVGV4dDMgew0KICBmaWxsOiBibGFjayAhaW1wb3J0YW50OyB9DQoNCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuY3JpdDAsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5jcml0MSwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmNyaXQyLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuY3JpdDMgew0KICBzdHJva2U6ICNmZjg4ODg7DQogIGZpbGw6IHJlZDsNCiAgc3Ryb2tlLXdpZHRoOiAyOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZUNyaXQwLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuYWN0aXZlQ3JpdDEsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5hY3RpdmVDcml0MiwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZUNyaXQzIHsNCiAgc3Ryb2tlOiAjZmY4ODg4Ow0KICBmaWxsOiAjYmZjN2ZmOw0KICBzdHJva2Utd2lkdGg6IDI7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZG9uZUNyaXQwLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZG9uZUNyaXQxLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZG9uZUNyaXQyLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZG9uZUNyaXQzIHsNCiAgc3Ryb2tlOiAjZmY4ODg4Ow0KICBmaWxsOiBsaWdodGdyZXk7DQogIHN0cm9rZS13aWR0aDogMjsNCiAgY3Vyc29yOiBwb2ludGVyOw0KICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAubWlsZXN0b25lIHsNCiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDAuOCwgMC44KTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5taWxlc3RvbmVUZXh0IHsNCiAgZm9udC1zdHlsZTogaXRhbGljOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmRvbmVDcml0VGV4dDAsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5kb25lQ3JpdFRleHQxLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuZG9uZUNyaXRUZXh0MiwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmRvbmVDcml0VGV4dDMgew0KICBmaWxsOiBibGFjayAhaW1wb3J0YW50OyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZUNyaXRUZXh0MCwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZUNyaXRUZXh0MSwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZUNyaXRUZXh0MiwNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmFjdGl2ZUNyaXRUZXh0MyB7DQogIGZpbGw6IGJsYWNrICFpbXBvcnRhbnQ7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAudGl0bGVUZXh0IHsNCiAgdGV4dC1hbmNob3I6IG1pZGRsZTsNCiAgZm9udC1zaXplOiAxOHB4Ow0KICBmaWxsOiBibGFjazsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgZy5jbGFzc0dyb3VwIHRleHQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6IG5vbmU7DQogIGZvbnQtZmFtaWx5OiAndHJlYnVjaGV0IG1zJywgdmVyZGFuYSwgYXJpYWw7DQogIGZvbnQtZmFtaWx5OiB2YXIoLS1tZXJtYWlkLWZvbnQtZmFtaWx5KTsNCiAgZm9udC1zaXplOiAxMHB4OyB9DQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICAgZy5jbGFzc0dyb3VwIHRleHQgLnRpdGxlIHsNCiAgICBmb250LXdlaWdodDogYm9sZGVyOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgZy5jbGlja2FibGUgew0KICBjdXJzb3I6IHBvaW50ZXI7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiBnLmNsYXNzR3JvdXAgcmVjdCB7DQogIGZpbGw6ICNFQ0VDRkY7DQogIHN0cm9rZTogIzkzNzBEQjsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IGcuY2xhc3NHcm91cCBsaW5lIHsNCiAgc3Ryb2tlOiAjOTM3MERCOw0KICBzdHJva2Utd2lkdGg6IDE7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuY2xhc3NMYWJlbCAuYm94IHsNCiAgc3Ryb2tlOiBub25lOw0KICBzdHJva2Utd2lkdGg6IDA7DQogIGZpbGw6ICNFQ0VDRkY7DQogIG9wYWNpdHk6IDAuNTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5jbGFzc0xhYmVsIC5sYWJlbCB7DQogIGZpbGw6ICM5MzcwREI7DQogIGZvbnQtc2l6ZTogMTBweDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5yZWxhdGlvbiB7DQogIHN0cm9rZTogIzkzNzBEQjsNCiAgc3Ryb2tlLXdpZHRoOiAxOw0KICBmaWxsOiBub25lOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLmRhc2hlZC1saW5lIHsNCiAgc3Ryb2tlLWRhc2hhcnJheTogMzsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICNjb21wb3NpdGlvblN0YXJ0IHsNCiAgZmlsbDogIzkzNzBEQjsNCiAgc3Ryb2tlOiAjOTM3MERCOw0KICBzdHJva2Utd2lkdGg6IDE7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAjY29tcG9zaXRpb25FbmQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6ICM5MzcwREI7DQogIHN0cm9rZS13aWR0aDogMTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICNhZ2dyZWdhdGlvblN0YXJ0IHsNCiAgZmlsbDogI0VDRUNGRjsNCiAgc3Ryb2tlOiAjOTM3MERCOw0KICBzdHJva2Utd2lkdGg6IDE7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAjYWdncmVnYXRpb25FbmQgew0KICBmaWxsOiAjRUNFQ0ZGOw0KICBzdHJva2U6ICM5MzcwREI7DQogIHN0cm9rZS13aWR0aDogMTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICNkZXBlbmRlbmN5U3RhcnQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6ICM5MzcwREI7DQogIHN0cm9rZS13aWR0aDogMTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICNkZXBlbmRlbmN5RW5kIHsNCiAgZmlsbDogIzkzNzBEQjsNCiAgc3Ryb2tlOiAjOTM3MERCOw0KICBzdHJva2Utd2lkdGg6IDE7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAjZXh0ZW5zaW9uU3RhcnQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6ICM5MzcwREI7DQogIHN0cm9rZS13aWR0aDogMTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICNleHRlbnNpb25FbmQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6ICM5MzcwREI7DQogIHN0cm9rZS13aWR0aDogMTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5jb21taXQtaWQsDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5jb21taXQtbXNnLA0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuYnJhbmNoLWxhYmVsIHsNCiAgZmlsbDogbGlnaHRncmV5Ow0KICBjb2xvcjogbGlnaHRncmV5Ow0KICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsOw0KICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSk7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAucGllVGl0bGVUZXh0IHsNCiAgdGV4dC1hbmNob3I6IG1pZGRsZTsNCiAgZm9udC1zaXplOiAyNXB4Ow0KICBmaWxsOiBibGFjazsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnNsaWNlIHsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgZy5zdGF0ZUdyb3VwIHRleHQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6IG5vbmU7DQogIGZvbnQtc2l6ZTogMTBweDsNCiAgZm9udC1mYW1pbHk6ICd0cmVidWNoZXQgbXMnLCB2ZXJkYW5hLCBhcmlhbDsNCiAgZm9udC1mYW1pbHk6IHZhcigtLW1lcm1haWQtZm9udC1mYW1pbHkpOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgZy5zdGF0ZUdyb3VwIHRleHQgew0KICBmaWxsOiAjOTM3MERCOw0KICBzdHJva2U6IG5vbmU7DQogIGZvbnQtc2l6ZTogMTBweDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IGcuc3RhdGVHcm91cCAuc3RhdGUtdGl0bGUgew0KICBmb250LXdlaWdodDogYm9sZGVyOw0KICBmaWxsOiBibGFjazsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IGcuc3RhdGVHcm91cCByZWN0IHsNCiAgZmlsbDogI0VDRUNGRjsNCiAgc3Ryb2tlOiAjOTM3MERCOyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgZy5zdGF0ZUdyb3VwIGxpbmUgew0KICBzdHJva2U6ICM5MzcwREI7DQogIHN0cm9rZS13aWR0aDogMTsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC50cmFuc2l0aW9uIHsNCiAgc3Ryb2tlOiAjOTM3MERCOw0KICBzdHJva2Utd2lkdGg6IDE7DQogIGZpbGw6IG5vbmU7IH0NCg0KI21lcm1haWQtMTU4MDE1NjUxMDIyNiAuc3RhdGVHcm91cCAuY29tcG9zaXQgew0KICBmaWxsOiB3aGl0ZTsNCiAgYm9yZGVyLWJvdHRvbTogMXB4OyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnN0YXRlR3JvdXAgLmFsdC1jb21wb3NpdCB7DQogIGZpbGw6ICNlMGUwZTA7DQogIGJvcmRlci1ib3R0b206IDFweDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5zdGF0ZS1ub3RlIHsNCiAgc3Ryb2tlOiAjYWFhYTMzOw0KICBmaWxsOiAjZmZmNWFkOyB9DQojbWVybWFpZC0xNTgwMTU2NTEwMjI2ICAgLnN0YXRlLW5vdGUgdGV4dCB7DQogICAgZmlsbDogYmxhY2s7DQogICAgc3Ryb2tlOiBub25lOw0KICAgIGZvbnQtc2l6ZTogMTBweDsgfQ0KDQojbWVybWFpZC0xNTgwMTU2NTEwMjI2IC5zdGF0ZUxhYmVsIC5ib3ggew0KICBzdHJva2U6IG5vbmU7DQogIHN0cm9rZS13aWR0aDogMDsNCiAgZmlsbDogI0VDRUNGRjsNCiAgb3BhY2l0eTogMC41OyB9DQoNCiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgLnN0YXRlTGFiZWwgdGV4dCB7DQogIGZpbGw6IGJsYWNrOw0KICBmb250LXNpemU6IDEwcHg7DQogIGZvbnQtd2VpZ2h0OiBib2xkOw0KICBmb250LWZhbWlseTogJ3RyZWJ1Y2hldCBtcycsIHZlcmRhbmEsIGFyaWFsOw0KICBmb250LWZhbWlseTogdmFyKC0tbWVybWFpZC1mb250LWZhbWlseSk7IH0NCg0KOnJvb3Qgew0KICAtLW1lcm1haWQtZm9udC1mYW1pbHk6ICcidHJlYnVjaGV0IG1zIiwgdmVyZGFuYSwgYXJpYWwnOw0KICAtLW1lcm1haWQtZm9udC1mYW1pbHk6ICJDb21pYyBTYW5zIE1TIiwgIkNvbWljIFNhbnMiLCBjdXJzaXZlOyB9DQoNCjpyb290IHsgLS1tZXJtYWlkLWZvbnQtZmFtaWx5OiAidHJlYnVjaGV0IG1zIiwgdmVyZGFuYSwgYXJpYWw7fTwvc3R5bGU+PHN0eWxlPiNtZXJtYWlkLTE1ODAxNTY1MTAyMjYgew0KICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7DQogICAgZm9udDogOw0KICB9PC9zdHlsZT48Zz48L2c+PGc+PGxpbmUgaWQ9ImFjdG9yMCIgeDE9Ijc1IiB5MT0iNSIgeDI9Ijc1IiB5Mj0iMjkwIiBjbGFzcz0iYWN0b3ItbGluZSIgc3Ryb2tlLXdpZHRoPSIwLjVweCIgc3Ryb2tlPSIjOTk5Ij48L2xpbmU+PHJlY3QgeD0iMCIgeT0iMCIgZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjNjY2IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjY1IiByeD0iMyIgcnk9IjMiIGNsYXNzPSJhY3RvciI+PC9yZWN0Pjx0ZXh0IHg9Ijc1IiB5PSIzMi41IiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGNsYXNzPSJhY3RvciI+PHRzcGFuIHg9Ijc1IiBkeT0iMCI+Q3VzdG9tQ29udGV4dDwvdHNwYW4+PC90ZXh0PjwvZz48Zz48bGluZSBpZD0iYWN0b3IxIiB4MT0iMjc1IiB5MT0iNSIgeDI9IjI3NSIgeTI9IjI5MCIgY2xhc3M9ImFjdG9yLWxpbmUiIHN0cm9rZS13aWR0aD0iMC41cHgiIHN0cm9rZT0iIzk5OSI+PC9saW5lPjxyZWN0IHg9IjIwMCIgeT0iMCIgZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjNjY2IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjY1IiByeD0iMyIgcnk9IjMiIGNsYXNzPSJhY3RvciI+PC9yZWN0Pjx0ZXh0IHg9IjI3NSIgeT0iMzIuNSIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBjbGFzcz0iYWN0b3IiPjx0c3BhbiB4PSIyNzUiIGR5PSIwIj5DdXN0b21TdG9yZTwvdHNwYW4+PC90ZXh0PjwvZz48Zz48bGluZSBpZD0iYWN0b3IyIiB4MT0iNDc1IiB5MT0iNSIgeDI9IjQ3NSIgeTI9IjI5MCIgY2xhc3M9ImFjdG9yLWxpbmUiIHN0cm9rZS13aWR0aD0iMC41cHgiIHN0cm9rZT0iIzk5OSI+PC9saW5lPjxyZWN0IHg9IjQwMCIgeT0iMCIgZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjNjY2IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjY1IiByeD0iMyIgcnk9IjMiIGNsYXNzPSJhY3RvciI+PC9yZWN0Pjx0ZXh0IHg9IjQ3NSIgeT0iMzIuNSIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBjbGFzcz0iYWN0b3IiPjx0c3BhbiB4PSI0NzUiIGR5PSIwIj5Db21wb25lbnQ8L3RzcGFuPjwvdGV4dD48L2c+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3doZWFkIiByZWZYPSI1IiByZWZZPSIyIiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI0IiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0gMCwwIFYgNCBMNiwyIFoiPjwvcGF0aD48L21hcmtlcj48L2RlZnM+PGRlZnM+PG1hcmtlciBpZD0iY3Jvc3NoZWFkIiBtYXJrZXJXaWR0aD0iMTUiIG1hcmtlckhlaWdodD0iOCIgb3JpZW50PSJhdXRvIiByZWZYPSIxNiIgcmVmWT0iNCI+PHBhdGggZmlsbD0iYmxhY2siIHN0cm9rZT0iIzAwMDAwMCIgc3R5bGU9InN0cm9rZS1kYXNoYXJyYXk6IDBweCwgMHB4OyIgc3Ryb2tlLXdpZHRoPSIxcHgiIGQ9Ik0gOSwyIFYgNiBMMTYsNCBaIj48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMHB4LCAwcHg7IiBzdHJva2Utd2lkdGg9IjFweCIgZD0iTSAwLDEgTCA2LDcgTSA2LDEgTCAwLDciPjwvcGF0aD48L21hcmtlcj48L2RlZnM+PGRlZnM+PG1hcmtlciBpZD0ic2VxdWVuY2VudW1iZXIiIHJlZlg9IjE1IiByZWZZPSIxNSIgbWFya2VyV2lkdGg9IjYwIiBtYXJrZXJIZWlnaHQ9IjQwIiBvcmllbnQ9ImF1dG8iPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjYiPjwvY2lyY2xlPjwvbWFya2VyPjwvZGVmcz48Zz48dGV4dCB4PSIxNzUiIHk9IjkzIiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiIGNsYXNzPSJtZXNzYWdlVGV4dCI+V2hhdCBpcyB5b3VyIGluaXRpYWwgc3RhdGU/PC90ZXh0PjxsaW5lIHgxPSI3NSIgeTE9IjEwMCIgeDI9IjI3NSIgeTI9IjEwMCIgY2xhc3M9Im1lc3NhZ2VMaW5lMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImJsYWNrIiBzdHlsZT0iZmlsbDogbm9uZTsiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkKSI+PC9saW5lPjwvZz48Zz48L2c+PGc+PHRleHQgeD0iMzc3LjUiIHk9IjEyOCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBjbGFzcz0ibWVzc2FnZVRleHQiPldoYXQgaXMgdG8gYmUgc3RvcmVkPzwvdGV4dD48bGluZSB4MT0iMjgwIiB5MT0iMTM1IiB4Mj0iNDc1IiB5Mj0iMTM1IiBjbGFzcz0ibWVzc2FnZUxpbmUwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iYmxhY2siIHN0eWxlPSJmaWxsOiBub25lOyIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIj48L2xpbmU+PC9nPjxnPjwvZz48Zz48dGV4dCB4PSIzNzUiIHk9IjE2MyIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBjbGFzcz0ibWVzc2FnZVRleHQiPlJlZHVjZXIgYW5kIEluaXRpYWwgU3RhdGU8L3RleHQ+PGxpbmUgeDE9IjQ3MCIgeTE9IjE3MCIgeDI9IjI4MCIgeTI9IjE3MCIgY2xhc3M9Im1lc3NhZ2VMaW5lMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImJsYWNrIiBzdHlsZT0iZmlsbDogbm9uZTsiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkKSI+PC9saW5lPjwvZz48Zz48dGV4dCB4PSIzNzUiIHk9IjE5OCIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBjbGFzcz0ibWVzc2FnZVRleHQiPldhaXRpbmcgZm9yIENvbW1hbmQ/PC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSIyMDUiIHgyPSI0NzAiIHkyPSIyMDUiIHN0eWxlPSJzdHJva2UtZGFzaGFycmF5OiAzcHgsIDNweDsgZmlsbDogbm9uZTsiIGNsYXNzPSJtZXNzYWdlTGluZTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJibGFjayIgbWFya2VyLWVuZD0idXJsKCNjcm9zc2hlYWQpIj48L2xpbmU+PC9nPjxnPjxyZWN0IHg9IjAiIHk9IjIyNSIgZmlsbD0iI2VhZWFlYSIgc3Ryb2tlPSIjNjY2IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjY1IiByeD0iMyIgcnk9IjMiIGNsYXNzPSJhY3RvciI+PC9yZWN0Pjx0ZXh0IHg9Ijc1IiB5PSIyNTcuNSIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBjbGFzcz0iYWN0b3IiPjx0c3BhbiB4PSI3NSIgZHk9IjAiPkN1c3RvbUNvbnRleHQ8L3RzcGFuPjwvdGV4dD48L2c+PGc+PHJlY3QgeD0iMjAwIiB5PSIyMjUiIGZpbGw9IiNlYWVhZWEiIHN0cm9rZT0iIzY2NiIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI2NSIgcng9IjMiIHJ5PSIzIiBjbGFzcz0iYWN0b3IiPjwvcmVjdD48dGV4dCB4PSIyNzUiIHk9IjI1Ny41IiBzdHlsZT0idGV4dC1hbmNob3I6IG1pZGRsZTsiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGNsYXNzPSJhY3RvciI+PHRzcGFuIHg9IjI3NSIgZHk9IjAiPkN1c3RvbVN0b3JlPC90c3Bhbj48L3RleHQ+PC9nPjxnPjxyZWN0IHg9IjQwMCIgeT0iMjI1IiBmaWxsPSIjZWFlYWVhIiBzdHJva2U9IiM2NjYiIHdpZHRoPSIxNTAiIGhlaWdodD0iNjUiIHJ4PSIzIiByeT0iMyIgY2xhc3M9ImFjdG9yIj48L3JlY3Q+PHRleHQgeD0iNDc1IiB5PSIyNTcuNSIgc3R5bGU9InRleHQtYW5jaG9yOiBtaWRkbGU7IiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBjbGFzcz0iYWN0b3IiPjx0c3BhbiB4PSI0NzUiIGR5PSIwIj5Db21wb25lbnQ8L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+">

###### To utilize the Router
The router only needs routes passed to it. The rest will be handled automatically by the component. There 
will eventually be Route objects to go into the Routing component. Although, the navbar component will 
always be up to the user and accessible through the `useCustomContext()` hook within a 
child element of the `Routing` component. 

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