
var menuLinks = [{ text: 'about', href: '/about' },
{
    text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
    ]
},
{
    text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
    ]
},
{
    text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
    ]
}];

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg'

const head1 = document.createElement('h1')
head1.textContent = 'SEI Rocks!'
mainEl.appendChild(head1)


mainEl.setAttribute('class', 'flex-ctr')

const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.className = 'flex-around'

for (let i = 0; i < menuLinks.length; i++) {
   
    const element_a = document.createElement('a')

    element_a.setAttribute('href', menuLinks[i].href)

     element_a.textContent = menuLinks[i].text

    topMenuEl.appendChild(element_a)
}

const subMenuEl = document.querySelector('#sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.className = 'flex-around'

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

const topMenuLinks = document.querySelectorAll('a')

showingSubMenu = false;

topMenuEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches('a')) return;
    for (let i of topMenuLinks) {
        i.classList.remove('active')
    }
    showingSubMenu = false;
    subMenuEl.style.top = '0'
    e.target.className = 'active'
})

console.log()