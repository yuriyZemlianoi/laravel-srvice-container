import {mapGetters, mapActions, mapMutations} from 'vuex'
import BackToTop from 'vue-backtotop'
import HNavMenu from '../layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue'
import navMenuItems from '../layouts/components/vertical-nav-menu/navMenuItems.js'
import TheCustomizer from '../layouts/components/customizer/TheCustomizer.vue'
import TheNavbarHorizontal from '../layouts/components/navbar/TheNavbarHorizontal.vue'
import TheNavbarVertical   from '../layouts/components/navbar/TheNavbarVertical.vue'
import TheFooter from '../layouts/components/TheFooter.vue'
import VNavMenu from '../layouts/components/vertical-nav-menu/VerticalNavMenu.vue'

const VxTour = () => import('../layouts/components/VxTour.vue')

export default {
    name: "main-container",
    components: {
        BackToTop,
        HNavMenu,
        TheCustomizer,
        TheFooter,
        TheNavbarHorizontal,
        TheNavbarVertical,
        VNavMenu,
        VxTour
    },
    data() {
        return {
            disableCustomizer : this.$store.state.themeConfig.disableCustomizer,
            disableThemeTour  : this.$store.state.themeConfig.disableThemeTour,
            dynamicWatchers   : {},
            footerType        : this.$store.state.themeConfig.footerType  || 'static',
            hideScrollToTop   : this.$store.state.themeConfig.hideScrollToTop,
            isNavbarDark      : false,
            navbarColor       : this.$store.state.themeConfig.navbarColor || '#fff',
            navbarType        : this.$store.state.themeConfig.navbarType  || 'floating',
            navMenuItems,
            routerTransition  : this.$store.state.themeConfig.routerTransition || 'none',
            //routeTitle        : this.$route.meta.pageTitle,
            steps: [
                {
                    target  : '#btnVNavMenuMinToggler',
                    content : 'Toggle Collapse Sidebar.'
                },
                {
                    target  : '.vx-navbar__starred-pages',
                    content : 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
                },
                {
                    target  : '.i18n-locale',
                    content : 'You can change language from here.'
                },
                {
                    target  : '.navbar-fuzzy-search',
                    content : 'Try fuzzy search to visit pages in flash.'
                },
                {
                    target  : '.customizer-btn',
                    content : 'Customize template based on your preference',
                    params  : {
                        placement: 'left'
                    }
                },
                {
                    target  : '.vs-button.buy-now',
                    content : 'Buy this awesomeness at affordable price!',
                    params  : {
                        placement: 'top'
                    }
                }
            ]
        }
    },
    watch:{},
    computed: mapGetters([
        'getThemeConfig', 'bodyOverlay', 'contentAreaClass', 'footerClasses', 'isThemeDark',
        'layoutTypeClass', 'mainLayoutType', 'navbarClasses', 'verticalNavMenuWidth', 'windowWidth'
    ]),
    methods: {
        ...mapMutations(['TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', ]),
        ...mapActions(['updateVerticalNavMenuWidth']),
        updateNavbar (val) {
            if (val === 'static') this.updateNavbarColor(this.isThemeDark ? '#10163a' : '#fff')
            this.navbarType = val
        },
        updateNavbarColor (val) {
            this.navbarColor = val
            if (val === '#fff') this.isNavbarDark = false
            else this.isNavbarDark = true
        },
        updateFooter (val) {
            this.footerType = val
        },
        updateRouterTransition (val) {
            this.routerTransition = val
        },
        setNavMenuVisibility (layoutType) {
            if ((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === 'vertical' && this.windowWidth < 1200)) {
                this.TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(false)
                this.updateVerticalNavMenuWidth('no-nav-menu')
            } else {
                this.TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(true)
            }
        },
        toggleHideScrollToTop (val) {
            this.hideScrollToTop = val
        }
    },
    created: function () {
        const color = this.navbarColor === '#fff' && this.isThemeDark ? '#10163a' : this.navbarColor
        this.updateNavbarColor(color)
        this.setNavMenuVisibility(this.mainLayoutType)

        // Dynamic Watchers for tour
        // Reason: Once tour is disabled it is not required to enable it.
        // So, watcher is required for just disabling it.
        this.dynamicWatchers.windowWidth = this.$watch('$store.state.windowWidth', (val) => {
            if (val < 1200) {
                this.disableThemeTour = true
                this.dynamicWatchers.windowWidth()
            }
        })

        this.dynamicWatchers.verticalNavMenuWidth = this.$watch('$store.state.verticalNavMenuWidth', () => {
            this.disableThemeTour = true
            this.dynamicWatchers.verticalNavMenuWidth()
        })

        this.dynamicWatchers.rtl = this.$watch('$vs.rtl', () => {
            this.disableThemeTour = true
            this.dynamicWatchers.rtl()
        })
    },
    beforeDestroy() {
        Object.keys(this.dynamicWatchers).map(i => {
            this.dynamicWatchers[i]()
            delete this.dynamicWatchers[i]
        })
    }
}
