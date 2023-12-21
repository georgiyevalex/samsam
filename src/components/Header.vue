<template>

    <div id="kt_app_header" class="app-header " data-kt-sticky="true"
         data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize"
         data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false" style="">


        <div class="app-container  container-xxl d-flex align-items-stretch justify-content-between "
             id="kt_app_header_container">


            <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
                <a href="/">
                    <img alt="Logo" src="/src/assets/images/logo.svg" class="h-20px h-lg-30px app-sidebar-logo-default">
                </a>
            </div>


            <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">


                <div class="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true"
                     data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}"
                     data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="end"
                     data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true"
                     data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
                     data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">

                    <div class="
            menu
            menu-rounded
            menu-column
            menu-lg-row
            my-5
            my-lg-0
            align-items-stretch
            fw-semibold
            px-2 px-lg-0
        " id="kt_app_header_menu" data-kt-menu="true">

                        <router-link to="/"
                                     v-slot="{ href, route, navigate, isActive }"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                     data-kt-menu-placement="bottom-start"
                                     class="menu-item menu-lg-down-accordion me-0 me-lg-2"><span
                                class="menu-link">
                            <span  class="menu-title">
                                Мои сайты
                            </span>
                            <span
                                    class="menu-arrow d-lg-none"></span></span>
                        </router-link>
                        <router-link to="/tariffs"
                                     v-slot="{ href, route, navigate, isActive }"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                             data-kt-menu-placement="bottom-start"
                             class="menu-item menu-lg-down-accordion me-0 me-lg-2"><span
                                class="menu-link">
                            <span  class="menu-title">
                                Тарифы и оплата
                            </span>
                            <span
                                class="menu-arrow d-lg-none"></span></span>
                        </router-link>

                        <router-link to="/profile/1"
                                     v-slot="{ href, route, navigate, isActive }"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                     data-kt-menu-placement="bottom-start"
                                     class="menu-item menu-lg-down-accordion me-0 me-lg-2"><span
                                class="menu-link">
                            <span  class="menu-title">
                                Мой профиль
                            </span>
                            <span
                                    class="menu-arrow d-lg-none"></span></span>
                        </router-link>

                        <router-link to="/order"
                                     v-slot="{ href, route, navigate, isActive }"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                     data-kt-menu-placement="bottom-start"
                                     class="menu-item menu-lg-down-accordion me-0 me-lg-2"><span
                                class="menu-link">
                            <span  class="menu-title">
                                Заказать разработку
                            </span>
                            <span
                                    class="menu-arrow d-lg-none"></span></span>
                        </router-link>
                    </div>

                </div>


                <div class="app-navbar flex-shrink-0">


                    <div class="app-navbar-item ms-1 ms-md-4">

                        <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative"
                             data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                             data-kt-menu-placement="bottom-end" id="kt_menu_item_wow">
                            <i class="ki-duotone ki-notification-status fs-2">
                                <svg class="icon">
                                    <use xlink:href="#notification"></use>
                                </svg>
                            </i>
                            <div class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications" style="">
                                <!--begin::Heading-->
                                <h3 class=" fw-semibold px-9 mt-10 mb-6">
                                    Уведомления
                                </h3>

                                <!--end::Heading-->

                                <!--begin::Tab content-->
                                <div class="scroll-y mh-325px my-5 px-8">
                                    <!--begin::Item-->
                                    <div class="d-flex flex-column py-4 align-items-start">
                                        <!--begin::Section-->
                                        <span class="badge badge-light-success fs-8 mb-4">Новое</span>

                                        <div class="mb-0 me-2">
                                            <div class="fs-6 text-gray-800 fw-bold">
                                                Выставлен новый счет 1 920 р. (N 25020A) SSL-шифрование для сайта
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <a href="#" class="btn btn-light-primary">Оплатить</a>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column py-4 align-items-start">
                                        <!--begin::Section-->
                                        <span class="badge badge-light-success fs-8 mb-4">Новое</span>

                                        <div class="mb-0 me-2">
                                            <div class="fs-6 text-gray-800 fw-bold">
                                                Выставлен новый счет 1 920 р. (N 25020A) SSL-шифрование для сайта
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <a href="#" class="btn btn-light-primary">Оплатить</a>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column py-4 align-items-start">
                                        <!--begin::Section-->
                                        <span class="badge badge-light-success fs-8 mb-4">Новое</span>

                                        <div class="mb-0 me-2">
                                            <div class="fs-6 text-gray-800 fw-bold">
                                                Выставлен новый счет 1 920 р. (N 25020A) SSL-шифрование для сайта
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <a href="#" class="btn btn-light-primary">Оплатить</a>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column py-4 align-items-start">
                                        <!--begin::Section-->
                                        <span class="badge badge-light-success fs-8 mb-4">Новое</span>

                                        <div class="mb-0 me-2">
                                            <div class="fs-6 text-gray-800 fw-bold">
                                                Выставлен новый счет 1 920 р. (N 25020A) SSL-шифрование для сайта
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <a href="#" class="btn btn-light-primary">Оплатить</a>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column py-4 align-items-start">
                                        <!--begin::Section-->
                                        <span class="badge badge-light-success fs-8 mb-4">Новое</span>

                                        <div class="mb-0 me-2">
                                            <div class="fs-6 text-gray-800 fw-bold">
                                                Выставлен новый счет 1 920 р. (N 25020A) SSL-шифрование для сайта
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <a href="#" class="btn btn-light-primary">Оплатить</a>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column py-4 align-items-start">
                                        <!--begin::Section-->
                                        <span class="badge badge-light-success fs-8 mb-4">Новое</span>

                                        <div class="mb-0 me-2">
                                            <div class="fs-6 text-gray-800 fw-bold">
                                                Выставлен новый счет 1 920 р. (N 25020A) SSL-шифрование для сайта
                                            </div>
                                        </div>

                                        <div class="mt-6">
                                            <a href="#" class="btn btn-light-primary">Оплатить</a>
                                        </div>
                                    </div>
                                </div>
                                <!--end::Tab content-->

                            </div>
                            <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-100 animation-blink">
                             </span>
                        </div>
                    </div>


                    <div class="app-navbar-item ms-1 ms-md-4">
                        <router-link to="/chat" class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                     data-kt-menu-placement="bottom-end" id="kt_menu_item_wow">
                            <i class="ki-duotone ki-notification-status fs-2">
                                <svg class="icon">
                                    <use xlink:href="#message-text"></use>
                                </svg>
                            </i>
                        </router-link>
                    </div>


                    <div class="app-navbar-item ms-1 ms-md-4">

                        <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                             id="kt_drawer_chat_toggle">
                            <i class="ki-duotone ki-message-text-2 fs-2">
                                <svg class="icon">
                                    <use xlink:href="#question-2"></use>
                                </svg>
                            </i>

                        </div>

                    </div>


                    <div class="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">

                        <div class="cursor-pointer symbol symbol-35px"
                             data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                             data-kt-menu-placement="bottom-end">
                            <img src="https://dummyimage.com/36x36/b04cb0/cccee8.png&text=avatar" class="rounded-3"
                                 alt="user">
                        </div>


                    </div>

                    <div class="app-navbar-item ms-1 ms-md-4">
                        <router-link to="/auth">
                            <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                                 data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                 data-kt-menu-placement="bottom-end" id="kt_menu_item_wow">
                                <i class="ki-duotone ki-notification-status fs-2">
                                    <svg class="icon">
                                        <use xlink:href="#exit-right"></use>
                                    </svg>
                                </i>
                            </div>
                        </router-link>
                    </div>


                    <div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
                        <div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
                             id="kt_app_header_menu_toggle">
                            <i class="ki-duotone ki-element-4 fs-1"><span class="path1"></span><span
                                    class="path2"></span></i></div>
                    </div>


                </div>

            </div>
        </div>

    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
svg.icon path {
    fill: #808290;
}

[data-kt-app-header-fixed=true] .app-header {
    position: sticky;
}
</style>