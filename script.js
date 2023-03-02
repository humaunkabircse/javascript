// Change Style
    document.getElementById('task-title').style.background = "#000";
    document.getElementById('task-title').style.color = "#fff";
    document.getElementById('task-title').style.padding = "10px";
    document.getElementById('task-title').style.width = "100%";

// Change Element
    const taskTitle = document.getElementById('task-title');
    
    taskTitle.innerHTML = "Task List";

// get ElementByClassName
   const items = document.getElementsByClassName('collection-list');

// get ElementByTagName
    // console.log(document.getElementsByTagName('li'));

// querySelector
    // console.log(document.querySelector('li')); 

// querySelectorAll
    const q_items  = document.querySelectorAll('ul li');
    // console.log(q_items);

    // forEach loop
    q_items.forEach(function(item){
        item.style.color = "red";
    });


// get Children Element
    let val;

    const traversing_list = document.querySelector('ul.collection');

    val = traversing_list.children[1].children[0];

    val = traversing_list.children[0].children[0];

    val.style.color = "black";

    val.style.background = "pink";


// get Parent Element
    let p_val;

    const parent_list = document.querySelector('li.collection-list');

    p_val = parent_list.parentElement;
    
    console.log(p_val);

// Create Element
    const create_li = document.createElement('li');

    // Add ClassName
    create_li.className = 'collection-list';

    // Add ID
    create_li.id = 'test';

    // Add Attribute
    create_li.setAttribute('title', 'test-title');

    // Add textContent
    create_li.textContent = "List 3";

    console.log(create_li);


    // Append li as a Child to ul
    document.querySelector('ul.collection').appendChild(create_li);

    // Create link
    const link = document.createElement('a');

    // Add link Class
    link.className = 'btn btn-sm btn-danger';

    // Add HTML
    link.innerHTML = '<i class="fa-solid fa-trash"></i>';

    // Append Child
    create_li.appendChild(link);

    console.log(link);


// Remove Element
    const lis = document.querySelectorAll('li');
    const list = document.querySelector('ul');
    
    // list.removeChild(lis[3]);








// Change Style


// Change Element


// get ElementByClassName


// get ElementByTagName


// querySelector


// querySelectorAll


// forEach loop


// get Children Element
    

// get Parent Element
   
// Create Element
   

    // Add ClassName
  

    // Add ID
   

    // Add Attribute
  

    // Add textContent

    // Append li as a Child to ul


    // Create link
   

    // Add link Class
 

    // Add HTML
    

    // Append Child



// Remove Element
  

