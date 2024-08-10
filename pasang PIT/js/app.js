const getElemet = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElemet('.nav-links')
const navBtnDOM = getElemet('.nav-btn')

navBtnDOM.addEventListener('click',()=>{
  links.classList.toggle('show-links')
})

