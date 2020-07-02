@extends('layouts.app')

@section('content')
    <main-container inline-template>
        <div class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses]">
            <vx-tour :steps="steps" v-if="!disableThemeTour && (windowWidth >= 1200 && mainLayoutType === 'vertical' && verticalNavMenuWidth == 'default')" ></vx-tour>
            <the-customizer
                v-if                    = "!disableCustomizer"
                :footer-type            = "footerType"
                :hide-scroll-to-top     = "hideScrollToTop"
                :navbar-type             = "navbarType"
                :navbar-color            = "navbarColor"
                :router-transition       = "routerTransition"
                @toggleHideScrollToTop  = "toggleHideScrollToTop"
                @updateFooter           = "updateFooter"
                @updateNavbar           = "updateNavbar"
                @updateNavbarColor      = "updateNavbarColor"
                @updateRouterTransition = "updateRouterTransition" ></the-customizer>

            <v-nav-menu
                :nav-menu-items = "navMenuItems"
                title         = "Vuexy"
                parent        = ".layout--main" ></v-nav-menu>

            <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
                <div id="content-overlay" ></div>

                <!-- Navbar -->
                <template v-if="mainLayoutType === 'horizontal' && windowWidth >= 1200">
                    <the-navbar-horizontal
                                :navbarType= "navbarType"
                                :class="[
                      {'text-white' : isNavbarDark  && !isThemeDark},
                      {'text-base'  : !isNavbarDark && isThemeDark}
                    ]" ></the-navbar-horizontal>

                    <div style="height: 62px" v-if="navbarType === 'static'"></div>

                    <h-nav-menu
                        :class="[
                          {'text-white' : isNavbarDark  && !isThemeDark},
                          {'text-base'  : !isNavbarDark && isThemeDark}
                        ]"
                        :navMenuItems="navMenuItems" ></h-nav-menu>
                </template>

                <template v-else>
                    <the-navbar-vertical
                        :navbarColor="navbarColor"
                        :class="[
                          {'text-white' : isNavbarDark  && !isThemeDark},
                          {'text-base'  : !isNavbarDark && isThemeDark}
                        ]" ></the-navbar-vertical>
                </template>
                <!-- /Navbar -->

                <div class="content-wrapper">
                    <div class="router-view">
                        <div class="router-content">
                            <div class="content-area__content">
                                <back-to-top bottom="5%" :right="$vs.rtl ? 'calc(100% - 2.2rem - 38px)' : '30px'" visibleoffset="500" v-if="!getThemeConfig.hideScrollToTop">
                                    <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" ></vs-button>
                                </back-to-top>
                            </div>
                        </div>
                    </div>
                </div>
                <the-footer></the-footer>
            </div>
        </div>
    </main-container>
@endsection
