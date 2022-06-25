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
      timerID = setTimeout(scroll, 20)
    } else {
      window.scrollTo(0, 0)
      clearTimeout(timerID)
    }
  }

  scroll(timerID)
}

export const scrollToSection = (sectionName) => {
  const $header = document.querySelector('[data-name="header"]')
  const $section = document.querySelector(`[data-name="${sectionName}"]`)

  const headerHeight = $header.getBoundingClientRect().height
  const sectionTopPosition = $section.getBoundingClientRect().top
  const clientTopPosition = window.pageYOffset
  const targetTopPosition = clientTopPosition + sectionTopPosition - headerHeight

  let currentTopPosition = clientTopPosition
  let timerID

  const scrollToBottom = () => {
    if (currentTopPosition < targetTopPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition += 50
      timerID = setTimeout(scrollToBottom, 10)
    } else {
      window.scrollTo(0, targetTopPosition)
      clearTimeout(timerID)
    }
  }

  const scrollToTop = () => {
    if (currentTopPosition > targetTopPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 50
      timerID = setTimeout(scrollToTop, 10)
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