window.addEventListener('load', function() {
    console.log('All assets are loaded');

    let btnTop = document.getElementById("btnTop");

    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    };
    btnTop.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    let coffeeList = [
        {nombre: 'Café Espresso', imagen: '../img/espresso.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 180, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Café Americano', imagen: '../img/americano.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 200, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Cortado', imagen: '../img/cortado.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 200, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Café con leche', imagen: '../img/cafeconleche.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Café Latte', imagen: '../img/latte.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Café Mocha', imagen: '../img/mocha.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 250, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Macciato', imagen: '../img/macciato.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Caramel Macciato', imagen: '../img/caramel.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Capuccino', imagen: '../img/capuccino.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Flat White', imagen: '../img/flat.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Café Irlandes', imagen: '../img/irlandes.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 260, cantidad: 1, type: 'coffee-menu'},
        {nombre: 'Café Amaretto', imagen: '../img/amaretto.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 260, cantidad: 1, type: 'coffee-menu'}     
    ];
    let juiceList = [
        {nombre: 'Limonada', imagen: '../img/limon.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 150, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Jugo de Naranja', imagen: '../img/naranja.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 150, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Jugo de Manzana', imagen: '../img/manzana.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 160, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Licuado de Banana', imagen: '../img/banana.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 180, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Jugo de Durazno', imagen: '../img/durazno.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 150, cantidad: 1, type: 'juice-menu'}
    ];
    let sweetList = [
        {nombre: 'Cheesecake', imagen: '../img/cheesecake.png', tacc: '', vegan: '', precio: 280, cantidad: 1, type: 'sweet-menu'},
        {nombre: 'Cheesecake de arándanos', imagen: '../img/cheesecakeblue.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 280, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Chocotorta', imagen: '../img/chocotorta.png', tacc: '', vegan: '', precio: 250, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Apple Pie', imagen: '../img/apple.png', tacc: '', vegan: '', precio: 230, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Cupcake', imagen: '../img/cupcakes.png', tacc: '', vegan: '', precio: 180, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Donuts', imagen: '../img/donuts.png', tacc: '', vegan: '', precio: 180, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Cookies', imagen: '../img/cookies.png', tacc: '', vegan: '', precio: 220, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Hotcakes', imagen: '../img/hotcakes.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 210, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Medialunas', imagen: '../img/medialunas.png', tacc: '', vegan: '', precio: 150, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Tostadas con mermelada y queso blanco', imagen: '../img/toast.png', tacc: '', vegan: '', precio: 180, cantidad: 1, type: 'juice-menu'},
        {nombre: 'Ensalada de frutas', imagen: '../img/frutas.jpg', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 200, cantidad: 1, type: 'juice-menu'}        
    ];
    let saltyList = [
        {nombre: 'Tostado de jamón y queso', imagen: '../img/sandwich.png', tacc: '', vegan: '', precio: 250, cantidad: 1, type: 'salty-menu'},
        {nombre: 'Panini de pollo y vegetales', imagen: '../img/sandwich2.png', tacc: '', vegan: '', precio: 270, cantidad: 1, type: 'salty-menu'},
        {nombre: 'Panini vegetariano', imagen: '../img/sandwich3.png', tacc: '', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 250, cantidad: 1, type: 'salty-menu'},
        {nombre: 'Tostada con guacamole', imagen: '../img/tavocado.jpg', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 230, cantidad: 1, type: 'salty-menu'},
        {nombre: 'Huevos revueltos', imagen: '../img/huevos.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 200, cantidad: 1, type: 'salty-menu'},
        {nombre: 'Ensalada', imagen: '../img/salad.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 230, cantidad: 1, type: 'salty-menu'}
    ];

    let emptyList = [];

    let allProducts = coffeeList.concat(juiceList).concat(sweetList).concat(saltyList);

    const greeting = () => {
        this.document.getElementById('greeting').innerHTML =
        `
            <h2>Bienvenidos a Coffee Shop</h2>
            <p>Conocé nuestro menú!</p>
        `;
    };

    greeting();

    let btnCoffee = document.getElementById("coffee-btn");
    let btnJuice = document.getElementById("juice-btn");
    let btnSweet = document.getElementById("sweet-btn");
    let btnSalty = document.getElementById("salty-btn");

    const removeButtonStyle = () => {
        btnCoffee.classList.remove("btn-coffee-active");
        btnJuice.classList.remove("btn-juice-active");
        btnSweet.classList.remove("btn-sweet-active");
        btnSalty.classList.remove("btn-salty-active");
    };

    let notificationText = document.getElementById("notification");
    let notificationTextWarningAdd = document.getElementById("notification-warning-add");
    let notificationTextWarningMinus= document.getElementById("notification-warning-minus");

    const notification = (textId) => {
        textId.classList.add("show");
        textId.animate([{transform: 'translateX(330px)'}, {transform: 'translateX(0px)'}], 
        {duration: 300});
        setTimeout(function(){
            textId.animate([{transform: 'translateX(0px)'}, {transform: 'translateX(330px)'}], 
            {duration: 300});
        }, 1800);
        setTimeout(function(){
            textId.classList.remove("show");
        }, 2100); 
    };


    let notificationTextDelete = document.getElementById("notification-delete");
    const notificationDelete = () => {
        notificationTextDelete.classList.add("show");
        notificationTextDelete.animate([{transform: 'translateY(75px)'}, {transform: 'translateY(0px)'}], 
        {duration: 300});
        setTimeout(function(){
            notificationTextDelete.animate([{transform: 'translateY(0px)'}, {transform: 'translateY(75px)'}], 
            {duration: 300});
        }, 1000);
        setTimeout(function(){
            notificationTextDelete.classList.remove("show");
        }, 1300); 
    };

    let iconShopCounter = document.getElementById("icon-shop-count");
    let order = [];
    let orderItems = [];
    
    let count = order.length;
    iconShopCounter.innerHTML = count;
    
    let searchIcon = document.getElementById("search-icon");
    let searchInput = document.getElementById("search-input");
    let searchWord = searchInput.value;


    function showLists (list, id){
        document.getElementById("order-section").style.display = "none";
        let acu =  ``;
        for(let i = 0; i < list.length; i++){
            acu += `
            <div class="menu-items-box">
                <div class="menu-items" id="item-${list[i].type}${i}">
                    <div class="item-img">
                        <img src="${list[i].imagen}" alt="${list[i].nombre}" id="img-${list[i].type}${i}">
                    </div>
                    <div class="item-text">
                        <p>${list[i].nombre}</p>
                        <p>$ ${list[i].precio}</p>
                        <p>${list[i].vegan} ${list[i].tacc} </p>
                    </div>
                    <p class="list-quantity" id="list-quantity${i}">
                        <span id="less-list${i}" class="plus-list list-quantity-icon"><i class="fas fa-minus"></i></span>
                        <span class="list-quantity-number" id="quantity-list${i}"> ${list[i].cantidad} </span>
                        <span id="plus-list${i}" class="plus-list list-quantity-icon"><i class="fas fa-plus"></i></span> 
                    </p>
                    <div class="item-add" id="${list[i].type}${i}"><i class="fas fa-plus item-add-icon" id ="item-add-icon${list[i].type}${i}"></i></div>
                    
                </div>
                <p class="quantity-notification" id="quantity-notification${i}"></p>
            </div>
            `;
            
        };
        
        document.getElementById(id).innerHTML = acu;
        
        orderItems.forEach(item => {
            let findOrderItem = list.find(list => list.nombre == item);
            let indexFindOrderItem = list.indexOf(findOrderItem);

            if(findOrderItem != null){
                document.getElementById(`list-quantity${indexFindOrderItem}`).classList.add("list-quantity-active");
                document.getElementById(`${list[indexFindOrderItem].type}${indexFindOrderItem}`).style.display = "none";
                document.getElementById(`quantity-notification${indexFindOrderItem}`).style.display = "block";
                document.getElementById(`item-${list[indexFindOrderItem].type}${indexFindOrderItem}`).classList.add("menu-item-added"); 

                if(list[indexFindOrderItem].cantidad == 1){
                    document.getElementById(`quantity-notification${indexFindOrderItem}`).innerHTML = `Hay ${list[indexFindOrderItem].cantidad} unidad en tu pedido`;
                }else{
                    document.getElementById(`quantity-notification${indexFindOrderItem}`).innerHTML = `Hay ${list[indexFindOrderItem].cantidad} unidades en tu pedido`;
                }
            };
                 
        });
      
        addingToOrder(list);

        addList(list);

        minusList(list);

    };

    const addList = (list) => {
        for (let i = 0; i < list.length; i++){

            document.getElementById(`plus-list${i}`).addEventListener('click', ()=>{
                if (list[i].cantidad < 10){
                    list[i].cantidad += 1;
                    
                    this.document.getElementById(`quantity-list${i}`).innerHTML = `${list[i].cantidad}`;
                    this.document.getElementById(`quantity-notification${i}`).innerHTML = `Hay ${list[i].cantidad} unidades en tu pedido`;
                    this.document.getElementById(`quantity-notification${i}`).style.display = "block";
                    this.document.getElementById(`${list[i].type}${i}`).style.display = "none"; 


                    let findItem = order.find(order => order.nombre == list[i].nombre);
                    let indexItemOrder = order.indexOf(findItem);
                    
                    order[indexItemOrder].cantidad = list[i].cantidad;
                                      
                    notificationTextWarningAdd.innerHTML = `
                    <p><i class="fas fa-exclamation"></i> Se agrego 1 unidad más de ${order[indexItemOrder].nombre}</p>`;
                    notification(notificationTextWarningAdd);
                    
                }else{
                    swal("Oops...", "No se pueden agregar mas unidades del producto", "warning");
                };
                
            });
        };
    };

    const minusList = (list) => {
        for (let i = 0; i < list.length; i++){

            document.getElementById(`less-list${i}`).addEventListener('click', ()=>{
                if (list[i].cantidad > 1){
                    list[i].cantidad -= 1;
                    
                    this.document.getElementById(`quantity-list${i}`).innerHTML = `${list[i].cantidad}`;
                    this.document.getElementById(`quantity-notification${i}`).style.display = "block";
                    this.document.getElementById(`${list[i].type}${i}`).style.display = "none"; 
                    if(list[i].cantidad >= 2){
                        this.document.getElementById(`quantity-notification${i}`).innerHTML = `Hay ${list[i].cantidad} unidades en tu pedido`;
                    }else{
                        this.document.getElementById(`quantity-notification${i}`).innerHTML = `Hay ${list[i].cantidad} unidad en tu pedido`;
                    }

                    let findItem = order.find(order => order.nombre == list[i].nombre);
                    let indexItemOrder = order.indexOf(findItem);
                    

                    order[indexItemOrder].cantidad = list[i].cantidad;
                                      
                    notificationTextWarningMinus.innerHTML = `
                    <p><i class="far fa-times-circle"></i> Se eliminó 1 unidad de ${order[indexItemOrder].nombre}</p>`;
                    notification(notificationTextWarningMinus);
                    
                }else{
                    swal("Oops...", "La cantidad no puede ser menor a 1", "warning");
                };
                
            });
        };
    };


    const addingToOrder = (list) => {
        
        for(let i = 0; i < list.length; i++){
        
            document.getElementById(`${list[i].type}${i}`).addEventListener('click', ()=>{

                document.getElementById(`list-quantity${i}`).classList.add("list-quantity-active");
                document.getElementById(`${list[i].type}${i}`).style.display = "none";
                document.getElementById(`quantity-notification${i}`).innerHTML = `Hay 1 unidad en tu pedido`;
                document.getElementById(`quantity-notification${i}`).style.display = "block";
                document.getElementById(`item-${list[i].type}${i}`).classList.add("menu-item-added");

                order.push(list[i]);
                orderItems.push(list[i].nombre);
                
                count = order.length;
                iconShopCounter.innerHTML = count;
                
                notificationText.innerHTML = `
                <p><i class="fas fa-check"></i> Producto añadido a tu pedido</p>`;
                notification(notificationText);
            });
        };
    };


    const removeInputAnimation = () => {
        searchInput.classList.remove("input-animation-in");
        searchInput.classList.add("input-animation-out");
        setTimeout(function (){
            searchInput.style.display = "none";
        }, 300);
        searchWord = "";
    };

    const addInputAnimation = () => {
        searchInput.classList.remove("input-animation-out");
        searchInput.style.display = "inline-block";
        searchInput.classList.add("input-animation-in");
    };


    btnCoffee.addEventListener('click', () =>{
        showLists(coffeeList, "menu");
        removeInputAnimation();
        document.getElementById("order-sent").classList.remove("show");
        document.getElementById("header").style.display = "grid";
        document.getElementById("search-result-list").classList.remove("show");
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById("no-search-result").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("menu").classList.add("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-coffee.png')";
        document.getElementById("header-text").style.color = "rgb(241, 237, 206)";
        removeButtonStyle();
        btnCoffee.classList.add("btn-coffee-active");
    });
    btnJuice.addEventListener('click', () =>{
        showLists(juiceList, "menu");
        removeInputAnimation();
        document.getElementById("order-sent").classList.remove("show");
        document.getElementById("header").style.display = "grid";
        document.getElementById("search-result-list").classList.remove("show");
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById("no-search-result").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("menu").classList.add("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-juice.png')";
        document.getElementById("header-text").style.color = "rgb(245, 245, 196)";
        removeButtonStyle();
        btnJuice.classList.add("btn-juice-active");
    });
    btnSweet.addEventListener('click', () =>{
        showLists(sweetList, "menu");
        removeInputAnimation();
        document.getElementById("order-sent").classList.remove("show");
        document.getElementById("header").style.display = "grid";
        document.getElementById("search-result-list").classList.remove("show");
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById("no-search-result").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("menu").classList.add("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-sweet.png')";
        document.getElementById("header-text").style.color = "rgb(239, 190, 192)";
        removeButtonStyle();
        btnSweet.classList.add("btn-sweet-active");
    });
    btnSalty.addEventListener('click', () =>{
        showLists(saltyList, "menu");
        removeInputAnimation();
        document.getElementById("order-sent").classList.remove("show");
        document.getElementById("header").style.display = "grid";
        document.getElementById("search-result-list").classList.remove("show");
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById("no-search-result").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("menu").classList.add("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-salty.png')";
        document.getElementById("header-text").style.color = "rgb(193, 223, 192)";
        removeButtonStyle();
        btnSalty.classList.add("btn-salty-active");
    });


    let searchResult;

    searchIcon.addEventListener('click', () => {
        document.getElementById("search-input").value = "";
        removeButtonStyle();
        showLists(emptyList, "menu");
        addingToOrder(emptyList);
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("search-result-list").classList.remove("show");
        document.getElementById("no-search-result").classList.add("show");
        document.getElementById("header").style.display = "none";
        document.getElementById("no-search-result").innerHTML = `
            <p class="search-result box-notification">Busca en nuestro Menú </p>`;
        document.getElementById("no-order").classList.remove("show");
        document.getElementById("order-sent").classList.remove("show");
        if (searchInput.style.display === "none") {
            addInputAnimation();
            searchInput.focus();
        } else {
            removeInputAnimation();
            document.getElementById("header").style.display = "grid";
            document.getElementById("no-order").classList.add("show");
            document.getElementById("no-search-result").classList.remove("show");
        }
    });

    
    searchInput.addEventListener('input', ()=>{
        
        searchWord = searchInput.value;
        
        searchResult = allProducts.filter((allProducts) => allProducts.nombre.toLowerCase().includes(searchWord.toLowerCase().trim()));
        
        document.getElementById("menu").classList.remove("show");
        document.getElementById("header").style.display = "none";
        if(document.getElementById("search-input").value == ""){
            document.getElementById("no-search-result").innerHTML = `
            <p class="search-result box-notification">Busca en nuestro Menú </p>
                `;
            document.getElementById("no-order").classList.remove("show");
            document.getElementById("search-result-list").classList.remove("show");
        }else{
            if(searchResult.length == 0){
                document.getElementById("search-result-list").classList.remove("show");
                document.getElementById("no-search-result").classList.add("show");
                document.getElementById("no-search-result").innerHTML = `
                <p class="search-result box-notification">No se encontraron resultados a tu búsqueda <i class="far fa-sad-cry"></i></p>`;
            }else{
                document.getElementById("search-result-list").classList.add("show");
                document.getElementById("no-search-result").classList.add("show");
                document.getElementById("no-search-result").innerHTML = `
                <p class="search-result-list-text box-notification">Resultados de tu búsqueda: </p> `;
                document.getElementById("no-order").classList.remove("show");

                showLists(searchResult, "search-result-list");
            };
        };
        
    });


    function removeItems(){
        if(order.length > 0){
            for (let i = 0; i < order.length; i++){
                
                document.getElementById(`cancel${i}`).addEventListener('click', ()=>{
                    if(count == 1){
                        order[i].cantidad = 1;
                        order.splice(i, 1);
                        orderItems = [];
                        count--;
                        iconShopCounter.innerHTML = count;
                        createOrder();
                    }else{
                        document.getElementById(`order-text${i}`).style.backgroundColor = "rgb(247,135,138)";
                        document.getElementById(`order-text${i}`).style.color = "rgb(247,135,138)";
                        document.getElementById(`plus${i}`).style.color = "rgb(247,135,138)";
                        document.getElementById(`less${i}`).style.color = "rgb(247,135,138)";
                        document.getElementById(`order-text${i}`).animate([{transform: 'translateX(0px)'}, {transform: 'translateX(830px)'}], 
                        {duration: 500});
                        setTimeout(function(){
                            notificationTextDelete.innerHTML = `
                            <p><i class="far fa-times-circle"></i> Eliminaste ${order[i].nombre} del pedido`;
                            notificationDelete();
                            order[i].cantidad = 1;
                            order.splice(i, 1);
                            orderItems.splice(i, 1);
                            count--;
                            iconShopCounter.innerHTML = count;
                            createOrder();
                        }, 500);
                    }
                    
                });
            };
        }else{
            document.getElementById("header-icon").style.backgroundImage = "linear-gradient(to right, rgb(168, 139, 235), rgb(248, 206, 236), rgb(255, 255, 255))";
            document.getElementById("order-section").style.display = "none";
            swal("No hay nada en tu pedido", "Mirá nuestro Menú!", "error");
            document.getElementById("no-order").classList.add("show");

        };
    };

    const add = () => {
        for (let i = 0; i < order.length; i++){
            document.getElementById(`plus${i}`).addEventListener('click', ()=>{
                if (order[i].cantidad < 10){
                    order[i].cantidad += 1;
                    notificationTextWarningAdd.innerHTML = `
                    <p><i class="fas fa-exclamation"></i> Se agrego 1 unidad más de ${order[i].nombre}</p>`;
                    notification(notificationTextWarningAdd);

                    createOrder();
                }else{
                    swal("Oops...", "No se pueden agregar mas unidades del producto", "warning");
                };
                
            });
        };
    };
    
    const minus = () => {
        for (let i = 0; i < order.length; i++){
            document.getElementById(`less${i}`).addEventListener('click', ()=>{
                if (order[i].cantidad > 1){
                    order[i].cantidad -= 1;
                    notificationTextWarningMinus.innerHTML = `
                    <p><i class="far fa-times-circle"></i> Se eliminó 1 unidad de ${order[i].nombre}</p>`;
                    notification(notificationTextWarningMinus);

                    createOrder();
                }else{
                    swal("Oops...", "La cantidad no puede ser menor a 1", "warning");
                };
                
            });
        };
    };
    

    function createOrder(){
        let orderList = `
            <h4>Tu Pedido:</h4>
            <div class="order-text" id="order-text">
                <p class="order-text-cantidad"></p>
                <p class="order-text-name">Servicio de Mesa</p>
                <p class="order-text-price">$ 80</p>
                <p class="order-text-cancel"></p>
            </div>
        `;
        let total = 0;
        
        for(let i = 0; i < order.length; i++){
            let price = order[i].precio * order[i].cantidad;
            orderList += `
                <div class="order-text" id="order-text${i}">
                    <p class="order-text-cantidad">
                        <span id="plus${i}" class="quantity-icon"><i class="fas fa-caret-up"></i></span> 
                        <span class="quantity"> ${order[i].cantidad} </span>
                        <span id="less${i}" class="quantity-icon"><i class="fas fa-caret-down"></i></span>
                    </p>
                    <p class="order-text-name">${order[i].nombre}</p>
                    <p class="order-text-price">$ ${price}</p>
                    <p class="order-text-cancel" id="cancel${i}"><i class="far fa-times-circle"></i></p>
                </div>
            `;
            total += price;
            
        };
        
        document.getElementById("order-section").style.display = "block";
        document.getElementById("order-list").innerHTML = orderList;
        document.getElementById("order-total").innerHTML = 
        `
            <p class="order-total">Total: $ ${total+80}</p>
        `;
       
        removeItems();
        
        add();
        
        minus();
        
        let orderWhatsapp = ``;
        for (let i = 0; i< order.length; i++){
            orderWhatsapp += `${order[i].cantidad} ${order[i].nombre}, ` ;
        }
        
        document.getElementById("order-whatsapp").innerHTML = `
        <a class="order-btn wapp" id="wapp-order" href="https://api.whatsapp.com/send?phone=5491163501252&text=*¡Hola Coffee Shop!* Me gustaría pedir: ${orderWhatsapp} Total: $ ${total+80}. Gracias" target="_blank"><i class="fab fa-whatsapp"></i> Enviar por Whatsapp</a>
        `;

        deleteOrder();

        orderSent()
    };

    function orderSent(){
        document.getElementById("wapp-order").addEventListener('click', ()=>{
            for(let i = 0; i < order.length; i++){
                order[i].cantidad = 1;
            };
            order = [];
            orderItems = [];
            count = 0;
            iconShopCounter.innerHTML = count;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            document.getElementById("order-section").style.display = "none";
            document.getElementById("order-sent").classList.add("show");
            document.getElementById("order-sent").innerHTML = `
            <p class="box-notification"> Tu pedido fue enviado, en breve nos comunicaremos por Whatsapp <i class="far fa-smile-beam smile-icon"></i></p>
            `;
        });
    };

    function deleteOrder(){
        document.getElementById("order-delete").innerHTML = `<p class="order-btn delete"><i class="fas fa-times-circle"></i> Borrar el pedido </p>`;
        document.getElementById("order-delete").addEventListener('click', ()=>{
            for(let i = 0; i < order.length; i++){
                order[i].cantidad = 1;
            };
            order = [];
            orderItems = [];
            count = 0;
            iconShopCounter.innerHTML = count;
            document.getElementById("header-icon").style.backgroundImage = "linear-gradient(to right, rgb(168, 139, 235), rgb(248, 206, 236), rgb(255, 255, 255))";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            document.getElementById("order-section").style.display = "none";
            document.getElementById("no-order").classList.add("show");
            document.getElementById("no-order").style.marginBottom = "1rem";
            swal("No hay nada en tu pedido", "Mirá nuestro Menú!", "error");
        });
    };
    

    document.getElementById("icon-shop").addEventListener(('click'), ()=>{
        removeInputAnimation();
        document.getElementById("no-search-result").classList.remove("show");
        document.getElementById("menu").classList.remove("show");
        removeButtonStyle();
        document.getElementById("header-text").style.color = "rgb(255, 255, 255)";
        document.getElementById("order-sent").classList.remove("show");
        if(count == 0){
            swal("No hay nada en tu pedido", "Mirá nuestro Menú!", "error");
            document.getElementById("header-icon").style.backgroundImage = "linear-gradient(to right, rgb(168, 139, 235), rgb(248, 206, 236), rgb(255, 255, 255))";
            document.getElementById("no-order").classList.add("show");
            document.getElementById('greeting').classList.add("hide");
            document.getElementById("header").style.display = "grid";
        }else{
            document.getElementById("header-icon").style.backgroundImage = "url('../img/bg.png')";
            document.getElementById("no-order").classList.remove("show");
            document.getElementById("order-section").style.display = "block";
            document.getElementById("search-result-list").classList.remove("show");
            document.getElementById("header").style.display = "grid";
            document.getElementById("search-input").value = "";      
            createOrder();
        };
    });
    

});