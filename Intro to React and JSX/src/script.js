const rootElement = document.getElementById('root')


const root = ReactDOM.createRoot(rootElement)


// const reactElement = React.createElement('h1', {} , "Hello from ReactJS")


const reactElement = <header><h1>
Hello from ReactJS!!!
</h1></header>

root.render(reactElement)