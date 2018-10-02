import Component from './component.js';

export const renderDom = (root, component) => {
  document.getElementById(root).append(component._hiddenRender());
};

class HTMLDivElementWapper {
  constructor(element) {
    this.element = element;
  }

  addEventListener(event, listener) {
    this.element.addEventListener(event, listener);
    return this;
  }

  removeEventListener(event, listener) {
    this.element.removeEventListener(event, listener);
    return this;
  }

  click(listener) {
    return this.addEventListener('click', listener);
  }

  className(classes) {
    this.element.className = classes;
    return this;
  }

  style(style) {
    this.element.style = style;
    return this;
  }
}

const _genericAppend = (parent, child) => {
  if (child instanceof Component) parent.append(child._hiddenRender());
  else if (child instanceof HTMLDivElementWapper) parent.append(child.element);
  else parent.append(child);
};

export const div = (...children) => {
  const div = document.createElement('div');
  children.forEach(child => { _genericAppend(div, child); });
  return new HTMLDivElementWapper(div);
};

export const span = (...children) => {
  const span = document.createElement('span');
  children.forEach(child => { _genericAppend(span, child); });
  return new HTMLDivElementWapper(span);
};

export const ul = (list) => {
  const ul = document.createElement('ul');
  list.forEach(li => { _genericAppend(ul, li); });
  return new HTMLDivElementWapper(ul);
};

export const ol = (list) => {
  const ol = document.createElement('ol');
  list.forEach(li => { _genericAppend(ol, li); });
  return new HTMLDivElementWapper(ol);
};

export const li = (element) => {
  const li = document.createElement('li');
  _genericAppend(li, element);
  return new HTMLDivElementWapper(li);
};

export const input = (value, placeholder, readOnly, type = 'input') => {
  const input = document.createElement('input');
  input.value = value;
  input.placeholder = placeholder;
  input.readOnly = readOnly;
  input.type = type;
  return new HTMLDivElementWapper(input);
};

export const h1 = (text) => {
  const h1 = document.createElement('h1');
  const content = document.createTextNode(text);
  h1.append(content);
  return new HTMLDivElementWapper(h1);
};

export const h2 = (text) => {
  const h2 = document.createElement('h2');
  const content = document.createTextNode(text);
  h2.append(content);
  return new HTMLDivElementWapper(h2);
};

export const h3 = (text) => {
  const h3 = document.createElement('h3');
  const content = document.createTextNode(text);
  h3.append(content);
  return new HTMLDivElementWapper(h3);
};

export const text = (content) => {
  return document.createTextNode(content);
}

export const i = () => {
  const i = document.createElement('i');
  return new HTMLDivElementWapper(i);
}