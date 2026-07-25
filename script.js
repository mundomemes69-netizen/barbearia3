// =========================
// JHU BARBEARIA
// BOOKING SYSTEM
// PART 1/3
// =========================



// ELEMENTOS PRINCIPAIS


const bookingButton = document.getElementById("bookingButton");


const bookingSection = document.getElementById("booking");



const steps = document.querySelectorAll(".booking-step");


const progressItems = document.querySelectorAll(".progress-item");



let currentStep = 0;







// =========================
// ABRIR AGENDAMENTO
// =========================


bookingButton.addEventListener("click", function(){



bookingSection.scrollIntoView({

behavior:"smooth"

});



});









// =========================
// FUNÇÃO MOSTRAR ETAPA
// =========================


function showStep(step){



steps.forEach(item=>{


item.classList.remove("active");


});



progressItems.forEach(item=>{


item.classList.remove("active");


});





if(steps[step]){


steps[step].classList.add("active");


}



if(progressItems[step]){


progressItems[step].classList.add("active");


}



currentStep = step;



}








// =========================
// BOTÕES CONTINUAR
// =========================


const continueButtons = document.querySelectorAll(".continue-button");





continueButtons.forEach(button=>{



button.addEventListener("click", function(){



nextStep();



});



});








// =========================
// PRÓXIMA ETAPA
// =========================


function nextStep(){



if(currentStep < steps.length - 1){



showStep(currentStep + 1);



}

}


// =========================
// CUSTOMER INFORMATION
// =========================


const confirmButton = document.getElementById("confirmBooking");


const customerName = document.getElementById("customerName");


const customerPhone = document.getElementById("customerPhone");


const customerMessage = document.getElementById("customerMessage");






// =========================
// CONFIRM APPOINTMENT
// =========================


confirmButton.addEventListener("click", function(){



if(selectedService === ""){


alert("Selecione um serviço antes de continuar.");

return;


}



if(selectedBarber === ""){


alert("Selecione um barbeiro antes de continuar.");

return;


}



if(selectedDate === ""){


alert("Selecione uma data.");

return;


}



if(selectedTime === ""){


alert("Selecione um horário disponível.");

return;


}



if(customerName.value === "" || customerPhone.value === ""){


alert("Preencha seu nome e WhatsApp.");

return;


}




updateSummary();



showStep(5);



createWhatsAppMessage();



});








// =========================
// WHATSAPP MESSAGE
// =========================


function createWhatsAppMessage(){



const barberWhatsapp = "5511999999999";



// TROQUE PELO WHATSAPP REAL DA BARBEARIA
// Exemplo:
// 5511988887777





let message = `

Olá, JHU Barbearia! 💈


Gostaria de confirmar meu agendamento.


👤 Cliente:
${customerName.value}



✂️ Serviço:
${selectedService}



💈 Barbeiro:
${selectedBarber}



📅 Data:
${selectedDate}



⏰ Horário:
${selectedTime}



📝 Observação:
${customerMessage.value || "Nenhuma"}


`;






const whatsappLink =

"https://wa.me/" +

barberWhatsapp +

"?text=" +

encodeURIComponent(message);





const whatsappButton = document.getElementById("whatsappButton");



whatsappButton.href = whatsappLink;



}








// =========================
// LOAD WEBSITE
// =========================


window.addEventListener("load",()=>{


console.log(
"JHU Barbearia Booking System Loaded"
);



});