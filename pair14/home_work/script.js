let userName = document.querySelector("#userName");
let welcome = document.querySelector("#welcome");
let confirmBtn = document.querySelector("#confirmBtn");
let profileStatus = document.querySelector("#status");

userName.addEventListener("input", function(){
    let name = userName.value.trim();
    if (name === ""){
        welcome.textContent = "Вітаємо, гостю!";
    }else{
        welcome.textContent = "Вітаємо, " + name + "!";
    }
    profileStatus.textContent = "Ім’я ще не підтверджено";
    if (profileStatus.classList.contains("success")){
        profileStatus.classList.toggle("success");
    }
});

confirmBtn.addEventListener("click", function(){
    let name = userName.value.trim();
    if (name === ""){
        profileStatus.textContent = "Спочатку введіть ім’я";
    }else{
        profileStatus.textContent = "Ім’я підтверджено: " + name;
        profileStatus.classList.add("success");
    }
});

let theme = document.querySelector("#theme");
let card = document.querySelector("#card");

theme.addEventListener("change", function(){
    if (card.classList.contains("dark")){
        card.classList.toggle("dark");
    }
    if (theme.value === "dark"){
        card.classList.add("dark");
    }
});

let detailBtn = document.querySelector("#detailBtn");
let details = document.querySelector("#details");

detailBtn.addEventListener("click", function(){
    details.classList.toggle("hidden");
    if (details.classList.contains("hidden")){
        detailBtn.textContent = "Показати інформацію";
    }else{
        detailBtn.textContent = "Приховати інформацію";
    }
});
