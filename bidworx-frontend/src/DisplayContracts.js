export default function DisplayContracts(renderContractFullDetails) {
  // This function renders grid of contracts.
  const contentContainer = document.querySelector(
    ".content.container > .client"
  );

  const cardsGrid = document.createElement("div");
  cardsGrid.className = "contract-grid";

    const user_id = window.localStorage.getItem("user_id")

  fetch(`http://localhost:3000/${user_id}/contracts`)
    .then((res) => res.json())
    .then((contracts) => {
      contracts.forEach((contract) => {
        // Card
        const contractCard = document.createElement("div");
        contractCard.className = "contract-grid-item";
        // Title
        const contractTitle = document.createElement("p");
        contractTitle.innerText = contract.project.title;
        contractTitle.className = "contract-title";
        contractTitle.style.gridArea = "title";
        // Status
        const contractStatus = document.createElement("p");
        contractStatus.innerText = contract.status;
        switch (contract.status) {
          case "in progress": {
            contractStatus.className = "contract-status pending"
            break;
          }
          case "completed": {
            contractStatus.className = "contract-status complete"
            break;
          }
          case "delayed": {
            contractStatus.className = "contract-status delayed"
            break;
          }
          default: {
            contractStatus.className = "contract-status"
          }
            break;
        }
        contractStatus.style.gridArea = "status";
        // Freelancer
        const contractFreelancer = document.createElement("h3");
        contractFreelancer.innerText = "Freelancer: " + contract.freelancer.name;
        contractFreelancer.style.gridArea = "fl_name";
        // Price
        const contractPrice = document.createElement("h3");
        contractPrice.innerText = "Price: \n" + contract.project_bid.price;
        contractPrice.style.gridArea = "price";
        // Description
        const contractDescription = document.createElement("h4");
        contractDescription.innerText =
          contract.project.description.length > 24
            ? "Description: \n" + contract.project.description.substring(0, 24) + "..."
            : "Description: \n" + contract.project.description;
        contractDescription.style.gridArea = "description";
        // Start Date
        const contractStartDate = document.createElement("h3");
        contractStartDate.innerText = "Date Created: " + contract.created_at;
        contractStartDate.style.gridArea = "start_date";
        // Button
        const contractMoreDetails = document.createElement("button");
        contractMoreDetails.className = "contract-more-details";
        contractMoreDetails.innerText = "More Details";
        contractMoreDetails.style.gridArea = "more_details";
        // Append
        contractCard.append(
          contractStatus,
          contractTitle,
          contractFreelancer,
          contractPrice,
          contractDescription,
          contractStartDate,
          contractMoreDetails
        );

        contractMoreDetails.addEventListener("click", () => {
          renderContractFullDetails(contract, DisplayContracts);
        });
        cardsGrid.append(contractCard);
      });
    }).catch(err => err);

  contentContainer.append(cardsGrid);
}
