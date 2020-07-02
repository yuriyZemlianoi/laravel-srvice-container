
// MAIN COLORS - VUESAX THEME COLORS
export const colors = {
    primary : '#7367F0',
    success : '#28C76F',
    danger  : '#EA5455',
    warning : '#FF9F43',
    dark    : '#1E1E1E'
}

// CONFIGS
const themeConfig = {
    disableCustomizer : false,       // options[Boolean] : true, false(default)
    disableThemeTour  : true,        // options[Boolean] : true, false(default)
    footerType        : 'static',    // options[String]  : static(default) / sticky / hidden
    hideScrollToTop   : false,       // options[Boolean] : true, false(default)
    mainLayoutType    : 'vertical',  // options[String]  : vertical(default) / horizontal
    navbarColor       : '#fff',      // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
    navbarType        : 'floating',  // options[String]  : floating(default) / static / sticky / hidden
    routerTransition  : 'zoom-fade', // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
    rtl               : false,       // options[Boolean] : true, false(default)
    sidebarCollapsed  : false,       // options[Boolean] : true, false(default)
    theme             : 'light',     // options[String]  : "light"(default), "dark", "semi-dark"

    // Not required yet - WIP
    userInfoLocalStorageKey: 'userInfo'

    // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.
}

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
    const mq = function (query) {
        return window.matchMedia(query).matches
    }

    if ('ontouchstart' in window || window.DocumentTouch) {
        return true
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
    return mq(query)
}


// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////
const state = {
    AppActiveUser           : {},
    bodyOverlay             : false,
    isVerticalNavMenuActive : true,
    is_touch_device         : is_touch_device(),
    mainLayoutType          : themeConfig.mainLayoutType || 'vertical',
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : 'default',
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,
    theme                   : themeConfig.theme || 'light',
    themePrimaryColor       : colors.primary,
    themeConfig             : themeConfig,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null
}

export default state
