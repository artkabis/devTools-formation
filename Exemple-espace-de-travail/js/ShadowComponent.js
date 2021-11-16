class MonComposant extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: "closed" });
    }
    connectedCallback() {
        this._root.innerHTML = `
        <style>
          .container{
            display:inline-block;
            padding:7.5px 15px;
            text-align:center;
            box-shadow:0 0 26px rgb(0 0 0 / 30%);
            background: -moz-linear-gradient(top,  #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
            background: -webkit-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
            background: linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
          }
        </style>
        <div class="container">
            <p>Voici un composant DOM shadow en mode "closed" !!!!</p>
         </div>
        `;
    }
}
window.customElements.define("shadow-component", MonComposant);


// Si mon composant est open je peux en retrouver sa référence et le modifier
/*
const $monComposant = document.querySelector("mon-composant"); 
$monComposant.shadowRoot.querySelector("p").innerText = "Modified!";
*/