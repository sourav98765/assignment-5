function updateDate() {
   const data = new Date(); 
   const options = {weekday: 'short'};
   const dayName = data.toLocaleDateString( 'en-US',{
    month: 'short',day: '2-digit',year: 'numeric',hour: '2-digit',minute: '2-digit',second: '2-digit',hour12: false
   });
   document.getElementById("day").textContent = dayName;
   document.getElementById("full-date").textContent = fulldate;
}
updateDate();