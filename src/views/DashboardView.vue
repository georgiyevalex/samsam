<template>
    <div class="app-main flex-column flex-row-fluid dashboard-app" id="kt_app_main">
        <div class="d-flex flex-column flex-column-fluid">
            <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">
                <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack flex-wrap">
                    <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                            Мои сайты
                        </h1>
                    </div>
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
                        <div>
                            <select class="form-select form-select-lg" aria-label="Select example">
                                <option>Все</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <router-link to="/new-project" class="btn btn-lg fw-bold btn-primary">
                            <svg class="icon">
                                <use xlink:href="#plus"></use>
                            </svg>
                            Создать новый
                        </router-link>
                    </div>
                </div>
            </div>
            <div id="kt_app_content" class="app-content  flex-column-fluid ">
                <div id="kt_app_content_container" class="app-container  container-xxl ">
                    <div class="row g-5 g-xl-8">
                        <div class="col-xl-4">
                            <div class="card card-xl-stretch mb-xl-8">
                                <div class="card-header border-0 py-5">
                                    <div class="symbol symbol-50px me-50 symbol-circle">
                                        <img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A" class="" alt="">
                                    </div>
                                    <div class="card-toolbar">
                                        <button type="button"
                                                class="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3"
                                                data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i class="ki-duotone ki-category fs-6">
                                                <svg class="icon">
                                                    <use xlink:href="#bulk_dots-square"></use>
                                                </svg>
                                            </i>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                             data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_settings" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#setting-2"></use>
                                                    </svg>
                                                    Настройки
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <router-link to="/settings/access" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#profile-2user"></use>
                                                    </svg>
                                                    Доступы
                                                </router-link>
                                            </div>
                                            <div class="menu-item px-3">
                                                <router-link to="/settings/billing" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#profile-2user"></use>
                                                    </svg>
                                                    Оплата
                                                </router-link>
                                            </div>
                                            <div class="menu-item px-3 my-1">
                                                <a href="#" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#click"></use>
                                                    </svg>
                                                    Домены
                                                </a>
                                            </div>
                                            <div class="menu-item px-3 my-1">
                                                <a href="#" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#information-4"></use>
                                                    </svg>
                                                    Статистика
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://dummyimage.com/340x160/8a23e2/cccee8.png&text=Site Image" alt="">
                                <div class="align-items-start flex-column d-flex card-px pt-12">
                                    <h3 class="card-label fw-bold fs-3 mb-1 card-title">Sample.ru</h3>
                                    <span class="text-muted fw-semibold fs-7">#124090</span>
                                </div>
                                <div class="card-body p-0">
                                    <div class="card-rounded bg-body position-relative card-px py-7">
                                        <div class="row g-0 m-n2">
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    Май 23, 2023
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Создан
                                                </div>
                                            </div>
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    Май 24, 2023
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Оплачен до
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row g-0 m-n2">
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    88
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Всего заявок
                                                </div>
                                            </div>
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    2
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Новые заявки
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card card-xl-stretch mb-xl-8">
                                <div class="card-header border-0 py-5">
                                    <div class="symbol symbol-50px me-50 symbol-circle">
                                        <img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A" class="" alt="">
                                    </div>
                                    <div class="card-toolbar">
                                        <button type="button"
                                                class="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3"
                                                data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i class="ki-duotone ki-category fs-6">
                                                <svg class="icon">
                                                    <use xlink:href="#bulk_dots-square"></use>
                                                </svg>
                                            </i>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                             data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_settings" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#setting-2"></use>
                                                    </svg>
                                                    Настройки
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <router-link to="/settings/access" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#profile-2user"></use>
                                                    </svg>
                                                    Доступы
                                                </router-link>
                                            </div>
                                            <div class="menu-item px-3">
                                                <router-link to="/settings/billing" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#profile-2user"></use>
                                                    </svg>
                                                    Оплата
                                                </router-link>
                                            </div>
                                            <div class="menu-item px-3 my-1">
                                                <a href="#" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#click"></use>
                                                    </svg>
                                                    Домены
                                                </a>
                                            </div>
                                            <div class="menu-item px-3 my-1">
                                                <a href="#" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#information-4"></use>
                                                    </svg>
                                                    Статистика
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://dummyimage.com/340x160/8a23e2/cccee8.png&text=Site Image" alt="">
                                <div class="align-items-start flex-column d-flex card-px pt-12">
                                    <h3 class="card-label fw-bold fs-3 mb-1 card-title">Sample.ru</h3>
                                    <span class="text-muted fw-semibold fs-7">#124090</span>
                                </div>
                                <div class="card-body p-0">
                                    <div class="card-rounded bg-body position-relative card-px py-7">
                                        <div class="row g-0 m-n2">
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    Май 23, 2023
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Создан
                                                </div>
                                            </div>
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    Май 24, 2023
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Оплачен до
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row g-0 m-n2">
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    88
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Всего заявок
                                                </div>
                                            </div>
                                            <div class="col m-2 mt-5 p-3 green">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    2
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Новые заявки
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card card-xl-stretch mb-xl-8">
                                <div class="card-header border-0 py-5">
                                    <div class="symbol symbol-50px me-50 symbol-circle">
                                        <img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A" class="" alt="">
                                    </div>
                                    <div class="card-toolbar">
                                        <button type="button"
                                                class="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3"
                                                data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i class="ki-duotone ki-category fs-6">
                                                <svg class="icon">
                                                    <use xlink:href="#bulk_dots-square"></use>
                                                </svg>
                                            </i>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                             data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_settings" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#setting-2"></use>
                                                    </svg>
                                                    Настройки
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <router-link to="/settings/access" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#profile-2user"></use>
                                                    </svg>
                                                    Доступы
                                                </router-link>
                                            </div>
                                            <router-link to="/settings/billing" class="menu-link px-3">
                                                <svg class="icon">
                                                    <use xlink:href="#profile-2user"></use>
                                                </svg>
                                                Оплата
                                            </router-link>
                                            <div class="menu-item px-3 my-1">
                                                <router-link to="/settings/domains" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#profile-2user"></use>
                                                    </svg>
                                                    Домены
                                                </router-link>
                                            </div>
                                            <div class="menu-item px-3 my-1">
                                                <a href="#" class="menu-link px-3">
                                                    <svg class="icon">
                                                        <use xlink:href="#information-4"></use>
                                                    </svg>
                                                    Статистика
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://dummyimage.com/340x160/8a23e2/cccee8.png&text=Site Image" alt="">
                                <div class="align-items-start flex-column d-flex card-px pt-12">
                                    <h3 class="card-label fw-bold fs-3 mb-1 card-title">Sample.ru</h3>
                                    <span class="text-muted fw-semibold fs-7">#124090</span>
                                </div>
                                <div class="card-body p-0">
                                    <div class="card-rounded bg-body position-relative card-px py-7">
                                        <div class="row g-0 m-n2">
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    Май 23, 2023
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Создан
                                                </div>
                                            </div>
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    Май 24, 2023
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Оплачен до
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row g-0 m-n2">
                                            <div class="col m-2 mt-5 p-3">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    88
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Всего заявок
                                                </div>
                                            </div>
                                            <div class="col m-2 mt-5 p-3 red">
                                                <div class="fs-4 fw-bold text-gray-800">
                                                    2
                                                </div>
                                                <div class="fs-4 fw-bold text-gray-500">
                                                    Новые заявки
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
                        <div class="col-xl-6">
                            <div class="card card-flush overflow-hidden h-lg-100">
                                <div class="card-header pt-5">
                                    <h3 class="card-title align-items-start flex-column">
                                        <span class="card-label fw-bold text-gray-900">Performance</span>
                                        <span class="text-gray-500 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span>
                                    </h3>
                                    <div class="card-toolbar">
                                        <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" class="btn btn-sm btn-light d-flex align-items-center px-4">
                                            <div class="text-gray-600 fw-bold">10 Dec 2023 - 16 Dec 2023</div>
                                            <i class="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
                                                <svg class="icon">
                                                    <use xlink:href="#calendar"></use>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-end p-0">
                                    <div id="kt_charts_widget_3" class="min-h-auto ps-4 pe-6 w-100" style="height: 300px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card card-flush overflow-hidden h-lg-100">
                                <div class="card-header pt-5">
                                    <h3 class="card-title align-items-start flex-column">
                                        <span class="card-label fw-bold text-gray-900">Performance</span>
                                        <span class="text-gray-500 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span>
                                    </h3>
                                    <div class="card-toolbar">
                                        <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" class="btn btn-sm btn-light d-flex align-items-center px-4">
                                            <div class="text-gray-600 fw-bold">10 Dec 2023 - 16 Dec 2023</div>
                                            <i class="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
                                                <svg class="icon">
                                                    <use xlink:href="#calendar"></use>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-end p-0">
                                    <div id="kt_charts_widget_36" class="min-h-auto w-100 ps-4 pe-6" style="height: 300px; min-height: 315px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-10">
                            <div class="fs-2hx fw-bold text-gray-800 text-center mt-6 mb-6 d-flex flex-column">
                                <span class="text-gray-800 mb-1 fs-3">Всегда готовы помочь</span>
                                <a href="tel:88005553535" class="text-gray-800 opacity-75-hover">8 800 555-35-35</a>
                            </div>
                            <div class="text-center">
                                <a href="#" class="btn btn-sm btn-dark fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                                    Напишите нам
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal />
</template>
<script>
import Modal from "@/components/settings/Modal.vue";

export default {
    components: {Modal}
}
</script>
<style lang="scss" scoped>

</style>