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

// ---------search-box--------------------

const searchCard = () =>{

    const searchValue = document.getElementById("search-card").value;

    if(searchValue === ""){
        loadCards();
        return;
    }

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            removeActive();
            document.getElementById("all-btn").classList.add("active");

            projectAmount.innerText = data.data.length;

            displayCards(data.data);
        });

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
       <div onclick="loadCardDetail(${closeCard.id})" id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 ${borderTop}">
    <div class="flex justify-between">
    <img src="./assets/${closeCard.status}-Status.png" alt="" class="h-5">

  <div class="badge ${bgClass} ${textClass} mb-4 py-3">${closeCard.priority.toUpperCase()}</div></div>
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


return `<div class="badge ${bgLabelClass} ${textLabelClass} text-[10px]">${label.toUpperCase()}</div>`}).join('')}


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
       <div onclick="loadCardDetail(${openCard.id})" id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 ${borderTop}">
    <div class="flex justify-between">
    <img src="./assets/${openCard.status}-Status.png" alt="" class="h-5">
  <div class="badge ${bgClass} ${textClass} mb-4 py-3">${openCard.priority.toUpperCase()}</div></div>
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


return `<div class="badge ${bgLabelClass} ${textLabelClass} text-[10px]">${label.toUpperCase()}</div>`}).join('')}


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

// ----------------------- card modal-------------------

const loadCardDetail=async(id)=>{
     const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    //  console.log(url);
     const res=await fetch(url)
     const details=await res.json()
        //   console.log(details.data);
       const detailsBox=document.getElementById("modal-card")
       
        let bgClass="";
        let textClass="";

if(details.data.priority==="high"){
bgClass="bg-[#EF4444]";
textClass="text-white"
}
else if(details.data.priority==="medium"){
bgClass="bg-[#eab308]";
textClass="text-white"

}
else if(details.data.priority==="low"){
bgClass="bg-[#6b7280]";
textClass="text-white"

}
       
       detailsBox.innerHTML=`
        <div>
            <h2 class="font-bold text0[24px]">${details.data.title}</h2>
           <div class="flex gap-1 pt-2">
             <div class="badge badge-success text-white font-medium text-[12px] rounded-2xl">${details.data.status}</div>
             <div class="w-1 h-1 rounded-full bg-[#64748B] mt-2"></div>
            <p class="text-[12px] text-[#64748B]">Opened by ${details.data.author}</p>
                <div class="w-1 h-1 rounded-full bg-[#64748B] mt-2"></div><p class="text-[12px] text-[#64748B]">${details.data.updatedAt}</p>
           </div>

    

<div class="flex gap-2 pt-2">
  ${details.data.labels.map(label => {

let bgLabelClass="";
let textLabelClass="";
let borderLabelClass="";


if(label==="bug"){
bgLabelClass="bg-[#FECACA]";
textLabelClass="text-[#EF4444]";
borderLabelClass="border-[#dc2626]";

}
else if(label==="help wanted"){
bgLabelClass="bg-[#FFF6D1]";
textLabelClass="text-[#F59E0B]";
borderLabelClass="border-[#eab308]";

}
else if(label==="enhancement"){
bgLabelClass="bg-[#BBF7D0]";
textLabelClass="text-[#16A34A]";
borderLabelClass="border-[#16a34a]";

}
else if(label==="good first issue"){
bgLabelClass="bg-[#e9d5ff]";
textLabelClass="text-[#9333ea]";
borderLabelClass="border-[#9333ea]";

}
else if(label==="documentation"){
bgLabelClass="bg-[#a5f3fc]";
textLabelClass="text-[#0e7490]";
borderLabelClass="border-[#0891b2]";


}


return `<div class="badge border ${bgLabelClass} ${textLabelClass} ${borderLabelClass} text-[10px]">${label.toUpperCase()}</div>`}).join('')}

</div>      
           </div>

           <p class="text-[16px] text-[#64748B] pt-4">${details.data.description}</p>
           
           <div class="bg-[#F8FAFC] rounded-xl my-4 mx-2 p-4 grid grid-cols-2">

            <div class="">
                <p class="text-[16px] text-[#64748B]">Assignee:</p>
                <p class="text-16px font-semibold">${details.data.assignee ? details.data.assignee:"NOT FOUND"}</p>
            </div>

            <div>
                <p class="text-[16px] text-[#64748B]">Priority:</p>
                <div class="badge rounded-2xl ${bgClass} ${textClass} text-[12px]">${details.data.priority.toUpperCase()}</div>

            </div>
           </div>


        </div>
       `
       document.getElementById("my_modal_5").showModal();

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
<div onclick="loadCardDetail(${card.id})" id="card-body" class="bg-white shadow-lg rounded-lg p-5 h-[265px] border-t-4 ${borderTop}">
    <div class="flex justify-between">
    <img src="./assets/${card.status}-Status.png" alt="" class="h-5">

  <div class="badge ${bgClass} ${textClass} mb-4 py-3">${card.priority.toUpperCase()}</div></div>
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


return `<div class="badge ${bgLabelClass} ${textLabelClass} text-[10px]">
 ${label.toUpperCase()}</div>`}).join('')}

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