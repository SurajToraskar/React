function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(let prop in reactElement.props){
      if(prop==="children")continue;
      domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement)
}




let reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google",
};

const mainContainer=document.getElementById("root");

customRender(reactElement,mainContainer)
