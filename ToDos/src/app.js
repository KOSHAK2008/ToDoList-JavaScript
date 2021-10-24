import tasks from './components/tasks';
import bar from './components/bar';
import List from './components/list';

tasks.add({ name: 'task1', key: 1, status: 'overdue' });
tasks.add({ name: 'task2', key: 2, status: 'overdue' });
tasks.add({ name: 'task3', key: 3, status: 'done' });
tasks.add({ name: 'task4', key: 4, status: 'active' });
tasks.add({ name: 'task5', key: 5, status: 'active' });
tasks.add({ name: 'task6', key: 6, status: 'active' });
tasks.add({ name: 'task7', key: 7, status: 'active' });

class App {
    bar = {};
    list = {};
    tasks = {};

    constructor(bar, tasks) {
        this.bar = bar;
        this.tasks = tasks;
        this.list = new List();

        this.bar.callback = this.setFilter.bind(this);
        this.list.callback = this.removeItem;

        this.addEvent();
    }

    removeItem = (key) => {
        this.tasks.remove(key)
        this.render();
    }

    addEvent() {
        const form = document.getElementById('insert__form');


        form.onsubmit = (event) => {
            
            event.preventDefault();
            if(!event && !event.currentTarget) {
                return;
            }
            
            let input = event.currentTarget.firstElementChild;
            
            this.tasks.add(
                {name: input.value, key: this.tasks.items.length + 1, status: 'active'}
                );
                
            input.value = '';
            
            this.render();
        }
    }

    setFilter = (name) => {

        this.tasks.filter = name;
        this.render();
    }

    render() {

        let items = this.tasks.get();

        this.bar.render(items.length);

        this.list.render(items);
    }
}

(new App(bar, tasks, {})).render();




// return

// let obj = {
//     a: 'a',
//     say: function (arg) {
//         console.log(this.a);
//     }
// }

// let jbj2 = {
//     a: 'b',
// }


// obj.say.call(obj2, 'hello')

// const todos = [
//     { name: 'task1', key: 1, status: 'overdue' },
//     { name: 'task2', key: 2, status: 'overdue' },
//     { name: 'task3', key: 3, status: 'done' },
//     { name: 'task4', key: 4, status: 'active' },
//     { name: 'task5', key: 5, status: 'active' },
//     { name: 'task6', key: 6, status: 'active' },
//     { name: 'task7', key: 7, status: 'active' }
//   ];



// window.tasks = tasks;

// let filter = false;

// if (filter && filter !== 'all') {
//     tasksList = tasks.filter((element) => {
//         return element.status === filter;
//     });
// }

// let parent = document.querySelector('body > div > div:nth-child(4) > ul');

// const renderList = function () {
    
//     parent.innerHTML = '';

//     let todosList = [...todos];

//     if (filter && filter !== 'all') {
//         todosList = todos.filter((element) => {
//             return element.status === filter;
//         });
//     }

// for(let i = 0; i < todosList.length; i++) {
//         let todo = todosList[i];
//         let li = document.createElement("li");
//         let div = document.createElement("div");
//         let input = document.createElement("input");
//         let span = document.createElement("span");
//         let button = document.createElement("button");
        
//         div.classList.add('todo');
        
//         input.setAttribute('type', 'checkbox');
//         input.classList.add('toggle');
        
//         span.innerHTML = `<div>${todo.name}</div>`;
        
//         button.classList.add('destroy');
        
//         div.append(input, span, button);
        
//         li.appendChild(div);
        
//         li.onclick = function () {
//         li.classList.add('completed');
//         }
        
//         li.ondblclick = function () {
//         li.classList.remove('completed');
//         }
        
//         li.onmouseover = function () {
//         li.style.border = '1px solid green';
//         }

//         li.onmouseout = function () {
//             li.style.border = '';
//         }
//         parent.appendChild(li);
//     }
// }

// renderList();
// renderBar();

// const form = document.getElementById('insert__form');

