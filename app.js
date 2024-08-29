
const useData = {
  id: 1,
 
}


async function getCoffe() {
const baseUrl='https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

try{
  const data = await fetch(baseUrl)
  const response =  await data.json()
  return response
}catch(err){
  console.log(err);
}
} 






  
  



//   <div class="w-[260px] h-[230px] ${id}" >
//                         <div class="relative w-[260px] h-[160px] bg-[#FEF7EE] rounded-2xl">
//                             <img src="`${image}`" alt="">
//                             <div class="bg-[#F6C768] w-[61px] h-[20px] ${popular} rounded-2xl mt-2 ml-2"></div>
//                         </div>
//                         <div class="w-[260px] h-[24px] ${name} text-[1rem] text-[#FEF7EE] font-medium flex items-center justify-between">
//                             <div  class="w-[49px] h-[24px] bg-[#BEE3CC] ${price} rounded-md "></div>
//                         </div>
//                         <div class="w-[260px] h-[24px] flex items-center ">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M10.3072 7.21992C10.9493 5.61924 11.2704 4.81889 11.7919 4.70797C11.9291 4.6788 12.0708 4.6788 12.208 4.70797C12.7295 4.81889 13.0506 5.61924 13.6927 7.21992C14.0578 8.1302 14.2404 8.58535 14.582 8.89491C14.6778 8.98174 14.7818 9.05907 14.8926 9.12582C15.2874 9.3638 15.7803 9.40794 16.7661 9.49623C18.4348 9.64568 19.2692 9.7204 19.524 10.1961C19.5768 10.2947 19.6127 10.4014 19.6302 10.5118C19.7146 11.0448 19.1012 11.6028 17.8744 12.719L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5638 16.8337 18.8974C16.6649 19.1971 16.3538 19.389 16.0102 19.4054C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.238 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.238 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4054C7.64609 19.389 7.33504 19.1971 7.16617 18.8974C6.97818 18.5638 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.719C4.89867 11.6028 4.28527 11.0448 4.36975 10.5118C4.38724 10.4014 4.42312 10.2947 4.47589 10.1961C4.73069 9.7204 5.56507 9.64568 7.23384 9.49623C8.21962 9.40794 8.71251 9.3638 9.10735 9.12582C9.2181 9.05907 9.32211 8.98174 9.41793 8.89491C9.75954 8.58535 9.94211 8.1302 10.3072 7.21992Z" fill="#F6C768" stroke="#F6C768" stroke-width="2"/>
//                                 </svg>
//                                 <span class="text-[#6F757C] `${votes}`text-[16px] "></span>
//                         </div>
//                     </div>

const coffedata = document.querySelector("#coffee-list");

