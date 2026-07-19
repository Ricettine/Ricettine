/* =============================================================================
   RICETTINE — recipe template
   Copy this object into the RECIPES = [ ... ] array in index.html.
   Author for 2 servings, on INDUCTION. Scaling + the gas variant of each step
   are handled for you (I'll fill the gas variants if you hand me the recipe).
   Every language other than the ones you provide falls back to Italian.
   ============================================================================= */
{
  id:"un-id-unico-senza-spazi",        // used in the URL, e.g. #/primi/un-id-unico
  section:"primi",                     // "primi" | "secondi" | "dolci" | "cocktail"
  featured:true,                       // first item of a section = front-page lead
  servingsBase:2,                      // always 2
  servingsUnit:"persone",              // "persone" for food, "bicchieri" for cocktails
  time:{ prep:10, cook:15 },           // minutes; set cook:0 for no-cook recipes
  difficulty:"facile",                 // "facile" | "media" | "difficile"
  image:null,                          // null = illustration; or "images/foto.jpg"

  title:{      it:"Titolo in italiano",        en:"English title" },
  standfirst:{ it:"Sottotitolo di una riga.",  en:"One-line standfirst." },
  caption:{    it:"Didascalia della foto.",    en:"Photo caption." },

  ingredients:[
    // g / ml scale to whole numbers:
    { name:{it:"Farina", en:"Flour"}, qty:200, unit:"g" },
    // countable items → leave unit:"" , put the counting noun in `note`:
    { name:{it:"Uova", en:"Eggs"}, qty:2, unit:"", note:{it:"medie", en:"medium"} },
    // "to taste" → qty:null, unit:"qb"  (never scaled, shows "q.b."):
    { name:{it:"Sale", en:"Salt"}, qty:null, unit:"qb" },
    // don't want something scaled even though it has a number? add scale:false
    // { name:{it:"Lievito", en:"Yeast"}, qty:1, unit:"", scale:false },
  ],

  equipment:[
    {it:"Pentola", en:"Pot"},
    {it:"Frusta",  en:"Whisk"},
  ],

  steps:[
    // Method-agnostic step (no hob) — same text for induction and gas:
    { text:{ it:"Passo che non usa il fornello.",
             en:"A step that doesn't use the stove." } },

    // Stovetop step — write the induction version; give the gas variant too.
    // (Hand me the recipe and I'll write the gas column for you.)
    { induction:{ it:"…a potenza media (5/9)…",
                  en:"…on medium power (5/9)…" },
      gas:{       it:"…a fiamma media, padella preriscaldata…",
                  en:"…on a medium flame, pan pre-heated…" } },
  ],
}
