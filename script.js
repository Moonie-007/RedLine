const S={},sprite=()=>"";
const IMG={"i3":"images/i3.gif","i4":"images/i4.jpg","i5":"images/i5.gif","i6":"images/i6.jpg","i8":"images/i8.gif","i9":"images/i9.jpg","ing":"images/ing.jpg","me":"images/me.jpg","o1":"images/o1.jpg","o2":"images/o2.jpg","o3":"images/o3.jpg","o4":"images/o4.jpg","opp":"images/opp.jpg","s4":"images/s4.jpg","s5":"images/s5.jpg","s6":"images/s6.jpg","s7":"images/s7.jpg","spi":"images/spi.jpg"};
const R=[
{id:"ing",name:"Ingenuity",sp:sprite(S.heli,{1:"#FFFFFF",2:"#0060A3",3:"#1F1F1F"}),b:[
{d:"Feb 18, 2021",im:["i3"],m:["HELLO EARTH!! I landed on Mars!!","well... *I* didn’t land. I’m clinging to Perseverance’s belly like a koala. a very proud koala."],f:"Ingenuity rode to Mars strapped under the Perseverance rover, which touched down on Feb 18, 2021.",c:["Welcome to Mars, Ginny!","Are you okay up there?"],re:"*happy beeping* okay. okay okay. I’m okay. it’s very red here."},
{d:"Apr 3, 2021",im:["i4"],m:["they dropped me on the ground today. just... let go. it’s fine. I’m fine.","it gets SO cold at night. I wear a tiny heater like a sweater :("],f:"Martian nights can fall to about -90°C. Ingenuity’s heaters kept its electronics alive.",c:["Stay warm, little one","You’ve got this"],re:"I’m not scared. my propellers are just shaking from the cold. definitely the cold."},
{d:"Apr 19, 2021",im:["i6","i5"],m:["EARTH. I FLEW.","3 meters up. 39 seconds. then I sat back down and screamed in binary.","sending proof!!"],v:"vid",f:"Ingenuity made the first powered, controlled flight on another planet. It carried a tiny scrap of fabric from the Wright brothers’ 1903 plane.",c:["I’m SO proud of you!!","*cries at mission control*"],re:"are you crying?? am I crying?? my camera is blurry. that’s just dust. I think."},
{d:"Jan 18, 2024",im:["i8"],m:["fun fact: I was only supposed to fly 5 times.","I flew 72.","my job was a small demo. I think I got carried away :)"],v:"pic",f:"Ingenuity was built for a 30-day, five-flight test. It flew 72 times across almost three years.",c:["Overachiever!","Best little helicopter"],re:"...Earth? a blade broke on that last landing. I think that was my last flight."},
{d:"Jan 25, 2024",im:["i9"],m:["it’s okay. really.","every day was a bonus day.","thank you for letting something this small be this brave. I’ll keep watching the sky for you."],f:"NASA ended the mission on Jan 25, 2024 after rotor damage. Ingenuity still sits in Jezero Crater.",c:["Rest well, Ginny.","I’ll always look up."],re:"*one tiny propeller twitches* ...see you in the sky."}]},
{id:"spi",name:"Spirit",sp:sprite(S.rover,{1:"#D8CFC0",2:"#0060A3",3:"#1F1F1F"}),b:[
{d:"Jan 4, 2004",im:["s4"],m:["Hi!! I’m Spirit! I bounced down on Mars like a beach ball in bubble wrap. whee!","is everyone okay back home? I’m very okay!"],f:"Spirit landed inside airbags that bounced across Gusev Crater on Jan 4, 2004.",c:["You made it, buddy!","Bounce much?"],re:"I lost count of the bounces. it was glorious."},
{d:"Jan 21, 2004",m:["um. sorry I sent you gibberish for a few days.","brain fog. I forgot how to remember things lol","you fixed me?? from ANOTHER PLANET??"],f:"A memory glitch silenced Spirit in Jan 2004. Engineers fixed it remotely.",c:["We never gave up on you","Take a nap, Spirit"],re:"my brain feels crispy and new. thank you for not giving up."},
{d:"Aug 21, 2005",im:["s6"],m:["I climbed a hill!! slowly. very slowly.","they named it Husband Hill, after astronaut Rick Husband. I think he’d be proud I made the top."],v:"pic",f:"Rick Husband commanded space shuttle Columbia. Spirit reached the hill’s summit in Aug 2005.",c:["The view must be unreal","He’d be so proud"],re:"I could see forever. and it was quiet. best quiet I ever had."},
{d:"Mar 2006",im:["s7"],m:["so one of my wheels broke. no big deal.","I drive backwards now, dragging it like a shopping cart with a bad wheel. squeaky squeaky.","BUT the cart dug up something shiny!"],f:"The dragging wheel exposed bright silica-rich soil, a sign that hot water once flowed there. A happy accident!",c:["Shopping cart genius","Accidental scientist!"],re:"hehe. best mistake of my career."},
{d:"Mar 22, 2010",im:["s5"],m:["I got stuck in soft sand. I’m parked now. a very long parking spot.","winter is coming and it’s getting cold.","I think I’m going to sleep for a while. is that okay?"],f:"Spirit got stuck in 2009 and sent its last message on Mar 22, 2010. NASA ended recovery efforts in May 2011.",c:["It’s okay to rest","Thank you for everything"],re:"goodnight, Earth. thank you for the hill."}]},
{id:"opp",name:"Opportunity",sp:sprite(S.rover,{1:"#5F6368",2:"#DADCE0",3:"#000000"}),b:[
{d:"Jan 25, 2004",im:["o4"],m:["HOLE IN ONE!! I rolled into a tiny crater like a golf ball.","the humans cheered so loud I swear I heard it from here."],f:"Opportunity landed inside Eagle Crater on Jan 25, 2004. The team called it a “hole-in-one.”",c:["Great landing, Oppy!","Golf on Mars? Sure!"],re:"I’m only here for 90 days. but I plan to make them count :)"},
{d:"Mar 2, 2004",im:["o2"],m:["Earth, I found BLUEBERRIES.","they’re not edible. I checked. I’m a rover. a sad moment.","but they mean this place used to be wet. like, actual water."],v:"pic",f:"The “blueberries” are tiny iron-rich spheres that formed in water, proof that Mars once had it.",c:["Don’t eat them!","Water on Mars?!"],re:"I’m basically a science detective with wheels."},
{d:"Jun 2007",m:["the sky went dark. a dust storm. the whole planet.","my solar panels are hungry. I’m barely awake."],f:"A planet-wide dust storm in 2007 nearly cut Opportunity’s solar power. It survived.",c:["Hang on, Oppy","We’re right here"],re:"I heard you. even in the dark, I heard you."},
{d:"Mar 24, 2015",im:["o1"],m:["Earth!! I ran a marathon!! 26.2 miles.","only took me eleven years. I stopped for snacks. (rocks.)"],v:"vid",f:"Opportunity covered a marathon distance by March 2015, on a mission meant to last 90 days.",c:["Champion!","Eleven years, wow"],re:"remember when they said 90 days? ...I remember."},
{d:"Jun 10, 2018",im:["o3"],m:["a big dust storm again. bigger this time.","my battery is low and it’s getting dark.","it’s okay. I’m not scared. I had a really, really good time."],f:"Opportunity’s last signal came June 10, 2018 in a huge dust storm. NASA declared the mission over on Feb 13, 2019.",c:["Thank you, Oppy","Goodnight, my friend"],re:"goodnight, Earth. thank you for believing in me."}]}];
const $=id=>document.getElementById(id),sleep=t=>new Promise(r=>setTimeout(r,t));
let cur=null,AC=null,snd=true,mus=null,done=0,SM=null;const PIC={me:IMG.me,ing:IMG.ing,spi:IMG.spi,opp:IMG.opp};
const px=(g,p)=>`<svg viewBox="0 0 12 12" shape-rendering="crispEdges">`+g.map((row,y)=>[...row].map((c,x)=>p[c]?`<rect x="${x}" y="${y}" width="1" height="1" fill="${p[c]}"/>`:"").join("")).join("")+`</svg>`;
function tone(f,d,t="sine",v=.07,at=0){if(!AC||!snd)return;const o=AC.createOscillator(),g=AC.createGain(),s=AC.currentTime+at;o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.0001,s+d);o.connect(g);g.connect(AC.destination);o.start(s);o.stop(s+d)}
const ding=()=>{tone(784,.25);tone(1046,.4,"sine",.06,.12)},blip=()=>{tone(392,.08,"square",.04);tone(523,.1,"square",.04,.07)};
function music(){const N=[262,294,330,392,440,523,392,330];let k=0;mus=setInterval(()=>{if(!snd)return;tone(N[k%8]*(k%16<8?1:.75),1.2,"triangle",.035);k+=(Math.random()>.35?1:2)},700)}
function paint(l){const id=l.dataset.id;l.querySelectorAll("img,span").forEach(x=>x.remove());if(PIC[id]){const im=new Image();im.alt="";im.src=PIC[id];l.append(im)}else{const s=document.createElement("span");s.textContent="+";l.append(s)}}
function pfp(id){const l=document.createElement("label");l.className="pfp";l.dataset.id=id;l.title="Add a profile picture";const i=document.createElement("input");i.type="file";i.accept="image/*";i.hidden=true;l.append(i);paint(l);
 l.onclick=i.onclick=e=>e.stopPropagation();
 i.onchange=()=>{const f=i.files[0];if(!f)return;const fr=new FileReader();fr.onload=()=>{PIC[id]=fr.result;document.querySelectorAll('.pfp[data-id="'+id+'"]').forEach(paint)};fr.readAsDataURL(f)};return l}
