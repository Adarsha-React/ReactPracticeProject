# ReactPracticeProject

### Live demo - https://reactpracticeproj.netlify.app/

React - useMemo and useCallback (optimization techniques) 🚀

Facebook developers already made react super fast with React Fiber (Reconciliation process).

Along with it, bundlers (webpack/parcel/vite, etc.,) will do their job to make application fast but as a "React Developer" what are we doing to make React application even more fast, isn't it friends?

Yes, these two hooks are used to optimize the application to next level by skipping the calculation when there is no need of huge re-calculation (👉this is the place where React developers job comes into picture)

But it took me like more than a week to digest/analyze these two hooks, I was trying to understand when to use these two hooks?

Sometime, you will ended like both syntax are same and both are doing same job 😃

👉 As per React documentation

useMemo ➡ returns memoized value

useCallback ➡ returns memoized function

I would like to say, you can write awesome code if you understand inner things properly.

🔷 useMemo

1️⃣ this hook is mainly used to cache/save the result of a function when it is executed.

2️⃣ this hook accept two parameters (function and dependency array)

      Function will be executed based on the dependency array list and result will be saved.

3️⃣ Decide the dependency array list (most important) and add them to execute time taking functions only when these dependencies are updated not on all re-renders when other states or props updated.

🔷 useCallback

React - Important React hooks - used by most of the developers 🚀

🔷 What are hooks in React?

Hooks are just normal Javascript functions in React.

As a React developer, I would say we must have proper knowledge and use cases of these hooks.

1️⃣ useState

      📍  It is used to create local state variables and state management.

      📍  It returns an array - variable to hold the value and to change the value of this variable.

      📍  example - const [counter, setCounter] = useState(0);

2️⃣ useEffect

      📍  It is used for handling side effects like fetching the data, subscribing to an event etc.,

      📍  If something should happen after initial render then add them into this hook.

      📍   useEffect(function () {

             fetchData();

}, [])

      📍    Empty array - the function will be executed after first initial render.

      📍    [counter] - if counter state variable mentioned in array list, the function will be executed every time when counter variable updated.

3️⃣ useRef

     📍    This hook allows us to save/retain values between renders.

     📍    It stores mutable value that does not cause a re-render when it is updated.

     📍    It helps us to access a DOM element directly.

4️⃣ useMemo

     📍    this hook returns the momoized value, this value can be used when there no update in the input values. So it optimize the performance.

5️⃣ useCallback

     📍    this hook returns the momoized function which can be executed later only whenever it is needed, this is also a one of the optimization technique.

6️⃣ useContext

     📍   this hook is used to fetch the data from React context.

     📍   React context is created by createContext API and provided this to higher component and consumer can use "useContext" to get the data.

If you want to know more about these hooks, please check my previous posts. I have explained all these hooks in details with examples.

🔷 Also, we can create our own custom hooks.

Example, fetch data using any API end point.

useFetch ➖

✔ It accepts any URL and returns data, loading status and error if it failed to fetch the data.

✔

Keep learning 🙂

Cheers,

Adarsha 🚀
