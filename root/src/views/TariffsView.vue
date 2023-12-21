<template>
    <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">

        <!--begin::Toolbar container-->
        <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack ">


            <!--begin::Page title-->
            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                <!--begin::Title-->
                <h1 class="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                    Тарифы и оплата
                </h1>
                <!--end::Title-->
            </div>
            <!--end::Page title-->
        </div>
        <!--end::Toolbar container-->
    </div>

    <div id="kt_app_content_container" class="app-container  container-xxl ">
        <div class="row g-10">
            <div class="col-xl-4">
                <div class="d-flex h-100 align-items-center">
                    <!--begin::Option-->
                    <div class="w-100 d-flex flex-column flex-center rounded-3 py-15 px-10 bg-white">
                        <!--begin::Heading-->
                        <div class="mb-7 text-center">
                            <!--begin::Title-->
                            <h1 class="text-gray-900 mb-5 fw-bolder">Посадочная страница</h1>
                            <!--end::Title-->

                            <!--begin::Description-->
                            <div class="text-gray-600 fw-semibold mb-5">Одностраничный сайт, для продажи определенного товара или услуги</div>
                            <!--end::Description-->

                            <div class="nav-group nav-group-outline d-flex mx-auto mb-15" data-kt-buttons="true">
                                <button class="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3 me-2 w-50 active" data-kt-plan="month">
                                    Monthly
                                </button>

                                <button class="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3 w-50" data-kt-plan="annual">
                                    Annual
                                </button>
                            </div><!--begin::Price-->
                            <div class="text-center">


                                        <span class="fs-3x fw-bold text-primary" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">
                                            39                                        </span>

                                <span class="fs-3x fw-bold text-primary">р.
                                        </span>
                            </div>
                            <!--end::Price-->
                        </div>
                        <!--end::Heading-->

                        <!--begin::Features-->
                        <div class="w-100 mb-10">
                            <!--begin::Item-->
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Система управления</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Защита от DDOS-атак</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Управление мета-тегами</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="d-flex align-items-center mb-5">
                                <span class="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">Управление мета-тегами</span>
                                <i class="ki-duotone ki-check-circle fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>
                            </div><div class="d-flex align-items-center mb-5">
                                                                                            <span class="fw-semibold fs-6 text-gray-600 flex-grow-1">
                                                    Дополнительные страницы                                                </span>
                            <i class="ki-duotone ki-cross-circle fs-1"><span class="path1"></span><span class="path2"></span></i>
                        </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="d-flex align-items-center mb-5">
                                                                                            <span class="fw-semibold fs-6 text-gray-600 flex-grow-1">
                                                    Интернет-магазин                                                </span>
                                <i class="ki-duotone ki-cross-circle fs-1"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="d-flex align-items-center ">
                                                                                            <span class="fw-semibold fs-6 text-gray-600 flex-grow-1">
                                                    Онлайн оплата                                                </span>
                                <i class="ki-duotone ki-cross-circle fs-1"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->

                            <!--end::Item-->

                        </div>
                        <!--end::Features-->

                        <!--begin::Select-->
                        <a href="#" class="btn btn-lg btn-primary">Создать</a>
                        <!--end::Select-->
                    </div>
                    <!--end::Option-->
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