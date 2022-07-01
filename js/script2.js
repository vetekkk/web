
document.addEventListener("DOMContentLoaded",function () {
    const getRelativePos = (parent, child) => {
        return {
          left: child.left - parent.left,
          top: child.top - parent.top,
          right: parent.right - child.right
        }
      }
      
      const menu = document.querySelector('.menu')
      const items = document.querySelector('.menu__items')
      const snake = document.querySelector('.menu__tab-snake')
      const activeElement = document.querySelector('.menu__link--active')
      const menuLinks = items.querySelectorAll('.menu__link')
      
      const activeBR = activeElement.getBoundingClientRect()
      const itemsBR = items.getBoundingClientRect()
      let isHovering = false;
      
      snake.style.left = activeBR.left + 'px'
      snake.style.width = activeBR.right - activeBR.left + 'px'
      
      menuLinks.forEach(menuLink => menuLink.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('menu__link--active')) return
      
        isHovering = true;
      
        const snakeBR = snake.getBoundingClientRect()
        const targetBR = e.target.getBoundingClientRect()
      
        // If target is left from active
      
        if (targetBR.left < snakeBR.left) {
          snake.style.left = getRelativePos(itemsBR, targetBR).left + 'px'
          snake.style.width = activeBR.right - targetBR.left + 'px'
        }
        // If target is right from active
        else {
          snake.style.width = targetBR.right - activeBR.left + 'px'
        }
      }))
      
      menuLinks.forEach(menuLink => menuLink.addEventListener('mouseleave', (e) => {
        isHovering = false
        setTimeout(() => {
          if (!isHovering) {
            snake.style.left = activeBR.left + 'px'
            snake.style.width = activeBR.right - activeBR.left + 'px'
          }
        }, 150)
      }))

})

