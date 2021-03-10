export default function MakeProjectForm(postNewProject, id) {
  const contentContainer = document.querySelector(
    ".content.container > .client"
  );
  let obj = {
    client_id: id,
    title: "",
    skills: "",
    duration: "",
    description: "",
  };

  const cardFormContainer = document.createElement("div");
  cardFormContainer.className = "inner-card make-project";

  const cardUpper = document.createElement("div");
  const cardUpperTitle = document.createElement("h2");
  cardUpperTitle.innerText = "Make a new project";

  const cardLower = document.createElement("div");
  const projectForm = document.createElement("form");
  projectForm.action = "#";

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.htmlFor = "project-title";
  projectTitleLabel.innerText = "Project Title";

  const projectTitleInput = document.createElement("input");
  projectTitleInput.type = "text";
  projectTitleInput.name = "project-title";
  projectTitleInput.className = "project-title";
  projectTitleInput.addEventListener("keyup", (e) => {
    obj.title = e.target.value;
  });

  const projectSkillsLabel = document.createElement("label");
  projectSkillsLabel.htmlFor = "project-skills";
  projectSkillsLabel.innerText = "Skills Required";

  const projectSkillsInput = document.createElement("input");
  projectSkillsInput.type = "text";
  projectSkillsInput.name = "project-skills";
  projectSkillsInput.className = "project-skills"
  projectSkillsInput.addEventListener("keyup", (e) => {
    const skills = e.target.value.split(",").map((skill) => {
      return skill.trim();
    });
    obj.skills = skills.join(",");
  });

  const projectDurationLabel = document.createElement("label");
  projectDurationLabel.htmlFor = "project-duration";
  projectDurationLabel.innerText = "Duration";

  const projectDurationInput = document.createElement("input");
  projectDurationInput.type = "text";
  projectDurationInput.name = "project-duration";
  projectDurationInput.className = "project-duration";
  projectDurationInput.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    obj.duration = e.target.value;
  });

  const projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.htmlFor = "project-description";
  projectDescriptionLabel.innerText = "Description";

  const projectDescriptionInput = document.createElement("textarea");
  projectDescriptionInput.rows = "4";
  projectDescriptionInput.cols = "40";
  projectDescriptionInput.name = "project-description";
  projectDescriptionInput.className = "project-description";
  projectDescriptionInput.addEventListener("keyup", (e) => {
    obj.description = e.target.value;
  });

  const projectFormSubmit = document.createElement("button");
  projectFormSubmit.type = "submit";
  projectFormSubmit.innerText = "Submit Project";
  projectFormSubmit.className = "form-submit";
  projectFormSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    postNewProject({project: obj}).then(() => {
      
    });
  });

  projectForm.append(
    projectTitleLabel,
    projectTitleInput,
    projectDurationLabel,
    projectDurationInput,
    projectSkillsLabel,
    projectSkillsInput,
    projectDescriptionLabel,
    projectDescriptionInput,
    projectFormSubmit
  );
  cardUpper.append(cardUpperTitle);
  cardLower.append(projectForm);

  cardFormContainer.append(cardUpper, cardLower);
  contentContainer.append(cardFormContainer);
}
