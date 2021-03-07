export async function getAllClients(){
        const response = await fetch('http://localhost:3000/clients')
        const data = await response.json()
        return data
    }

export async function getAllFreelancers() {
    const response = await fetch('http://localhost:3000/freelancers')
    const data = await response.json()
    return data
}

export async function postNewUser(newUser) {
    const response = await fetch('http://localhost:3000/clients', newUser)
    const data = await response.json()
    return data
}