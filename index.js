const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
const boxArr = Array.from(checkboxes)
let lastChecked
let onOff = false

checkboxes.forEach(box => box.addEventListener('click', handleCheck))

function handleCheck (e) {
  // 抓取要被shift的元素(將參考其是否被check)
  if (!lastChecked) lastChecked = e.target
  onOff = lastChecked.checked ? true : false

  if (e.shiftKey) {
    let start = boxArr.indexOf(this)
    let end = boxArr.indexOf(lastChecked)
    boxArr.slice(Math.min(start, end), Math.max(start, end) + 1)
      .forEach(input => input.checked = onOff)
  }

  lastChecked = e.target
}