document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('meetGreetBanner');
    const closeBtn = document.getElementById('closeBanner');
    
    const today = new Date().getDay();
  
    if (today >= 1 && today <= 3) { 
      if (!localStorage.getItem('bannerClosed')) {
        banner.classList.remove('hidden');
      }
    }
  
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
      localStorage.setItem('bannerClosed', 'true');
    });
  });
  