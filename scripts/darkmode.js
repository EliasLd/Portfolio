const btn = document.querySelector('.btn-toggle')

btn.addEventListener('click', () => {
    const body = document.body

    if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        btn.classList.add('dark-btn')
        btn.classList.remove('light-btn')
    }
    else if(body.classList.contains('light')){
        body.classList.add('dark')
        body.classList.remove('light')
        btn.classList.add('light-btn')
        btn.classList.remove('dark-btn')
    }
})