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
        {nombre: 'Café Espresso', imagen: '../img/espresso.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 180, cantidad: 1},
        {nombre: 'Café Americano', imagen: '../img/americano.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 200, cantidad: 1},
        {nombre: 'Cortado', imagen: '../img/cortado.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 200, cantidad: 1},
        {nombre: 'Café con leche', imagen: '../img/cafeconleche.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Café Latte', imagen: '../img/latte.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Café Mocha', imagen: '../img/mocha.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 250, cantidad: 1},
        {nombre: 'Macciato', imagen: '../img/macciato.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Caramel Macciato', imagen: '../img/caramel.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Capuccino', imagen: '../img/capuccino.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Flat White', imagen: '../img/flat.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Café Irlandes', imagen: '../img/irlandes.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 260, cantidad: 1},
        {nombre: 'Café Amaretto', imagen: '../img/amaretto.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 260, cantidad: 1}        
    ];
    let juiceList = [
        {nombre: 'Limonada', imagen: '../img/limon.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 150, cantidad: 1},
        {nombre: 'Jugo de Naranja', imagen: '../img/naranja.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 150, cantidad: 1},
        {nombre: 'Jugo de Manzana', imagen: '../img/manzana.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 160, cantidad: 1},
        {nombre: 'Licuado de Banana', imagen: '../img/banana.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 180, cantidad: 1},
        {nombre: 'Jugo de Durazno', imagen: '../img/durazno.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 150, cantidad: 1}
    ];
    let sweetList = [
        {nombre: 'Cheesecake', imagen: '../img/cheesecake.png', tacc: '', vegan: '', precio: 280, cantidad: 1},
        {nombre: 'Cheesecake de arándanos', imagen: '../img/cheesecakeblue.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 280, cantidad: 1},
        {nombre: 'Chocotorta', imagen: '../img/chocotorta.png', tacc: '', vegan: '', precio: 250, cantidad: 1},
        {nombre: 'Apple Pie', imagen: '../img/apple.png', tacc: '', vegan: '', precio: 230, cantidad: 1},
        {nombre: 'Cupcake', imagen: '../img/cupcakes.png', tacc: '', vegan: '', precio: 180, cantidad: 1},
        {nombre: 'Donuts', imagen: '../img/donuts.png', tacc: '', vegan: '', precio: 180, cantidad: 1},
        {nombre: 'Cookies', imagen: '../img/cookies.png', tacc: '', vegan: '', precio: 220, cantidad: 1},
        {nombre: 'Hotcakes', imagen: '../img/hotcakes.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 210, cantidad: 1},
        {nombre: 'Medialunas', imagen: '../img/medialunas.png', tacc: '', vegan: '', precio: 150, cantidad: 1},
        {nombre: 'Tostadas con mermelada y queso blanco', imagen: '../img/toast.png', tacc: '', vegan: '', precio: 180, cantidad: 1},
        {nombre: 'Ensalada de frutas', imagen: '../img/frutas.jpg', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 200, cantidad: 1}        
    ];
    let saltyList = [
        {nombre: 'Tostado de jamón y queso', imagen: '../img/sandwich.png', tacc: '', vegan: '', precio: 250, cantidad: 1},
        {nombre: 'Panini de pollo y vegetales', imagen: '../img/sandwich2.png', tacc: '', vegan: '', precio: 270, cantidad: 1},
        {nombre: 'Panini vegetariano', imagen: '../img/sandwich3.png', tacc: '', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 250, cantidad: 1},
        {nombre: 'Tostada con guacamole', imagen: '../img/tavocado.jpg', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 230, cantidad: 1},
        {nombre: 'Huevos revueltos', imagen: '../img/huevos.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', precio: 200, cantidad: 1},
        {nombre: 'Ensalada', imagen: '../img/salad.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', precio: 230, cantidad: 1}
    ];

    const greeting = () => {
        this.document.getElementById('greeting').innerHTML =
            `
                <h2>Bienvenidos a Coffee Shop!!</h2>
                <p>Conocé nuestro menú</p>
                <p><i class="fas fa-angle-double-down animate__animated animate__fadeOutDown animate__infinite infinite animate__slow"></i></p>
            `;
    }

    greeting();

    function showLists (list, id){
        let acu =  ``;
        for(let i = 0; i < list.length; i++){
            acu += `
            <div class="menu-items" id="${list}${i}">
                <div class="item-img">
                    <img src="${list[i].imagen}" alt="${list[i].nombre}">
                </div>
                
                <div class="item-text">
                    <p>${list[i].nombre}</p>
                    <p>$ ${list[i].precio}</p>
                    <p>${list[i].vegan} ${list[i].tacc}</p>
                </div>
                <div class="item-add" id="${id}${i}"><i class="fas fa-plus item-add-icon"></i></div>
            </div>
            `;
        }

        document.getElementById(id).innerHTML = acu;
    }

    showLists(coffeeList, "coffee-menu");
    showLists(juiceList, "juice-menu");
    showLists(sweetList, "sweet-menu");
    showLists(saltyList, "salty-menu");
    
    let btnCoffee = document.getElementById("coffee-btn");
    let btnJuice = document.getElementById("juice-btn");
    let btnSweet = document.getElementById("sweet-btn");
    let btnSalty = document.getElementById("salty-btn");

    btnCoffee.addEventListener('click', () =>{
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("coffee-menu").classList.add("show");
        document.getElementById("juice-menu").classList.remove("show");
        document.getElementById("sweet-menu").classList.remove("show");
        document.getElementById("salty-menu").classList.remove("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-coffee.png')";
        document.getElementById("header-text").style.color = "rgb(241, 237, 206)";
        btnCoffee.classList.add("btn-coffee-active");
        btnJuice.classList.remove("btn-juice-active");
        btnSweet.classList.remove("btn-sweet-active");
        btnSalty.classList.remove("btn-salty-active");
    });
    btnJuice.addEventListener('click', () =>{
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("coffee-menu").classList.remove("show");
        document.getElementById("juice-menu").classList.add("show");
        document.getElementById("sweet-menu").classList.remove("show");
        document.getElementById("salty-menu").classList.remove("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-juice.png')";
        document.getElementById("header-text").style.color = "rgb(245, 245, 196)";
        btnCoffee.classList.remove("btn-coffee-active");
        btnJuice.classList.add("btn-juice-active");
        btnSweet.classList.remove("btn-sweet-active");
        btnSalty.classList.remove("btn-salty-active");
    });
    btnSweet.addEventListener('click', () =>{
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("coffee-menu").classList.remove("show");
        document.getElementById("juice-menu").classList.remove("show");
        document.getElementById("sweet-menu").classList.add("show");
        document.getElementById("salty-menu").classList.remove("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-sweet.png')";
        document.getElementById("header-text").style.color = "rgb(239, 190, 192)";
        btnCoffee.classList.remove("btn-coffee-active");
        btnJuice.classList.remove("btn-juice-active");
        btnSweet.classList.add("btn-sweet-active");
        btnSalty.classList.remove("btn-salty-active");
    });
    btnSalty.addEventListener('click', () =>{
        document.getElementById("order-section").style.display = "none";
        document.getElementById("no-order").classList.remove("show");
        document.getElementById('greeting').classList.add("hide");
        document.getElementById("coffee-menu").classList.remove("show");
        document.getElementById("juice-menu").classList.remove("show");
        document.getElementById("sweet-menu").classList.remove("show");
        document.getElementById("salty-menu").classList.add("show");
        document.getElementById("header-icon").style.backgroundImage = "url('../img/bg-salty.png')";
        document.getElementById("header-text").style.color = "rgb(193, 223, 192)";
        btnCoffee.classList.remove("btn-coffee-active");
        btnJuice.classList.remove("btn-juice-active");
        btnSweet.classList.remove("btn-sweet-active");
        btnSalty.classList.add("btn-salty-active");
    });

    const notificationText = document.getElementById("notification");

    const notification = () => {
        notificationText.classList.add("show");
        notificationText.animate([{transform: 'translateY(75px)'}, {transform: 'translateY(0px)'}], 
        {duration: 500});
        setTimeout(function(){
            notificationText.animate([{transform: 'translateY(0px)'}, {transform: 'translateY(75px)'}], 
            {duration: 500});
        }, 2500);
        setTimeout(function(){
            notificationText.classList.remove("show");
        }, 3000); 
    };

    let iconShopCounter = document.getElementById("icon-shop-count");
    let order = [];
    let count = order.length;
    

    iconShopCounter.innerHTML = count;
    
    function adding(list, id){
        for(let i = 0; i < list.length; i++){      
            document.getElementById(`${id}${i}`).addEventListener('click', ()=>{
                
                notification();
                
                order.push(list[i]);
                count = order.length;

                iconShopCounter.innerHTML = count;

            });
        };
    };

    adding(coffeeList, "coffee-menu");
    adding(juiceList, "juice-menu");
    adding(sweetList, "sweet-menu");
    adding(saltyList, "salty-menu");

    function removeItems(){
        if(order.length > 0){
            for (let i = 0; i < order.length; i++){
                
                document.getElementById(`cancel${i}`).addEventListener('click', ()=>{
                    
                    order.splice(i, 1);
    
                    count--;
                    iconShopCounter.innerHTML = count;
                    
                    createOrder();
                });
            };
        }else{
            document.getElementById("order-section").style.display = "none";
            swal("No hay nada en tu pedido", "Mirá nuestro Menú!", "error");
            document.getElementById("no-order").classList.add("show");

        }
    }

    const add = () => {
        for (let i = 0; i < order.length; i++){
            document.getElementById(`plus${i}`).addEventListener('click', ()=>{
                if (order[i].cantidad < 10){
                    order[i].cantidad += 1;
                    
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
                <div class="order-text" id="order-text">
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
        <a class="wapp" href="https://api.whatsapp.com/send?phone=5491163501252&text=*¡Hola Coffee Shop!* Me gustaría pedir: ${orderWhatsapp} Total: $ ${total+80}. Gracias" target="_blank"><i class="fab fa-whatsapp"></i> Enviar pedido por Whatsapp</a>
        `;
    };

    
    document.getElementById("icon-shop").addEventListener(('click'), ()=>{
        if(count == 0){
            swal("No hay nada en tu pedido", "Mirá nuestro Menú!", "error");
        }else{
            document.getElementById("header-icon").style.backgroundImage = "url('../img/bg.png')";
            document.getElementById("header-text").style.color = "rgb(255, 255, 255)";
            document.getElementById("order-section").style.display = "block";
            btnCoffee.classList.remove("btn-coffee-active");
            btnJuice.classList.remove("btn-juice-active");
            btnSweet.classList.remove("btn-sweet-active");
            btnSalty.classList.remove("btn-salty-active");
            document.getElementById("coffee-menu").classList.remove("show");
            document.getElementById("juice-menu").classList.remove("show");
            document.getElementById("sweet-menu").classList.remove("show");
            document.getElementById("salty-menu").classList.remove("show");
            
            createOrder();
        };
    });
    

});