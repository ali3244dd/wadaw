const areas=document.querySelectorAll(".block-content");const platform=areas[1];const category=areas[2];const alignment=areas[3];const maxLength=6;eventListeners();function clear(){localStorage.removeItem("contents");localStorage.removeItem("platform");localStorage.removeItem("alignment");localStorage.removeItem("kinds");localStorage.removeItem("category");localStorage.setItem("alignment","recentlyUpdated");}
function eventListeners(){platform.addEventListener("click",selectPlatform);category.addEventListener("click",selectCategory);alignment.addEventListener("click",selectAlignment);}
function hrefManager(){href="?"
if(localStorage.getItem("platform")!==null){href+=`platform=${localStorage.getItem("platform")}&`}
if(localStorage.getItem("category")!==null){href+=`category=${localStorage.getItem("category")}&`}
if(localStorage.getItem("alignment")!==null){href+=`alignment=${localStorage.getItem("alignment")}&`}
if(localStorage.getItem("kinds")!==null){href+=`kinds=${localStorage.getItem("kinds")}&`}
if(localStorage.getItem("contents")!==null){href+=`contents=${localStorage.getItem("contents")}&`}
if(href==="?"){href="?"}
else{href=href.slice(0,-1)}
window.location.replace(href);}
function contentFilter(e){const items=document.querySelectorAll(".select2-selection__rendered")[1].querySelectorAll('li');const contents=[];for(const li of items){if(li.textContent.toString()!==""){console.log(li.textContent.toString().replace(/×/gi,""));contents.push(li.textContent.toString().replace(/×/gi,""))}}
if(contents.length==0){console.log("İçerik filtrelemesi silindi!");localStorage.removeItem("contents");hrefManager()}
else if(contents.length>=maxLength){One.helpers('jq-notify',{type:'danger',icon:'fa fa-times me-1',message:`Bu filtre türü maximum ${maxLength} adet değer alabilir. Fazladan olan değerleri siliniz.`});}
else{console.log(contents);localStorage.setItem("contents",JSON.stringify(contents));hrefManager()}}
function kindFilter(e){const items=document.querySelectorAll(".select2-selection__rendered")[0].querySelectorAll('li');const kinds=[];for(const li of items){if(li.textContent.toString()!==""){console.log(li.textContent.toString().replace(/×/gi,""));kinds.push(li.textContent.toString().replace(/×/gi,""))}}
if(kinds.length==0){console.log("Tür filtrelemesi silindi!");localStorage.removeItem("kinds");hrefManager()}
else if(kinds.length>=maxLength){One.helpers('jq-notify',{type:'danger',icon:'fa fa-times me-1',message:`Bu filtre türü maximum ${maxLength} adet değer alabilir. Fazladan olan değerleri siliniz.`});}
else{localStorage.setItem("kinds",JSON.stringify(kinds))
hrefManager()}}
function selectAlignment(e){if(e.target.className.search("selectAlignment")!==-1){if(localStorage.getItem("alignment")===e.target.id){console.log("Sıralama tagı silindi!");localStorage.removeItem("alignment");}
else{console.log(e.target.id);localStorage.setItem("alignment",e.target.id);}
hrefManager()}}
function selectPlatform(e){if(e.target.className.search("platformSelect")!==-1){if(e.target.textContent.includes("PC")){if(localStorage.getItem("platform")=="pc"){console.log("Platform tagı silindi!");localStorage.removeItem("platform");}
else{console.log("PC")
localStorage.setItem("platform","pc")}}
else if(e.target.textContent.includes("APK")){if(localStorage.getItem("platform")=="apk"){console.log("Platform tagı silindi!");localStorage.removeItem("platform");}
else{console.log("APK")
localStorage.setItem("platform","apk")}}
hrefManager();}}
function selectCategory(e){if(e.target.className.search("categorySelect")!==-1){if(e.target.textContent.includes("Oyunlar")){if(localStorage.getItem("category")=="games"){console.log("Kategori tagı silindi!");localStorage.removeItem("category");}
else{console.log("Oyunlar")
localStorage.setItem("category","games")}}
else if(e.target.textContent.includes("Çizgi Romanlar")){if(localStorage.getItem("category")=="comics"){console.log("Kategori tagı silindi!");localStorage.removeItem("category");}
else{console.log("Çizgi Romanlar")
localStorage.setItem("category","comics")}}
hrefManager();}}