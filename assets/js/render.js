const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// init
setCurrentPage()
initCartList()
initLocalStorage()
initNamOfAccount()
window.addEventListener('scroll',scroll)

$('.navbar__bottom-left').onclick = function(){
    location.reload()
    returnHeaderPage()
}
function initLocalStorage(){
    if(localStorage.getItem('numOfAccount')==null){
        localStorage.setItem('numOfAccount',1)
        localStorage.setItem('account1','root root')  
        localStorage.setItem('numOfBook',2)
        localStorage.setItem('book1','1/Sioma Ngwezi Park, Zambia/travel107.jpg')
        localStorage.setItem('book2','1/Imperial Tokyo, Japan/travel88.jpg')
    }
}
function initNamOfAccount(){
    if(localStorage.getItem('currentAccount')!=null){
        arr = localStorage.getItem('account'+localStorage.getItem('currentAccount')).split(' ')
        $('.name__of__user').innerHTML = arr[0]
    }
}
function scroll(){
    if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30){
        $('.navbar__top').classList.add('hide');
        $('#header').style.backgroundColor = 'rgba(54, 19, 84, .85)';
        $('.navbar__bottom').style.height = '60px'
        $('.navbar__bottom').style.animation ='navbar 1s linear'
        $('.navbar__bottom-left').style.fontSize = '1.8rem';
        $('.navbar__bottom-left img').style.width = '40px';
        $('.navbar__bottom-left img').style.height = '40px';
    }else{
        $('.navbar__top').classList.remove('hide');
        $('#header').style.backgroundColor = null;
        $('.navbar__bottom').style.height = null
        $('.navbar__bottom').style.animation = null
        // $('.navbar__bottom').style.animation ='navbarGrow 1s linear'
        $('.navbar__bottom-left').style.fontSize = null
        $('.navbar__bottom-left img').style.width = null;
        $('.navbar__bottom-left img').style.height = null
    }
}
// transfer stories
$('.icon__transfer__right').onclick = function(){
    var index = $('.content5__center-list').classList[1];
    $('.content5__center-list').classList.remove(index);
    index = index[4];
    index = parseInt(index);
    if(index==6){
        $('.content5__center-list').classList.add(`left${index}`);
        return;
    }
    $('.content5__center-list').classList.add(`left${index+1}`);
    if(index == 5){
        this.classList.add('disable');
    }
    $('.icon__transfer__left').classList.remove('disable')
}
$('.icon__transfer__left').onclick = function(){
    var index = $('.content5__center-list').classList[1];
    $('.content5__center-list').classList.remove(index);
    index = index[4];
    index = parseInt(index);
    if(index==0){
        $('.content5__center-list').classList.add(`left${index}`);
        return;
    }
    $('.content5__center-list').classList.add(`left${index-1}`);
    if(index == 1){
        this.classList.add('disable');
    }
    $('.icon__transfer__right').classList.remove('disable')
}

// change page
function returnHeaderPage(){
    document.documentElement.scrollTop = 0;
}
function setCurrentPage(){
    if(localStorage.getItem('page')==null){
        localStorage.setItem('page','home')
        $('#main').classList.add(localStorage.getItem('page'))
    }else{
        $('#main').classList.add(localStorage.getItem('page'))
    }
}
$('.js-home').onclick = function(){
    document.getElementById('main').className = "";
    localStorage.setItem('page','home')
    $('.navbar__bottom').classList.remove('show')
    setCurrentPage()
    returnHeaderPage()
}
$('.js-about').onclick = function(){
    document.getElementById('main').className = "";
    localStorage.setItem('page','about')
    $('.navbar__bottom').classList.remove('show')
    setCurrentPage()
    returnHeaderPage()
}
$('.js-travel').onclick = function(){
    document.getElementById('main').className = "";
    localStorage.setItem('page','travel')
    $('.navbar__bottom').classList.remove('show')
    setCurrentPage()
    returnHeaderPage()
}
$('.js-tickets').onclick = function(){
    document.getElementById('main').className = "";
    localStorage.setItem('page','tickets')
    $('.navbar__bottom').classList.remove('show')
    setCurrentPage()
    returnHeaderPage()
}
$('.js-contact').onclick = function(){
    document.getElementById('main').className = "";
    localStorage.setItem('page','contact')
    $('.navbar__bottom').classList.remove('show')
    setCurrentPage()
    returnHeaderPage()
}

// show and hide modal login
function showModal(){
    $('#modal').classList.remove('hide')
}
function hideModal(){
    $('#modal').classList.add('hide')
}
$('.nb__on__mb__login').onclick = showModal
$('.js-login-header').onclick = showModal
$('#modal').onclick = hideModal
$('.modal__frame').onclick = function(e){
    e.stopPropagation()
}
// change modal login <--> register
function changeFromLoginToRegister(){
    $('.modal__frame').classList.remove('modal__type-login')
    $('.modal__frame').classList.add('modal__type-register')
    $('#text').value = ''
    $('#password').value = '' 
}
function changeFromRegisterToLogin(){
    $('.modal__frame').classList.remove('modal__type-register')
    $('.modal__frame').classList.add('modal__type-login')
}
$('.change_button_modal-register').onclick = changeFromLoginToRegister
$('.change_button_modal-login').onclick = changeFromRegisterToLogin
    
