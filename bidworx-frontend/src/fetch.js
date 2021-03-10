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
  console.log(obj);
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

