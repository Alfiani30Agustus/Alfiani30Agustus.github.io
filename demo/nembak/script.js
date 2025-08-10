  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {befanimkata2();setTimeout(animkata2,400);} 
  function befanimkata2(){kalimat.style.opacity="0";kalimatb.style.opacity="0";kalimatc.style.opacity="0";} 
  function animkata2() {kalimat.innerHTML = kalimat2.innerHTML;kalimatb.innerHTML = kalimatb2.innerHTML;kalimatc.innerHTML="";kalimat.style.opacity="1";kalimatb.style.opacity="1";setTimeout(otomatis2b,3000);}
  function otomatis2b(){kalimatb.innerHTML = "";kalimatc.innerHTML = kalimatc2.innerHTML;kalimatc.style.opacity="1";setTimeout(mulaict,400);}
  
  function otomatis3() {befanimkata3();setTimeout(animkata3,400);} 
  function befanimkata3(){kalimat.style.opacity="0";kalimatb.style.opacity="0";kalimatc.style.opacity="0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML;kalimatb.innerHTML = kalimatb3.innerHTML;kalimatc.innerHTML = kalimatc3.innerHTML + today;kalimat.style.opacity="1";kalimatb.style.opacity="1";kalimatc.style.opacity="1";}
  
  function sbakhir(){Bn.style.display="none";setTimeout(stakhir,500);} function stakhir(){tmbl.innerHTML="💌 Kirim";Tombol.style="margin-top:10px;opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function diterima(){
      fthilang();ftganti=1;
      setTimeout(ftmuncul,400);
      Bn2.style.display="none";
      wallpaper.style="transform: scale(1)";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;border-radius:var(--bingkai);margin-top:0;";
      Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      otomatis2();
   }

  flag=1;flagg=1;
  function ditolak(){
    if(fungsi==1){
    if(flagg==1){Bn.style="margin:12px 0 12px 12px;cursor:default;opacity:0;transition:all 0s ease;";flagg=2;
                 Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 0 12px 140px;"}
    }
   }
  function ditolak2(){
    if(fungsi==1){
    if(flagg==2){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:190px 0 12px 12px;";flagg=3}
        else if(flagg==3){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 160px 12px 12px;";flagg=4}
      else if(flagg==4){Bn2.style="transition:all .3s ease;margin:12px 0 12px 12px;";Bn.style="margin:12px 0 12px 12px";flagg=1}
        }
   }

  function mulaict(){
    var timeleft = 7;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("ctimer").textContent = timeleft;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
      if(timeleft==0){
      setInterval(createHeart,200);
      fthilang();ftganti=2;
      setTimeout(ftmuncul,400);otomatis3();
      setTimeout(sbakhir,2000);
      }
    },1000);
  }

  ftom=0;jikapr=1;ftganti=0;flag=1;flagg=1;fungsi=0;Bn2.innerHTML=Bn.innerHTML;function showDiv() {pesanwhatsapp = "Aku berjanji akan buat video lagi teriak di tengah-tengah taman berkampung dan mengirim videonya kesini\n\n > *DILARANG HAPUS PESAN INI*";Bn2.style.display="none";Content.style = "opacity:1;margin-top:15vh;";ket.style="margin-top:30px";}
  function memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";setTimeout(mulaikonten,300)}
  function mulaikonten() {otomatis();suratin.style="display:none";ket.style="display:none";Content.style = "opacity:1;margin-top:4vh";bodyblur.style="opacity:.6;animation:none";wallpaper.style="transform: scale(2);opacity:1;";fotoakhir.style="display:inline-flex;";setTimeout(ftmuncul,200);bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);border-radius:var(--bingkai);margin-top:0";fungsi=1;setTimeout(tombol,500);}
  
  function ftmuncul(){
    if(ftganti==0){fotoakhir.style="display:inline-flex;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotoakhir.src = fotoakhir2.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==2){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  function fthilang(){fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotoakhir.style.animation="rto .8s infinite alternate";}
  
  function tombol(){Tombol.style="opacity:1;transform: scale(1);";Bn.style="margin:12px 0 12px 12px";ftom=1;}
  function multifungsi(){if(ftom==1){diterima();} if(ftom==5){menuju();}}
  async function menuju(){await swals.fire('OK!', 'Kirim pesan ke WhatsApp aku, ya!', 'success');window.location = "https://api.whatsapp.com/send?phone=6282252509320&text=" + pesanwhatsapp;Tombol.style="margin-top:15px;opacity:1;transform: scale(1);";} setTimeout(showDiv,100);





  
  const swalst = Swal.mixin({timer: 2777, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 100,}); audio = new Audio('' + linkmp3.innerHTML);const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 100, imageHeight: 100,}); const style = document.createElement('style'); var today = new Date();var dd = String(today.getDate()).padStart(2, '0');var mm = String(today.getMonth() + 1).padStart(2, '0');var yyyy = today.getFullYear();const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
   const body = document.querySelector("body");function createHeart() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100);