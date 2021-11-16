
    //Iitialisation de highlightjs
    //hljs.highlightAll();
(function ($) {
    //console.log("index.js loaded");
    
// // S_ querySelector | polyfill
//const $ = document.querySelector.bind(document);

// // SS_ querySelectorAll return |  polyfill
const $$ = (selector, root)=>[...document.querySelectorAll(selector,root)];

    const corp = $('body');
    const h1 = $('h1');
    const h2 = $('h2');
    const h3 = $('h3');
    const h1p = $('h1 ~ p');
    const h2p = $('h2 ~ p');


    const codeViewer = $('#code');
    //console.log(h1,h2,h1p,h2p);
    corp.css({'background-color':'#333',color:"white"});

    h1.css({fontSize:"50px"});
    h2.css({fontSize :"x-large"});



// Créer quelque CSS à appliquer au dom fantôme
let style = document.createElement('style');

style.textContent = `
    body{
        font-family:"Roboto";
    }
    h1{
        font-size:70px;
    }
    h2{
        font-size: 50px;
    }
    h3{
        font-size:42px;
    }

`;

$('head').append(style)




const newStructure = `
    <div class="subMain">
    <h3>Découvrons quelques tips de notre devTools</h3>
    <ul>
        <li> auto editor :  <pre><code class="language-javascript">document.designMode = "on";</code></pre></li>
        <li>Ouvrir le Tools panel : Ctrl + Shift + P une fois ce premier ouvert (F12)</li>
        <li>Récupération des événements de l'inspecteur : <pre><code class="language-javascript">monitorEvents(document.body, 'mouse');</code></pre></li>
        <li>Suppression de l'écoute des événements :  <pre><code class="language-javascript">unmonitorEvents(document.body, 'mouse')</li>
        <li>Le devTools nous permet d'utiliser des selecteur de simplification (légérement similaire à ceux de jQuery) querySelecetor devient <pre><code class="language-javascript">$()</code></pre>, querySlectorAll <pre><code class="language-javascript">$$()</code></pre></li>
        <li>Il est même possible d'utiliser des selecteurs de memory target node, exemple : $0 permet de cibler le dernier node selectionné dans l'inspecteur (pour ce dernier, je vous propose un petit exemple)</li>
    </ul>
    </div>
   `;

   const devToolSelectorContent=`
   <div class="container box">
       <p>Ouvrez l'inspecteur sur n'importe quelle page que vous avez sous la main (cette exercice par exemple). Selectionner un élément du DOM, puis ouvrez la console. Si vous ajouter ceci : </p>
       <br>
       <pre><code class="language-javascript">$0.innerHTML='<div>Changement du dernier noeud seléctionné via $0.getInnerHTML</div>'</code></pre>
        <br>
        <p>Sachez qu'il existe 5 instances liées à ce type de selecteur : de $0 à $4. Il est donc possible de selectionner 5 instance historique de noeud.</p>
        <p>Vérifions ceci en selectionnant le noeud 1, puis 2, 3 et ceci jusqu'au cinquième noeud</p>
        <br>
       <div class="row evenly">
            <div class="row col left w-50">
                    <div class="node1">Mon permier noeud</div>
                    <div class="node2">Mon deuxième noeud</div>
                    <div class="node3">Mon troisème noeud</div>
                    <div class="node4">Mon quatrième noeud</div>
                    <div class="node5">Mon cinquième noeud</div>
                </div><div class="container imageSelectorDOM w-50"><img src="./images/historySelectorDOM.JPG"></div>
        </div>
        <br>
        <div class="row col">
           <p> Mainteant que vous avez selectionné ces cinq noeuds, il vous est désormais possible d'interagir directement sur eux en ouvrant la console. Essayons ceci (dans l'ordre) : </p>
           <pre><code>
                $0.style.background="red";
                $1.style.background="yellow";
                $2.style.background="orange";
                $3.style.background="purple";
            </code></pre>
            <p>Vous deviez voir changer le background de vos éléments par ordre du dernier noeud selectionné précédemment</p>
        </div>
   </div>`;
   $('main').append(newStructure);
   $('main').append(devToolSelectorContent);
   const popupInfoComponent = `             
   <form>
      <div class="containerToken">
        <label for="token">Entrez votre token : <popup-info img="./images/alt.png" text="Pour accèder au contenu suivant vous devez entrez votre token (possèdant 6 chiffres)"></label>
        <input type="text" id="token">
      </div>
    </form>`;
    const contentTokenDisabled = `<div id="tokenContent">Vous venez de découvrir le contenu caché en le débloquant via le token inséré depuis le composant tooltip</div>`;
    $('main .container-component').append('<shadow-component>');
    $('main .container-component').append('<star-github></star-github>');
    $('main .container-component').append(popupInfoComponent);
    $('#token').on('input',function(e){
        console.log($(this).val())
        if($(this).val() === '666666'){
             $('main .containerToken').append(contentTokenDisabled);
             console.info("Vous venez de trouver le bon token !!!");
             $('.containerToken #tokenContent').delay(2000).fadeOut(500,function(){$(this).remove()});//Une fois le composant affiché, nous attendons 2 secondes avant de le faire disparaitre (en 500 ms) et le supprimons du DOM
        }else{
            console.info("Le token indiqué n'est pas valide")
        }
    });

   
      
    //Gestion du bouton situé dans le DOM
   const interactivDOM = `<div id="interactionZone"><span class="txtButton">Click me</span></div>`;
   $('main .container-interaction').append(interactivDOM);

    $('#interactionZone').on('click',function(me){
        var targetId = String(me.currentTarget.id)+"";
        var type = me.type;
        console.log('type : ',type, 'depuis :',targetId);
        const msg = "Un "+type+" a été déclanché depuis "+targetId +"!!!"
        alert(msg);
    })


})(jQuery);