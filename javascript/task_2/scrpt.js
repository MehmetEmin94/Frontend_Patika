// close butonu olusturmak ve her liste elemanina eklemek
let myNodelist = document.getElementsByTagName("li");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Geçerli liste öğesini gizlemek için close düğmesine tıklamak
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Bir liste öğesine tıklandığında "checked" sembolu eklemek
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Text kutusu bosken ekle butonuna tiklandiginda uyari getirmek
const alertDOM=document.querySelector("#alert")

const alertFunction=(message)=>`
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>></strong> ${message}
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>
`
// ekle butonuna tıklandiginda yeni bir liste öğesi oluşturmak

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alertDOM.innerHTML=alertFunction("Listeye boş ekleme yapamazsınız!")
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

