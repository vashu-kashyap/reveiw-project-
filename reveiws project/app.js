const reviews = [
    {
        id : 1,
        name : "bill shaws",
        job : "web developer",
        img : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        feedback : "“I know this goal wasn’t easy. How you managed to set it and systematically work towards it until you achieved it truly speaks to your intelligence, tenacity, and perseverance. I’m lucky to have you on my team.”",
    },
    {
        id : 2,
        name : "adverb",
        job : "graphic desinger",
        img : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        feedback : "“I know this goal wasn’t easy. How you managed to set it and systematically work towards it until you achieved it truly speaks to your intelligence, tenacity, and perseverance. I’m lucky to have you on my team.”",
    },
    {
        id : 3,
        name : "bella swan",
        job : "content writer",
        img : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        feedback : "“I admired how you admitted you lacked deep knowledge and experience in Python. Your honesty helped me help you succeed, and that’s what I always want to do.”",
    },
    {
        id : 4,
        name : "ethan margot",
        job : "ui/ux desinger",
        img : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        feedback : "“I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out. I’m amazed that you managed to distill feedback from all those stakeholders and find a new, viable solution that everyone loves.”",
    },
]

// select items


const img = document.getElementById("person-img");
const author  = document.getElementById("author");
const job = document.getElementById("job");
const feedback  = document.getElementById("feedback");

// select btns 

const perv_btn = document.querySelector(".perv-btn");
const next_btn = document.querySelector(".next-btn");

// set our default value item

let currentItem = 0;

// load intial item

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
});

function showPerson() {
    const item = reviews[currentItem];
    img.src =   item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    feedback.textContent = item.feedback;
}

next_btn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

perv_btn.addEventListener('click', function(){
    currentItem--;
   if (currentItem < 0) {
    currentItem = reviews.length -1;
    
   }
    showPerson();
})
