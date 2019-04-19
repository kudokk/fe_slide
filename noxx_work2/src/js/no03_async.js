// jQueryを使いたい場合は以下のコメントを解除してください。
// import $ from 'jquery'

const target = document.getElementById('no03')

const escapeHtml = str => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const createTh = obj => {
  const tr = document.createElement('tr')
  Object.keys(obj).forEach(item => {
    const th = document.createElement('th')
    th.innerHTML = escapeHtml(item)
    tr.appendChild(th)
  })
  return tr
}

const init = async () => {
  const data = await fetch('http://localhost:3100/member/').then(res =>
    res.json()
  )
  const table = document.createElement('table')
  const thTags = createTh(data[0])

  table.appendChild(thTags)

  data.forEach(obj => {
    const tr = document.createElement('tr')
    Object.keys(obj).forEach(item => {
      const td = document.createElement('td')
      td.innerHTML = escapeHtml(String(obj[item]))
      tr.appendChild(td)
    })
    table.appendChild(tr)
  })

  target.appendChild(table)
}

init()
