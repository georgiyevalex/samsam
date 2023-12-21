<template>
    <div id="kt_app_content_container" class="app-container  container-xxl mt-6">
        <div class="card d-flex flex-column flex-lg-row flex-column-fluid p-10">
            <!--begin::Body-->
            <div class="d-flex flex-column flex-lg-row-fluid w-lg-50  order-2 order-lg-1">
                <!--begin::Form-->
                <div class="d-flex flex-center flex-column flex-lg-row-fluid">
                    <!--begin::Wrapper-->
                    <div class="w-lg-500px p-10">

                        <!--begin::Form-->
                        <form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="/metronic8/demo1/../demo1/index.html" action="#">
                            <!--begin::Heading-->
                            <div class="text-center mb-11">
                                <!--begin::Title-->
                                <h1 class="text-gray-900 fw-bolder mb-3">Заказать разработку</h1>
                                <!--end::Title-->

                                <!--begin::Subtitle-->
                                <div class="text-gray-500 fw-semibold fs-6">Занимайтесь бизнесом, разработку сайта мы
                                    берем на себя</div>
                                <!--end::Subtitle--->
                            </div>
                            <!--begin::Heading-->

                            <!--begin::Login options-->

                            <!--end::Login options-->

                            <!--begin::Separator-->

                            <!--end::Separator-->

                            <!--begin::Input group--->
                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <!--begin::Email-->
                                <input type="text" placeholder="ФИО" name="email" required="" autocomplete="off" class="form-control bg-transparent">
                                <!--end::Email-->
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>

                            <!--end::Input group--->
                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <!--begin::Password-->
                                <input type="text" placeholder="Телефон" name="phone" autocomplete="off" class="form-control bg-transparent">
                                <!--end::Password-->
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                            <!--end::Input group--->

                            <!--begin::Wrapper-->

                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <!--begin::Email-->
                                <input type="text" placeholder="E-mail" name="email" required="" autocomplete="off" class="form-control bg-transparent">
                                <!--end::Email-->
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div><!--end::Wrapper-->

                            <div class="fv-row mb-8 fv-plugins-icon-container">
                                <!--begin::Email-->
                                <textarea type="" placeholder="Кратко опишите ваш бизнес" name="email" required="" autocomplete="off" class="form-control bg-transparent"></textarea>
                                <!--end::Email-->
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div><!--begin::Submit button-->
                            <div class="d-grid mb-10">
                                <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">

                                    <!--begin::Indicator label-->
                                    <span class="indicator-label">
    Отправить</span>
                                    <!--end::Indicator label-->

                                    <!--begin::Indicator progress-->
                                    <span class="indicator-progress">
    Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
</span>
                                    <!--end::Indicator progress-->        </button>
                            </div>
                            <!--end::Submit button-->

                            <!--begin::Sign up-->

                            <!--end::Sign up-->
                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Form-->

                <!--begin::Footer-->

                <!--end::Footer-->
            </div>
            <!--end::Body-->

            <!--begin::Aside-->
            <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style="background-image: url(/src/assets/images/order/bg.png)">

            </div>
            <!--end::Aside-->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>