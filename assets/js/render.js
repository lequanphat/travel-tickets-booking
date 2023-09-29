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
        title: 'Fuji mount, Japan',
        des:'Just a short ferry ride from mainland Hiroshima is the island of Miyajima, famous the world over as Japan\'s Shrine Island. ',
        newPrice: 920,
        oldPrice: 1035,
        img:'travel87.jpg',
        area:'Asian',
        nation:'Japan',
        stars:4
    },
    {
        title: 'Sioma Ngwezi Park, Zambia',
        des:'The oldest national park in all of Zambia is a real treat for those in search of a bona fide African safari experience.',
        newPrice: 227,
        oldPrice: 310,
        img:'travel107.jpg',
        area:'African',
        nation:'Zambia',
        stars:4
    },
    {
        title: 'Imperial Tokyo, Japan',
        des:'Those wishing to experience the wonderful hospitality of Germany\'s northernmost populace would do well to consider visiting the city of Hamburg.',
        newPrice: 986,
        oldPrice: 1020,
        img:'travel88.jpg',
        area:'Asian',
        nation:'Japan',
        stars:4
    },
    {
        title: 'Sintra, Portugal',
        des:'It’s for good reason the capital sits at the top of a zillion must-visit lists: it is a seduction of the senses,',
        newPrice: 860,
        oldPrice: 925,
        img:'travel92.jpg',
        area:'Europan',
        nation:'Portugal',
        stars:4
    },
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
        title: 'St. Johns, Canada',
        des:'Visit Canada’s most easterly, and oldest, city in Canada. This vibrant city has a lot to offer in terms of history.',
        newPrice: 650,
        oldPrice: 1080,
        img:'travel65.jpg',
        area:'American',
        nation:'Canada',
        stars:5
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
        title: 'Medieval Rothenburg, Germany',
        des:'The capital of the state of Bavaria and one of Germany\'s largest cities.',
        newPrice: 978,
        oldPrice: 1135,
        img:'travel82.jpg',
        area:'Europan',
        nation:'Germany',
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
    {
        title: 'Christ Cristo Redentor, Brazil',
        des:'Statue of Christ the Redeemer Cristo Redentor is considered a symbol of Brazilian tourism and is also the most famous Brazilian tourist destination that you should visit first.',
        newPrice: 470,
        oldPrice: 489,
        img:'travel50.jpg',
        area:'American',
        nation:'Brazil',
        stars:4
    },
    {
        title: 'Amazon Rainforest, Brazil',
        des:'If you still do not know where to go when traveling to Brazil to see beautiful natural scenery, the Amazon rainforest is the ideal destination for you.',
        newPrice: 345,
        oldPrice: 370,
        img:'travel51.jpg',
        area:'American',
        nation:'Brazil',
        stars:4
    },
    {
        title: 'Copacabana Beach, Brazil',
        des:'Copacabana beach is known as the most beautiful beach in Brazil as a luxury resort paradise in Rio de Janeiro, Brazil.',
        newPrice: 220,
        oldPrice: 310,
        img:'travel52.jpg',
        area:'American',
        nation:'Brazil',
        stars:5
    },
    {
        title: 'Gramado, Serra Gaúcha, Brazil',
        des:'Gramado, Serra Gaucha are among the top most popular destinations in Brazil, featuring German architecture.',
        newPrice: 524,
        oldPrice: 579,
        img:'travel53.jpg',
        area:'American',
        nation:'Brazil',
        stars:5
    },
    {
        title: 'Angkor Wat, Campuchia',
        des:'The Angkor Wat temple complex is one of the wonders of the world and is also a very famous tourist destination in Cambodia.',
        newPrice: 469,
        oldPrice: 579,
        img:'travel54.jpg',
        area:'Asian',
        nation:'Campuchia',
        stars:4
    },
    {
        title: 'Koh Rong Island, Campuchia',
        des:'Koh Rong is still a paradise island, the most famous Cambodian tourist destination of the land of the Golden Temple.',
        newPrice: 519,
        oldPrice: 620,
        img:'travel55.jpg',
        area:'Asian',
        nation:'Campuchia',
        stars:3
    },
    {
        title: 'Phnom Penh, Campuchia',
        des:'Phnom Penh has hot weather all year round, so you can come to this Cambodia tourist destination at any time. Around August to October is the coolest time of Phnom Penh.',
        newPrice: 410,
        oldPrice: 579,
        img:'travel56.jpg',
        area:'Asian',
        nation:'Campuchia',
        stars:3
    },
    {
        title: 'Cambodia\'s lake, Campuchia',
        des:'Tonale Sap is currently the largest freshwater lake in Southeast Asia.',
        newPrice: 489,
        oldPrice: 579,
        img:'travel57.jpg',
        area:'Asian',
        nation:'Campuchia',
        stars:4
    },
    {
        title: 'Battambang, Campuchia',
        des:'Cambodia\'s second largest city is a place with the perfect balance of bustle, friendliness, and plenty of fun to explore.',
        newPrice: 475,
        oldPrice: 579,
        img:'travel58.jpg',
        area:'Asian',
        nation:'Campuchia',
        stars:5
    },
    {
        title: 'Great Wall, China',
        des:'The Great Wall of China is one of the great architectural works of mankind, so this famous place always attracts a large number of tourists to China.',
        newPrice: 520,
        oldPrice: 579,
        img:'travel59.jpg',
        area:'Asian',
        nation:'China',
        stars:5
    },
    {
        title: 'Forbidden City, China',
        des:'When it comes to Chinese tourist destinations, the Forbidden City in Beijing cannot be missed.',
        newPrice: 520,
        oldPrice: 579,
        img:'travel60.jpg',
        area:'Asian',
        nation:'China',
        stars:5
    },
    {
        title: 'Shanghai, China',
        des:'This is a location that has been featured in many Chinese films. Shanghai is one of the busiest ports in the world.',
        newPrice: 520,
        oldPrice: 579,
        img:'travel61.jpg',
        area:'Asian',
        nation:'China',
        stars:3
    },
    {
        title: 'Tomb, China',
        des:'Tomb of Qin Shi Huang is one of the most important historical buildings of China, located in Shaanxi province.',
        newPrice: 779,
        oldPrice: 889,
        img:'travel62.jpg',
        area:'Asian',
        nation:'China',
        stars:4
    },
    {
        title: 'Zhangjiajie National Park, China',
        des:'This park is located in Zhangjiajie city, Hunan province of China. This place has a majestic natural scenery like a fairyland.',
        newPrice: 566,
        oldPrice: 612,
        img:'travel63.jpg',
        area:'Asian',
        nation:'China',
        stars:4
    },
    {
        title: 'Phoenix Ancient Town, China',
        des:'This is an ancient town on the Da Giang River in the romantic Hunan province and is also a place that Vietnamese young people have recently loved.',
        newPrice: 566,
        oldPrice: 612,
        img:'travel64.jpg',
        area:'Asian',
        nation:'China',
        stars:4
    },
    {
        title: 'Stanley Park, Canada',
        des:'In the heart of Vancouver, you can experience a natural West Coast rainforest. Covered in trees, and mountain landscapes, Stanley Park is iconic to locals and visitors alike.',
        newPrice: 550,
        oldPrice: 980,
        img:'travel66.jpg',
        area:'American',
        nation:'Canada',
        stars:5
    },
    {
        title: 'Calgary, Canada',
        des:'Close to epic mountains and skill hills along with beautiful national parks, Calgary makes an excellent city to explore.',
        newPrice: 680,
        oldPrice: 980,
        img:'travel67.jpg',
        area:'American',
        nation:'Canada',
        stars:4
    },
    {
        title: 'Winnipeg, Canada',
        des:'Culturally diverse and popular for the IT scene, Winnipeg offers many vibrant festivals, unique neighbourhoods.',
        newPrice: 798,
        oldPrice: 1106,
        img:'travel68.jpg',
        area:'American',
        nation:'Canada',
        stars:5
    },
    {
        title: 'Cartagena, Colombia',
        des:'Cartagena is the crown jewel of Colombia\'s Caribbean coast and one of the best-preserved colonial destinations in the Americas.',
        newPrice: 680,
        oldPrice: 850,
        img:'travel69.jpg',
        area:'American',
        nation:'Colombia',
        stars:4
    },
    {
        title: 'Medellin, Colombia',
        des:'Bogotá might be the Colombian capital, but it\'s the smaller and more manageable city of Medellin that tends to capture the hearts of visitors.',
        newPrice: 756,
        oldPrice: 980,
        img:'travel70.jpg',
        area:'American',
        nation:'Colombia',
        stars:5
    },
    {
        title: 'Bogotá, Colombia',
        des:'Most visitors to Colombia will inevitably begin their trip in the nation\'s largest city–and beating heart–Bogotá.',
        newPrice: 810,
        oldPrice: 1050,
        img:'travel71.jpg',
        area:'American',
        nation:'Colombia',
        stars:4
    },
    {
        title: 'Providencia Island, Colombia',
        des:'This quirky Caribbean Island leaves many first-time visitors perplexed. For starters, it\'s far closer to Nicaragua than Colombia..',
        newPrice: 756,
        oldPrice: 850,
        img:'travel72.jpg',
        area:'American',
        nation:'Colombia',
        stars:4
    },
    {
        title: 'Chiloé Island, Chile',
        des:'As you venture down to the south of Chile, you will encounter much German influence – as well as Mapuche traditions.',
        newPrice: 890,
        oldPrice: 1160,
        img:'travel73.jpg',
        area:'American',
        nation:'Chile',
        stars:5
    },
    {
        title: 'Carretera Austral, Chile',
        des:'Embark on a road trip or a journey by bicycle along this famous route, stopping at the marvelous marble caves found on the General Carrera Lake.',
        newPrice: 897,
        oldPrice: 1167,
        img:'travel74.jpg',
        area:'American',
        nation:'Chile',
        stars:5
    },
    {
        title: 'Easter Island, Chile',
        des:'Easter Island, the island of magic, is where the Moai statues are there to protect you.',
        newPrice: 980,
        oldPrice: 1500,
        img:'travel75.jpg',
        area:'American',
        nation:'Chile',
        stars:4
    },
    {
        title: 'Portillo, Chile',
        des:'Portillo is South America’s oldest ski resort, with an iconic yellow building that is easily noticeable from all around the resort.',
        newPrice: 880,
        oldPrice: 1275,
        img:'travel76.jpg',
        area:'American',
        nation:'Chile',
        stars:4
    },
    {
        title: 'Elsinore, Denmark',
        des:'Elsinore, also known as Helsingør, is home to one of the famous castles in the world: Kronborg, the setting for Shakespeare’s Hamlet.',
        newPrice: 860,
        oldPrice: 1205,
        img:'travel77.jpg',
        area:'Europan',
        nation:'Denmark',
        stars:5
    },
    {
        title: 'Odense, Denmark',
        des:'Elsinore, also known as Helsingør, is home to one of the famous castles in the world: Kronborg, the setting for Shakespeare’s Hamlet.',
        newPrice: 980,
        oldPrice: 1023,
        img:'travel78.jpg',
        area:'Europan',
        nation:'Denmark',
        stars:4
    },
    {
        title: 'Aarhus, Denmark',
        des:'Elsinore, also known as Helsingør, is home to one of the famous castles in the world: Kronborg, the setting for Shakespeare’s Hamlet.',
        newPrice: 967,
        oldPrice: 1080,
        img:'travel79.jpg',
        area:'Europan',
        nation:'Denmark',
        stars:5
    },
    {
        title: 'Munich, Germany',
        des:'The capital of the state of Bavaria and one of Germany\'s largest cities.',
        newPrice: 968,
        oldPrice: 1235,
        img:'travel81.jpg',
        area:'Europan',
        nation:'Germany',
        stars:5
    },
    {
        title: 'Berlin, Germany',
        des:'Elsinore, also known as Helsingør, is home to one of the famous castles in the world: Kronborg, the setting for Shakespeare’s Hamlet.',
        newPrice: 988,
        oldPrice: 1085,
        img:'travel80.jpg',
        area:'Europan',
        nation:'Germany',
        stars:4
    },
    {
        title: 'Cologne, Germany',
        des:'Cologne is another of those wonderful old German cities that has managed to preserve its past for modern generations to enjoy.',
        newPrice: 1120,
        oldPrice: 1135,
        img:'travel83.jpg',
        area:'Europan',
        nation:'Germany',
        stars:5
    },
    {
        title: 'Koblenz & Rhine Valley, Germany',
        des:'Cologne is another of those wonderful old German cities that has managed to preserve its past for modern generations to enjoy.',
        newPrice: 920,
        oldPrice: 1035,
        img:'travel84.jpg',
        area:'Europan',
        nation:'Germany',
        stars:4
    },
    {
        title: 'Frankfurt, Germany',
        des:'Frankfurt has long been one of Germany\'s most important cities.',
        newPrice: 765,
        oldPrice: 835,
        img:'travel85.jpg',
        area:'Europan',
        nation:'Germany',
        stars:5
    },
    {
        title: 'Hamburg, Germany',
        des:'Those wishing to experience the wonderful hospitality of Germany\'s northernmost populace would do well to consider visiting the city of Hamburg.',
        newPrice: 710,
        oldPrice: 825,
        img:'travel86.jpg',
        area:'Europan',
        nation:'Germany',
        stars:4
    },
    {
        title: 'Miyajima, Japan',
        des:'Just a short ferry ride from mainland Hiroshima is the island of Miyajima, famous the world over as Japan\'s Shrine Island. ',
        newPrice: 920,
        oldPrice: 1035,
        img:'travel89.jpg',
        area:'Asian',
        nation:'Japan',
        stars:4
    },
    {
        title: 'Osaka Castle, Japan',
        des:'Built in 1586 by famous Japanese warrior and politician Toyotomi Hideyoshi. ',
        newPrice: 1250,
        oldPrice: 1435,
        img:'travel90.jpg',
        area:'Asian',
        nation:'Japan',
        stars:4
    },
    {
        title: 'Lusail City Stadium, Qatar',
        des:'With FIFA 2022 approaching closer, the stadiums are the best answer to your thoughts of where to go in Qatar.',
        newPrice: 1350,
        oldPrice: 1435,
        img:'travel91.jpg',
        area:'Asian',
        nation:'Qatar',
        stars:4
    },
    {
        title: 'Peneda-Gerês, Portugal',
        des:'Located in Minho, a region known for its beauty, Peneda-Gerês National Park is an oak forest paradise containing',
        newPrice: 885,
        oldPrice: 925,
        img:'travel93.jpg',
        area:'Europan',
        nation:'Portugal',
        stars:4
    },
    {
        title: 'Islamic Cairo, Egypt',
        des:'The Islamic Cairo district in the capital of Egypt is filled with medieval mosques, monuments, and madrassas, and is one of the foremost Egypt tourist attractions. ',
        newPrice: 880,
        oldPrice: 925,
        img:'travel94.jpg',
        area:'African',
        nation:'Egypt',
        stars:4
    },
    {
        title: 'Ramessum, Egypt',
        des:'Ramessum is the great funerary temple of Ramses II. Located on the West Bank of Luxor, it is Luxor’s one of the most promising sites.',
        newPrice: 905,
        oldPrice: 930,
        img:'travel95.jpg',
        area:'African',
        nation:'Egypt',
        stars:4
    },
    {
        title: 'Luanda, Angola',
        des:'Ramessum is the great funerary temple of Ramses II. Located on the West Bank of Luxor, it is Luxor’s one of the most promising sites.',
        newPrice: 520,
        oldPrice: 670,
        img:'travel96.jpg',
        area:'African',
        nation:'Angola',
        stars:4
    },
    {
        title: 'Djémila Ruins, Algeria',
        des:'Ramessum is the great funerary temple of Ramses II. Located on the West Bank of Luxor, it is Luxor’s one of the most promising sites.',
        newPrice: 540,
        oldPrice: 650,
        img:'travel97.jpg',
        area:'African',
        nation:'Algeria',
        stars:4
    },
    {
        title: 'Virunga National Park, Congo',
        des:'Ramessum is the great funerary temple of Ramses II. Located on the West Bank of Luxor, it is Luxor’s one of the most promising sites.',
        newPrice: 555,
        oldPrice: 650,
        img:'travel98.jpg',
        area:'African',
        nation:'Congo',
        stars:4
    },
    {
        title: 'Accra, Ghana',
        des:'This is the capital of the country and one of the most happening, modern, and the best cities in Ghana. ',
        newPrice: 435,
        oldPrice: 500,
        img:'travel99.jpg',
        area:'African',
        nation:'Ghana',
        stars:4
    },
    {
        title: ' Mole National Park, Ghana',
        des:'This is yet another national park on our list and it falls in the northwest part of Ghana. This is the largest wildlife park in Ghana. ',
        newPrice: 435,
        oldPrice: 500,
        img:'travel100.jpg',
        area:'African',
        nation:'Ghana',
        stars:3
    },
    {
        title: 'St. George’s Castle, Ghana',
        des:'Whenever you are close to an ocean, fishing is one of the main forms of occupation that exist among people.',
        newPrice: 235,
        oldPrice: 270,
        img:'travel101.jpg',
        area:'African',
        nation:'Ghana',
        stars:4
    },
    {
        title: 'Mosi-oa-Tunya Park, Zambia',
        des:'Whenever you are close to an ocean, fishing is one of the main forms of occupation that exist among people.',
        newPrice: 310,
        oldPrice: 345,
        img:'travel102.jpg',
        area:'African',
        nation:'Zambia',
        stars:4
    },
    {
        title: 'Nsumbu National Park, Zambia',
        des:'Ranging from the sandy shores of Lake Tanganyika to the scrub-clad hills of the country’s Northern Province.',
        newPrice: 315,
        oldPrice: 345,
        img:'travel103.jpg',
        area:'African',
        nation:'Zambia',
        stars:5
    },
    {
        title: 'South Luangwa Park, Zambia',
        des:'Ranging from the sandy shores of Lake Tanganyika to the scrub-clad hills of the country’s Northern Province.',
        newPrice: 419,
        oldPrice: 449,
        img:'travel104.jpg',
        area:'African',
        nation:'Zambia',
        stars:4
    },
    {
        title: 'Kafue National Park, Zambia',
        des:'The oldest national park in all of Zambia is a real treat for those in search of a bona fide African safari experience.',
        newPrice: 329,
        oldPrice: 350,
        img:'travel105.jpg',
        area:'African',
        nation:'Zambia',
        stars:4
    },
    {
        title: 'Lower Zambezi Park, Zambia',
        des:'The oldest national park in all of Zambia is a real treat for those in search of a bona fide African safari experience.',
        newPrice: 427,
        oldPrice: 510,
        img:'travel106.jpg',
        area:'African',
        nation:'Zambia',
        stars:5
    },
    {
        title: 'Berat, Albania',
        des:'Berat is in the middle of Albania and it is believed to be one of the country’s oldest towns.',
        newPrice: 405,
        oldPrice: 550,
        img:'travel108.jpg',
        area:'Europan',
        nation:'Albania',
        stars:4
    },
    {
        title: 'Theth, Albania',
        des:'Away from Albania’s biggest cities, in the north of the country, is Theth.',
        newPrice: 460,
        oldPrice: 620,
        img:'travel109.jpg',
        area:'Europan',
        nation:'Albania',
        stars:4
    },
    {
        title: 'Ksamil Islands, Albania',
        des:'The highlight of the Albanian Riviera is perhaps the Ksamil Islands.',
        newPrice: 680,
        oldPrice: 923,
        img:'travel110.jpg',
        area:'Europan',
        nation:'Albania',
        stars:5
    },
    {
        title: 'Lake Koman, Albania',
        des:'If you think you’ve already got a handle on the breathtaking diversity of Albania, wait until you see the beauty of Lake Koman.',
        newPrice: 340,
        oldPrice: 420,
        img:'travel111.jpg',
        area:'Europan',
        nation:'Albania',
        stars:4
    },
    {
        title: 'Mount Djati National Park, Albania',
        des:'One of the best places to visit in Albania is the Dajti National Park.',
        newPrice: 350,
        oldPrice: 455,
        img:'travel112.jpg',
        area:'Europan',
        nation:'Albania',
        stars:4
    },
    {
        title: 'Andorra la Vella, Andorra',
        des:'Andorra la Vella is this small nation\'s busiest tourist attraction.',
        newPrice: 356,
        oldPrice: 430,
        img:'travel113.jpg',
        area:'Europan',
        nation:'Andorra',
        stars:5
    },
    {
        title: 'Sant Joan Church, Andorra',
        des:'A little way north of the picturesque village of Canillo is the chapel of Sant Joan de Caselles.',
        newPrice: 320,
        oldPrice: 430,
        img:'travel114.jpg',
        area:'Europan',
        nation:'Andorra',
        stars:4
    },
    {
        title: 'Zillertal Alps, Austria',
        des:'Snaking along the border of Austria and Italy is the Zillertal Alps.',
        newPrice: 325,
        oldPrice: 423,
        img:'travel115.jpg',
        area:'Europan',
        nation:'Austria',
        stars:4
    },
    {
        title: 'Wachau, Austria',
        des:'Austria’s Wachau Valley is a scenic 18-mile stretch of dramatic cliffs, rolling hills, and picturesque vineyards.',
        newPrice: 465,
        oldPrice: 524,
        img:'travel116.jpg',
        area:'Europan',
        nation:'Austria',
        stars:5
    },
    {
        title: 'Salzkammergut, Austria',
        des:'Stretching from the city of Salzburg to the prominent peaks of the Dachstein Mountains.',
        newPrice: 435,
        oldPrice: 523,
        img:'travel117.jpg',
        area:'Europan',
        nation:'Austria',
        stars:4
    },
    {
        title: 'Vienna, Austria',
        des:'Elegant waltzes and Johann Strauss immediately come to mind when one thinks of Vienna.',
        newPrice: 325,
        oldPrice: 433,
        img:'travel118.jpg',
        area:'Europan',
        nation:'Austria',
        stars:5
    },
    {
        title: 'Dinant, Belgium',
        des:'This city lies along the sparkling Meuse River in the Namur province just 65 km (40 miles) south of the capital city.',
        newPrice: 321,
        oldPrice: 424,
        img:'travel119.jpg',
        area:'Europan',
        nation:'Belgium',
        stars:5
    },
    {
        title: 'Leuven, Belgium',
        des:'Home to the oldest Catholic university in the world, Leuven is home about 100,000 residents with nearly 35,000.',
        newPrice: 343,
        oldPrice: 427,
        img:'travel120.jpg',
        area:'Europan',
        nation:'Belgium',
        stars:3
    },
    {
        title: 'Mechelen, Belgium',
        des:'Mechelen is actually one of the best places to visit in Belgium.',
        newPrice: 346,
        oldPrice: 458,
        img:'travel121.jpg',
        area:'Europan',
        nation:'Belgium',
        stars:5
    },
    {
        title: 'Bruges, Belgium',
        des:'Located in northwestern Belgium, Bruges is one of Europe’s most well-preserved medieval towns.',
        newPrice: 425,
        oldPrice: 524,
        img:'travel122.jpg',
        area:'Europan',
        nation:'Belgium',
        stars:5
    },
    {
        title: 'Eiffel tower, France',
        des:'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.',
        newPrice: 785,
        oldPrice: 893,
        img:'travel123.jpg',
        area:'Europan',
        nation:'France',
        stars:5
    },
    {
        title: 'Lyon, France',
        des:'Located in east-central France, Lyon is the capital of the Rhone department in the Rhone-Alpes region.',
        newPrice: 685,
        oldPrice: 825,
        img:'travel124.jpg',
        area:'Europan',
        nation:'France',
        stars:5
    },
    {
        title: 'Strasbourg, France',
        des:'Strasbourg is the point where France and Germany mesh together in perfect harmony.',
        newPrice: 723,
        oldPrice: 825,
        img:'travel125.jpg',
        area:'Europan',
        nation:'France',
        stars:5
    },
    {
        title: 'Moscow, Russia',
        des:'Russia\'s capital is a magnificent mix of greenery, stunning architecture, and lots of historical reminders of times gone by.',
        newPrice: 865,
        oldPrice: 905,
        img:'travel126.jpg',
        area:'Asian',
        nation:'Russia',
        stars:5
    },
    {
        title: 'St. Peterburg, Russia',
        des:'Although smaller than Moscow, St. Petersburg actually has so much to offer, it\'s often impossible to see it all in one day.',
        newPrice: 865,
        oldPrice: 905,
        img:'travel127.jpg',
        area:'Asian',
        nation:'Russia',
        stars:5
    },
    {
        title: 'Vladivostok, Russia',
        des:'Although smaller than Moscow, St. Petersburg actually has so much to offer, it\'s often impossible to see it all in one day.',
        newPrice: 875,
        oldPrice: 905,
        img:'travel128.jpg',
        area:'Asian',
        nation:'Russia',
        stars:5
    },
    {
        title: 'London, United Kingdom',
        des:'While it\'s possible to plan a trip to the UK without visiting London, it\'s certainly not to be advised.',
        newPrice: 465,
        oldPrice: 555,
        img:'travel129.jpg',
        area:'Europan',
        nation:'United Kingdom',
        stars:5
    },
    {
        title: 'Loch Ness, United Kingdom',
        des:'While it\'s possible to plan a trip to the UK without visiting London, it\'s certainly not to be advised.',
        newPrice: 575,
        oldPrice: 602,
        img:'travel130.jpg',
        area:'Europan',
        nation:'United Kingdom',
        stars:5
    },
    {
        title: 'Bilbao, Spain',
        des:'Bilbao lies on the south of the Bay of Biscay.',
        newPrice: 523,
        oldPrice: 602,
        img:'travel131.jpg',
        area:'Europan',
        nation:'Spain',
        stars:4
    },
    {
        title: 'Segovia, Spain',
        des:'The capital and largest city, Segovia is set in a scenic spot.',
        newPrice: 435,
        oldPrice: 555,
        img:'travel132.jpg',
        area:'Europan',
        nation:'Spain',
        stars:4
    },
    {
        title: 'Valencia, Spain',
        des:'Valencia is located in the eastern part of the country.',
        newPrice: 560,
        oldPrice: 635,
        img:'travel133.jpg',
        area:'Europan',
        nation:'Spain',
        stars:4
    },
    {
        title: 'Madrid, Spain',
        des:'Madrid is widely known for its sizzling nightlife scene.',
        newPrice: 566,
        oldPrice: 640,
        img:'travel134.jpg',
        area:'Europan',
        nation:'Spain',
        stars:5
    },
    {
        title: 'Mallorca, Spain',
        des:'The largest of Spain’s Balearic Islands.',
        newPrice: 604,
        oldPrice: 695,
        img:'travel135.jpg',
        area:'Europan',
        nation:'Spain',
        stars:5
    },
    {
        title: 'Krakow, Poland',
        des:'Krakow was already inhabited back in the 7th century.',
        newPrice: 432,
        oldPrice: 543,
        img:'travel136.jpg',
        area:'Europan',
        nation:'Poland',
        stars:4
    },
    {
        title: 'Warsaw, Poland',
        des:'The capital of Poland was left in ruins after WWII.',
        newPrice: 455,
        oldPrice: 562,
        img:'travel137.jpg',
        area:'Europan',
        nation:'Poland',
        stars:4
    },
    {
        title: 'Tatra Mountains, Poland',
        des:'The Tatra Mountains and National Park form a natural border.',
        newPrice: 423,
        oldPrice: 553,
        img:'travel138.jpg',
        area:'Europan',
        nation:'Poland',
        stars:5
    },
    {
        title: 'Torun, Poland',
        des:'Torun\'s history dates back to the 8th century.',
        newPrice: 324,
        oldPrice: 450,
        img:'travel139.jpg',
        area:'Europan',
        nation:'Poland',
        stars:4
    },
    {
        title: ' Isle of Usedom, Poland',
        des:'"The sun island", Usedom is a popular holiday destination.',
        newPrice: 427,
        oldPrice: 582,
        img:'travel140.jpg',
        area:'Europan',
        nation:'Poland',
        stars:5
    },
    {
        title: ' Bialystok, Poland',
        des:'Białystok will please lovers of both history and architecture.',
        newPrice: 333,
        oldPrice: 410,
        img:'travel141.jpg',
        area:'Europan',
        nation:'Poland',
        stars:4
    },
    {
        title: 'Karpacz, Poland',
        des:'This mountain spa town gets its share of visitors in winter.',
        newPrice: 358,
        oldPrice: 434,
        img:'travel142.jpg',
        area:'Europan',
        nation:'Poland',
        stars:4
    },
    {
        title: 'Gyor, Hungary',
        des:'Gyor is a good town to just wander around in.',
        newPrice: 329,
        oldPrice: 436,
        img:'travel143.jpg',
        area:'Europan',
        nation:'Hungary',
        stars:4
    },
    {
        title: 'Aggtelek National Park, Hungary',
        des:'The park is home to the largest stalactic cave, in Europe.',
        newPrice: 456,
        oldPrice: 583,
        img:'travel144.jpg',
        area:'Europan',
        nation:'Hungary',
        stars:5
    },
    {
        title: 'Lake Balaton, Hungary',
        des:'Europe’s largest freshwater lake is also Hungary’s most popular summer resort.',
        newPrice: 463,
        oldPrice: 586,
        img:'travel145.jpg',
        area:'Europan',
        nation:'Hungary',
        stars:5
    },
    {
        title: 'Budapest, Hungary',
        des:'Budapest, Hungary’s capital and largest city.',
        newPrice: 572,
        oldPrice: 678,
        img:'travel146.jpg',
        area:'Europan',
        nation:'Hungary',
        stars:5
    },
    {
        title: 'Vientiane, Laos',
        des:'Vientiane is the charming capital of Laos.',
        newPrice: 115,
        oldPrice: 235,
        img:'travel147.jpg',
        area:'Asian',
        nation:'Laos',
        stars:4
    },
    {
        title: 'Luang Prabang, Laos',
        des:'Luang Prabang lies on the mighty Mekong and Khan rivers.',
        newPrice: 105,
        oldPrice: 225,
        img:'travel148.jpg',
        area:'Asian',
        nation:'Laos',
        stars:4
    },
    {
        title: 'Vang Vieng, Laos',
        des:'Van Vieng sits between Vientiane and Luang Prabang.',
        newPrice: 95,
        oldPrice: 150,
        img:'travel149.jpg',
        area:'Asian',
        nation:'Laos',
        stars:4
    },
    {
        title: 'Bokeo Nature Reserve, Laos',
        des:'The Bokeo Nature Reserve lies outside the town of Huay Xai.',
        newPrice: 90,
        oldPrice: 140,
        img:'travel150.jpg',
        area:'Asian',
        nation:'Laos',
        stars:3
    },
    {
        title: 'Wat Phu, Laos',
        des:'Wat Phu is also known as Vat Phou and is a gorgeous Khmer temple.',
        newPrice: 102,
        oldPrice: 193,
        img:'travel151.jpg',
        area:'Asian',
        nation:'Laos',
        stars:4
    },
    {
        title: 'Kuala Lumpur, Malaysia',
        des:'Malaysia\'s capital and largest city has much to offer travelers.',
        newPrice: 195,
        oldPrice: 225,
        img:'travel152.jpg',
        area:'Asian',
        nation:'Malaysia',
        stars:5
    },
    {
        title: 'Kuantan, Malaysia',
        des:'Its location right against the South China Sea.',
        newPrice: 135,
        oldPrice: 226,
        img:'travel153.jpg',
        area:'Asian',
        nation:'Malaysia',
        stars:3
    },
    {
        title: 'Perhentian Islands, Malaysia',
        des:'These coral-fringed is a chance to volunteer.',
        newPrice: 175,
        oldPrice: 233,
        img:'travel154.jpg',
        area:'Asian',
        nation:'Malaysia',
        stars:4
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