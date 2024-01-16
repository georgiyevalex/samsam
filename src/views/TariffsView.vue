<template>
    <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">
        <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack ">
            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                <h1 class="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                    Тарифы и оплата
                </h1>
            </div>
        </div>
    </div>
    <div id="kt_app_content_container" class="app-container  container-xxl ">
        <div class="row g-10">
            <div class="col-xl-4">
                <div class="d-flex h-100 align-items-center">
                    <div class="w-100 d-flex flex-column flex-center rounded-3 py-15 px-10 bg-white">
                        <div class="mb-7 text-center">
                            <h1 class="text-gray-900 mb-5 fw-bolder">Посадочная страница</h1>
                            <div class="text-gray-600 fw-semibold mb-5">Одностраничный сайт, для продажи определенного товара или услуги</div>
                            <div class="nav-group nav-group-outline d-flex mx-auto mb-15" data-kt-buttons="true">
                                <button class="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3 me-2 w-50 active" data-kt-plan="month">
                                    Monthly
                                </button>
                                <button class="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3 w-50" data-kt-plan="annual">
                                    Annual
                                </button>
                            </div>
                            <div class="text-center">
                        <span class="fs-3x fw-bold text-primary" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">
                        39                                        </span>
                                <span class="fs-3x fw-bold text-primary">р.
                        </span>
                            </div>
                        </div>
                        <div class="w-100 mb-10">
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Система управления</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Защита от DDOS-атак</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Управление мета-тегами</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Управление мета-тегами</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <div class="d-flex align-items-center mb-5">
                        <span class="fw-semibold fs-6 text-gray-600 flex-grow-1">
                        Дополнительные страницы                                                </span>
                                <i class="ki-duotone ki-cross-circle fs-1"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <div class="d-flex align-items-center mb-5">
                        <span class="fw-semibold fs-6 text-gray-600 flex-grow-1">
                        Интернет-магазин                                                </span>
                                <i class="ki-duotone ki-cross-circle fs-1"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <div class="d-flex align-items-center ">
                        <span class="fw-semibold fs-6 text-gray-600 flex-grow-1">
                        Онлайн оплата                                                </span>
                                <i class="ki-duotone ki-cross-circle fs-1"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                        </div>
                        <a href="#" class="btn btn-lg btn-primary">Создать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>