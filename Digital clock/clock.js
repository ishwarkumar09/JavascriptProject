


function updateClock(){

    const time = new Date();
    let hour = time.getHours();
    const meridien = hour >= 12 ? "PM":"AM"
    hour = hour %12 ||12
    hour = hour.toString().padStart(2,0)
    const minute = time.getMinutes().toString().padStart(2 , 0)
    const second = time.getSeconds().toString().padStart(2 , 0)
    const finaltimer = `${hour}:${minute}:${second}  ${meridien}`;
    document.getElementById("clock").textContent = finaltimer
    
}



setInterval(updateClock,1000)

 