export const showProgress = (progresRef) => {
  const progress = progresRef.current
  const clientRect = document.body.getBoundingClientRect()
  const clientPassed = Math.abs(clientRect.top)
  const clientHeight = document.body.clientHeight
  const screenHeight = window.screen.height
  const clientNotPassed = clientHeight - screenHeight
  const percent = Math.floor(clientPassed / clientNotPassed * 100)
  progress.style.width = `${percent}%`
}

export const scrollToTop = () => {
  const clientTopPosition = window.pageYOffset
  let currentTopPosition = clientTopPosition
  let timerID

  const scroll = () => {
    if (currentTopPosition > 0) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 100
      timerID = setTimeout(scroll, 40)
    } else {
      window.scrollTo(0, 0)
      clearTimeout(timerID)
    }
  }

  scroll(timerID)
}

export const scrollToSection = (sectionTargetHash) => {

  const $header = document.querySelector('#header')
  const $section = document.querySelector(`${sectionTargetHash}`)

  const headerHeight = $header.getBoundingClientRect().height
  const sectionTopPosition = $section.getBoundingClientRect().top
  const clientTopPosition = window.pageYOffset
  const targetTopPosition = clientTopPosition + sectionTopPosition - headerHeight

  let currentTopPosition = clientTopPosition
  let timerID

  const scrollToBottom = () => {
    if (currentTopPosition < targetTopPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition += 100
      timerID = setTimeout(scrollToBottom, 40)
    } else {
      window.scrollTo(0, targetTopPosition)
      clearTimeout(timerID)
    }
  }

  const scrollToTop = () => {
    if (currentTopPosition > targetTopPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 100
      timerID = setTimeout(scrollToTop, 40)
    } else {
      window.scrollTo(0, targetTopPosition)
      clearTimeout(timerID)
    }
  }

  if (clientTopPosition < targetTopPosition) {
    scrollToBottom()
  }

  if (clientTopPosition > targetTopPosition) {
    scrollToTop()
  }
}

export const showAnimateRef = (ref) => {

  const element = ref.current
  const screenHeight = window.screen.height
  const elementTopPosition = element.getBoundingClientRect().top

  if ((screenHeight - 20) >= elementTopPosition) {
    element.classList.remove('off')
    element.classList.add('on')
  } else {
    element.classList.remove('on')
    element.classList.add('off')
  }
}

export const showAnimateDescription = (descriptionRef, descriptionText, delay) => {

  descriptionRef.current.classList.add('cursor-blink')

  let index = 0
  let string = ''
  let timerID

  const addSymbolToSting = () => {
    if (!descriptionRef.current) return

    descriptionRef.current.classList.remove('cursor-blink')
    descriptionRef.current.classList.add('cursor')

    if (string.length < descriptionText.length) {
      string += descriptionText[index]
      index += 1
      descriptionRef.current.textContent = string
      timerID = setTimeout(addSymbolToSting, 150)
    } else {
      descriptionRef.current.classList.remove('cursor')
      descriptionRef.current.classList.add('cursor-blink')
      clearTimeout(timerID)
    }
  }

  setTimeout(() => addSymbolToSting(), delay ?? 0)
}

export const validateName = (name) => {
  if (!name.length) return false

  const regexp = /[^a-zа-я]+/gi

  return name.length >= 3 && name.search(regexp) === -1
}

export const validateTel = (tel) => {
  if (!tel.length) return false

  const regexp = /[^0-9]+/gi

  return tel.length >= 10 && tel.search(regexp) === -1
}

export const validateEmail = (email) => {
  if (!email.length) return false

  const regexp = /[a-z.0-9-_]+@[a-z]{4,6}\.(ru|com)/gi

  return email.length >= 11 && email.search(regexp) !== -1
}