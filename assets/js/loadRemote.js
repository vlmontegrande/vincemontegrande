function loadRemote() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://my-json-server.typicode.com/vlmontegrande/cse134b-hw5/db",true); 
    xhr.responseType = "json";
    xhr.onreadystatechange = function(){handleResponse(xhr);};
    xhr.send(null);
}

function handleResponse(xhr) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
        xhr.response.projects.forEach(project => {
            let card = document.createElement("project-card");
            let shadow = card.shadowRoot;

            shadow.querySelector("h2").textContent = project.title;
            shadow.querySelector("p").textContent = project.description;
            shadow.querySelector("a").href = project.linkHref;
            shadow.querySelector("img").src = project.imageSource;
            shadow.querySelector("img").alt = project.imageAlt;
    
            document.querySelector('#projects-container').appendChild(card);});
    }
}

document.querySelector("#load-remote").addEventListener("click", loadRemote);

