
let container = document.getElementById("root")
function Header({ text }) {
    // return <h1>{text} World🚀</h1>
    return <h1>{text ? text : "Hello"}</h1>
}

function HomePage() {
    const [likes, setLikes] = React.useState(0);
    let fruits = ["apple", "manggo", "cherry"];
    let handleClick = () => {
        setLikes(likes + 1)
    }
    return (
        <div>
            <Header text="Hello 1" />
            <Header text="Hello 2" />
            <Header />
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={()=>setLikes(likes+1)}>Likes ({likes})</button>
            {/* <button onClick={handleClick}>Likes ({likes})</button> */}

        </div>
    )
}
ReactDOM.render(<HomePage />, container)