- [1] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Type checkout our Proptypes in React helps ensure the data being passed around is valid and allows us to find bugs within our code.



- [2] Describe a life-cycle event in React?

The react lifecycle can help to free up resources within our application.  Moutning, Updating, and Unmounting are similar to birth, growing up, and death.  When we first want to render a component, we can use componentDidMount(), which mounts after the component has been rendered.  If that component is no longer necesary to our apllication, we can use componentWillUnmount().




- [3] Explain the details of a Higher Order Component?

A higher order component takes in component(s) as arguments and renders a new component.  It is a pattern in React.  Using HOC's allows us to create logic in one place and pass it throughout the application with props, keeping code DRY.



- [4] What are three different ways to style components in React? Explain some of the benefits of each.

In React we can you plain CSS, insline styles and styled components.  Styled Components allow props to be passed between the components making use of HOC and making small adjustments as needed.  Inline styles have the benefit of allowing your styles to not leak throughout the application to other components.  CSS is benificial in allow us to abstract away our code into seperate files away from the .jk code and helps to keep things neat and organized. 