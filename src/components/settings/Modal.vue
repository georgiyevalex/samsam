<template>
    <div class="modal fade" id="kt_modal_settings" tabindex="-1" style="" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered mw-650px" data-select2-id="select2-data-349-7gpe">
            <div class="modal-content">
                <form class="form fv-plugins-bootstrap5 fv-plugins-framework" action="#" id="kt_modal_new_address_form">
                    <div class="modal-header" id="kt_modal_new_address_header">
                        <h2>Настройки</h2>
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
                            <div class="d-flex flex-column mb-5 fv-row fv-plugins-icon-container" data-select2-id="select2-data-348-i0i3">
                                <label class="d-flex align-items-center fs-5 fw-semibold mb-2">
                                    <span class="required">Индексация</span>
                                </label>
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
                                <label class="required fs-5 fw-semibold mb-2">Заголовок сайта (Title):</label>
                                <input class="form-control form-control-solid" placeholder="" name="address1">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
                                <label class="required fs-5 fw-semibold mb-2">Описание (Description):</label>
                                <input class="form-control form-control-solid" placeholder="" name="address1">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
                                <label class="required fs-5 fw-semibold mb-2">Ключевые слова (Keywords):</label>
                                <input class="form-control form-control-solid" placeholder="" name="address2">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
                                <label class="fs-5 fw-semibold mb-2">Заголовок (H1):</label>
                                <input class="form-control form-control-solid" placeholder="" name="city">
                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>
                            <div class="fv-row mb-5">
                                <div class="d-flex flex-stack">
                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                        <input class="form-check-input" name="billing" type="checkbox" value="1" checked="checked">
                                        <span class="form-check-label fw-semibold text-muted">Уведомления по SMS</span>
                                    </label>
                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                        <input class="form-check-input" name="billing" type="checkbox" value="1" checked="checked">
                                        <span class="form-check-label fw-semibold text-muted">Уведомления по Email</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer flex-center">
                        <button type="reset" id="kt_modal_new_address_cancel" class="btn btn-light me-3">
                            Discard
                        </button>
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
<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>