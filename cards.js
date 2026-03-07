const loadCards=() =>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        removeActive()

 const allBtn=document.getElementById("all-btn");
        console.log(allBtn)
        allBtn.classList.add("active")
       
    projectAmount.innerText=data.data.length

        displayCards(data.data);
    })

}

// ----task-count--------
const projectAmount=document.getElementById("project-amount")



const removeActive=()=>{
    const loadButtons=document.querySelectorAll(".load-btn")
    // console.log(loadButtons)
    loadButtons.forEach(btn=>btn.classList.remove("active"))
}

// -----------------closed cards---------------------------

const loadCloseCards=() =>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        const closeCards = data.data.filter(card => card.status === "closed");
        removeActive()

        const projectAmount=document.getElementById("project-amount")
projectAmount.innerText=closeCards.length


        const closeBtn=document.getElementById("close-btn");
        console.log(closeBtn)
        closeBtn.classList.add("active")
        
        displayCloseCards(closeCards);
    })


}

const displayCloseCards=(closeCards)=>{
  

    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";
    closeCards.forEach((closeCard,index)=>{
let bgClass="";
let textClass="";
let borderTop="";

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
if(closeCard.status==="open"){
    borderTop="border-[#00A96E]"

}
else if(closeCard.status==="closed"){
    borderTop="border-[#7E22CE]"


}


     const closeCardBody=document.createElement("div");
       closeCardBody.innerHTML=`
       <div id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 ${borderTop}">
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
    <p>#${index+1} by ${closeCard.author}</p>
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
               removeActive()
const projectAmount=document.getElementById("project-amount")
projectAmount.innerText=openCards.length


        const openBtn=document.getElementById("open-btn");
        console.log(openBtn)
        openBtn.classList.add("active")
       
        displayOpenCards(openCards)
    })


}

const displayOpenCards=(openCards)=>{
  

    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";
    openCards.forEach((openCard,index)=>{
let bgClass="";
let textClass="";
let borderTop="";

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
if(openCard.status==="open"){
    borderTop="border-[#00A96E]"

}
else if(openCard.status==="closed"){
    borderTop="border-[#7E22CE]"

}


     const openCardBody=document.createElement("div");
       openCardBody.innerHTML=`
       <div id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 ${borderTop}">
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
    <p>#${index+1} by ${openCard.author}</p>
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
    cards.forEach((card,index)=>{

        let bgClass="";
        let textClass="";
        let borderTop="";

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
if(card.status==="open"){
    borderTop="border-[#00A96E]"

}
else if(card.status==="closed"){
    borderTop="border-[#7E22CE]"

}



     const cardBody=document.createElement("div");
        cardBody.innerHTML=`
<div id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 ${borderTop}">
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
    <p>#${index+1} by ${card.author}</p>
<p>${card.createdAt}</p>
</div>

</div>
        
`

cardContainer.append(cardBody);
    })
}

loadCards();
// loadOpenCards();