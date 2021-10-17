
const surpriseButton = document.getElementById('surprise-button')


function modifySurpiseImage(){
    const surpriseImage = document.getElementById('surprise-image')
    surpriseImage.innerHTML = '<img src ="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png">'
}

surpriseButton.addEventListener('click', modifySurpiseImage)