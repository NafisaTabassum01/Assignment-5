const loadCards=() =>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        displayCards(data.data);
    })

}

const displayCards=(cards)=>{
    const cardContainer=document.getElementById("card-container");
    cardContainer.innerHTML="";
    cards.forEach((card)=>{
    
        const cardBody=document.createElement("div");
        cardBody.innerHTML=`
        <div id="card" class="bg-white shadow-lg rounded-lg p-5 h-[265px]">
    <div class="flex justify-end">
  <div class="badge badge-soft badge-warning mb-4 py-3">${card.priority}</div></div>
    <h2 class="text-[14px] font-semibold">${card.title}</h2>
    <p class="text-[12px] text-[#64748B] line-clamp-2 pt-3">${card.description}</p>

<div class="flex gap-2 pt-2">
  ${card.labels.map(label => `<div class="badge badge-soft badge-info border border-blue-400">${label}</div>`).join('')}
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
loadCards()

