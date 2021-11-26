/**
 * jsx 通过React.createElement 方法转换为element，
 * render方法，将element通过document.createElement方法，转换为dom节点。
 */

// const element = <h1 title="foo">Hello</h1>

// const element = React.createElement(
//     "h1",
//     { title: "foo" },
//     "Hello"
//   )

const element = {
    type: "h1",
    props: {
      title: "foo",
      children: "Hello",
    },
}


const container = document.getElementById("root")


// ReactDOM.render(element, container)
const node = document.createElement(element.type);
node['title'] = element.props.title;

const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

node.appendChild(text);
container.appendChild(node);