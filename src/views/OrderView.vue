<template>
    <div id="kt_app_content_container" class="app-container  container-xxl mt-6">
        <div class="card d-flex flex-column flex-lg-row flex-column-fluid p-10">
            <div class="d-flex flex-column flex-lg-row-fluid w-lg-50  order-2 order-lg-1">
                <div class="d-flex flex-center flex-column flex-lg-row-fluid">
                    <div class="w-lg-500px p-10">
                        <form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="/metronic8/demo1/../demo1/index.html" action="#">
                            <div class="text-center mb-11">
                                <h1 class="text-gray-900 fw-bolder mb-3">Заказать разработку</h1>
                                <div class="text-gray-500 fw-semibold fs-6">Занимайтесь бизнесом, разработку сайта мы
                                    берем на себя
                                </div>
                            </div>
                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <input type="text" placeholder="ФИО" name="email" required="" autocomplete="off" class="form-control bg-transparent">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <input type="text" placeholder="Телефон" name="phone" autocomplete="off" class="form-control bg-transparent">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <input type="text" placeholder="E-mail" name="email" required="" autocomplete="off" class="form-control bg-transparent">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <textarea type="" placeholder="Кратко опишите ваш бизнес" name="email" required="" autocomplete="off" class="form-control bg-transparent"></textarea>
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="d-grid mb-10">
                                <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
                        <span class="indicator-label">
                        Отправить</span>
                                    <span class="indicator-progress">
                        Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style="background-image: url(/src/assets/images/order/bg.png)">
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