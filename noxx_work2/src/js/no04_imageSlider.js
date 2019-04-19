// jQueryを使いたい場合は以下のコメントを解除してください。
// import $ from 'jquery'

const wrapper = document.querySelector('.wrapper')
const imageSliderBody = document.querySelector('.image-slider__body')
const imageSliderItems = document.querySelectorAll('.image-slider__item')
const prevBtn = document.querySelector('.btn.-prev')
const nextBtn = document.querySelector('.btn.-next')

const SLIDER_ITEM_WIDTH = 400
const SLIDER_ALL_ITEM_WIDTH = SLIDER_ITEM_WIDTH * imageSliderItems.length

let current = 0

const isRightEnd = argCurrent =>
  SLIDER_ALL_ITEM_WIDTH - SLIDER_ITEM_WIDTH === -1 * argCurrent
const isLeftEnd = argCurrent => -1 * argCurrent === 0
const isEnd = (argCurrent, direction) =>
  (direction === 'next' && isRightEnd(argCurrent)) ||
  (direction === 'prev' && isLeftEnd(argCurrent))
const moveImage = (argCurrent, direction) => {
  imageSliderBody.style.left = `${argCurrent +
    (direction === 'next' ? -1 * SLIDER_ITEM_WIDTH : SLIDER_ITEM_WIDTH)}px`
}
const updateIndicator = (argCurrent, argIndicators, direction) => {
  const indicatorPosition = (-1 * argCurrent) / SLIDER_ITEM_WIDTH
  argIndicators[
    indicatorPosition - (direction === 'next' ? 1 : -1)
  ].classList.toggle('-active')
  argIndicators[indicatorPosition].classList.toggle('-active')
}

const updateCurrentPosition = elm => {
  current = parseInt(elm.style.left.replace('px', ''), 10)
}

const indicator = document.createElement('div')

imageSliderItems.forEach(() => {
  indicator.appendChild(document.createElement('span'))
})

const indicators = indicator.querySelectorAll('span')

indicator.classList.add('indicatorWrapper')
wrapper.appendChild(indicator)
imageSliderBody.style.left = '0px'
indicators[0].classList.add('-active')

prevBtn.addEventListener('click', () => {
  if (!isEnd(current, 'prev')) {
    moveImage(current, 'prev')
    updateCurrentPosition(imageSliderBody)
    updateIndicator(current, indicators, 'prev')
  }
})

nextBtn.addEventListener('click', () => {
  if (!isEnd(current, 'next')) {
    moveImage(current, 'next')
    updateCurrentPosition(imageSliderBody)
    updateIndicator(current, indicators, 'next')
  }
})
