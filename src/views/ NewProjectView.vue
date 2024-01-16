<template>
    <form class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">
            <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack ">
                <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                    <h1 class="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                        Создать новый
                    </h1>
                </div>
                <div class="d-flex align-items-center gap-2 gap-lg-3">
                    <button type="button" onclick="history.back(-1)" class="btn btn-lg fw-bold btn-secondary">
               <span v-if="router.currentRoute.value.path !== '/new-project'">
               Отмена
               </span>
                        <span v-else>
               Назад
               </span>
                    </button>
                    <button v-if="router.currentRoute.value.path === '/new-project/3'" type="submit" class="btn btn-lg fw-bold btn-primary">
                        Готово
                    </button>
                </div>
            </div>
        </div>
        <div class="app-container container-xxl" id="kt_app_content_container">
            <NewProject v-if="router.currentRoute.value.path === '/new-project'"/>
            <RouterView />
        </div>
    </form>
    <div class="modal fade" id="kt_modal_gpt" tabindex="-1" style="" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered mw-600px">
            <div class="modal-content">
                <form class="form fv-plugins-bootstrap5 fv-plugins-framework" action="#" id="kt_modal_new_address_form">
                    <div class="modal-header d-flex align-items-start" id="kt_modal_new_address_header">
                        <div class="d-flex flex-column">
                            <h2>Подписаться на обновления</h2>
                            <div class="fs-4 text-gray-800 m-auto mb-13">Оставьте контактный e-mail для получения раннего
                                доступа к опции
                            </div>
                        </div>
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <i class="ki-duotone ki-cross fs-1">
                                <svg class="icon">
                                    <use xlink:href="#cross"></use>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div class="modal-body py-10 px-lg-17">
                        <div class="scroll-y me-n7 pe-7" id="kt_modal_new_address_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_new_address_header" data-kt-scroll-wrappers="#kt_modal_new_address_scroll" data-kt-scroll-offset="300px" style="max-height: 272px;" data-select2-id="select2-data-kt_modal_new_address_scroll">
                            <div class="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
                                <label class="required fs-5 fw-semibold mb-2">E-mail:</label>
                                <input class="form-control form-control-solid" placeholder="" name="E-mail:">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer flex-center">
                        <button type="submit" id="kt_modal_new_address_submit" class="btn btn-primary">
                  <span class="indicator-label">
                  Submit
                  </span>
                            <span class="indicator-progress">
                  Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from "@/router/index.js";
import NewProject from "@/components/new-project/NewProject.vue";

</script>
<style lang="scss" scoped>

</style>