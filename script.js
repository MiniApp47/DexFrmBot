// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#111111");
  tg.setBackgroundColor("#050505");

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  // 1. On lance l'animation de la barre après un tout petit délai
  setTimeout(() => {
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, 100);

  // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0"; // Effet de fondu
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
        loader.classList.remove("active");
        // Affiche la page Home par défaut
        document.getElementById("page-home").classList.add("active");
      }, 500); // Attend la fin du fondu
    }
  }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai

  // --- CONFIGURATION DES LIENS DE CONTACT (UPDATE 2026) ---
  const contactLinks = [
    {
      name: "POTATO 🥔",
      url: "https://tato.im/dexterfarmidf",
      id: "potato",
      className: "potato",
      text: "🥔 POTATO",
    },
    {
      name: "WHATSAPP 📞",
      url: "https://wa.me/212704885528",
      id: "whatsapp",
      className: "whatsapp",
      text: "🟢 WHATSAPP",
    },
    {
      name: "TIKTOK 🎵",
      url: "https://www.tiktok.com/@dexter.farm4",
      id: "tiktok",
      className: "tiktok",
      text: "🎵 TIKTOK",
    },
    {
      name: "SIGNAL 🔵",
      url: "https://signal.me/#eu/UXbJdrE7L-2tlINGPGeFDaFXVM5BFGW8tnQOf4kHmyCcvaF26rdCX54Jqd9WvA64",
      id: "signal",
      className: "signal",
      text: "🔵 SIGNAL",
    },
  ];

  // --- DONNÉES DE L'APPLICATION (DEXTER FARM) ---
  
  // --- CATALOGUE DEXTER FARM : PRODUITS ---
  const appData = [
    {
      id: "MOUSSEUX",
      name: "🍫 MOUSSEUX",
      type: "Mousseux",
      quality: "🍫 Mousseux",
      image: "CategJaune.png",

      products: [
        {
          id: "Hash Mousseux 🇲🇦",
          flag: "🇲🇦",
          name: "Hash Mousseux 🇲🇦",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "Hash",
          image: "ProductHM.png",
          video: "VideoHM.mp4",
          description: "Hash à la texture légère et aérée, facile à travailler, reconnu pour son aspect mousseux caractéristique. Arômes subtils et naturels, avec une signature authentique du terroir marocain 🇲🇦. \n Qualité soignée, idéal pour les amateurs recherchant douceur et finesse.",
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "50g", price: 200.0 },
            { weight: "100g", price: 350.0 },
          ],
        },
        {
          id: "🟡 Crytical",
          flag: "🇲🇦",
          name: "🟡 Crytical",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "Hash",
          image: "ProductCry.png",
          video: "VideoCry.mp4",
          description: "Variété très spéciale, reconnue pour sa texture mousseuse et ses arômes intenses 💛\n\n 😋 Super goûteux, équilibré et raffiné — une vraie pépite 💎",
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "50g", price: 220.0 },
            { weight: "100g", price: 400.0 },
          ],
        },
        {
          id: "Jaune Mousseux – Maroc 🇲🇦",
          flag: "🇲🇦",
          name: "Jaune Mousseux 🧨",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "Hash",
          image: "ProductJM.png",
          video: "VideoJM.mp4",
          description: "Texture légère et mousseuse 🌫️, couleur jaune éclatante ☀️, qualité premium 💎.\n Un produit authentique, rare et soigneusement sélectionné 🌿.",
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "50g", price: 200.0 },
            { weight: "100g", price: 350.0 },
          ],
        },
      ],
    },
    {
      id: "STATIC",
      name: "⚡️ STATIC",
      type: "Static",
      quality: "⚡️ Static",
      image: "CategStatic.png",

      products: [
      {
          id: "Black Cherry 🇲🇦 🍒",
          flag: "🇲🇦",
          name: "Black Cherry 🇲🇦 🍒",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "⚡️ Static",
          image: "ProductBC.png",
          video: "VideoBC.mp4",
          description: "Un produit d’exception issu du savoir-faire marocain, à la texture fine et soyeuse typique du static. Profil aromatique profond dominé par la cerise noire, avec des notes sucrées et délicatement boisées.\n Une qualité premium, pure et raffinée, offrant une signature élégante et authentique, destinée aux connaisseurs exigeants. ✨",
          tarifs: [
            { weight: "5g", price: 70.0 },
            { weight: "50g", price: 400.0 },
            { weight: "100g", price: 700.0 },
          ],
        },
      {
          id: "ALL BLUE 🫐",
          flag: "🇲🇦",
          name: "ALL BLUE 🫐",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "⚡️ Static",
          image: "ProductST.png",
          video: "VideoST.mp4",
          description: "– Origine Maroc 🇲🇦 \n Produit premium 💎, reconnu pour son goût intense et sa richesse aromatique 😋.\n Issu d’une sélection rigoureuse, il offre une expérience authentique, puissante et raffinée",
          tarifs: [
            { weight: "5g", price: 70.0 },
            { weight: "10g", price: 120.0 },
          ],
        },
      /* {
          id: "Acapulco 🏝️",
          flag: "🇲🇦",
          name: "Acapulco 🏝️",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "⚡️ Static",
          image: "ProductA.png",
          video: "VideoA.mov",
          description: "– Origine Maroc 🇲🇦 \n Produit premium 💎, reconnu pour sa qualité exceptionnelle et son goût intense 😋.\n Une sélection raffinée, offrant puissance, saveur et authenticité 🌿.\n\n Un incontournable pour les amateurs de produits haut de gamme 🚀.",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 80.0 },
            { weight: "50g", price: 230.0 },
            { weight: "100g", price: 400.0 },
          ],
        }, */
      ],
    },
    {
      id: "FILTRE",
      name: "🔬 FILTRE",
      type: "Filtre",
      quality: "🔬 Filtre",
      image: "CategFiltrer.png",

      products: [
        /*  {
          id: "€41 💶",
          flag: "🇲🇦",
          name: "€41 💶",
          farm: "✅ NO FAMRS ✅",
          promoEligible: true,
          type: "Filtre/Dry",
          image: "Product41.jpg",
          video: "Video41.mp4",
          description:" Filtre X3🍫⛰️🇲🇦\n Dry-sift / 90u",
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "20g", price: 100.0 },
            { weight: "50g", price: 250.0 },
            { weight: "100g", price: 400.0 },
          ],
        }, */
      ],
    },
    {
      id: "FROZEN",
      name: "🧊 FROZEN",
      type: "Frozen",
      quality: "🧊 Frozen",
      image: "CategFrozen.png",

      products: [
         {
          id: "Black Cherry Punch 🇲🇦",
          flag: "🇲🇦",
          name: "Black Cherry Punch 🇲🇦",
          farm: "Mozart farm 🎻",
          promoEligible: true,
          type: "🧊 Frozen",
          image: "ProductBCP.png",
          video: "VideoBCP.mp4",
          description: "Variété premium aux arômes intenses de cerise noire, avec des notes sucrées et légèrement acidulées. Têtes compactes à l’aspect givré, qualité soignée.\n\n Origine Maroc 🇲🇦 — profil riche, saveurs fruitées et fraîches.",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "50g", price: 380.0 },
            { weight: "100g", price: 650.0 },
          ],
        },
         {
          id: "PannaCotta 🍮",
          flag: "🇲🇦",
          name: "PannaCotta 🍮",
          farm: "Mozart farm 🎻",
          promoEligible: true,
          type: "🧊 Frozen",
          image: "ProductPanna.png",
          video: "VideoPanna.mp4",
          description: "– Origine Maroc 🇲🇦 \n Produit d’exception au standing supérieur, reconnu pour sa pureté, sa texture fine et ses arômes intenses 🌿\n\n 💎 Raffiné, savoureux et parfaitement maîtrisé, il s’adresse aux amateurs de qualité premium",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "50g", price: 380.0 },
            { weight: "100g", price: 650.0 },
          ],
        },
         {
          id: "G.M.O 🧬",
          flag: "🇲🇦",
          name: "G.M.O 🧬",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🧊 Frozen",
          image: "ProductPF.png",
          video: "VideoPF.mov",
          description: "– Origine Maroc 🇲🇦 \n Produit premium 💎, soigneusement sélectionné pour sa qualité exceptionnelle et son goût intense 😋.\n Texture parfaitement conservée grâce au procédé “frozen” ❄️, garantissant fraîcheur et saveurs authentiques 🌿.\n\n Un produit puissant, savoureux et haut de gamme 🔥.",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "50g", price: 380.0 },
            { weight: "100g", price: 650.0 },
          ],
        },
      ],
    },
    {
      id: "CALI_US",
      name: "🇺🇸 CALI US",
      type: "Cali US",
      quality: "🇺🇸 Cali US",
      image: "CategCaliU.png",

      products: [
         {
          id: "Lemon Cherry Gelato 🍋🍒",
          flag: "🇺🇸",
          name: "Lemon Cherry Gelato 🍋🍒",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🇺🇸 Cali US",
          image: "ProductLCG.png",
          video: "VideoLCG.mov",
          description: "Une génétique d’exception au profil aromatique sophistiqué, où la fraîcheur du citron se mêle à la rondeur sucrée de la cerise. Têtes parfaitement formées, denses et résineuses, au visuel irréprochable.\n Une signature haut de gamme, pensée pour les amateurs exigeants en quête d’une expérience raffinée et distinctive. ✨",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "50g", price: 400.0 },
            { weight: "100g", price: 700.0 },
          ],
        },
         {
          id: "AK-47 Runtz",
          flag: "🇺🇸",
          name: " AK-47 Runtz 🔫",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🇺🇸 Cali US",
          image: "ProductAK.png",
          video: "VideoAK.mov",
          description: "– Cali US 💎\n Une Cali très compacte, au visuel soigné et à la structure dense 🌿\n\n ⚡️ Profil puissant et concentré, réservé aux amateurs de sensations marquées\n\n 😋 En bouche, une expérience riche, prononcée et mémorable\n\n 💎 Un produit qui sort clairement du commun, taillé pour le haut de gamme",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "50g", price: 400.0 },
            { weight: "100g", price: 700.0 },
          ],
        },
         {
          id: "🇺🇸 White Runtz",
          flag: "🇺🇸",
          name: " White Runtz 🍥",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🇺🇸 Cali US",
          image: "ProductWR.png",
          video: "VideoWR.mp4",
          description: "– Cali US 💎\n Une variété iconique au profil unique, marquée par des notes sucrées et gourmandes 🌿\n\n ✨ Texture soignée, goût prononcé et longueur en bouche remarquable\n 🔥 Une pépite rare, réservée aux amateurs de produits vraiment premium",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "50g", price: 400.0 },
            { weight: "100g", price: 700.0 },
          ],
        },
         {
          id: "🌴 Tropical Candy",
          flag: "🇺🇸",
          name: "🌴 Tropical Candy",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🇺🇸 Cali US",
          image: "ProductTC.png",
          video: "VideoTC.mp4",
          description: "Plongez dans une expérience ultra gourmande avec la Tropical Candy 🍍, un produit intensément fruité et exceptionnel en bouche 😋.\n Ses saveurs exotiques apportent une fraîcheur sucrée irrésistible, avec un équilibre parfait entre douceur et caractère 🌿.",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 100.0 },
            { weight: "50g", price: 400.0 },
            { weight: "100g", price: 700.0 },
          ],
        },
         {
          id: "Cali Chantilly 🍦",
          flag: "🇺🇸",
          name: "Cali Chantilly 🍦",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🇺🇸 Cali US",
          image: "ProductC.png",
          video: "VideoC.mov",
          description: "Découvrez la Cali Chantilly, un produit haut de gamme 💎 reconnu pour son goût intense et sa qualité incomparable 😋.\n Sa texture légère et crémeuse offre une expérience unique, alliant douceur et puissance 🌿.",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 100.0 },
            { weight: "50g", price: 400.0 },
            { weight: "100g", price: 700.0 },
          ],
        },
      ],
    },
    {
      id: "HOLLANDAISE",
      name: "🇳🇱 HOLLANDAISE",
      type: "Hollandaise",
      quality: "🇳🇱 Hollandaise",
      image: "CategCaliH.png", // Ton image de catégorie Weed

      products: [
         {
          id: "🌿 Amnesia",
          flag: "🇳🇱",
          name: "🌿 Amnesia",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "🇳🇱 Hollandaise",
          image: "ProductAmne.png",
          video: "VideoAmne.mov",
          description: "Une variété d’exception 💎 reconnue pour son profil aromatique unique et raffiné. \n\n Ses notes intenses et caractéristiques offrent une expérience riche en saveurs, avec une identité marquée et authentique 🌿.",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "50g", price: 300.0 },
            { weight: "100g", price: 550.0 },
          ],
        },
      ],
    },
    {
      id: "ZIP",
      name: "❄️ ZIP",
      type: "Zip",
      quality: "❄️ Zip",
      image: "CategZip.png",
      products: [
         {
          id: "Caroline Suri 💃",
          flag: "🇸🇷",
          name: "Caroline 💃",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "❄️ Zip",
          image: "ProductCaro.png",
          video: "VideoCaro.mov",
          description: "– Origine Suriname 🇸🇷\n  Produit d’exception 💎, la Caroline se distingue par sa qualité remarquable et son authenticité unique. Issue du Suriname, elle offre un profil riche et raffiné, apprécié pour ses arômes subtils et son caractère distinctif ❄️",
          tarifs: [
            { weight: "1g", price: 60.0 },
            { weight: "5g", price: 250.0 },
            { weight: "10g", price: 450.0 },
          ],
        },
         {
          id: "🇧🇴 Caroline Bolivie 💎🔥",
          flag: "🇧🇴",
          name: "Caroline Boli 💎🔥",
          farm: "DexterSelection 🧤",
          promoEligible: true,
          type: "❄️ Zip",
          image: "ProductBoli.png",
          video: "VideoBoli.mov",
          description: "– Origine Bolivie 🇧🇴 Une provenance rare offrant une qualité gaufrette exceptionnelle, au visuel fin et parfaitement travaillé 🌿\n\n ✨ Un produit reconnu pour son taux de pureté très élevé, garantissant une expérience nette et authentique\n\n 👃 Des arômes subtils et raffinés\n\n 💎 Une Caroline d’exception, destinée aux amateurs de produits haut de gamme",
          tarifs: [
            { weight: "1g", price: 60.0 },
            { weight: "5g", price: 250.0 },
            { weight: "10g", price: 450.0 },
          ],
        },
      ],
    }
  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    ACTUPLUG33: {
      type: "fixed", // 'percent' (pourcentage) ou 'fixed' (fixe)
      value: 10, // 20%
      appliesTo: "eligible", // 'eligible' (articles marqués) ou 'all' (tout le panier)
      cumulative: false, // <-- AJOUTE CETTE LIGNE
    },
    BACKPACK10: {
      type: "fixed", // 'percent' (pourcentage) ou 'fixed' (fixe)
      value: 10, // 20%
      appliesTo: "eligible", // 'eligible' (articles marqués) ou 'all' (tout le panier)
      cumulative: false, // <-- AJOUTE CETTE LIGNE
    },
    /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
    // Ajoute d'autres codes ici

    // ADD CUMULABLE FONCTION POUR PLUTARD
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });

    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis"); // <-- AJOUT ICI

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active"); // <-- AJOUT ICI

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else if (pageId === "page-avis") {
      // <-- LA NOUVELLE CONDITION
      if (avisNav) avisNav.classList.add("active");
    } else {
      // Pour page-home, page-produit, panier, etc.
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher le conteneur principal des filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons "retour"
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();

      // --- GESTION DES FILTRES (Vue Catégorie) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex"; // On montre QUE la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);

      // --- GESTION DES FILTRES (Vue Farms) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none"; // Pas de filtres pour les farms
      qualityFilterWrapper.style.display = "none";

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)"; // 1 colonne pour les farms

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
      backButton.style.cssText = `
            border: none;
            color: white;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #d88c00, transparent);
                        border-radius: 10px;`;

      filterContainer.prepend(backButton);
    } else if (currentView === "simple_products") {
      updateFarmFilter(currentCategoryId);

      renderProductListSimple(currentCategoryId);

      // --- GESTION DES FILTRES ---
      // 1. On AFFICHE la barre de recherche
      searchFilterWrapper.style.display = "flex";

      // 2. On AFFICHE le filtre Farm
      farmFilterWrapper.style.display = "flex";

      // 3. On CACHE le filtre Qualité ("Sélection du chef")
      qualityFilterWrapper.style.display = "none";

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

      backButton.style.cssText = `
            border: none;
            color: white;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #d88c00, transparent);
            border-radius: 10px;`;

      filterContainer.prepend(backButton);

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else if (currentView === "products") {
      updateFarmFilter(currentCategoryId, currentFarmId);

      renderProductList(currentCategoryId, currentFarmId);

      // --- GESTION DES FILTRES (Vue Produit) ---
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "flex"; // On montre les filtres produits
      qualityFilterWrapper.style.display = "none"; // On cache la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 colonnes

      // --- AJOUT BOUTON RETOUR (vers Farms) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const farm = category.farms.find((f) => f.id === currentFarmId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
      backButton.style.cssText = `
            border: none;
            color: white;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #abee31, transparent);
                        border-radius: 10px;`;

      filterContainer.prepend(backButton);
    }
  }

  // --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
  function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

  // --- MODIFIÉ : renderCategoryList ---
  // Prend en compte le filtre qualité
  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // --- AJOUT ---
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
      // --- FIN AJOUT ---
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
      productListContainer.appendChild(card);
    });
  }

  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  // --- FONCTION MODIFIÉE : Affichage liste bouton ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

      // Structure : Icone | Nom + Badge | Flèche
      btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
      productListContainer.appendChild(btn);
    });
  }

  // Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
  function renderProductListSimple(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
        imgHTML = `<img src="${product.image}" alt="${product.name}">`;
      }

      card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
      productListContainer.appendChild(card);
    });
  }
  // Affiche la liste des PRODUITS pour une farm
  function renderProductList(categoryId, farmId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // Affiche la page de détail d'un produit
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map((tarif) => {
        // Si un ancien prix existe, on crée le texte barré
        let oldPriceHTML = tarif.oldPrice
          ? `<span style="text-decoration: line-through; color: #ff3b30; font-size: 16px; margin-left: 5px;">${tarif.oldPrice.toFixed(2)}€</span>`
          : "";

        return `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                <div class="tarif-price" style="font-size: 20px;">
                    ${tarif.price.toFixed(2)}€ ${oldPriceHTML}
                </div>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                <svg width="20" height="20"><use href="#icon-cart"/></svg>
            </button>
        </div>
    `;
      })
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ""}
            
            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

    // Réattache les événements (pour les variantes de couleurs)
    if (product.jars && product.jars.length > 0) {
      const variantBtns = document.querySelectorAll(".variant-btn");
      const cartBtns = document.querySelectorAll(".add-to-cart-btn");
      const updateCartButtonsColor = (colorClass) => {
        cartBtns.forEach((btn) => {
          btn.classList.remove(
            "style-purple",
            "style-red",
            "style-green",
            "style-yellow",
            "style-orange",
            "style-brown",
            "style-passion",
            "style-melon",
            // 👇 J'ai ajouté tes nouvelles ici :
            "style-gmo",
            "style-lampo",
            "style-tangier",
            "style-grappe",
          );
          if (colorClass) btn.classList.add(colorClass);
        });
      };
      updateCartButtonsColor(product.jars[0].colorClass);
      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            const color = b.dataset.colorClass;
            b.classList.remove(color);
          });
          this.classList.add("active");
          this.classList.add(this.dataset.colorClass);
          updateCartButtonsColor(this.dataset.colorClass);
          if (window.Telegram.WebApp.HapticFeedback)
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
      summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById("copy-order-btn");
    const contactBtn = document.getElementById("confirm-order-button");

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if (copyBtn) copyBtn.style.display = "none";

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if (contactBtn) {
      contactBtn.classList.remove("secondary-action-btn"); // Enlève le gris
      contactBtn.classList.add("main-action-btn"); // Met le rouge (ou couleur principale)
      contactBtn.disabled = false; // Active le clic
      contactBtn.innerHTML = "CONFIRMER SUR WHATSAPP 📞"; // Change le texte
    }

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map((c) => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ["all", ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities
      .map(
        (q) =>
          `<option value="${q}">${q === "all" ? "SELECTION DU CHEF" : q}</option>`,
      )
      .join("");

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: displayName, // On utilise le nom avec la variante
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---

    // En-tête
    let message = "*🌿 DEXTER FARM — COMMANDE *\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
      // On nettoie le nom (enlève les sauts de ligne techniques si variante)
      // On met en majuscules pour faire comme sur ta capture
      let cleanName = item.name.replace(/\n/g, " ").toUpperCase();

      // Ligne 1 : Numéro + Nom du produit (en Gras *)
      message += `*${index + 1}. ${cleanName}*\n`;

      // Ligne 2 : Quantité
      message += `• Quantité: ${item.quantity}x ${item.weight}\n`;

      // Ligne 3 : Prix unitaire
      message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;

      // Ligne 4 : Total de la ligne
      message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
      message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
      message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
      message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
      message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    message += `\n📍 Livraison IDF / Meet-up 78\n`;
    message += `💳 Paiement: ${paymentMethod}`;

    return message;
  }

  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
      }
      document.body.removeChild(textArea);
    }
  }

  // --- GESTION PAGE AVIS ---

  // 1. Bouton vers le canal Potato
  const btnChannel = document.getElementById("btn-open-channel");
  if (btnChannel) {
    btnChannel.addEventListener("click", function () {
      // Remplace par ton vrai lien de canal
      const channelLink = "https://tato.im/dexterfarmidf";

      // Ouvre le lien via Telegram
      tg.openLink(channelLink);
    });
  }

  // 2. (Optionnel) Zoom sur l'image quand on clique dessus
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      copyToClipboard(message);

      // --- AJOUT : Inverser les styles des boutons ---
      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      // Copier devient Gris (secondary)
      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      // Contacter devient Rouge (main) et est activé
      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
      return; // On s'arrête là
    }

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      let selectedVariant = null;

      // CAS 1 : Nouveau système (Boutons JARs)
      const activeVariantBtn = document.querySelector(".variant-btn.active");
      if (activeVariantBtn) {
        selectedVariant = activeVariantBtn.dataset.name;
      }
      // CAS 2 : Ancien système (Select) - Fallback
      else {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
    // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest("#confirm-order-button")) {
      // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
      const myPhoneNumber = "212704885528";

      // 2. On prépare le message
      let message = formatOrderMessage();

      // 3. On encode le message pour qu'il passe dans une URL
      const encodedMessage = encodeURIComponent(message);

      // 4. On crée le lien magique WhatsApp
      const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

      // 5. On ouvre WhatsApp
      tg.openLink(whatsappUrl);
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage(); // Affiche les catégories au début
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});
