// jQueryを使いたい場合は以下のコメントを解除してください。
import $ from 'jquery'

// ES201x
const btn = document.querySelector('.-trigger')
const accordionItems = document.querySelectorAll('.accordion__item')

btn.addEventListener('click', () => {
  accordionItems.forEach(accordionItem => {
    accordionItem.classList.toggle('-is-open')
  })
})

// jQ
const $accordionItem = $('.jq-accordion__item')
const $trigger = $('.jq-box')

$accordionItem.hide()
$trigger.on('click', () => {
  $accordionItem.slideToggle()
})