getCoffe().then(data => {
  if(data){
    data.map(item=>{

      //   const div = document.createElement("div")
      
      //   div.innerHTML= 
      //   `
      //   //   <div class="w-[260px] h-[230px]" >
         
      // //                         <div class="relative w-[260px] h-[160px] bg-[#FEF7EE] rounded-2xl">
      // //                             <img src="${item.image}" alt="">
      // //                             <div class="bg-[#F6C768] w-[61px] h-[20px] rounded-2xl mt-2 ml-2">${item.popular}</div>
      // //                         </div>
      // //                         <div class="w-[260px] h-[24px]  text-[1rem] text-[#FEF7EE] font-medium flex items-center justify-between">
      // //                             <div  class="w-[49px] h-[24px] bg-[#BEE3CC] rounded-md">${item.price}</div>
      // //                         </div>
      // //                         <div class="w-[260px] h-[24px] flex items-center ">
      // //                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      // //                                 <path d="M10.3072 7.21992C10.9493 5.61924 11.2704 4.81889 11.7919 4.70797C11.9291 4.6788 12.0708 4.6788 12.208 4.70797C12.7295 4.81889 13.0506 5.61924 13.6927 7.21992C14.0578 8.1302 14.2404 8.58535 14.582 8.89491C14.6778 8.98174 14.7818 9.05907 14.8926 9.12582C15.2874 9.3638 15.7803 9.40794 16.7661 9.49623C18.4348 9.64568 19.2692 9.7204 19.524 10.1961C19.5768 10.2947 19.6127 10.4014 19.6302 10.5118C19.7146 11.0448 19.1012 11.6028 17.8744 12.719L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5638 16.8337 18.8974C16.6649 19.1971 16.3538 19.389 16.0102 19.4054C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.238 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.238 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4054C7.64609 19.389 7.33504 19.1971 7.16617 18.8974C6.97818 18.5638 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.719C4.89867 11.6028 4.28527 11.0448 4.36975 10.5118C4.38724 10.4014 4.42312 10.2947 4.47589 10.1961C4.73069 9.7204 5.56507 9.64568 7.23384 9.49623C8.21962 9.40794 8.71251 9.3638 9.10735 9.12582C9.2181 9.05907 9.32211 8.98174 9.41793 8.89491C9.75954 8.58535 9.94211 8.1302 10.3072 7.21992Z" fill="#F6C768" stroke="#F6C768" stroke-width="2"/>
      // //                                 </svg>
      // //                                 <span class="text-[#6F757C]text-[16px] ">${item.votes}</span>
      // //                         </div>
      // //                     </div>
      //   `
        //genel
        const anadiv=document.createElement("div")
        anadiv.className="grid gap-x-8 gap-y-4 grid-cols-3"
        //anaimg divi
        const coffeItem=document.createElement("div")
        coffeItem.className="w-[260px] h-[230px] ";
        //img
         const img=document.createElement("img");
         img.src = item.image;
         img.className="relative w-[260px] h-[160px] bg-[#FEF7EE] rounded-2xl"
      //populer
      const populer=document.createElement("div")
      if( item.popular===true){
        populer.className=("bg-[#F6C768] w-[60px] h-[20px] px-4 absolute rounded-2xl mt-2 ml-2 z-10 flex items-center justify-center text-[12px] font-semibold")
        populer.textContent="Populer"
        coffeItem.appendChild(populer);
      }
      
       const infoContainer= document.createElement("div");
       infoContainer.className="w-[260px] h-[24px] text-[1rem] text-[#FEF7EE] font-medium flex items-center justify-between mt-2"
       infoContainer.textContent=item.name
      const prices=document.createElement("div")
      prices.className="w-[49px] h-[24px] bg-[#BEE3CC] text-[#111315] text-[12px] font-medium flex items-center justify-center rounded-md font-semibold";
      prices.textContent=item.price
      
      const ratings=document.createElement("div")
      const votesdiv=document.createElement("div")
      
      
      
      votesdiv.className="w-[260px] h-[24px]  "
      ratings.className="flex items-center gap-x-2 text-[#FEF7EE]"
      
      if(item.rating !== null){
          ratings.innerHTML=`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3072 7.21992C10.9493 5.61924 11.2704 4.81889 11.7919 4.70797C11.9291 4.6788 12.0708 4.6788 12.208 4.70797C12.7295 4.81889 13.0506 5.61924 13.6927 7.21992C14.0578 8.1302 14.2404 8.58535 14.582 8.89491C14.6778 8.98174 14.7818 9.05907 14.8926 9.12582C15.2874 9.3638 15.7803 9.40794 16.7661 9.49623C18.4348 9.64568 19.2692 9.7204 19.524 10.1961C19.5768 10.2947 19.6127 10.4014 19.6302 10.5118C19.7146 11.0448 19.1012 11.6028 17.8744 12.719L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5638 16.8337 18.8974C16.6649 19.1971 16.3538 19.389 16.0102 19.4054C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.238 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.238 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4054C7.64609 19.389 7.33504 19.1971 7.16617 18.8974C6.97818 18.5638 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.719C4.89867 11.6028 4.28527 11.0448 4.36975 10.5118C4.38724 10.4014 4.42312 10.2947 4.47589 10.1961C4.73069 9.7204 5.56507 9.64568 7.23384 9.49623C8.21962 9.40794 8.71251 9.3638 9.10735 9.12582C9.2181 9.05907 9.32211 8.98174 9.41793 8.89491C9.75954 8.58535 9.94211 8.1302 10.3072 7.21992Z" fill="#F6C768" stroke="#F6C768" stroke-width="2"/>
          </svg>
          <span>${item.rating}</span>
        `
      }
      else{
        if(item.rating === null){
          const noRatings= document.createElement("div")
          noRatings.className="flex items-center gap-x-2 text-[#6F757C]"
          noRatings.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.1438 6.62759C10.9304 4.6666 11.3237 3.6861 12 3.6861C12.6763 3.6861 13.0696 4.6666 13.8562 6.6276L13.8929 6.71891C14.3373 7.82678 14.5595 8.38071 15.0123 8.7174C15.4652 9.05409 16.0596 9.10733 17.2485 9.2138L17.4635 9.23305C19.4093 9.40732 20.3822 9.49445 20.5904 10.1134C20.7985 10.7324 20.076 11.3898 18.631 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.881 14.5776C16.8492 14.659 16.8227 14.7423 16.8018 14.8271C16.6898 15.2818 16.7969 15.7645 17.0111 16.73L17.0778 17.0305C17.4714 18.8049 17.6683 19.692 17.3246 20.0747C17.1962 20.2177 17.0293 20.3206 16.8438 20.3712C16.3476 20.5066 15.6432 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8936 17.5355 11.6847 17.5689C11.1536 17.6537 10.691 18.0306 9.7658 18.7845C8.35684 19.9326 7.65237 20.5066 7.15617 20.3712C6.97075 20.3206 6.80384 20.2177 6.67542 20.0747C6.33174 19.692 6.52857 18.8049 6.92225 17.0305L6.98892 16.73C7.20313 15.7645 7.31024 15.2818 7.19818 14.8271C7.17728 14.7423 7.15084 14.659 7.11904 14.5776C6.94857 14.1415 6.58282 13.8087 5.85131 13.1432L5.36903 12.7044C3.92398 11.3898 3.20146 10.7324 3.40964 10.1134C3.61782 9.49445 4.59073 9.40732 6.53654 9.23305L6.75148 9.2138C7.94039 9.10733 8.53485 9.05409 8.9877 8.7174C9.44055 8.38071 9.66275 7.82678 10.1071 6.71891L10.1438 6.62759Z" stroke="#6F757C" stroke-width="2"/>
      </svg>
      <span>${item.rating === null ? "No ratings" : item.rating}</span>`
       
         
         
          ratings.appendChild(noRatings)
      
        }
        
      }
      votesdiv.appendChild(ratings)
      coffeItem.appendChild(votesdiv)
      
      
      
      
      
      coffeItem.appendChild(img);
      coffeItem.appendChild(infoContainer);
      infoContainer.appendChild(prices);
      coffeItem.appendChild(votesdiv);
      anadiv.appendChild(coffeItem);
      coffedata.appendChild(anadiv);
       coffedata.appendChild(coffeItem)
      
      
      })
  }
})