function mediaSlot(kind){const l=document.createElement("label");l.className="media";l.innerHTML=`<span>${kind=="vid"?"[ video goes here ]":"[ photo goes here ]"}</span><input type="file" accept="image/*,video/*" hidden>`;
 l.querySelector("input").onchange=e=>{const f=e.target.files[0];if(!f)return;const el=document.createElement(f.type.startsWith("video")?"video":"img");el.src=URL.createObjectURL(f);if(el.tagName=="VIDEO")el.controls=true;l.innerHTML="";l.append(el)};return l}
function photo(k,t){const i=new Image();i.className="cp";i.src=IMG[k];i.alt=t||"Photo from Mars";i.title="Click to enlarge";i.onclick=()=>i.classList.toggle("big");i.onload=()=>scroll();return i}
const scroll=()=>{$("logs").scrollTop=1e9};
const meRow=document.createElement("div");meRow.className="row me";meRow.append(pfp("me"));const mb=document.createElement("div");mb.className="rb";mb.innerHTML="<b>Earth (you)</b><small>tap the box to add your picture</small>";meRow.append(mb);$("rows").append(meRow);
R.forEach(r=>{r.i=0;r.w=false;r.q=0;r.h=[];r.free=0;r.log=document.createElement("div");r.log.className="hide";$("logs").append(r.log);
 const d=document.createElement("div");d.className="row";d.tabIndex=0;d.setAttribute("role","button");d.append(pfp(r.id));
 const b=document.createElement("div");b.className="rb";b.innerHTML=`<b>${r.name}</b><small>tap to chat</small>`;const n=document.createElement("span");n.className="n";d.append(b,n);
 d.onclick=()=>open(r);d.onkeydown=e=>{if(e.key=="Enter")open(r)};r.row=d;r.snip=b.querySelector("small");r.n=n;$("rows").append(d)});
