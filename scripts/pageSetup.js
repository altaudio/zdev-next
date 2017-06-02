import $ from 'jquery'
import smoothScroll from 'smooth-scroll'

const document = false

console.log('Running')

const dropDownToggleSetup = () => {
  $(document).ready(() => {
    $('#nav-bar').find('li').click(() => {
      $('#nav-bar').removeClass('in')
    })
  })
}

smoothScroll.init({
  offset: 90,
  speed: 200
})

dropDownToggleSetup()
