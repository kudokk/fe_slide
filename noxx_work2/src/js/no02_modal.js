// jQueryを使いたい場合は以下のコメントを解除してください。
// import $ from 'jquery'

const target = document.getElementById('js-btn')

const html = `
<div class="modal_cover">
  <div class="modal_body">content</div>
</div>
`

const modalContainer = document.createElement('div')

modalContainer.classList.add('modalContainer')

// アニメーションのためにモーダルのDOMは事前に出力しておく.
modalContainer.innerHTML = html

document.body.appendChild(modalContainer)

const modalCover = document.querySelector('.modal_cover')

target.addEventListener('click', () => {
  modalCover.classList.toggle('-isShow')
})

modalCover.addEventListener('click', ev => {
  if (ev.target.classList.contains('-isShow')) {
    modalCover.classList.toggle('-isShow')
  }
})
