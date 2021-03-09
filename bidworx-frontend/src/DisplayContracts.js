export default function DisplayContracts(renderContractFullDetails) {
  // This function renders grid of contracts.
  const contentContainer = document.querySelector(
    ".content.container > .client"
  );

  const cardsGrid = document.createElement("div");
  cardsGrid.className = "contract-grid";

  fetch("http://localhost:3000/3/contracts")
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
        contractStatus.style.gridArea = "status";
        // Freelancer
        const contractFreelancer = document.createElement("h3");
        contractFreelancer.innerText = contract.freelancer.name;
        contractFreelancer.style.gridArea = "fl_name";
        // Price
        const contractPrice = document.createElement("h3");
        contractPrice.innerText = contract.project_bid.price;
        contractPrice.style.gridArea = "price";
        // Description
        const contractDescription = document.createElement("p");
        contractDescription.innerText =
          contract.project.description.length > 24
            ? contract.project.description.substring(0, 24) + "..."
            : contract.project.description;
        contractDescription.style.gridArea = "description";
        // Start Date
        const contractStartDate = document.createElement("h3");
        contractStartDate.innerText = contract.created_at;
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
    });

  contentContainer.append(cardsGrid);
}
