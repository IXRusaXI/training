import '../scss/style.scss'

import { initMenu, initPriceSwiper, initDevicesSwiper, initBrandsSwiper } from './slider/swiper'
import { collectHiddenBrands, collectHiddenDeviceType } from './slider/service'
import { initReadMoreDescriptionButton, initShowAllBrandButton, initShowAllDeviceTypeButton } from './drop-down/init'
import {initMenuButton, initCloseMenu} from './side-menu/init'
import { initFeedBackModal, initOrderCallModal } from './side-modal/init'

initPriceSwiper()
initMenu()
initDevicesSwiper()
initBrandsSwiper()
collectHiddenBrands()
collectHiddenDeviceType()
initReadMoreDescriptionButton()
initShowAllBrandButton()
initShowAllDeviceTypeButton()
initMenuButton()
initCloseMenu()
initFeedBackModal()
initOrderCallModal()
