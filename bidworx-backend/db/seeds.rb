require 'faker'

Marketplace.destroy_all
Client.destroy_all
Project.destroy_all
Contract.destroy_all
Freelancer.destroy_all
ProjectBid.destroy_all

job_descriptions = [
    "Backend Expert - Serverless, Parse, Node, Python, AWS Knowledge and Kubernetes",
    "Python Developer required for developing very small api",
    "Looking to hire a production team to help bring Jax FL documentary into fruition",
    "Lead operational process optimization to enable company to scale.",
    "Fullstack web developer needed",
    "Advertising, social media, branding , marketing expert",
    "Facebook Advertising campaign manager needed",
    "Need someone to create a very simple Purchasing process manual and/or flowchart",
    "I need an android/IOS/Linux full-stack developer for my calling server and app project.",
    "Need someone who have a full option already made LMS system for sale."
]

marketplace = Marketplace.create;

jacob = Client.create(name: "Jacob", username: "jlepler")
khalin = Client.create(name: "Khalin", username: "kredding")

marketplace.clients << jacob
marketplace.clients << khalin

project1 = Project.create(title: "Need someone who has a full option already made LMS system for sale.", skills: "Create Problem-solving, Application Development, C++", description: "The system must have full documentation, and be scalable. Will need full support for at least 1-2 months after deployment", duration: "3-6 months", client_id: jacob.id);

project2 = Project.create(title: "Backend Expert - Serverless, Parse, Node, Python, AWS Knowledge and Kubernetes.", skills: "Node, Python, AWS Knowledge, Kudernetes", description: "Looking for a backend database and security subject matter expert. Be able to write document for our support team", duration: "1-2 months", client_id: khalin.id)

jim = Freelancer.create(name: "Jim", username: "jbob", skills: "JavaScript, C++, UI/UX Design, Python", marketplace_id: Marketplace.all.first.id )
kay = Freelancer.create(name: "Kay", username: "kkim", skills: "Ruby, JavaScript, C++, UI/UX Design", marketplace_id: Marketplace.all.first.id)

marketplace.freelancers << jim
marketplace.freelancers << kay

bid1 = ProjectBid.create(price: 2000.0, drop_date: DateTime.new(2021, 2, 28, 12, 12, 0), freelancer_id: jim.id, project_id: project1.id)
bid2 = ProjectBid.create(price: 1500.0, drop_date: DateTime.new(2021, 8, 29, 22, 35, 0), freelancer_id: kay.id, project_id: project1.id)

# DateTime.new(2012, 8, 29, 22, 35, 0)

contract1 = Contract.create(client_id: jacob.id, freelancer_id: jim.id, project_id: project1.id, project_bid_id: bid1.id)
contract2 = Contract.create(client_id: jacob.id, freelancer_id: kay.id, project_id: project2.id, project_bid_id: bid2.id)















# 10.times do
#     skills = []
#     5.times do 
#         skills << Faker::Job.key_skills
#     end
#     timeUnit = ["day/s", "month/s"]
#     project =  Project.new(title: job_descriptions[rand(0...10)], skills: skills.join(","), description: Faker::Lorem.paragraph, duration: "#{rand(1..6)} #{timeUnit[rand(0..1)]}")
#     Client.all.sample.projects << project
#     project.save
# end