const achors = document.querySelectorAll('a[href^="#"')
const faqQuestions = document.querySelectorAll('.faq .container section aside')
const faqAnswrsBlock = document.querySelectorAll('.faq .container section aside nav')
const faqAnswers = document.querySelectorAll('.faq .container section aside nav p')
const openAndCloseQ = document.querySelectorAll('.faq .container section aside div img')
const servicesMoreInfo = document.querySelectorAll('.services .container section article')
const moreInfoBlock = document.querySelectorAll('.services .container section article  .more')
const moreInfo = document.querySelectorAll('.services .container section article  .more p')
const infoArrows = document.querySelectorAll('.services .container section article div nav img')
const mask = document.querySelector('.mask')
const formName = document.querySelector('.name')
const telForm = document.querySelector('.tel')
const sendForm = document.querySelector('.send_form')

const modalWindow = document.querySelector('.modal_window')
const modalWindowSection = document.querySelector('.modal_window_section')
const getConsultationBtn = document.querySelector('.get_consultation_btn')
const closeSvg = document.querySelector('.close_svg')

getConsultationBtn.onclick=()=>{
    modalWindow.classList.add('open')
}

closeSvg.addEventListener('click',()=>{
    modalWindow.classList.remove('open')
})

window.addEventListener('keydown', (e)=>{
    if(e.key == 'Escape'){
        modalWindow.classList.remove('open')
    }
})

modalWindowSection.addEventListener('click', event => {
    event._isClickWithInModal = true;
});


modalWindow.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


for(let i = 0; i<achors.length; i++){
    achors[i].addEventListener('click',(e)=>{
        e.preventDefault()
        let blockId = achors[i].getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


for(let i = 0; i<faqQuestions.length; i++){
    faqQuestions[i].addEventListener('click',()=>{
        let allStyles = getComputedStyle(faqAnswers[i])
        let textHeight = allStyles.height

        faqAnswrsBlock[i].style.height = textHeight
        faqAnswrsBlock[i].style.overflow = 'auto'
        openAndCloseQ[i].classList.add('question-opened')


        for(let j = 0; j<faqQuestions.length; j++){
            faqQuestions[j].addEventListener('click',()=>{
                if(faqAnswrsBlock[i].style.overflow == 'auto'){
                    faqAnswrsBlock[i].style.height = 0
                    faqAnswrsBlock[i].style.overflow = 'hidden'
                    openAndCloseQ[i].classList.remove('question-opened')
                }

                else{
                    faqAnswrsBlock[i].style.height = textHeight
                    faqAnswrsBlock[i].style.overflow = 'auto'
                    openAndCloseQ[i].classList.add('question-opened')
                }
            })
        }
    })
    

}


for(let i = 0; i<servicesMoreInfo.length; i++){
    servicesMoreInfo[i].addEventListener('click',()=>{
        let allStyles = getComputedStyle(moreInfo[i])
        let textHeight = allStyles.height

        moreInfoBlock[i].style.height = textHeight
        moreInfoBlock[i].style.overflow = 'auto'
        infoArrows[i].classList.add('info-arrow-active')


        for(let j = 0; j<servicesMoreInfo.length; j++){
            servicesMoreInfo[j].addEventListener('click',()=>{
                if(moreInfoBlock[i].style.overflow == 'auto' ){
                    moreInfoBlock[i].style.height = 0
                    moreInfoBlock[i].style.overflow = 'hidden'
                    infoArrows[i].classList.remove('info-arrow-active')

                    console.log(12)
                }

                else{
                    moreInfoBlock[i].style.height = textHeight
                    moreInfoBlock[i].style.overflow = 'auto'
                    infoArrows[i].classList.add('info-arrow-active')
                }
            })
        }
    })
}

window.addEventListener('load',()=>{
    mask.classList.add('hide')
    setTimeout(()=>{
        mask.remove()
    },600)
})


sendForm.addEventListener('click',(e)=>{
    e.preventDefault()
    let nameValue = formName.value
    let telValue = telForm.value

    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

    if(!regex.test(telValue)){
        console.log('false')
    }

    else{
        console.log('true')
    }

})