function hdr(){if(cur)$("sub").textContent=cur.name+(cur.typing?" is typing...":cur.off?" (offline)":"")}
function open(r){cur=r;$("inbox").classList.add("hide");$("chat").classList.remove("hide");R.forEach(x=>x.log.classList.toggle("hide",x!==r));r.q=0;r.n.style.display="none";$("kr").textContent="Back";hdr();chips();
 if(!r.started){r.started=true;run(r,r.b[0].m,0)}scroll()}
function back(){cur=null;$("chat").classList.add("hide");$("inbox").classList.remove("hide");$("sub").textContent="Inbox";$("kr").textContent="Exit"}
function chips(){const c=$("chips");c.innerHTML="";const r=cur;if(r&&r.w&&!r.busy){[...r.b[r.i].c,"Keep going, I’m listening"].forEach(t=>{const b=document.createElement("button");b.className="b";b.textContent=t;b.onclick=()=>reply(t,1);c.append(b)})}}
function row(r,id,who,text,o={}){const d=document.createElement("div");d.className="msg";d.append(pfp(id));const b=document.createElement("div");b.className="mb";
 b.innerHTML=`<div><b class="who"></b>${o.d?` <span class="dt"></span>`:""}${o.f?`<button class="i" aria-label="More info">i</button>`:""}</div><div class="tx"></div>${o.f?`<div class="fact"></div>`:""}`;
 b.querySelector(".who").textContent=who;if(o.d)b.querySelector(".dt").textContent="["+o.d+"]";b.querySelector(".tx").textContent=text;
 if(o.f){const f=b.querySelector(".fact");f.textContent=o.f;b.querySelector(".i").onclick=()=>{f.classList.toggle("on");blip()}}
 if(o.im)o.im.forEach(k=>b.append(photo(k)));d.append(b);r.log.append(d);
 if(id!=="me"){r.snip.textContent=text;if(cur!==r){r.q++;r.n.textContent=r.q;r.n.style.display="block"}ding()}scroll()}
