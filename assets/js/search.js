function searchProjects(query) {
    let projects = document.querySelectorAll('.project-container');
    query = query.toLowerCase();
    projects.forEach(project => {
        console.log(project);
        let title = project.querySelector(".project-title").textContent.toLowerCase();
        let description = project.querySelector(".project-description").textContent.toLowerCase();
        if(title.includes(query) || description.includes(query)) {
            project.style.display = "flex";
        } else {
            project.style.display = "none";
        }
    });
}

let search = document.querySelector('search');
search.style.display = "block";

search.addEventListener('submit', (e) => {
    e.preventDefault();
    let query = document.querySelector("#project-search").value;
    searchProjects(query);
});