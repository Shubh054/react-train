
console.log('parent :');

const parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"child"},"I am an H1 tag"),
        React.createElement("h2",{id:"child"},"I am an H2 tag")
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"child"},"I am an H1 tag"),
        React.createElement("h2",{id:"child"},"I am an H2 tag")
    ])
])
console.log('parent :', parent);

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(parent);