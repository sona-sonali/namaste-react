/**
 * 
 * <div id="parent">
 *    <div id="child1">
 *     <h1>I am a H1 tag</h1>
 *     <h2>I am a H2 tag</h2>
 *    </div>
 *    <div id="child2">
 *     <h1>I am a H1 tag</h1>
 *     <h2>I am a H2 tag</h2>
 *    </div>
 * </div>
 * 
 * convert the above html code to react
 * 
 */

const parent = React.createElement
(
    "div",
    {id: "parent"},
    [React.createElement
    (
        "div",
        {id: "child1"},
        [React.createElement("h1", {}, "I am a H1 tag"), React.createElement("h2", {}, "I am a H2 tag")]
    ),
    React.createElement
    (
        "div",
        {id: "child1"},
        [React.createElement("h1", {}, "I am a H1 tag"), React.createElement("h2", {}, "I am a H2 tag")]
    )]
)

const heading = React.createElement
(
    "h1", 
    {id: "heading", xyz: "abc"}, // attributes of h1 
    "Hello World From React" // children
    );
    console.log(parent) // returns object of type h1 with props. props is children and attribute

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)  // render method is responsible for take the heading object to an h1 tag put it in the root