let qte = document.getElementById('quantite')
let plus = document.getElementById('plus')
let moins = document.getElementById('moins')
let n = 0
qte.innerHTML = n


plus.addEventListener('click', () => {
    n += 1
    qte.innerHTML = n
})

moins.addEventListener('click', () => {
    if (n === 0) {
        alert('Qte negative')
    } else {
        n = n - 1
        qte.innerHTML = n
    }
})



let prixreduc = document.getElementById('prixReduc')
let ajtPanier = document.getElementById('ajouterPanier')
let qtePanier = document.getElementById('qte-panier')
let vPrix = 125;
prixreduc.innerHTML = vPrix
let nbChoix =0;

ajtPanier.addEventListener('click', () => {
    let nbPanier = qte.innerHTML
    nbChoix++


    if (nbChoix=1){
        if (n === 0) {
            alert("Vous devez choisir au moins 1 article")
        } else {
            qtePanier.innerHTML = n
            nbChoix++;
        } 
    
    }

   





        

    
  
})