let extracurriculars = [
    {
        id: 1,
        name: "Table tennis",
        category: "Sport",
        price: 1000,
        members: 30,
        active: true
    },
    {
        id: 2,
        name: "Bouldering",
        category: "Sport",
        price: 3000,
        members: 20,
        active: false
    },
    {
        id: 3,
        name: "Vibecoding",
        category: "IT",
        price: 4500,
        members: 50,
        active: true
    },
    {
        id: 4,
        name: "Painting",
        category: "Art",
        price: 670,
        members: 10,
        active: true
    },
    {
        id: 5,
        name: "Music",
        category: "Art",
        price: 1500,
        members: 15,
        active: false
    }
]
while(true){
    let process = +prompt("1 - Показати всі гуртки\n2 - Знайти гурток за ID\n3 - Записати учасника\n4 - Змінити статус набору\n5 - Додати новий гурток\n6 - Показати статистику\n0 - Вихід")
    if(process === 0){
        break;
    }
    if(process !== 1 && process !== 2 && process !== 3 && process !== 4 && process !== 5 && process !== 6){
        alert("Такого пункту меню немає");
    }
    if(process === 1){
        if(extracurriculars.length === 0){
            alert("Каталог порожній");
        }else{
            let list = "";
            extracurriculars.forEach(function(found){
                let status = "Набір закрито";
                if (found.active) {
                    status = "Набір відкрито";
                }
                list += `[${found.id}]: ${found.name}, ${found.category}, ${found.price} грн., учасників: ${found.members} (${status})\n`;
            })
            alert(list);
        }
    }
    if(process === 2){
        let askID = +prompt("Вкажіть ID гуртка, який хочете знайти");
        let foundID = null;
        for (let found of extracurriculars) {
            if (found.id === askID) {
                foundID = found;
                break;
            }
        }
        console.log(foundID);
        if (foundID !== null) {
            let status = "Набір закрито";
            if (foundID.active) {
                status = "Набір відкрито";
            }
            alert(`[${foundID.id}]: ${foundID.name}, ${foundID.category}, ${foundID.price} грн., учасників: ${foundID.members} (${status})`);
        }else{
            alert("Гуртка немає з таким ID")
        }
    }
    if(process === 3){
        let askID = +prompt("Вкажіть ID гуртка, до якого хочете вступити");
        let foundID = null;
        for (let found of extracurriculars) {
            if (found.id === askID) {
                foundID = found;
                break;
            }
        }
        if (foundID === null) {
            alert("Гуртка немає з таким ID")
        }else if(foundID.active === false){
            alert("Набір до цього гуртка закрито")
        }else{
            if(confirm("Чи хочете ви вступити до гуртка?")){
                foundID.members++;
            }
        }
    }
    if(process === 4){
        let askID = +prompt("Вкажіть ID гуртка, статус якого хочете змінити");
        let foundID = null;
        for (let found of extracurriculars) {
            if (found.id === askID) {
                foundID = found;
                break;
            }
        }
        if (foundID === null) {
            alert("Гуртка немає з таким ID")
        }else{
            if(confirm("Чи хочете ви змінити статус набору?")){
                if(foundID.active === true){
                    foundID.active = false;
                }else{
                    foundID.active = true;
                }
                let status = "Набір закрито";
                if (foundID.active) {
                    status = "Набір відкрито";
                }
                alert(`${foundID.name}: ${status}`);
            }
        }
    }
    if(process === 5){
        let name = prompt("Вкажіть назву гуртка");
        let category = prompt("Вкажіть категорію гуртка");
        let price = +prompt("Вкажіть ціну гуртка");
        let members = +prompt("Вкажіть кількість учасників");
        if(name === null || name === ""){
            alert("Назва не може бути порожньою");
        }else if(price < 0){
            alert("Ціна не може бути від'ємною");
        }else if(members < 0){
            alert("Кількість учасників не може бути від'ємною");
        }else{
            let newID = 0;
            for (let found of extracurriculars) {
                if (found.id > newID) {
                    newID = found.id;
                }
            }
            newID++;
            extracurriculars.push({
                id: newID,
                name: name,
                category: category,
                price: price,
                members: members,
                active: true
            });
        }
    }
    if(process === 6){
        let activeCount = 0;
        let totalMembers = 0;
        let totalPrice = 0;
        for (let found of extracurriculars) {
            if (found.active) {
                activeCount++;
            }
            totalMembers += found.members;
            totalPrice += found.price;
        }
        let averagePrice = 0;
        if(extracurriculars.length > 0){
            averagePrice = totalPrice / extracurriculars.length;
        }
        alert(`Загальна кількість гуртків: ${extracurriculars.length}\nГуртків з відкритим набором: ${activeCount}\nЗагальна кількість учасників: ${totalMembers}\nСередня ціна гуртка: ${averagePrice}`);
    }
}