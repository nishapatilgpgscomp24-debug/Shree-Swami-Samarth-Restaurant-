// Smooth button click
document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",function(e){
        if(this.getAttribute("href").startsWith("#")){
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Reservation Button
const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("✅ Thank You! Your table has been reserved.");
    form.reset();
});