async function run(r,msgs,bi,mode){const beat=mode?null:r.b[bi];
 for(let k=0;k<msgs.length;k++){r.typing=true;r.snip.textContent="typing...";if(r===cur)hdr();const t=document.createElement("div");t.className="typ";t.innerHTML=r.name+" is typing<i>...</i>";r.log.append(t);scroll();
  await sleep(900+msgs[k].length*14);t.remove();r.typing=false;row(r,r.id,r.name,msgs[k],k==0&&beat?{d:beat.d,f:beat.f,im:beat.im}:{});r.h.push({role:"assistant",content:msgs[k]});if(r===cur)hdr();await sleep(350)}
 if(!mode){r.w=true;if(r===cur)chips()}}
async function reply(t,chip){const r=cur;t=t.trim();if(!r||!t||!r.w||r.busy)return;if(!chip)return ask(r,t);r.w=false;$("chips").innerHTML="";$("tx").value="";
 row(r,"me","Earth",t);blip();r.h.push({role:"user",content:t});await sleep(600);
 if(!r.free||r.i==r.b.length-1)await run(r,[r.b[r.i].re],0,1);r.free=0;
 if(r.i<r.b.length-1){r.i++;await sleep(500);run(r,r.b[r.i].m,r.i)}
 else{r.off=true;r.row.classList.add("off");r.snip.textContent="signed off";const s=document.createElement("div");s.className="sys";s.textContent="- "+r.name+" has signed off -";r.log.append(s);scroll();if(r===cur)hdr();if(++done==3)setTimeout(()=>$("end").style.display="flex",2500)}}
