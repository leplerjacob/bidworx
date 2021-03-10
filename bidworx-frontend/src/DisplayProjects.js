import ProjectFullDetails from './ProjectFullDetails.js'


export default function DisplayProjects(projects){
    const contentContainer = document.querySelector('.content.container > .client')


    const projectsGrid = document.createElement('div')
    projectsGrid.className = "projects-grid"


    projects.forEach(project => {


        const projectCard = document.createElement("div")
        projectCard.className = "project-grid-item"
    
        // Title
        const projectTitle = document.createElement("h2")
        projectTitle.className = "project-title"
        projectTitle.innerText = project.title
        // Date Created
        const projectDate = document.createElement("h3")
        projectDate.className = "project-date"
        projectDate.innerText = "Date Created " + project.created_at
        // Description
        const projectDescription = document.createElement("p")
        projectDescription.className = "project-description"
        projectDescription.innerText = project.description
        // #Bids
        const projectBids = document.createElement("h3")
        projectBids.className = "project-bids"
        projectBids.innerText = "Bids: " + project.project_bids.length
        // View Details
        const projectMoreDetails = document.createElement("button")
        projectMoreDetails.className = "project-more-details"
        projectMoreDetails.innerText = "More Details"
        // Will query individual freelancers
        projectMoreDetails.addEventListener("click", () => {
            ProjectFullDetails(project)
        })
        
        projectCard.append(projectTitle, projectDate, projectDescription, projectBids, projectMoreDetails)
        
        projectsGrid.append(projectCard)

        contentContainer.append(projectsGrid)
    })


}
