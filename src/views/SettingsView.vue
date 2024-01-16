<template>
    <div class="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper" data-select2-id="select2-data-kt_app_wrapper">
        <div class="app-main flex-column flex-row-fluid " id="kt_app_main" data-select2-id="select2-data-kt_app_main">
            <div class="d-flex flex-column flex-column-fluid" data-select2-id="select2-data-125-pdmb">
                <div id="kt_app_content" class="app-content  flex-column-fluid " data-select2-id="select2-data-kt_app_content">
                    <div id="kt_app_content_container" class="app-container  container-xxl " data-select2-id="select2-data-kt_app_content_container">
                        <div class="card mb-5 mb-xl-10">
                            <div class="card-body p-9 pb-0">
                                <div class="d-flex flex-wrap flex-sm-nowrap">
                                    <div class="me-7 mb-4">
                                        <div class="symbol symbol-100px symbol-lg-120px symbol-fixed position-relative symbol-circle">
                                            <img src="https://dummyimage.com/120x120/4332FF/ffffff.png&text=D" alt="image">
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                            <div class="d-flex flex-column">
                                                <div class="d-flex align-items-center mb-2">
                                                    <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-2">Domain.ru</a>
                                                    <span class="badge badge-light-success fs-7 fw-bold">Опубликован</span>
                                                </div>
                                                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                                    <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                        #980012</a>
                                                </div>
                                            </div>
                                            <div class="d-flex m-0">
                                                <a href="#" class="btn btn-sm btn-light-primary me-2">Войти в систему</a>
                                                <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_settings">Настройки</a>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap flex-stack">
                                            <div class="d-flex flex-column flex-grow-1 pe-8">
                                                <div class="d-flex flex-wrap">
                                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$" >Фев 6, 2023</div>
                                                        </div>
                                                        <div class="fw-semibold fs-6 text-gray-500">Создан</div>
                                                    </div>
                                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="80">Июль 12, 2023</div>
                                                        </div>
                                                        <div class="fw-semibold fs-6 text-gray-500">Оплачен</div>
                                                    </div>
                                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">480 / 5000</div>
                                                        </div>
                                                        <div class="fw-semibold fs-6 text-gray-500">Товары</div>
                                                    </div>
                                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%" >9</div>
                                                        </div>
                                                        <div class="fw-semibold fs-6 text-gray-500">Заказы</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                                    <li class="nav-item mt-2">
                                        <router-link to="/settings/access" class="nav-link text-active-primary ms-0 me-10 py-5">
                                            Доступы
                                        </router-link>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <router-link to="/settings/billing" class="nav-link text-active-primary ms-0 me-10 py-5">
                                            Оплата
                                        </router-link>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <router-link to="/settings/domains" class="nav-link text-active-primary ms-0 me-10 py-5">
                                            Домены
                                        </router-link>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <router-link to="/settings/statistics" class="nav-link text-active-primary ms-0 me-10 py-5">
                                            Статистика
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <modal/>
</template>
<script>
import {defineComponent} from "vue";
import Modal from "@/components/settings/Modal.vue";

export default defineComponent({
    components: {Modal}
})

</script>
<style lang="scss">

</style>