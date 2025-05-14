const preview = document.getElementById('video-preview');
const videoEl = preview.querySelector('video');

// Affichage de la vidéo au survol
document.querySelectorAll('.project').forEach(proj => {
    proj.addEventListener('mouseenter', () => {
        const videoSrc = proj.dataset.video;
        if (videoSrc) {
            videoEl.src = videoSrc;
            preview.style.display = 'block';
        }
    });

    proj.addEventListener('mousemove', e => {
        const previewWidth = preview.offsetWidth;
        const previewHeight = preview.offsetHeight;
        const padding = 20;
    
        let left = e.pageX + padding;
        let top = e.pageY + padding;
    
        // Si la preview dépasse à droite, on la déplace à gauche du curseur
        if (left + previewWidth > window.innerWidth) {
            left = e.pageX - previewWidth - padding;
        }
    
        // Si elle dépasse en bas, on la place au-dessus du curseur
        if (top + previewHeight > window.innerHeight) {
            top = e.pageY - previewHeight - padding;
        }
    
        // Appliquer les positions calculées
        preview.style.left = `${left}px`;
        preview.style.top = `${top}px`;
    });
    

    proj.addEventListener('mouseleave', () => {
        videoEl.src = '';
        preview.style.display = 'none';
    });
});



// Navigation horizontale : About → Projects
function slideToNext() {
    document.querySelector('.etage').style.transform = 'translateX(-100vw)';
}

// Projects → About
function slideToLeft() {
    document.querySelector('.etage').style.transform = 'translateX(0vw)';
}

// Projects → Skills (vers le bas)
function slideRightToBottom() {
    const container = document.querySelector('.container');
    const secondEtage = document.querySelectorAll('.etage')[1];
  
    // Se préparer à afficher Compétences (à droite)
    secondEtage.style.transform = 'translateX(-100vw)';
  
    // Attendre un peu pour éviter le flash, puis descendre
    setTimeout(() => {
      container.style.transform = 'translateY(-100vh)';
    }, 50); // délai très court, mais suffisant pour éviter le flash de Contact
  }
  
  

// Skills → Projects (vers le haut)
function slideRightToTop() {
    document.querySelector('.container').style.transform = 'translateY(0vh)';
}

// Skills → Contact (gauche)
function slideBotRightToLeft() {
    document.querySelectorAll('.etage')[1].style.transform = 'translateX(0vw)';
  }
  

// Contact → Skills (droite)
function slideBotLeftToRight() {
    // Revenir à la section "skills" à droite
    document.querySelectorAll('.etage')[1].style.transform = 'translateX(-100vw)';
  }
  

  function checkHeight() {
    if (window.innerHeight < 1044) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  }
  
  window.addEventListener("resize", checkHeight);
  window.addEventListener("load", checkHeight);
  