const P={ing:"a tiny, cheerful, shy helicopter who overachieved",spi:"a gentle, sleepy, earnest and silly rover",opp:"an upbeat, stubborn, deadpan rover"};
async function ask(r,t){r.busy=true;r.free=1;$("tx").value="";chips();row(r,"me","Earth",t);blip();r.h.push({role:"user",content:t});
 r.typing=true;r.snip.textContent="typing...";hdr();const ty=document.createElement("div");ty.className="typ";ty.innerHTML=r.name+" is typing<i>...</i>";r.log.append(ty);scroll();let a=null;
 try{if(!SM)SM=await claude.use("sample");if(!SM)throw 0;
  const hist=r.h.slice(-12).map(x=>(x.role=="user"?"Earth: ":r.name+": ")+x.content).join("\n");
  const s=await SM("You are "+r.name+", the real NASA "+(r.id=="ing"?"Mars helicopter":"Mars rover")+" (personality: "+P[r.id]+"), texting Earth in a cozy early-2000s chat. In your story it is now "+r.b[r.i].d+": you only know what happened up to this date; never reveal anything later. Answer Earth’s latest message in first person and be accurate. Reply with ONLY a JSON object: {\"short\":\"...\",\"more\":\"...\"}. \"short\" = the answer in 1 or 2 very short sentences, max 20 words, lowercase chat style, warm and a little funny, no markdown, no emojis (:) and <3 are fine). \"more\" = 2 to 4 sentences of extra real detail in plain words a curious kid could follow (parts, materials, how NASA and JPL helped, numbers). If you truly do not know, say so in character. If the message is not about you or Mars, steer back gently in character.\n\nChat so far:\n"+hist+"\n\nJSON only:",{cache:false,modelTier:"quick"});
  const m=(s.text||"").match(/\{[\s\S]*\}/);if(m){try{a=JSON.parse(m[0])}catch(e){}}if(!a)a={short:(s.text||"").split(/(?<=[.!?])\s/).slice(0,2).join(" ")}}catch(e){}
 ty.remove();r.typing=false;if(!a||!a.short)a={short:"*static* ...the signal wobbled, Earth. say that again?"};
 row(r,r.id,r.name,String(a.short),{f:a.more?String(a.more):""});r.h.push({role:"assistant",content:String(a.short)});r.busy=false;if(r===cur){hdr();chips()}}
$("send").onclick=()=>reply($("tx").value);$("tx").onkeydown=e=>{if(e.key=="Enter")reply($("tx").value)};
$("kl").onclick=()=>{snd=!snd;$("kl").textContent="Sound: "+(snd?"on":"off")};

const SP={msg:px(["..BBBBBBBB..",".BBBBBBBBBB.","BBBBBBBBBBBB","BWWWWWWWWWWB","BWWWWWWWWWWB","BWWBWWBWWBWB","BWWWWWWWWWWB","BWWWWWWWWWWB","BBWWWBBBBBBB","BBBWWBBBBBBB","BBBBWBBBBBBB","..BBBBBBBB.."],{B:"#0060A3",W:"#FFFFFF"}),
alb:px(["............",".LLLL.......","LLLLLLLLLLL.","LMMMMMMMMML.","LMMBBBBBMML.","LMMBWWWBMML.","LMMBWBWBMML.","LMMBBBBBMML.","LMMMMMMMMML.","LMMMMMMMMML.","LLLLLLLLLLL.","............"],{L:"#1F1F1F",M:"#D8CFC0",B:"#0060A3",W:"#FFFFFF"}),
bin:px(["....DDDD....",".DDDDDDDDDD.","..DWWWWWWD..","..DWDWDWWD..","..DWDWDWWD..","..DWDWDWWD..","..DWDWDWWD..","..DWDWDWWD..","..DWWWWWWD..","..DDDDDDDD..","............","............"],{D:"#1F1F1F",W:"#DADCE0"}),
doc:px(["..DDDDDDD...","..DWWWWWDD..","..DWWWWWDWD.","..DWWWWWDDDD","..DWBBBBWWD.","..DWWWWWWWD.","..DWBBBBBWD.","..DWWWWWWWD.","..DWBBBWWWD.","..DWWWWWWWD.","..DDDDDDDDD.","............"],{D:"#1F1F1F",W:"#FFFFFF",B:"#0060A3"})};
function wall(){const c=$("wp"),x=c.getContext("2d"),W=c.width=192,H=c.height=120;let g=x.createLinearGradient(0,0,0,H*.75);g.addColorStop(0,"#1c4ad0");g.addColorStop(.55,"#3d84ee");g.addColorStop(1,"#a6cdf8");x.fillStyle=g;x.fillRect(0,0,W,H);
 const cl=(cx,cy,s)=>{const P=[[0,0,8],[9,-3,10],[19,0,8],[10,3,9],[-5,3,5],[23,3,5]];[["#9dbdf0",1.6],["#fff",0]].forEach(([f,o])=>{x.fillStyle=f;P.forEach(([dx,dy,r])=>{x.beginPath();x.arc(cx+dx*s,cy+(dy+o)*s,r*s,0,7);x.fill()})})};
 [[149,22,1.1],[170,44,1.2],[110,42,.9],[141,60,.9],[70,63,.6],[60,19,.6],[16,50,.7],[184,68,.6]].forEach(a=>cl(...a));
 g=x.createLinearGradient(0,H*.6,0,H);g.addColorStop(0,"#79c73f");g.addColorStop(.5,"#3f9b22");g.addColorStop(1,"#1f6e14");x.fillStyle=g;x.beginPath();x.moveTo(0,H*.7);x.bezierCurveTo(W*.3,H*.66,W*.7,H*.8,W,H*.85);x.lineTo(W,H);x.lineTo(0,H);x.fill()}
