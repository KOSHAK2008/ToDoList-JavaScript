class Bar {
    callback = function () {};
    render(count) {

        const tag = document.querySelector('#js-bar');

        tag.style.background = 'yellow';

        tag.style.color = 'black';
    
    const h1 = document.querySelector('h1');
    h1.style.color = 'blue';
    
    const build = document.querySelector('#js-bar');
    build.innerHTML = '';
    
    let newDiv = document.createElement("div");
    let span = document.createElement("span");
    
    span.innerHTML = `${count} items left`;
    newDiv.classList.add('col-1-4');
    console.log();
    
    const center = document.createElement('div');
    center.classList.add('col-1-2');
    
    
    let centerUl = document.createElement("Ul");
    centerUl.classList.add('filter');
    centerUl.setAttribute(`id`, `js-filters`);
    center.append(centerUl);
    
    let liAll = document.createElement("li");
    let buttonAll = document.createElement("a");
    buttonAll.innerHTML = `All`;
    buttonAll.classList.add('button');
    liAll.appendChild(buttonAll);
    buttonAll.setAttribute('data-status', 'all');
    
    // buttonAll.onclick = function () {
    //     alert(`node: alert All`);
    // }
    
    // liAll.onmouseover = function () {
    //     buttonAll.classList.add('selected');
    // }
    
    // liAll.onmouseout = function () {
    //     buttonAll.classList.remove('selected');
    // }
    
    let liActive = document.createElement("li");
    let buttonActive = document.createElement("a");
    buttonActive.innerHTML = `Active`;
    buttonActive.classList.add('button');
    buttonActive.setAttribute('data-status', 'active');
    liActive.appendChild(buttonActive);
    
    // buttonActive.onclick = function () {
    //     alert(`node: alert Active`);
    // }
    
    // liActive.onmouseover = function () {
    //     buttonActive.classList.add('selected');
    // }
    
    // liActive.onmouseout = function () {
    //     buttonActive.classList.remove('selected');
    // }
    
    let liCompleted = document.createElement("li");
    let buttonCompleted = document.createElement("a");
    buttonCompleted.innerHTML = `Completed`;
    buttonCompleted.classList.add('button');
    buttonCompleted.setAttribute('data-status', 'done');
    liCompleted.appendChild(buttonCompleted);
    
    // liCompleted.onclick = function () {
    //     alert(`node: alert Completed`);
    // }
    
    // liCompleted.onmouseover = function () {
    //     buttonCompleted.classList.add('selected');
    // }
    
    // liCompleted.onmouseout = function () {
    //     buttonCompleted.classList.remove('selected');
    // }
    
    centerUl.append(liAll, liActive, liCompleted);
    
    const right = document.createElement('right');
    right.innerHTML = '';
    
    let button = document.createElement("button");
    button.innerHTML = `Clear Completed`;
    button.setAttribute('id', 'js-clear-completed');
    
    // button.onclick = function () {
    //     alert(`node: alert Clear Completed`);
    // }
    
    right.append(button);
    right.classList.add('col-1-4');
    button.classList.add('button--clear');
    button.classList.add('button');
    
    build.appendChild(newDiv);
    newDiv.appendChild(span);
    build.appendChild(center);
    build.appendChild(right);
    
    
    let links = document.querySelectorAll('#js-filters li');

    let that = this;
    
    links.forEach(function (element) {

        element.addEventListener('click', function (event){

            let links = document.querySelectorAll('a.selected');

            links.forEach(function (element) {

                element.classList.remove('selected');
            });

            let {currentTarget} = event;

            currentTarget.classList.add('selected');

            that.callback(currentTarget.children[0].dataset.status);
            
        });
    });

    
    let del = document.querySelector('#js-clear-completed');
        del.addEventListener('click', function (even){
    
            let {currentTarget} = even;
    
           filter = true;
        
    });
    
    }
}

export default new Bar();
