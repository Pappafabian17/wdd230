document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    
    const lastVisit = localStorage.getItem("lastVisit");
    
    const now = new Date();
    
    if (!lastVisit) {
        // Primera visita
        sidebar.innerHTML += `<p>Welcome! Let us know if you have any questions.</p>`;
    } else {
        const lastVisitDate = new Date(lastVisit);
        
        const timeDifference = now - lastVisitDate;
        
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
            sidebar.innerHTML += `<p>Back so soon! Awesome!</p>`;
        } else {
            const dayText = daysDifference === 1 ? "day" : "days";
            sidebar.innerHTML += `<p>You last visited ${daysDifference} ${dayText} ago.</p>`;
        }
    }
    
    localStorage.setItem("lastVisit", now);
});
