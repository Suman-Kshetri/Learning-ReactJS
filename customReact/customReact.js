function customRender(reactElement, container) {
    /*
    //a simplified custom function customRender that mimics rendering a basic React-like element into a DOM container. 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */
    //a more generic customRender function that can handle nested children and arrays of children.
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop == 'children') {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type : 'p',
    props: {
        href: 'http://google.com',
        target: '_blank',
    },
    children: 'Click me to go to google',
}


const mainConatainer = document.querySelector('#root');

customRender(reactElement, mainConatainer);