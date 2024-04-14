const searchBar = document.querySelector('.searchBar')
const searchButton = document.querySelector('.searchButton')

searchButton.addEventListener('click', search)

function search() {
    let pesquisa = searchBar.value
    
    if (pesquisa == 'I love you') {
    console.log('I love you too!')
}
else {
    console.log('Why do you hate me?')
}
}

