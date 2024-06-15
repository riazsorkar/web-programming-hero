const addList = document.getElementById(listItem);

const item = document.createElement(li);

item.innerHTML(`
<li> Call Me </li>
`);

addList.appendChild(item);