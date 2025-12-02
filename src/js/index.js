import '../scss/style.scss'

import callBack from './ui/call-back'
import initBrandCards, { initDeviceCards, initServiceCards } from './slider/main'
import { initServiceSwiper } from './slider/swiper'

initBrandCards()
initDeviceCards()
initServiceCards()

callBack()

