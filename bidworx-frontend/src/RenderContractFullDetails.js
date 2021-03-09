export default function RenderContractFullDetails(contract, DisplayContracts) {

  const singleContractCard = document.createElement("div");
  singleContractCard.className = "contract card container";
  const contractCardBody = document.createElement("div");
  contractCardBody.className = "contract info";

  const projectName = document.createElement("h2");
  projectName.innerText = contract.project.title;
  projectName.className = "contract project-name";
  const projectDescription = document.createElement("p");
  projectDescription.innerText = contract.project.description;
  projectDescription.className = "contract project-description";
  const freelancerBody = document.createElement("div");
  freelancerBody.className = "freelancer info";
  const freelancerName = document.createElement("h2");
  freelancerName.innerText = contract.freelancer.name;
  freelancerName.className = "freelancer name";
  const freelancerSkills = document.createElement("p");
  freelancerSkills.innerText = contract.freelancer.skills;
  freelancerSkills.className = "freelancer skills";
  const projectDuration = document.createElement("h2");
  projectDuration.innerText = contract.project.duration;
  projectDuration.className = "contract project-duration";
  const projectCost = document.createElement("h2");
  projectCost.innerText = contract.project_bid.price;
  projectCost.className = "contract project-bid";
  freelancerBody.append(freelancerName, freelancerSkills);

  // Exit Button
  const projectExitButton = document.createElement('button');
  projectExitButton.className = "exit"
  projectExitButton.innerText = "X"
  projectExitButton.addEventListener("click", () => {
    contractSelector.innerHTML = "";
    DisplayContracts(RenderContractFullDetails);
  })

  contractCardBody.append(
    projectName,
    projectExitButton,
    projectDescription,
    freelancerBody,
    projectDuration,
    projectCost
  );

  singleContractCard.append(contractCardBody);

  const contractSelector = document.querySelector(
    ".content.container > .client"
    );
    contractSelector.innerHTML = "";
  contractSelector.append(singleContractCard);
}
