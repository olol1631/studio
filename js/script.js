$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
    });

    $('.scrollup').click(function(e){
        $('html, body').animate({
          scrollTop: 0
        }, 2000)
        e.preventDefault()
      })
      $(window).scroll(function(){
        if($(this).scrollTop()>200){
          $('.scrollup').fadeIn()
        }else{
          $('.scrollup').fadeOut()
        }
      })

      let menuLinks = document.querySelectorAll('.menu__list a')
      //console.log(menuLinks)
      if(menuLinks.length>0){
          menuLinks.forEach(menuLink=>{
              menuLink.addEventListener('click', clickOnLink)
          })

          function clickOnLink(e){
              let menu = e.target
              console.log(menu)
              let attr = menu.dataset.blok
              console.log(attr)
              if(attr&&document.querySelector(attr)){
                  let toBlok = document.querySelector(attr)
                  let toBlokValue = toBlok.getBoundingClientRect().top - 50
                  console.log(toBlokValue)
                  console.log(pageYOffset)


                  window.scrollTo({
                      top: toBlokValue,
                      behavior: 'smooth'
                    
                  })
                  e.preventDefault()
              }
          }
      }

    $('.btn').click(function(e){
        let toForm = document.querySelector('.contacts')
        let toFormValue = toForm.getBoundingClientRect().top - 50
        window.scrollTo({
            top: toFormValue,
            behavior: 'smooth'
        })
        e.preventDefault()
    })

  });
      