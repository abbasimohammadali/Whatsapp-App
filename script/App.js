const user = document.querySelectorAll('.user');
const page_start = document.querySelector('.page-start');
const content_user = document.querySelector('.content-user');
const image_chat = document.querySelector('.profile-pic img');
const name_user_chat = document.querySelector('.Information-user h2');
const cheng_messageInput = document.querySelector('#messageInput');
const box_Seting = document.querySelector('.rigth-box');
const user_Content = document.querySelector('.aside-box');
const chat_Box = document.querySelector('.col-8');
const btn_Back = document.querySelector('.btn-back');

user.forEach(function (event) {
    event.addEventListener('click', function (e) {

        const userImage = event.querySelector('.profile-user img').src;
        image_chat.setAttribute('src', userImage);

        const userName = event.querySelector('.details-user h2').textContent
        name_user_chat.innerHTML = userName;

        page_start.style.display = 'none'
        content_user.style.display = 'block'

        if (window.innerWidth < 1300) {
            box_Seting.style.display = 'none'
            user_Content.style.display = 'none'
            chat_Box.style.display = 'block'

            btn_Back.addEventListener('click' , function() {
                box_Seting.style.display = 'flex'
                user_Content.style.display = 'block'
                chat_Box.style.display = 'none'
            })
        }
    })
})

cheng_messageInput.addEventListener('input', function () {
    document.querySelector('.send-sound').style.display = 'none'
    document.querySelector('.send').style.display = 'block'
    if (cheng_messageInput.value === '') {
        document.querySelector('.send-sound').style.display = 'block'
        document.querySelector('.send').style.display = 'none'
    }
})

document.querySelector('#messageInput').addEventListener('keydown' , (function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        document.querySelector('.send-sound').style.display = 'block'
        document.querySelector('.send').style.display = 'none'
    }
}));