- What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes is used for type checking in React apps. It will check props passed through components against the ones that were defined
by the developer issuing warning if they did not match. If we didn't check what data we are passing & receiving through props we can easily
break our app, therefore having a safeguard as PropTypes feels like a must.

- Describe a life-cycle event in React?

Life-cycle events are special events that each component can have. Using these events allow developers to hook in to the views when specific
events happen, for example when the component first renders (mounts), or when it unmounts, or gets updated and so on.

- Explain the details of a Higher Order Component?

HOC is a function, that takes a component as argument and returns a new component. The main purpose of a higher-order component in React 
is to share common functionality between components without repeating code.

- What are three different ways to style components in React? Explain some of the benefits of each.

1. Inline CSS : easy to understand what styles each component has and how it's going to be represented visually.

2. Preprocessors : extends CSS with dynamic behaviour, such as variables, mixins & functions.

3. Styled Components (❤️) : allows to add CSS properties to components the same way we would normally write CSS.
