<template>
    <div id="kt_app_content_container" class="app-container  container-xxl mb-20">
        <div class="card mb-5 mb-xl-10">
            <div class="card-body pt-9 pb-0">
                <div class="d-flex flex-wrap flex-sm-nowrap">
                    <div class="me-7 mb-4">
                        <div class="symbol symbol-100px symbol-lg-120px symbol-circle symbol-fixed position-relative">
                            <img src="https://dummyimage.com/120x120/b04cb0/ffffff.png&text=A" alt="image">
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Селезнева Надежда Николаевна </a>
                                </div>
                                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                    <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                                        <i class="ki-duotone ki-sms fs-4"><span class="path1"></span><span class="path2"></span></i>nadya@ya.ru</a>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap flex-stack">
                            <div class="d-flex flex-column flex-grow-1 pe-8">
                                <div class="d-flex flex-wrap">
                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$" >Июль 12, 2023</div>
                                        </div>
                                        <div class="fw-semibold fs-6 text-gray-500">Регистрация</div>
                                    </div>
                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="80" >3</div>
                                        </div>
                                        <div class="fw-semibold fs-6 text-gray-500">Создано проектов</div>
                                    </div>
                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div class="d-flex align-items-center">
                                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%" >9 880 032 р.</div>
                                        </div>
                                        <div class="fw-semibold fs-6 text-gray-500">Оплачено</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                    <li class="nav-item mt-2">
                        <router-link to="/profile/1"
                                     v-slot="{ href, route, navigate, isActive }"
                                     class="nav-link text-active-primary ms-0 me-10 py-5">
                            Настройки
                        </router-link>
                    </li>
                    <li class="nav-item mt-2">
                        <router-link to="/profile/2"
                                     v-slot="{ href, route, navigate, isActive }"
                                     class="nav-link text-active-primary ms-0 me-10 py-5">
                            Безопасность
                        </router-link>
                    </li>
                    <li class="nav-item mt-2">
                        <router-link to="/profile/3"
                                     v-slot="{ href, route, navigate, isActive }"
                                     class="nav-link text-active-primary ms-0 me-10 py-5">
                            Счета и оплата
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>