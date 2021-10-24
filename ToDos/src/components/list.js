class List {
    render(tasks = []) {

        let parent = document.querySelector('body > div > div:nth-child(4) > ul');
    
        parent.innerHTML = '';
    
        let todosList = [...tasks];
        
        let filter = false;

        if (filter && filter !== 'all') {
            todosList = todos.filter((element) => {
                return element.status === filter;
            });
        }
        
    for(let i = 0; i < todosList.length; i++) {
            let todo = todosList[i];
            let li = document.createElement("li");
            let div = document.createElement("div");
            let input = document.createElement("input");
            let span = document.createElement("span");
            let button = document.createElement("button");

            button.onclick = function (event) {

                let element = event && event.currentTarget || event.target;
                
                console.dir(element);
            }
            
            div.classList.add('todo');
            
            input.setAttribute('type', 'checkbox');
            input.classList.add('toggle');
            
            span.innerHTML = `<div>${todo.name}</div>`;
            
            button.classList.add('destroy');
            
            div.append(input, span, button);
            
            li.appendChild(div);
            
            li.onclick = function () {
            li.classList.add('completed');
            }
            
            li.ondblclick = function () {
            li.classList.remove('completed');
            }
            
            li.onmouseover = function () {
            li.style.border = '1px solid green';
            }
    
            li.onmouseout = function () {
                li.style.border = '';
            }
            parent.appendChild(li);
        }
    }
}

export default List;