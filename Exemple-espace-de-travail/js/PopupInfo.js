class PopUpInfo extends HTMLElement {
  constructor() {
        // Toujours appeler super en premier dans le constructeur
        super();

        let fantome = this.attachShadow({mode: 'open'});//Notre Shadow DOM

        //Gestion des styles du composant via un fichier css externe
        // Appliquer les styles externes au dom fantôme
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './styles/popupInfoStyles.css');

        //Création des nodes de notre composant
        let wrapper = document.createElement('span');
        wrapper.setAttribute('class','wrapper');

        let icon = document.createElement('span');
        icon.setAttribute('class','icon');
        icon.setAttribute('tabindex', 0);

        //Info nous servira à la récupération de l'attribut text
        let info = document.createElement('span');
        info.setAttribute('class','info');

        // Prendre le contenu de l'attribut et le placer à l'intérieur du span info
        let text = this.getAttribute('text');
        info.textContent = text;

        // Insertion de l'icône
        let imgUrl;
        if(this.hasAttribute('img')) {
          imgUrl = this.getAttribute('img');
        } else {
          imgUrl = '../images/default.png';
        }
        let img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);


        // Associer les éléments créés au dom fantôme
        fantome.appendChild(linkElem);// Ajout du css distant
        fantome.appendChild(wrapper);//du wrapper
        wrapper.appendChild(icon);//de l'icone
        wrapper.appendChild(info);//et de l'info

      }
}
 // Définit le nouvel élément via popup-info (depuis le DOM global)
 customElements.define('popup-info', PopUpInfo);