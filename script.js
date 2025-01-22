//fetchCompliments
async function fetchCompliments() {
    try {
        const response = await fetch('./data/complimenten.json');
        console.log(response);
        if (!response.ok) {
            throw new Error("Could not load the JSON file, check inspector!");
             }
             const data = await response.json();
             console.log(data);
             return data.complimenten;
     } catch (error) {
        console.error("Could not obtain the compliments!");
        return ["Je bent geweldig!","Blijf stralen!","Optimist!"]
    } finally {
      console.log("fetchcCompliments is done.")
    };
};
// display compliments
function displayRandomCompliment(compliments){
    const complimentElement = document.getElementById('compliment');
    const RandomCompliment = compliments[Math.floor(Math.random()* compliments.length)];
    complimentElement.textContent = RandomCompliment;
}
// main function IIFE 
(async ()=>{
 const compliments = await fetchCompliments();
 const button = document.getElementById('generateBtn');
 button.addEventListener('click',() => displayRandomCompliment(compliments));
})();
    
