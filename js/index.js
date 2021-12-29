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
        {nombre: 'Café Espresso', imagen: '../img/espresso.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 180},
        {nombre: 'Café Americano', imagen: '../img/americano.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 200},
        {nombre: 'Cortado', imagen: '../img/cortado.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 200},
        {nombre: 'Café con leche', imagen: '../img/cafeconleche.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 220},
        {nombre: 'Café Latte', imagen: '../img/latte.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 220},
        {nombre: 'Café Mocha', imagen: '../img/mocha.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 250},
        {nombre: 'Macciato', imagen: '../img/macciato.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 220},
        {nombre: 'Caramel Macciato', imagen: '../img/caramel.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 220},
        {nombre: 'Capuccino', imagen: '../img/capuccino.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 220},
        {nombre: 'Flat White', imagen: '../img/flat.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 220},
        {nombre: 'Café Irlandes', imagen: '../img/irlandes.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 260},
        {nombre: 'Café Amaretto', imagen: '../img/amaretto.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 260}        
    ];
    let juiceList = [
        {nombre: 'Limonada', imagen: '../img/limon.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 150},
        {nombre: 'Jugo de Naranja', imagen: '../img/naranja.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 150},
        {nombre: 'Jugo de Manzana', imagen: '../img/manzana.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 160},
        {nombre: 'Licuado de Banana', imagen: '../img/banana.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 180},
        {nombre: 'Jugo de Durazno', imagen: '../img/durazno.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 150}
    ];
    let sweetList = [
        {nombre: 'Cheesecake', imagen: '../img/cheesecake.png', tacc: '', vegan: '', price: 280},
        {nombre: 'Cheesecake de arándanos', imagen: '../img/cheesecakeblue.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 280},
        {nombre: 'Chocotorta', imagen: '../img/chocotorta.png', tacc: '', vegan: '', price: 250},
        {nombre: 'Apple Pie', imagen: '../img/apple.png', tacc: '', vegan: '', price: 230},
        {nombre: 'Cupcakes', imagen: '../img/cupcakes.png', tacc: '', vegan: '', price: 180},
        {nombre: 'Donuts', imagen: '../img/donuts.png', tacc: '', vegan: '', price: 180},
        {nombre: 'Cookies', imagen: '../img/cookies.png', tacc: '', vegan: '', price: 220},
        {nombre: 'Hotcakes', imagen: '../img/hotcakes.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 210},
        {nombre: 'Medialunas', imagen: '../img/medialunas.png', tacc: '', vegan: '', price: 150},
        {nombre: 'Tostadas con mermelada y queso blanco', imagen: '../img/toast.png', tacc: '', vegan: '', price: 180},
        {nombre: 'Ensalada de frutas', imagen: '../img/frutas.jpg', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 200}        
    ];
    let saltyList = [
        {nombre: 'Tostado de jamón y queso', imagen: '../img/sandwich.png', tacc: '', vegan: '', price: 250},
        {nombre: 'Panini de pollo y vegetales', imagen: '../img/sandwich2.png', tacc: '', vegan: '', price: 270},
        {nombre: 'Panini vegetariano', imagen: '../img/sandwich3.png', tacc: '', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 250},
        {nombre: 'Tostada con guacamole', imagen: '../img/tavocado.jpg', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 230},
        {nombre: 'Huevos revueltos', imagen: '../img/huevos.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '', price: 200},
        {nombre: 'Ensalada', imagen: '../img/salad.png', tacc: '<img class="img-icon" src="./img/iconTacc.png" alt="Sin T.A.C.C.">', vegan: '<i class="fas fa-seedling icon-vegan"></i>', price: 230}
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
                    <p>$ ${list[i].price}</p>
                    <p>${list[i].vegan} ${list[i].tacc}</p>
                </div>
                <div class="item-add"><i class="fas fa-plus item-add-icon"></i></div>
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

    
});