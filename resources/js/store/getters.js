// added so later we can keep breakpoint in sync automatically using this config file
// import tailwindConfig from "../../tailwind.config.js"
const getters = {
    getThemeConfig: state => {
        return state.themeConfig
    },
    layoutTypeClass: state => { return `main-${state.mainLayoutType}` },
    navbarClasses: state =>   {
        return {
            'navbar-hidden'   : state.navbarType === 'hidden',
            'navbar-sticky'   : state.navbarType === 'sticky',
            'navbar-static'   : state.navbarType === 'static',
            'navbar-floating' : state.navbarType === 'floating'
        }
    },
    footerClasses: state => {
        return {
            'footer-hidden': state.footerType === 'hidden',
            'footer-sticky': state.footerType === 'sticky',
            'footer-static': state.footerType === 'static'
        }
    },
    contentAreaClass: state => {
        if (state.mainLayoutType === 'vertical') {
            if (state.verticalNavMenuWidth === 'default') return 'content-area-reduced'
            else if (state.verticalNavMenuWidth === 'reduced') return 'content-area-lg'
            else return 'content-area-full'
        } else return 'content-area-full'
    },
    bodyOverlay: state => { return state.bodyOverlay },
    isThemeDark: state => { return state.theme === 'dark' },
    mainLayoutType: state => { return state.mainLayoutType },
    verticalNavMenuWidth: state => { return state.verticalNavMenuWidth },
    windowWidth: state => { return state.windowWidth },

    // COMPONENT
    // vx-autosuggest
    // starredPages: state => state.navbarSearchAndPinList.data.filter((page) => page.highlightAction),
    windowBreakPoint: state => {
        // This should be same as tailwind. So, it stays in sync with tailwind utility classes
        if (state.windowWidth >= 1200) return 'xl'
        else if (state.windowWidth >= 992) return 'lg'
        else if (state.windowWidth >= 768) return 'md'
        else if (state.windowWidth >= 576) return 'sm'
        else return 'xs'
    },
    scrollbarTag: state => {
        return state.is_touch_device ? 'div' : 'VuePerfectScrollbar'
    }
}
export default getters
