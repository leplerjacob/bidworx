export async function getAllClients() {
  const response = await fetch("http://localhost:3000/clients");
  const data = await response.json();
  return data;
}

export async function getAllFreelancers() {
  const response = await fetch("http://localhost:3000/freelancers");
  const data = await response.json();
  return data;
}

export async function postNewUser(newUser) {
  const response = await fetch("http://localhost:3000/clients", newUser);
  const data = await response.json();
  return data;
}

export async function logInUser(username) {
  const response = await fetch(`http://localhost:3000/login/${username}`);
  const data = await response.json();
  return data;
}

export async function postNewProject(obj) {
  const response = await fetch(`http://localhost:3000/projects`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(obj)
  });
  // const data = await response.json();
  return
}

export async function getAllProjects(id){
  const response = await fetch(`http://localhost:3000/${id}/my_projects`)
  const data = await response.json()
  return data
}

export async function getBidFreelancer(id){
  const response = await fetch(`http://localhost:3000/freelancers/${id}`)
  const data = await response.json()
  return data
}

// CREATE CONTRACT
// ids will be an object {} of id's
export async function createContract(ids){
  const response = await fetch('http://localhost:3000/contracts', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(ids)
  })
  const data = await response.json()
  return
}

//   const response = await fetch('`http://localhost:3000/contracts', )
// }