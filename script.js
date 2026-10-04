const screens = [...document.querySelectorAll(".screen")];
const toast = document.getElementById("toast");

function showScreen(id){
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({top:0, behavior:"smooth"});
}

document.querySelectorAll("[data-next]").forEach(btn=>{
  btn.addEventListener("click",()=>showScreen(btn.dataset.next));
});

const noBtn = document.getElementById("noBtn");
const startHint = document.getElementById("startHint");
let noCount = 0;

noBtn.addEventListener("mouseenter", ()=>{
  if(noCount < 3){
    noCount++;
    const x = (Math.random()*180)-90;
    const y = (Math.random()*70)-35;
    noBtn.style.transform = `translate(${x}px,${y}px)`;
    startHint.textContent = ["hmm... try again 👀","nice try.","you really thought i'd let you? 😭"][Math.min(noCount-1,2)];
  }
});

noBtn.addEventListener("click",()=>{
  startHint.textContent = "EXCUSE ME??? 😾  Try YES.";
  noBtn.style.transform = "translate(0,0)";
});

document.getElementById("yesBtn").addEventListener("click",()=>{
  showScreen("introScreen");
  typeText();
});

let typed = false;
function typeText(){
  if(typed)return;
  typed = true;
  const text = "someone important entered the game.";
  const el = document.getElementById("typing");
  let i=0;
  const timer=setInterval(()=>{
    el.textContent += text[i++];
    if(i>=text.length)clearInterval(timer);
  },45);
}

const messages = [
  "are one of my favorite things.",
  "by that you make ordinary days feel less ordinary.",
  "shows how easy to ragebait",
  "dangerously cute.",
  "make me blush,btw you are mine.",
  "and yes, you are stuck with me."
];

document.querySelectorAll(".memory-list button").forEach((btn,i)=>{
  btn.addEventListener("click",()=>{
    document.getElementById("memoryPopup").textContent = messages[i];
  });
});

const firstMet = new Date("2026-04-09T00:00:00");
function updateCounter(){
  const diff = Math.max(0, Date.now()-firstMet.getTime());
  const days = Math.floor(diff/86400000);
  document.getElementById("counter").textContent = days.toLocaleString();
}
updateCounter();
setInterval(updateCounter,1000);

document.getElementById("openGift").addEventListener("click",()=>{
  document.getElementById("gift").textContent="🐈‍⬛💗";
  document.getElementById("finalTitle").textContent="YOU UNLOCKED IT.";
  document.getElementById("finalText").innerHTML="Happy Boyfriend Day, cutie.<br><br>Thanks for being my favorite person, my favorite notification, and my good boy. i love you ♡";
  document.getElementById("openGift").textContent="RESTART GAME ↻";
  document.getElementById("openGift").onclick=()=>location.reload();
  for(let i=0;i<18;i++){
    const el=document.createElement("div");
    el.textContent=["✦","♡","🐾","♥"][i%4];
    el.style.position="fixed";
    el.style.left=Math.random()*100+"vw";
    el.style.top=Math.random()*100+"vh";
    el.style.fontSize=(12+Math.random()*24)+"px";
    el.style.zIndex=40;
    el.style.animation=`float ${2+Math.random()*2}s ease-in-out`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3500);
  }
});

const starBox=document.getElementById("stars");
for(let i=0;i<35;i++){
  const s=document.createElement("span");
  s.className="star";
  s.textContent=["✦","·","♡"][i%3];
  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*100+"%";
  s.style.animationDelay=(Math.random()*5)+"s";
  s.style.fontSize=(8+Math.random()*12)+"px";
  starBox.appendChild(s);
}
/* =========================
   PHOTO GALLERY
========================= */

const gallery = document.querySelector(".photo-gallery");
const shuffleButton = document.getElementById("shufflePhotos");

shuffleButton.addEventListener("click", () => {

  const photos = [...gallery.children];

  photos.sort(() => Math.random() - 0.5);

  photos.forEach(photo => {
    gallery.appendChild(photo);
  });

});

document.getElementById("goToGallery").addEventListener("click", () => {
    showScreen("galleryScreen");
});

document.getElementById("restartGame").addEventListener("click", () => {
    location.reload();
});