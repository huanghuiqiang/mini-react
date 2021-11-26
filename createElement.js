// const element = (
//     <div id="foo">
//         <a>bar</a>
//         <b/>
//     </div>
// )

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === 'object'
                ? child
                : createTextElement(child)    
            )
        }
    }
}

function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

// const element = React.createElement(
//     'div',
//     {id: 'foo'}, 
//     React.createElement('a', null, 'bar'), 
//     React.createElement('b')
// )

function render(element, container) {
    const dom = document.createElement(element.type);

    element.props.children.forEach(child => 
        render(child, dom)    
    )

    container.appendChild(dom);
}

const Didact = {
    createElement,
    render
}

const element = Didact.createElement(
    'div',
    {id: 'foo'},
    Didact.createElement('a', null, 'bar'),
    Didact.createElement('b')
)

console.log(element);

const container = document.getElementById('root');
// ReactDOM.render(element, container);
Didact.render(element, container)