// form.onsubmit = function (event) {
//     event.preventDefault();
//     let input = event.currentTarget.firstElementChild;
//     todos.push(
//         {name: input.value, key: todos.length + 1, status: 'active'}
//     );
//     input.value = '';
//     renderList();
//     renderBar();
// }

// function renderBar () {
//     const tag = document.querySelector('#js-bar');
//     tag.style.background = 'yellow';
//     tag.style.color = 'black';

// const h1 = document.querySelector('h1');
// h1.style.color = 'blue';

// const build = document.querySelector('#js-bar');
// build.innerHTML = '';

// let newDiv = document.createElement("div");
// let span = document.createElement("span");

// span.innerHTML = `${todos.length} items left`;
// newDiv.classList.add('col-1-4');

// const center = document.createElement('div');
// center.classList.add('col-1-2');


// let centerUl = document.createElement("Ul");
// centerUl.classList.add('filter');
// centerUl.setAttribute(`id`, `js-filters`);
// center.append(centerUl);

// let liAll = document.createElement("li");
// let buttonAll = document.createElement("a");
// buttonAll.innerHTML = `All`;
// buttonAll.classList.add('button');
// liAll.appendChild(buttonAll);
// buttonAll.setAttribute('data-status', 'all');

// // buttonAll.onclick = function () {
// //     alert(`node: alert All`);
// // }

// // liAll.onmouseover = function () {
// //     buttonAll.classList.add('selected');
// // }

// // liAll.onmouseout = function () {
// //     buttonAll.classList.remove('selected');
// // }

// let liActive = document.createElement("li");
// let buttonActive = document.createElement("a");
// buttonActive.innerHTML = `Active`;
// buttonActive.classList.add('button');
// buttonActive.setAttribute('data-status', 'active');
// liActive.appendChild(buttonActive);

// // buttonActive.onclick = function () {
// //     alert(`node: alert Active`);
// // }

// // liActive.onmouseover = function () {
// //     buttonActive.classList.add('selected');
// // }

// // liActive.onmouseout = function () {
// //     buttonActive.classList.remove('selected');
// // }

// let liCompleted = document.createElement("li");
// let buttonCompleted = document.createElement("a");
// buttonCompleted.innerHTML = `Completed`;
// buttonCompleted.classList.add('button');
// buttonCompleted.setAttribute('data-status', 'done');
// liCompleted.appendChild(buttonCompleted);

// // liCompleted.onclick = function () {
// //     alert(`node: alert Completed`);
// // }

// // liCompleted.onmouseover = function () {
// //     buttonCompleted.classList.add('selected');
// // }

// // liCompleted.onmouseout = function () {
// //     buttonCompleted.classList.remove('selected');
// // }

// centerUl.append(liAll, liActive, liCompleted);

// const right = document.createElement('right');
// right.innerHTML = '';

// let button = document.createElement("button");
// button.innerHTML = `Clear Completed`;
// button.setAttribute('id', 'js-clear-completed');

// // button.onclick = function () {
// //     alert(`node: alert Clear Completed`);
// // }

// right.append(button);
// right.classList.add('col-1-4');
// button.classList.add('button--clear');
// button.classList.add('button');

// build.appendChild(newDiv);
// newDiv.appendChild(span);
// build.appendChild(center);
// build.appendChild(right);


// let links = document.querySelectorAll('#js-filters li');

// links.forEach(function (element) {
//     element.addEventListener('click', function (event){
//         let links = document.querySelectorAll('a.selected');
//         links.forEach(function (element) {
//             element.classList.remove('selected');
//         });
//         let {currentTarget} = event;
//         currentTarget.children[0].classList.add('selected');
//         filter = currentTarget.children[0].dataset.status;
//         renderList();
//     });
// });

// let del = document.querySelector('#js-clear-completed');
//     del.addEventListener('click', function (even){

//         let {currentTarget} = even;

//        filter = true;

//         renderList();

// });

// }

