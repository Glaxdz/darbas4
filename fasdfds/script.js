  window.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById(data);
    element.addEventListener("dragstart", dragstart_handler);
  });

  function dragstart_handler(ev) {
    ev.dataTransfer.dropEffect = "copy";
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }



  function dragover_handler(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/plain");
    let theClone = document.getElementById(data);
    let a = theClone.innerText;
    let b = copy.innerText;
    theClone.innerText = b;
    copy.innerText = a;

    arr = [];
    for(let i = 1; i<32; i++){
        let item = document.getElementById("a" + i);
        arr.push(item.innerText);
        localStorage.setItem("ID: " + i, item.innerText);
    }
    console.log(arr);
    
    ev.dataTransfer.dropEffect = "move";
    ev.target.appendChild(document.getElementById(data));
  }

  function drop_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    let a = document.getElementById(data);
    let b = ev.target;

    console.log(a, b)

  }