// auto check register
function checkUserNameRegister(){
    var username = $('#text__register').value
    if(username=='')    return false;
    var err = `<span class="material-symbols-outlined">error</span>`
    if(/\s/.test(username)){
        err += 'Usermame must not contain spaces'
    }else if(username.length < 10){
        err+= 'Minimum length of 10 characters'   
    }else if(!/[0-9]/.test(username)){
        err+= 'Username must contain numeric characters'   
    }else if(!/[a-z]/.test(username)){
        err+= 'Username must contain alphabetic characters'
    }else if(!/[!@#$%^&*]/.test(username)){
        err+= 'Username must contain @, #, $, %, &'
    }else{
        err = `<span class="material-symbols-outlined">task_alt</span>Valid username!`
        $('.check__for__user').style.color = 'rgb(13, 243, 36)'
        $('.check__for__user').innerHTML = err 
        return true
    }
    $('.check__for__user').style.color = 'red'
    $('.check__for__user').innerHTML = err 
}
function checkPasswordRegister(){
    var password = $('#password__register').value
    if(password=='')    return false;
    var err = `<span class="material-symbols-outlined">error</span>`
    if(/\s/.test(password)){
        err += 'Password must not contain spaces'
    }else if(password.length < 10){
        err+= 'Minimum length of 10 characters'   
    }else if(!/[0-9]/.test(password)){
        err+= 'Password must contain numeric characters'   
    }else if(!/[a-z]/.test(password)){
        err+= 'Password must contain alphabetic characters'
    }else{
        err = `<span class="material-symbols-outlined">task_alt</span>Valid password!`
        $('.check__for__password').style.color = 'rgb(13, 243, 36)'
        $('.check__for__password').innerHTML = err
        return true
    }
    $('.check__for__password').style.color = 'red'
    $('.check__for__password').innerHTML = err
    
}
$('#text').addEventListener("keyup",function(){
    $('.err__for__login').innerHTML = ''
})
$('#password').addEventListener("keyup",function(){
    $('.err__for__login').innerHTML = ''
})

$('#text__register').addEventListener("keyup",function(){
    checkUserNameRegister()
    checkRegister()
    $('.check__notification').innerHTML = ''
    if(this.value==''){
        $('.check__for__user').innerHTML = ''
    }
})
$('#password__register').addEventListener("keyup",function(){
    checkPasswordRegister()
    checkRegister()
    $('.check__notification').innerHTML = ''
    if(this.value==''){
        $('.check__for__password').innerHTML = ''
    }
})
function checkRegister(){
    if(checkPasswordRegister() && checkUserNameRegister()){
        $('.js-register-modal').classList.remove('disable__button')
    }else{
        $('.js-register-modal').classList.add('disable__button')
    }
}
checkRegister() // call init
// register button on modal
function registerAccount(){
    var username = $('#text__register').value
    var password = $('#password__register').value
    var numOfAccount = parseInt(localStorage.getItem('numOfAccount'))
    var temp;
    var arr = []
    for(var i = 1;i<=numOfAccount;i++){
        temp = localStorage.getItem('account'+i);
        arr = temp.split(' ');
        if(username==arr[0]){
            return false;
        }
    }
    localStorage.setItem('numOfAccount',(numOfAccount+1))
    localStorage.setItem('account'+(numOfAccount+1),username+' '+password)
    return true;   
}
$('.js-register-modal').onclick = function(){
    if(this.classList[3]!='disable__button'){
        if(registerAccount()){
            $('.check__notification').innerHTML = '<span class="material-symbols-outlined">task_alt</span>Successful! Welcome to Travel!'
            $('.check__notification').style.color = 'rgb(13, 243, 36)'
        }else{
            $('.check__notification').innerHTML = '<span class="material-symbols-outlined">error</span>This account already exists!'
            $('.check__notification').style.color = 'red'
        }
    }
}

// init cart list
function initCartList(){
    if(localStorage.getItem('currentAccount')==null){
        $('.cart__ticket').classList.add('hide')
    } else{
        $('.cart__ticket').classList.remove('hide')
    }
}
// show menu on mobile
$('.js-menu-on-mb').onclick = function(){
    if($('.navbar__bottom').classList[2]=='show'){
        $('.navbar__bottom').classList.remove('show')
    }else{
        $('.navbar__bottom').classList.add('show')
    }
}
// load account
window.onload = function(){
    if(localStorage.getItem('currentAccount')!=null){
        $('.js-user').classList.remove('hide')
        $('.js-login-header').classList.add('hide')
    }
}
// show cart list
$('.cart__ticket').onclick = function(){
    if($('.notify__frame').classList[1]==null){
        $('.notify__frame').classList.add('hide')
        $('.user__info__frame').classList.remove('hide')
    }else{
        $('.notify__frame').classList.remove('hide')
        $('.user__info__frame').classList.add('hide')
    }
}


const travels = [
    
   
    {
        title: 'Somewhere, Cambodia',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 374,
        oldPrice: 380,
        img:'travel34.jpg',
        area:'Asian',
        nation:'Cambodia',
        stars:3
    },
    {
        title: 'Cangandala, Angola',
        des:'Cangandala is a town of Malanje in Angola.',
        newPrice: 340,
        oldPrice: 365,
        img:'travel46.jpg',
        area:'African',
        nation:'Angola',
        stars:4
    },
    
    {
        title: 'Ninh Binh, Viet Nam',
        des:'Ninh Binh is a city located at the southernmost tip of the Red River Delta with many famous scenic spots such as Hoa Lu ancient capital and a rich history.',
        newPrice: 256,
        oldPrice: 298,
        img:'travel21.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    
    {
        title: 'Ha Long Bay, Viet Nam',
        des:'With 1,600 limestone mountains and many unique floating villages, Ha Long Bay is a place that you must visit at least once in your life.',
        newPrice: 146,
        oldPrice: 172,
        img:'travel22.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:5
    },
    {
        title: 'Sa Pa, Viet Nam',
        des:'Sapa is a special town, this place belongs to temperate and subtropical climate, so the weather is very cool all year round, especially in winter, there will be frost and snowfall.',
        newPrice: 265,
        oldPrice: 290,
        img:'travel23.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:5
    },
    {
        title: 'Nha Trang, Viet Nam',
        des:'Nha Trang, a coastal city located in the center of Khanh Hoa province, has long been one of the most attractive tourist destinations in Vietnam.',
        newPrice: 342,
        oldPrice: 356,
        img:'travel24.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Nha Trang, Viet Nam',
        des:'Nha Trang, a coastal city located in the center of Khanh Hoa province, has long been one of the most attractive tourist destinations in Vietnam.',
        newPrice: 446,
        oldPrice: 470,
        img:'travel25.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Hue, Viet Nam',
        des:'Hue not only has ancient architectural works, royal court music or animals bearing the traces of kings. This place is also very favored by nature when it has endowed the ancient capital with many beautiful landscapes, along with the cultural quintessence created by man.',
        newPrice: 158,
        oldPrice: 198,
        img:'travel26.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Can Tho, Viet Nam',
        des:'Can Tho has a warm and sunny climate all year round and the weather is mild, so it is beautiful to visit in any season.',
        newPrice: 276,
        oldPrice: 280,
        img:'travel27.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Mekong Delta, Viet Nam',
        des:'The Mekong Delta has many beautiful scenes, delicious and cheap food, so it is chosen by many people as a top destination.',
        newPrice: 368,
        oldPrice: 390,
        img:'travel28.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Sword Lake, Viet Nam',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 440,
        oldPrice: 454,
        img:'travel29.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Ninh Binh, Viet Nam',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 232,
        oldPrice: 254,
        img:'travel30.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Nha Trang, Viet Nam',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 656,
        oldPrice: 678,
        img:'travel31.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:5
    },
    {
        title: 'An Giang, Viet Nam',
        des:'As a piece of the Long Xuyen quadrangle, An Giang possesses a pure and simple beauty that is bold in the west of the river.',
        newPrice: 574,
        oldPrice: 580,
        img:'travel32.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    {
        title: 'Hoi An, Viet Nam',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 274,
        oldPrice: 280,
        img:'travel33.jpg',
        area:'Asian',
        nation:'Vietnam',
        stars:4
    },
    
    {
        title: 'Somewhere, Netherlands',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 360,
        oldPrice: 480,
        img:'travel35.jpg',
        area:'Eropan',
        nation:'Netherlands',
        stars:4
    },
    {
        title: 'Somewhere, Switzerland',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 356,
        oldPrice: 379,
        img:'travel36.jpg',
        area:'Europan',
        nation:'Switzerland',
        stars:4
    },
    {
        title: 'Somewhere, Switzerland',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 449,
        oldPrice: 499,
        img:'travel37.jpg',
        area:'Europan',
        nation:'Switzerland',
        stars:4
    },
    {
        title: 'Somewhere, Netherlands',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 279,
        oldPrice: 299,
        img:'travel38.jpg',
        area:'Europan',
        nation:'Netherlands',
        stars:5
    },
    {
        title: 'Herat Citadel, Afghanistan',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 174,
        oldPrice: 180,
        img:'travel39.jpg',
        area:'Asian',
        nation:'Afghanistan',
        stars:4
    },
    {
        title: 'Friday Mosque, Afghanistan',
        des:'A congregational mosque or Friday mosque.',
        newPrice: 246,
        oldPrice: 250,
        img:'travel40.jpg',
        area:'Asian',
        nation:'Afghanistan',
        stars:5
    },
    {
        title: 'Ushuaia City, Argentina',
        des:'A congregational mosque or Friday mosque.',
        newPrice: 206,
        oldPrice: 287,
        img:'travel41.jpg',
        area:'American',
        nation:'Argentina',
        stars:4
    },
    {
        title: 'Mendoza City, Argentina',
        des:'Considered the heart of Argentina\'s wine industry. ',
        newPrice: 334,
        oldPrice: 360,
        img:'travel42.jpg',
        area:'American',
        nation:'Argentina',
        stars:4
    },
    {
        title: 'Beagle Channel, Argentina',
        des:'Considered the heart of Argentina\'s wine industry. ',
        newPrice: 405,
        oldPrice: 499,
        img:'travel43.jpg',
        area:'American',
        nation:'Argentina',
        stars:3
    },
    {
        title: 'Valdes, Argentina',
        des:'Considered the heart of Argentina\'s wine industry. ',
        newPrice: 205,
        oldPrice: 225,
        img:'travel44.jpg',
        area:'American',
        nation:'Argentina',
        stars:3
    },
    {
        title: 'Kissama National Park, Angola',
        des:'It\'s located in the northwestern part of Angola along the coast. ',
        newPrice: 122,
        oldPrice: 156,
        img:'travel45.jpg',
        area:'African',
        nation:'Angola',
        stars:5
    },
    {
        title: 'Great Ocean Road, Australia',
        des:'The Great Ocean Road is a 243 km long road along the south coast of Australia.',
        newPrice: 384,
        oldPrice: 410,
        img:'travel47.jpg',
        area:'Australia',
        nation:'Australia',
        stars:4
    },
    {
        title: 'Kangaroo Island, Australia',
        des:'Kangaroo Island is Australia\'s third largest island, after Tasmania and Melville Island. It is in the state of South Australia 112 km, southwest of Adelaide.',
        newPrice: 362,
        oldPrice: 410,
        img:'travel48.jpg',
        area:'Australia',
        nation:'Australia',
        stars:4
    },
    {
        title: 'Melbourne, Australia',
        des:'Another city that must make this list of the most beautiful Australian tourist destinations is of course Melbourne, the cultural capital of Australia and the center of coffee culture.',
        newPrice: 460,
        oldPrice: 489,
        img:'travel49.jpg',
        area:'Australia',
        nation:'Australia',
        stars:5
    },
]
const tickets = [
    {
        mode: 'House',
        title: 'Pavilion',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1120,
        oldPrice: 1345,
        img:'vilaticket1.jpg',
        stars:3
    },
    {
        mode: 'Yacht',
        title: 'Oasis of the Seas',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 4800,
        oldPrice: 5299,
        img:'boatticket12.jpg',
        stars:5
    },
    {

        mode: 'Car',
        title: 'Lamborghini',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1700,
        oldPrice: 1882,
        img:'carticket1.jpg',
        stars:4
    },
    {
        mode: 'House',
        title: 'Grand Gold',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2235,
        oldPrice: 2275,
        img:'vilaticket2.jpg',
        stars:4
    },
    {
        mode: 'House',
        title: 'Pansy',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1340,
        oldPrice: 1365,
        img:'vilaticket3.jpg',
        stars:5
    },
    {
        mode: 'House',
        title: 'Monarque',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2400,
        oldPrice: 2650,
        img:'vilaticket4.jpg',
        stars:4
    },
    {
        mode: 'House',
        title: 'Vertigo',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1167,
        oldPrice: 1180,
        img:'vilaticket5.jpg',
        stars:4
    },
    {
        mode: 'House',
        title: 'Peninsula',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2175,
        oldPrice: 2215,
        img:'vilaticket6.jpg',
        stars:4
    },
    {
        mode: 'House',
        title: 'Green Acres',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2245,
        oldPrice: 2325,
        img:'vilaticket7.jpg',
        stars:5
    },
    {
        mode: 'House',
        title: 'Cassius',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1214,
        oldPrice: 1246,
        img:'vilaticket8.jpg',
        stars:3
    },
    {
        mode: 'House',
        title: 'Crowne',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 3769,
        oldPrice: 3884,
        img:'vilaticket9.jpg',
        stars:5
    },
    {
        mode: 'House',
        title: 'Dana Marina',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1782,
        oldPrice: 1987,
        img:'vilaticket10.jpg',
        stars:3
    },
    {
        mode: 'House',
        title: 'Belle Maison',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1668,
        oldPrice: 1743,
        img:'vilaticket11.jpg',
        stars:5
    },
    {
        mode: 'House',
        title: 'River Prince',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2771,
        oldPrice: 2987,
        img:'vilaticket12.jpg',
        stars:4
    },
    {
        mode: 'Yacht',
        title: 'Starlight',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 6231,
        oldPrice: 7245,
        img:'boatticket1.jpg',
        stars:5
    },
    {
        mode: 'Yacht',
        title: 'Ambassador',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 5123,
        oldPrice: 4145,
        img:'boatticket2.jpg',
        stars:4
    },
    {
        mode: 'Yacht',
        title: 'Paradise Elegance',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 4356,
        oldPrice: 4410,
        img:'boatticket3.jpg',
        stars:5
    },
    {
        mode: 'Yacht',
        title: 'Alisa Cruise',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 5123,
        oldPrice: 6130,
        img:'boatticket4.jpg',
        stars:4
    },
    {
        mode: 'Yacht',
        title: 'Athena',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 3246,
        oldPrice: 4320,
        img:'boatticket5.jpg',
        stars:5
    },
    {
        mode: 'Yacht',
        title: 'Syrena',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 4470,
        oldPrice: 5620,
        img:'boatticket6.jpg',
        stars:5
    },
    {
        mode: 'Yacht',
        title: 'Indochina Sails',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2540,
        oldPrice: 2670,
        img:'boatticket7.jpg',
        stars:3
    },
    {
        mode: 'Yacht',
        title: ' Oriental Sails',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 1560,
        oldPrice: 1654,
        img:'boatticket8.jpg',
        stars:4
    },
    {
        mode: 'Yacht',
        title: 'Majestic',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 2899,
        oldPrice: 3299,
        img:'boatticket9.jpg',
        stars:5
    },
    {
        mode: 'Yacht',
        title: 'Lavender Cruise',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 3850,
        oldPrice: 3999,
        img:'boatticket10.jpg',
        stars:4
    },
    {
        mode: 'Yacht',
        title: 'Symphony of the Seas',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 4500,
        oldPrice: 4799,
        img:'boatticket11.jpg',
        stars:4
    },
    {
        mode: 'Car',
        title: 'Lamborghini',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 124,
        oldPrice: 234,
        img:'carticket2.jpg',
        stars:5
    },
    
    {
        mode: 'Car',
        title: 'Lamborghini',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 155,
        oldPrice: 200,
        img:'carticket3.jpg',
        stars:4
    },
    {
        mode: 'Car',
        title: 'Lamborghini',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 345,
        oldPrice: 370,
        img:'carticket4.jpg',
        stars:4
    },
    {
        mode: 'Car',
        title: 'Mercedes-Benz G63',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 468,
        oldPrice: 523,
        img:'carticket5.jpg',
        stars:5
    },
    {
        mode: 'Car',
        title: 'Rolls-Royce Phantom',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 567,
        oldPrice: 723,
        img:'carticket6.jpg',
        stars:5
    },
    {
        mode: 'Car',
        title: 'Rolls-Royce Phantom',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 232,
        oldPrice: 245,
        img:'carticket7.jpg',
        stars:4
    },
    {
        mode: 'Car',
        title: 'Bugatti Chiron Divo',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 102,
        oldPrice: 157,
        img:'carticket8.jpg',
        stars:5
    },
    {
        mode: 'Car',
        title: 'Ferrari 812 GTS',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 156,
        oldPrice: 178,
        img:'carticket9.jpg',
        stars:4
    },
    {
        mode: 'Car',
        title: 'Aston Martin DB11',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 105,
        oldPrice: 167,
        img:'carticket10.jpg',
        stars:4
    },
    {
        mode: 'Car',
        title: 'Aston Martin DB11',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 105,
        oldPrice: 167,
        img:'carticket11.jpg',
        stars:5
    },
    {
        mode: 'Car',
        title: 'Aston Martin DB11',
        des:'Lorem ipsum dolor sit amet consectetur nncidunt alias.',
        newPrice: 155,
        oldPrice: 167,
        img:'carticket12.jpg',
        stars:4
    },
]
const nations = [
    {
        area:'Asian',
        nation:'Afghanistan'
    },
    {
        area:'Europan',
        nation:'Albania'
    },
    {
        nation:'Algeria',
        area:'African'
    },
    {
        nation:'Andorra',
        area:'Europan'
    },
    {
        nation:'Angola',
        area:'African'
    },
    {
        nation:'Argentina',
        area:'American'
    },
    {
        nation:'Austria',
        area:'Europan'
    },
    {
        nation:'Bangladesh',
        area:'Asian'
    },
    {
        nation:'Belarus',
        area:'Europan'
    },
    {
        nation:'Belgium',
        area:'Europan'
    },
    {
        nation:'Brazil',
        area:'American'
    },
    {
        nation:'Brunei',
        area:'Asian'
    },
    {
        nation:'Cambodia',
        area:'Asian'
    },
    {
        nation:'Canada',
        area:'American'
    },
    {
        nation:'Chile',
        area:'American'
    },
    {
        nation:'China',
        area:'Asian'
    },
    {
        nation:'Colombia',
        area:'American'
    },
    {
        nation:'Congo',
        area:'African'
    },
    {
        nation:'Croatia',
        area:'Europan'
    },
    {
        nation:'Cuba',
        area:'American'
    },
    {
        nation:'Denmark',
        area:'American'
    },
    {
        nation:'Ecuador',
        area:'American'
    },
    {
        nation:'Egypt',
        area:'African'
    },
    {
        nation:'France',
        area:'Europan'
    },
    {
        nation:'Germany',
        area:'Europan'
    },
    {
        nation:'Ghana',
        area:'African'
    },
    {
        nation:'Hungary',
        area:'Europan'
    },
    {
        nation:'Indonesia',
        area:'Asian'
    },
    {
        nation:'Japan',
        area:'Asian'
    },
    {
        nation:'Laos',
        area:'Asian'
    },
    {
        nation:'Malaysia',
        area:'Asian'
    },
    {
        nation:'Mexico',
        area:'American'
    },
    {
        nation:'Mongolia',
        area:'Asian'
    },
    {
        nation:'Netherlands',
        area:'Europan'
    },
    {
        nation:'North Korea',
        area:'Asian'
    },
    {
        nation:'Paraguay',
        area:'American'
    },
    {
        nation:'Philippines',
        area:'Asican'
    },
    {
        nation:'Poland',
        area:'Europan'
    },
    {
        nation:'Portugal',
        area:'Europan'
    },
    {
        nation:'Qatar',
        area:'Asian'
    },
    {
        nation:'Russia',
        area:'Asian'
    },
    {
        nation:'South Korea',
        area:'Asian'
    },
    {
        nation:'South Africa',
        area:'African'
    },
    {
        nation:'Spain',
        area:'Europan'
    },
    {
        nation:'Switzerland',
        area:'Europan'
    },
    {
        nation:'Thailand',
        area:'Asian'
    },
    {
        nation:'United Kingdom',
        area:'Europan'
    },
    {
        nation:'United States',
        area:'American'
    },
    {
        nation:'Venezuela',
        area:'American'
    },
    {
        nation:'Vietnam',
        area:'Asian'
    },
    {
        nation:'Zambia',
        area:'African'
    },
    {
        nation:'Zimbabwe',
        area:'African'
    },
]

// variable for tickets
var currentVehicle = 'all'
var currentStarsTickets = 'all'
var currentPriceTickets = 'all'

// variable for travels
var currentArea = 'all'
var currentNation = 'all'
var currentPriceTravels = 'all'
var currentStarsTravels = 'all'
//
var currentPage = 1
var currentPageTickets = 1
// function for travels

function renderTravels(arr){
    if(arr.length==0){
        $('.ct__travel1-frame').innerHTML = 'Not found!';
        $('.ct__travel1-frame').style.justifyContent = 'center'
        return;
    }
    $('.ct__travel1-frame').style.justifyContent = null
    var html = arr.reduce(function (html, item){
        const starsArr = ['','','','','']
        for(var i=0; i < item.stars ; i++){
            starsArr[i] = 'lightstar'
        }
        return html + `<div class="ct__travel1-item ">
        <div class="ct__travel1-item-img" style="background-image: url(./assets/img/${item.img})">
            <div class="ticker">$${item.newPrice}</div>
        </div>
        <div class="ct__travel1-item-content ${item.img}">
            <h1 class="title">${item.title}</h1>
            <p class="description">${item.des}</p>
            <div class="ct__travel1-item-star">
                <div class="left"><del class="price__original">$${item.oldPrice}</del>$${item.newPrice} <span class="hide__on__mobile">per day</span></div>
                <div class="right">
                    <i class="fas fa-star ${starsArr[0]}"></i>
                    <i class="fas fa-star ${starsArr[1]}"></i>
                    <i class="fas fa-star ${starsArr[2]}"></i>
                    <i class="fas fa-star ${starsArr[3]}"></i>
                    <i class="fas fa-star ${starsArr[4]}"></i>
                </div>
            </div>
            <div class="ct__travel1-item-book">Book</div>
        </div> 
    </div>\n`
    },' ');
    var k = 4 - arr.length%4;
    for(var i=0;i<k;i++){
        html += `<div class="ct__travel1-item" style="box-shadow:none"></div>`
    }
    $('.ct__travel1-frame').innerHTML = html;
}
// function for nations
function renderNations(){
    var html = '<div class="ct__tv__category-item js-nation js-nation-all">Show all</div>'
    html += nations.reduce(function (html, item){
        return html + 
        `<div class="ct__tv__category-item js-nation ${item.area}">${item.nation}</div>\n`
    },' ');
    $('.ct__tv__category-list.nation').innerHTML = html;
}
renderNations()
function chooseNation(){
    var nations = $$('.js-nation')
    for(var i of nations){
        i.onclick = function(){
            for(var j of nations){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            if(this.innerHTML=='Show all'){
                currentNation = 'all'
            }else{
                currentNation = this.innerHTML
            }
            resetPriceofTravel()
            resetStarsofTravel()
            currentPage = 1
            renderTravels(renderPageforTravels(getCurrentTravels())) 
            bookTicket()
        }
    }
}
function chooseStarsTravel(){
    var stars = $$('.js-stars-travel')
    for(var i of stars){
        i.onclick = function(){
            for(var j of stars){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            if(this.innerHTML=='Show all'){
                currentStarsTravels = 'all'
            }else{
                currentStarsTravels = parseInt(this.innerHTML)
            }
            currentPage = 1
            resetPriceofTravel()
            renderTravels(renderPageforTravels(getCurrentTravels()))
            bookTicket()
            
        }
    }
}
function choosePriceTravels(){
    var prices = $$('.js-price-travel')
    for(var i of prices){
        i.onclick = function(){
            for(var j of prices){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            if(this.innerHTML=='Ascending'){
                currentPriceTravels = 'Ascending'
            }else if(this.innerHTML=='Descending'){
                currentPriceTravels = 'Descending'
            }else{
                currentPriceTravels = 'Default'
            }
            currentPage = 1
            renderTravels(renderPageforTravels(getCurrentTravels()))
            bookTicket()
            
        }
    }
}
function resetNationShow(){
    $('.ct__tv__category-list.nation').classList.remove('area__all')
    $('.ct__tv__category-list.nation').classList.remove('area__Asian')
    $('.ct__tv__category-list.nation').classList.remove('area__Europan')
    $('.ct__tv__category-list.nation').classList.remove('area__American')
    $('.ct__tv__category-list.nation').classList.remove('area__African')
    const nations = $$('.js-nation')
    for(var j of nations){
        j.classList.remove('tk__item__active')
    }
    currentNation = 'all'
}
function resetPriceofTravel(){
    const nations = $$('.js-price-travel')
    for(var j of nations){
        j.classList.remove('tk__item__active')
    }
    currentPriceTravels = 'Default'
}
function resetStarsofTravel(){
    const stars = $$('.js-stars-travel')
    for(var j of stars){
        j.classList.remove('tk__item__active')
    }
    currentStarsTravels = 'all'
}
function chooseArea(){
    var areas = $$('.js-area')
    for(var i of areas){
        i.onclick = function(){
            for(var j of areas){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            resetNationShow()
            if(this.innerHTML!='Show all'){
                currentArea = this.innerHTML
                $('.ct__tv__category-list.nation').classList.add('area__'+currentArea)
            }else{
                currentArea = 'all'
                $('.ct__tv__category-list.nation').classList.add('area__all')
            }
            currentPage = 1
            resetStarsofTravel()
            resetPriceofTravel()
            renderTravels(renderPageforTravels(getCurrentTravels()))
            bookTicket()
            
        }
    }
}
function getCurrentTravels(){
    var arr = []
    if(currentArea=='all' && currentNation=='all' && currentStarsTravels=='all'){
        arr = [...travels]
    }else if(currentStarsTravels=='all'){
        if(currentArea=='all'){
            for(var i of travels){
                if(i.nation == currentNation ){
                    arr.push(i)
                }
            }
        }else if(currentNation=='all'){
            for(var i of travels){
                if(i.area == currentArea){
                    arr.push(i)
                }
            }
        }else{
            for(var i of travels){
                if(i.area == currentArea && i.nation == currentNation){
                    arr.push(i)
                }
            }   
        }
    }else{
        if(currentArea=='all' && currentNation=='all'){
            for(var i of travels){
                if(i.stars==currentStarsTravels){
                    arr.push(i)
                }
            }   
        }else if(currentArea=='all' && currentNation!='all'){
            for(var i of travels){
                if(i.stars==currentStarsTravels && i.nation == currentNation){
                    arr.push(i)
                }
            }   
        }else if(currentArea!='all' && currentNation=='all'){
            for(var i of travels){
                if(i.stars==currentStarsTravels && i.area == currentArea){
                    arr.push(i)
                }
            }   
        }else{
            for(var i of travels){
                if(i.stars==currentStarsTravels && i.nation == currentNation && i.area==currentArea){
                    arr.push(i)
                }
            }   
        }
    }
    if(currentPriceTravels=='Ascending'){
        sortbyPriceOfTickets(arr);
    }else if(currentPriceTravels=='Descending'){
        sortbyPriceOfTickets(arr);
        arr = arr.reverse()
    }
    return arr;
}
function renderPageforTravels(travels){
    var sizeOfTravels  = travels.length;
    var numOfPage = Math.ceil(sizeOfTravels/16);
    const arr = []
    if(sizeOfTravels==0){
        return arr;
    }else if(sizeOfTravels<8){
        for(var i=0;i<sizeOfTravels;i++){
            arr.push(travels[i]);
        } 
    }else if(sizeOfTravels >= currentPage*16){
        for(var i=(currentPage-1)*16;i<currentPage*16;i++){
            arr.push(travels[i]);
        }

    }else{
        for(var i=(currentPage-1)*16;i<sizeOfTravels;i++){
            arr.push(travels[i]);
        }
    }
    //

    $('.page-current').innerHTML = currentPage
    $('.page-max').innerHTML = numOfPage
    $('.return-page-button').classList.remove('disable')
    $('.next-page-button').classList.remove('disable')
    if(currentPage==1){
        $('.return-page-button').classList.add('disable')
    }
    if(currentPage==numOfPage){
        $('.next-page-button').classList.add('disable')
    }
    
    return arr;
}
// click change page item
$('.return-page-button').onclick = function(e){
    if($('.return-page-button').classList[2]!='disable'){
        currentPage = currentPage - 1
        renderTravels(renderPageforTravels(getCurrentTravels()))
    }
}
$('.next-page-button').onclick = function(e){
    if($('.next-page-button').classList[2]!='disable'){  
        currentPage = currentPage + 1
        renderTravels(renderPageforTravels(getCurrentTravels()))
    } 
}
// function for tickets

function renderTicket(tickets){
    if(tickets.length==0){
        $('.ct__tk__frame').innerHTML = 'Not found!';
        $('.ct__tk__frame').style.justifyContent = 'center'
        return;
    }
    $('.ct__tk__frame').style.justifyContent = null
    var html = tickets.reduce(function (html, item){
        const stars = ['','','','','']
        for(var i=0;i<item.stars;i++){
            stars[i] = 'lightstar'
        }
        return html + `<div class="ct__travel1-item ">
        <div class="ct__travel1-item-img " style="background-image: url(./assets/img/${item.img})">
            <div class="ticker">$${item.newPrice}</div>
        </div>
        <div class="ct__travel1-item-content ${item.img}">
            <h1 class="title">${item.title}</h1>
            <p class="description">${item.des}</p>
            <div class="ct__travel1-item-star">
                <div class="left"><del class="price__original">$${item.oldPrice}</del>$${item.newPrice} <span class="hide__on__mobile">per day</span></div>
                <div class="right">
                    <i class="fas fa-star ${stars[0]}"></i>
                    <i class="fas fa-star ${stars[1]}"></i>
                    <i class="fas fa-star ${stars[2]}"></i>
                    <i class="fas fa-star ${stars[3]}"></i>
                    <i class="fas fa-star ${stars[4]}"></i>
                </div>
            </div>
            <div class="ct__travel1-item-book">Book</div>
            </div> 
            </div>\n`
                },' ');
    var k = 4 - tickets.length%4;
    for(var i=0;i<k;i++){
        html += `<div class="ct__travel1-item" style="box-shadow:none"></div>`
    }
    $('.ct__tk__frame').innerHTML = html;
}
// click on vehicle item
function chooseVehicle(){
    const vehicles = $$('.js-tk-vehicle');
    for(var i of vehicles){
        i.onclick = function(){
            for(var j of vehicles){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            if(this.innerHTML!='Show all'){
                currentVehicle = this.innerHTML
            }else{
                currentVehicle = 'all'
            }
            currentPageTickets = 1
            resetPriceTicket()
            resetStarsTicket()
            renderTicket(renderPageforTickets(getCurrentTickets()))
            bookTicket()
        }
    }
}
// click on star item
function chooseStarsTickets(){
    const stars = $$('.js-tk-stars')
    for(var i of stars){
        i.onclick = function(){
            for(var j of stars){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            if(this.innerHTML!='Show all'){
                currentStarsTickets = parseInt(this.innerHTML)
            }else{
                currentStarsTickets = 'all'
            }
            currentPageTickets = 1
            renderTicket(renderPageforTickets(getCurrentTickets()))
            bookTicket()
        }
    }
}
// click on price item
function choosePriceTickets(){
    const prices = $$('.js__tk__price')
    for(var i of prices){
        i.onclick = function(){
            for(var j of prices){
                j.classList.remove('tk__item__active')
            }
            this.classList.add('tk__item__active')
            if(this.innerHTML=='Default'){
                currentPriceTickets = 'Default'
            }else if(this.innerHTML=='Ascending'){
                currentPriceTickets = 'Ascending'
            }else{
                currentPriceTickets = 'Descending'
            }
            currentPageTickets = 1
            renderTicket(renderPageforTickets(getCurrentTickets()))
            bookTicket()
        }
    }
}
function resetStarsTicket(){
    const stars = $$('.js-tk-stars')
    for(var j of stars){
        j.classList.remove('tk__item__active')
    }
    currentStarsTickets = 'all'
}
function resetPriceTicket(){
    const prices = $$('.js__tk__price')
    for(var j of prices){
        j.classList.remove('tk__item__active')
    }
    currentPriceTickets = 'all'
}
function getCurrentTickets(){
    var arr = [];
    if(currentVehicle=='all' && currentStarsTickets=='all'){
        arr = [...tickets]
    }else if(currentStarsTickets=='all'){
        for(var i of tickets){
            if(i.mode == currentVehicle){
                arr.push(i)
            }
        }
    }else if(currentVehicle=='all'){
        for(var i of tickets){
            if(i.stars == currentStarsTickets){
                arr.push(i)
            }
        }
    }else{
        for(var i of tickets){
            if(i.stars == currentStarsTickets && i.mode == currentVehicle){
                arr.push(i)
            }
        }
    }
    if(currentPriceTickets=='Ascending'){
        sortbyPriceOfTickets(arr)
    }else if(currentPriceTickets=='Descending'){
        sortbyPriceOfTickets(arr)
        arr = arr.reverse()
    }
    return arr 
}
function renderPageforTickets(tickets){
    var sizeOfTickets  = tickets.length;
    var numOfPage = Math.ceil(sizeOfTickets/16);
    const arr = []
    if(sizeOfTickets==0){
        return arr;
    }else if(sizeOfTickets<8){
        for(var i=0;i<sizeOfTickets;i++){
            arr.push(tickets[i]);
        } 
    }else if(sizeOfTickets >= currentPageTickets*16){
        for(var i=(currentPageTickets-1)*16;i<currentPageTickets*16;i++){
            arr.push(tickets[i]);
        }

    }else{
        for(var i=(currentPageTickets-1)*16;i<sizeOfTickets;i++){
            arr.push(tickets[i]);
        }
    }
    //

    $('.page-current-tickets').innerHTML = currentPageTickets
    $('.page-max-tickets').innerHTML = numOfPage
    $('.return-page-tickets-button').classList.remove('disable')
    $('.next-page-tickets-button').classList.remove('disable')
    if(currentPageTickets==1){
        $('.return-page-tickets-button').classList.add('disable')
    }
    if(currentPageTickets==numOfPage){
        $('.next-page-tickets-button').classList.add('disable')
    }
    
    return arr;
}
// click change page item
$('.return-page-tickets-button').onclick = function(e){
    if($('.return-page-tickets-button').classList[2]!='disable'){
        currentPageTickets = currentPageTickets - 1
        renderTicket(renderPageforTickets(getCurrentTickets()))
    }
}
$('.next-page-tickets-button').onclick = function(e){
    if($('.next-page-tickets-button').classList[2]!='disable'){  
        currentPageTickets = currentPageTickets + 1
        renderTicket(renderPageforTickets(getCurrentTickets()))
    }
}
// sort
function sortbyPriceOfTickets(arr){
    var n = arr.length
    for(var i=0;i<n-1;i++){
        for(var j=i+1;j<n;j++){
            if(arr[i].newPrice>arr[j].newPrice){
                var t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
}
// call function
// for travel
chooseNation()
chooseArea()
choosePriceTravels()
chooseStarsTravel()
// for tickets
chooseStarsTickets()
chooseVehicle()
choosePriceTickets()
// initial value
renderTravels(renderPageforTravels(travels))
renderTicket(renderPageforTickets(tickets))

// booktickets
var nameOfTicket = ''
var imgOfTicket = ''
//
function showBookTicketModal(){
    $('#book__ticket').classList.remove('hide')
    $('.book__ticket__button').classList.add('book__ticket__button__disable')
}
function hideBookTicketModal(){
    $('#book__ticket').classList.add('hide')
    $('.book__ticket__success').classList.add('hide')
    $('#book__ticket__name').value = ''
    $('#book__ticket__tel').value = ''
    $('#book__ticket__note').value = ''
    $('#checkbox__for__bookticket').checked = false
}
function bookTicket(){
    const buttons = $$('.ct__travel1-item-book')
    for(var i of buttons){
        i.onclick = function(){
            if(localStorage.getItem('currentAccount')==null){
                showModal()
                returnHeaderPage()
            }else{
                nameOfTicket = this.parentElement.querySelector('h1').innerHTML   
                imgOfTicket = this.parentElement.classList[1]
                showBookTicketModal()
            }
        }
    }
}
bookTicket()
function SuccessBookTicket(){
    $('.book__ticket__success').classList.remove('hide')
    $('.background__content__booked').querySelector('h1').innerHTML = nameOfTicket
    $('.background__img__booked').style.backgroundImage = `url(./assets/img/${imgOfTicket})`
    
    if(localStorage.getItem('numOfBook')==null){
        localStorage.setItem('numOfBook',1)
    }else{
        localStorage.setItem('numOfBook',parseInt(localStorage.getItem('numOfBook'))+1)
    }
    localStorage.setItem('book'+localStorage.getItem('numOfBook'),localStorage.getItem('currentAccount')+"/"+nameOfTicket+"/"+imgOfTicket)

    renderCartList()
}
// modal book ticket
function checkCheckBox(){
    if($('#checkbox__for__bookticket').checked){
        if($('#book__ticket__name').value!='' && $('#book__ticket__tel').value!=''){
            $('.book__ticket__button').classList.remove('book__ticket__button__disable')
        }else{
            $('.book__ticket__button').classList.add('book__ticket__button__disable')
        }
    }else{
        $('.book__ticket__button').classList.add('book__ticket__button__disable')
    }
}

function closeButtonBookTicketModal(){
    var arr = $$('.js-book__ticket__close');
    for(var i of arr){
        i.onclick = hideBookTicketModal
    }
}
closeButtonBookTicketModal()
$('.book__ticket__button').onclick = function(){
    if(this.classList[1]==null){
        SuccessBookTicket()
    }
}
$('#checkbox__for__bookticket').onclick = checkCheckBox
//

// render cartlist 
function renderCartList(){
    var n = parseInt(localStorage.getItem('numOfBook'))
    var value
    var arr = []
    var currentAccountBook
    var currentAccount = parseInt(localStorage.getItem('currentAccount'))
    var html = '';
    var numberTicketInCart = 0
    for(var i=1;i<=n;i++){
        value = localStorage.getItem('book'+i)
        arr = value.split('/')
        currentAccountBook = parseInt(arr[0]);
        if(currentAccountBook==currentAccount){
            numberTicketInCart++;
            html += `<div class="notify__item">
            <img src="./assets/img/${arr[2]}" alt="">
            <div class="title">
                <h2>${arr[1]}</h2>
                <p> Quidem minima vitae, laborum asperiores blanditiis tempora aspernatur, eveniet iusto quisquam!</p>
            </div>
            </div>`
        } 
    }
    if(numberTicketInCart==0){
        $('.cart__ticket__number').classList.add('hide')
    }else{
        $('.cart__ticket__number').classList.remove('hide')
        $('.cart__ticket__number').innerHTML = numberTicketInCart
    }
    if(html==''){
        $('.notify__frame').innerHTML = `<div class="notify__item" style="text-align:center">
        Empty shopping cart
        </div>`
    }else{
        $('.notify__frame').innerHTML = html;
    }
}
renderCartList()
// login 
function loginAccount(){
    var username = $('#text').value
    var password = $('#password').value
    var numOfAccount = parseInt(localStorage.getItem('numOfAccount'))
    var temp;
    var arr = []
    for(var i = 1 ;i<=numOfAccount;i++){
        temp = localStorage.getItem('account'+i);
        arr = temp.split(" ");
        if(username==arr[0]){
            if(password==arr[1]){
                localStorage.setItem('currentAccount',i)
                return 1;
            }else{
                return 0;
            }
        }
    }
    return -1;
}
$('.js-login-modal').onclick = function(){
    var flag = loginAccount();
    var arr = []
    if(flag==1){
        $('#modal').classList.add('hide')
        $('.js-user').classList.remove('hide')
        $('.js-login-header').classList.add('hide')
        initNamOfAccount()
        initCartList()
        renderCartList()
        window.onload()
    }else if(flag==0){
        $('.err__for__login').innerHTML = `<span class="material-symbols-outlined">error</span>That\'s not the right password. Try again !`
    }else{
        $('.err__for__login').innerHTML = `<span class="material-symbols-outlined">error</span>This account does not exist. Try again !`
    }
}
// log out
$('.js-logout').onclick = function(){
    $('.js-login-header').classList.remove('hide')
    $('.js-user').classList.add('hide')
    localStorage.removeItem('currentAccount')
    $('#text').value = ''
    $('#password').value = '' 
    initCartList()
}