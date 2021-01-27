const projectsData = "projects.json";
const projectsDiv = document.querySelector(".projects");

class Project{
    constructor(projectsData){
        this.projectsData = projectsData;
    }

    getProjects(){
        fetch(this.projectsData)
        .then(data => data.json())
        .then(result => {
            Object.keys(result).forEach(key => {
                projectsDiv.innerHTML += `
                    <div class="project">
                        <a href="${result[key].project_path}" alt="project-${result[key].project_id}">
                            <p>CLICK ME!</p>
                            <h1>${key}</h1>
                        </a>
                        <iframe src="${result[key].project_path}" scrolling="no"></iframe>
                    </div>`;
            });
        });
    }
}

const projects = new Project(projectsData);
projects.getProjects();