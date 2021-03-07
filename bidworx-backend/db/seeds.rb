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

Marketplace.create;

jacob = Client.create(name: "Jacob", username: "jlepler")
Marketplace.first.clients << jacob

3.times do
    client = Client.create(name: Faker::Name.unique.name, username: Faker::Internet.username)
    Marketplace.first.clients << client
end

10.times do
    skills = []
    5.times do 
        skills << Faker::Job.key_skills
    end
    timeUnit = ["day/s", "month/s"]
    project =  Project.new(title: job_descriptions[rand(0...10)], skills: skills.join(","), description: Faker::Lorem.paragraph, duration: "#{rand(1..6)} #{timeUnit[rand(0..1)]}")
    Client.all.sample.projects << project
    project.save
end