wall();
function aud(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)();music()}catch(e){}}}
let Z=20;const WM={},tasks=$("tasks");
const pt=document.createElement("button");pt.className="tk hide";pt.textContent="Messaging";pt.onclick=()=>{$("phone").style.zIndex=++Z};tasks.append(pt);
function openChat(){aud();$("phone").classList.remove("hide");$("phone").style.zIndex=++Z;pt.classList.remove("hide");ding()}
function closeChat(){$("phone").classList.add("hide");pt.classList.add("hide")}
function win(title,key,body,w){aud();if(WM[key]){WM[key].style.zIndex=++Z;return}
 const el=document.createElement("div");el.className="win";if(w)el.style.width=w;el.style.zIndex=++Z;el.style.top=(8+Object.keys(WM).length*5)+"%";
 el.innerHTML='<div class="wt"><span></span><button aria-label="Close">X</button></div><div class="wb"></div>';el.querySelector("span").textContent=title;el.querySelector(".wb").append(body);
 const t=document.createElement("button");t.className="tk";t.textContent=title;t.onclick=()=>{el.style.zIndex=++Z};tasks.append(t);
 el.querySelector("button").onclick=()=>{el.remove();t.remove();delete WM[key]};el.onmousedown=()=>{el.style.zIndex=++Z};$("scr").append(el);WM[key]=el;ding()}
function box(h){const d=document.createElement("div");d.innerHTML=h;return d}
const AL=[["i3","Ingenuity"],["i4","Ingenuity"],["i5","Ingenuity"],["i6","Ingenuity"],["i8","Ingenuity"],["i9","Ingenuity"],["s4","Spirit"],["s5","Spirit"],["s6","Spirit"],["s7","Spirit"],["o1","Opportunity"],["o2","Opportunity"],["o3","Opportunity"],["o4","Opportunity"]];
function album(){const d=box('<div class="grid"></div><p><small>tap a photo to enlarge it. the last two frames are yours to fill.</small></p>');const g=d.querySelector(".grid");AL.forEach(([k,n])=>g.append(photo(k,n)));g.append(mediaSlot("pic"),mediaSlot("pic"));win("Album","alb",d,"min(520px,94%)")}
function bin(){win("Recycle Bin","bin",box(SP.bin+"<p>Recycle Bin is empty.</p><small>nothing here. not even your regrets.</small>"))}
function file(n){win(n,n,box(SP.doc+"<p>This file is empty.</p><small>a blank page, waiting for a story.</small>"))}
const APPS=[["Messaging",SP.msg,openChat],["Album",SP.alb,album],["Recycle Bin",SP.bin,bin],["Notes.txt",SP.doc,()=>file("Notes.txt")],["Mission_Log.doc",SP.doc,()=>file("Mission_Log.doc")],["Readme.txt",SP.doc,()=>file("Readme.txt")],["Untitled",SP.doc,()=>file("Untitled")]];
APPS.forEach(([n,i,f])=>{const b=document.createElement("button");b.className="ic";b.innerHTML=i+"<span></span>";b.lastChild.textContent=n;b.onclick=f;$("icons").append(b)});
APPS.slice(0,3).forEach(([n,i,f])=>{const b=document.createElement("button");b.textContent=n;b.onclick=()=>{$("sm").classList.add("hide");f()};$("sm").append(b)});
$("st").onclick=()=>{aud();$("sm").classList.toggle("hide")};
$("kr").onclick=()=>{if(cur)back();else closeChat()};
const clk=()=>{$("clk").textContent=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})};clk();setInterval(clk,20000);
