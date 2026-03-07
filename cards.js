const loadCards=() =>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        displayCards(data.data);
    })

}

// -----------------closed cards---------------------------

const loadCloseCards=() =>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        const openCards = data.data.filter(card => card.status === "closed");
        displayOpenCards(openCards)
    })


}

const displayCloseCards=(closeCards)=>{
  

    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";
    closeCards.forEach((closeCard)=>{
let bgClass="";
let textClass="";

if(closeCard.priority==="high"){
bgClass="bg-[#FEECEC]";
textClass="text-[#EF4444]"
}
else if(closeCard.priority==="medium"){
bgClass="bg-[#FFF6D1]";
textClass="text-[#F59E0B]"

}
else if(closeCard.priority==="low"){
bgClass="bg-[#EEEFF2]";
textClass="text-[#9CA3AF]"

}

     const closeCardBody=document.createElement("div");
       closeCardBody.innerHTML=`
       <div id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 border-[#00A96E]">
    <div class="flex justify-between">
    <img src="./assets/${closeCard.status}- Status .png" alt="" class="h-5">

  <div class="badge ${bgClass} ${textClass} mb-4 py-3">${closeCard.priority}</div></div>
    <h2 class="text-[14px] font-semibold">${closeCard.title}</h2>
    <p class="text-[12px] text-[#64748B] line-clamp-2 pt-3">${closeCard.description}</p>

<div class="flex gap-2 pt-2">
  ${closeCard.labels.map(label => {

let bgLabelClass="";
let textLabelClass="";

if(label==="bug"){
bgLabelClass="bg-[#FECACA]";
textLabelClass="text-[#EF4444]";
}
else if(label==="help wanted"){
bgLabelClass="bg-[#FFF6D1]";
textLabelClass="text-[#F59E0B]";
}
else if(label==="enhancement"){
bgLabelClass="bg-[#BBF7D0]";
textLabelClass="text-[#16A34A]";
}
else if(label==="good first issue"){
bgLabelClass="bg-[#e9d5ff]";
textLabelClass="text-[#9333ea]";
}
else if(label==="documentation"){
bgLabelClass="bg-[#a5f3fc]";
textLabelClass="text-[#0e7490]";
}


return `<div class="badge ${bgLabelClass} ${textLabelClass} text-[12px]">${label}</div>`}).join('')}


</div>
<div class="text-[12px] text-[#64748B]">
<hr class="border border-gray-200 mt-4">
    <p>#1 by john_doe</p>
<p>1/15/2024</p>
</div>

</div>
        
`
cardContainer.append(closeCardBody);
 })

}

// ------------------------------open cards--------------------------------
const loadOpenCards=() =>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        const openCards = data.data.filter(card => card.status === "open");
        displayOpenCards(openCards)
    })


}

const displayOpenCards=(openCards)=>{
  

    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";
    openCards.forEach((openCard)=>{
let bgClass="";
let textClass="";

if(openCard.priority==="high"){
bgClass="bg-[#FEECEC]";
textClass="text-[#EF4444]"
}
else if(openCard.priority==="medium"){
bgClass="bg-[#FFF6D1]";
textClass="text-[#F59E0B]"

}
else if(openCard.priority==="low"){
bgClass="bg-[#EEEFF2]";
textClass="text-[#9CA3AF]"

}

     const openCardBody=document.createElement("div");
       openCardBody.innerHTML=`
       <div id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 border-[#00A96E]">
    <div class="flex justify-between">
    <img src="./assets/${openCard.status}- Status .png" alt="" class="h-5">
  <div class="badge ${bgClass} ${textClass} mb-4 py-3">${openCard.priority}</div></div>
    <h2 class="text-[14px] font-semibold">${openCard.title}</h2>
    <p class="text-[12px] text-[#64748B] line-clamp-2 pt-3">${openCard.description}</p>

<div class="flex gap-2 pt-2">
  ${openCard.labels.map(label => {

let bgLabelClass="";
let textLabelClass="";

if(label==="bug"){
bgLabelClass="bg-[#FECACA]";
textLabelClass="text-[#EF4444]";
}
else if(label==="help wanted"){
bgLabelClass="bg-[#FFF6D1]";
textLabelClass="text-[#F59E0B]";
}
else if(label==="enhancement"){
bgLabelClass="bg-[#BBF7D0]";
textLabelClass="text-[#16A34A]";
}
else if(label==="good first issue"){
bgLabelClass="bg-[#e9d5ff]";
textLabelClass="text-[#9333ea]";
}
else if(label==="documentation"){
bgLabelClass="bg-[#a5f3fc]";
textLabelClass="text-[#0e7490]";
}


return `<div class="badge ${bgLabelClass} ${textLabelClass} text-[12px]">${label}</div>`}).join('')}


</div>
<div class="text-[12px] text-[#64748B]">
<hr class="border border-gray-200 mt-4">
    <p>#1 by john_doe</p>
<p>1/15/2024</p>
</div>

</div>
        
`
cardContainer.append(openCardBody);
 })

}

//------------------------------------ all cards------------------------------------

const displayCards=(cards)=>{
    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";
    cards.forEach((card)=>{

        let bgClass="";
        let textClass="";

if(card.priority==="high"){
bgClass="bg-[#FEECEC]";
textClass="text-[#EF4444]"
}
else if(card.priority==="medium"){
bgClass="bg-[#FFF6D1]";
textClass="text-[#F59E0B]"

}
else if(card.priority==="low"){
bgClass="bg-[#EEEFF2]";
textClass="text-[#9CA3AF]"

}


     const cardBody=document.createElement("div");
        cardBody.innerHTML=`
        <div id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 border-[#00A96E]">
    <div class="flex justify-between">
    <img src="./assets/${card.status}- Status .png" alt="" class="h-5">

  <div class="badge ${bgClass} ${textClass} mb-4 py-3">${card.priority}</div></div>
    <h2 class="text-[14px] font-semibold">${card.title}</h2>
    <p class="text-[12px] text-[#64748B] line-clamp-2 pt-3">${card.description}</p>

<div class="flex gap-2 pt-2">
  ${card.labels.map(label => {

let bgLabelClass="";
let textLabelClass="";

if(label==="bug"){
bgLabelClass="bg-[#FECACA]";
textLabelClass="text-[#EF4444]";
}
else if(label==="help wanted"){
bgLabelClass="bg-[#FFF6D1]";
textLabelClass="text-[#F59E0B]";
}
else if(label==="enhancement"){
bgLabelClass="bg-[#BBF7D0]";
textLabelClass="text-[#16A34A]";
}
else if(label==="good first issue"){
bgLabelClass="bg-[#e9d5ff]";
textLabelClass="text-[#9333ea]";
}
else if(label==="documentation"){
bgLabelClass="bg-[#a5f3fc]";
textLabelClass="text-[#0e7490]";
}


return `<div class="badge ${bgLabelClass} ${textLabelClass} text-[12px]">${label}</div>`}).join('')}


</div>
<div class="text-[12px] text-[#64748B]">
<hr class="border border-gray-200 mt-4">
    <p>#1 by john_doe</p>
<p>1/15/2024</p>
</div>

</div>
        
`

cardContainer.append(cardBody);
    })
}

loadCards();
// loadOpenCards();