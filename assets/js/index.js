    let nouveauTâcheInput = document.getElementById('nouveauTâcheInput');
    let nouveauTâcheBtn = document.getElementById('nouveauTâcheBtn');
    let listeTâches = document.getElementById('listeTâches');
  
    // ajouter
    nouveauTâcheBtn.addEventListener('click', () => {
      let tâcheTexte = nouveauTâcheInput.value.trim();
      if (tâcheTexte !== '') {
        let li = document.createElement('li');
        li.innerHTML = `
          <span class="tâcheTexte">${tâcheTexte}</span>
          <button class="editBtn">Modifier</button>
          <button class="deleteBtn">Supprimer</button>
        `;
        listeTâches.appendChild(li);
        nouveauTâcheInput.value = '';
        editDelete(li);
      }
      else{
        alert('Veuillez entrer une tâche')
      }
    });
  
    function editDelete(li) {
      let editButton = li.querySelector('.editBtn');
      let deleteButton = li.querySelector('.deleteBtn');
      let tâcheTexteElement = li.querySelector('.tâcheTexte');
  
      // modifier
      editButton.addEventListener('click', () => {
        let currenttâcheTexte = tâcheTexteElement.textContent;
        let newtâcheTexte = prompt('Modifier une tâche :', currenttâcheTexte);
        if (newtâcheTexte !== '') {
          tâcheTexteElement.textContent = newtâcheTexte;
        }
      });
  
      // supprimer
      deleteButton.addEventListener('click', () => {
        listeTâches.removeChild(li);
      });
    }
  