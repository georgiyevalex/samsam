<template>
    <div class="d-flex flex-column flex-root" id="kt_auth_root">
        <div class="d-flex flex-column flex-column-fluid flex-lg-row app-container container-xxl">
            <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0">
                <div class="d-flex flex-center flex-lg-start flex-column">
                    <a href="/" class="mb-7">
                        <img alt="Logo" src="/src/assets/images/logo-big.svg">
                    </a>
                    <h2 class="text-white fs-3hx fw-normal m-0">
                        Быстрое создание сайта для вас или ваших клиентов
                    </h2>
                    <p class="text-white fs-1 fw-normal m-0 mt-8">
                        Преобразите процесс создания сайта из напряженной задачи в простое удовольствие
                    </p>
                </div>
            </div>
            <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 pe-0">
                <div class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
                    <div class="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                        <form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="/" action="#">
                            <div class="text-center mb-11">
                                <h1 class="text-gray-900 fw-bolder mb-3">
                                    Авторизуйтесь чтобы начать
                                </h1>
                                <div class="text-gray-500 fw-semibold fs-6">
                                    Регистрация в один клик
                                </div>
                            </div>
                            <div class="row g-3 mb-9">
                                <div class="col-md-12">
                                    <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light text-nowrap w-100">
                                        <img width="30" alt="Logo" src="/src/assets/images/auth/google.png" class=" me-3">
                                        Войти через Google
                                    </a>
                                </div>
                                <div class="col-md-12">
                                    <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light text-nowrap w-100">
                                        <img width="30" alt="Logo" src="/src/assets/images/auth/vk.png" class=" me-3">
                                        Войти через VK
                                    </a>
                                </div>
                            </div>
                        </form>
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
<style lang="scss">
</style>