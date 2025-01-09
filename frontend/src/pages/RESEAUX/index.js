const data = [
    {
      nom: "Leyla ALMEND",
      p: "📈 +83 K suivie | IT recruiter 💻| Talent Acquisition Specialist🎯 | Consultante+20ans d'expertise dans le domaine du RH =>Mon rôle est de trouver les bons talents qui vont rayonner dans notre entreprise",
      connected: "14 hours",
      image: "./images/Profile.png"
    },
    {
      nom: "Amina BENNOUNA",
      p: "🚀 Support IVI Infotainment | AI & Mechatronics Specialist | Data-Driven Innovator @ Capgemini Engineering 🤖",
      connected: "2 days",
      image: "./images/women.jpg"
    },
    {
      nom: "Leyla ACHIBAT",
      p: "📈 +83 K suivie | IT recruiter 💻| Talent Acquisition Specialist🎯 | Consultante+20ans d'expertise dans le domaine du RH =>Mon rôle est de trouver les bons talents qui vont rayonner dans notre entreprise",
      connected: "3 days ",
      image: "./images/womeen5.webp"
    },
    {
      nom: "Asim BLHAM",
      p: "+15k📈l Talent Acquisition Specialist 🎯| HR-",
      connected: "20 days",
      image: "./images/man.jpg"
    },
    {
      nom: "Leyla ACHIBAT",
      p: "🚀 Support IVI Infotainment | AI & Mechatronics Specialist | Data-Driven Innovator @ Capgemini Engineering 🤖",
      connected: "3 days",
      image: "./images/women3.jpg"
    },
    {
      nom: "Nacer MELAM",
      p: "AI Engineering Student | Deep Learning & LLMs | Machine Learning & Data Science",
      connected: "3 days",
      image: "./images/man2.jpg"
    },
    {
      nom: "Alya BENNANI",
      p: "M2 Technologies de l'Hypermedia",
      connected: "3 days",
      image: "./images/pofi.png"
    },
    {
      nom:"Othman MEKOUAR",
      p:"M1 MIAGE",
      connected : "10day",
      image :"./images/pfpfinale.jpg"
    }

  ];

let sortedData=[...data];
  
function createConnectionList(d){
    let element =document.getElementById("connection-list");
    let result="";
    if(d.length==0){
        result = '<p class="no-connection">no connection</p>';
        element.innerHTML=result;
    }else{
        result = d.map(element=>
            `<div class="connection-item">
              <img src="${element.image}" alt="Profile" class="profile-pic">
              <div class="connection-details">
                <h3>${element.nom}</h3>
                <p>${element.p}</p>
                <p class="connected-time">Connected ${element.connected} ago</p>
              </div>
              <button class="message-btn">Message</button>
              <span class="dots">...</span>
            </div>`
        )

        element.innerHTML=result.join("");
    }
}

function handleChange(event) {
    console.log(event.target.value);

    d = sortedData.filter(item => item.nom.toLowerCase().includes(event.target.value.toLowerCase()));
    createConnectionList(d);
}
function main(){
   createConnectionList(data);
}

function handleSortChange(event){
    console.log(event.target.value);
    if(event.target.value=='name'){
        sortedData.sort((a, b) => a.nom.localeCompare(b.nom));
    }else{
        sortedData=[...data];
    }


    createConnectionList(sortedData);
}