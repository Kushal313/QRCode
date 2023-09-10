const wrapper = document.querySelector('.wrapper'),
Input=wrapper.querySelector('.form input'),
qrImage=wrapper.querySelector('.qr-code img'),
generatebtn=wrapper.querySelector('.form button');

generatebtn.addEventListener('click',()=>{
let qrValue=Input.value;
if (!qrValue)return;
generatebtn.innerText='Generating QR Code...'

qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
qrImage.addEventListener('load',()=>{
    wrapper.classList.add("active");
    generatebtn.innerText="Generate QR Code";
})

});

Input.addEventListener('keyup',()=>{
    if(!Input.value)
    wrapper.classList.remove("active")
})