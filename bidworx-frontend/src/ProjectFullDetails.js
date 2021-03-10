import { getBidFreelancer } from "./fetch.js";

export default function ProjectFullDetails(project) {
  // Card Container
  const singleProjectCard = document.createElement("div");
  singleProjectCard.className = "project card container";

  //   Card Body
  const projectCardBody = document.createElement("div");
  projectCardBody.className = "project info";

  const projectName = document.createElement("h2");
  projectName.innerText = project.title;
  project.className = "project-title";

  const projectDate = document.createElement("h3");
  projectDate.innerText = "Created: " + project.created_at;
  projectDate.className = "project-date";

  const projectLastBid = document.createElement("h3");
  projectLastBid.innerText = "Updated: " + project.updated_at;
  projectLastBid.className = "project-updated";

  const projectDescription = document.createElement("p");
  projectDescription.innerText = project.description;
  projectDescription.className = "project-description";

  const projectBids = document.createElement("h3");
  projectBids.innerText = project.project_bids.length;
  projectBids.className = "project-bids";

  const projectBidInfoContainer = document.createElement("div");
  projectBidInfoContainer.className = "project-bid-info container";

  project.project_bids.forEach(async (bid) => {
    let freelancerName;
    await getBidFreelancer(bid.freelancer_id).then(freelancer => {
      freelancerName = freelancer.name
    });
    const freelancerItem = document.createElement("div");
    freelancerItem.className = "bid-item";

    const bidFreelancerName = document.createElement("p");
    bidFreelancerName.innerText = freelancerName;
    bidFreelancerName.className = "freelancer-name";
    const bidFreelancerPrice = document.createElement("p");
    bidFreelancerPrice.innerText = bid.price;
    bidFreelancerPrice.className = "freelancer-bid-price";
    const bidFreelancerDropDate = document.createElement("p");
    bidFreelancerDropDate.innerText = bid.drop_date;
    bidFreelancerDropDate.className = "freelancer-drop-date";
    const chooseBidCheckBox = document.createElement("input");
    chooseBidCheckBox.type = "checkbox";
    chooseBidCheckBox.className = "checkbox";
    chooseBidCheckBox.addEventListener("change", (e) => {
      const checkboxes = document.querySelectorAll('.checkbox')
      checkboxes.forEach(checkbox => {
        checkbox.checked = false
      })
      e.target.checked = true;
    });


    freelancerItem.append(
      bidFreelancerName,
      bidFreelancerPrice,
      bidFreelancerDropDate,
      chooseBidCheckBox
    );

    projectBidInfoContainer.append(freelancerItem);
  });

  projectCardBody.append(projectName, projectDate, projectLastBid, projectDescription, projectBids, projectBidInfoContainer)

  singleProjectCard.append(projectCardBody)

  const contractSelector = document.querySelector(
    ".content.container > .client"
    );
    contractSelector.innerHTML = "";
  contractSelector.append(singleProjectCard);

}
