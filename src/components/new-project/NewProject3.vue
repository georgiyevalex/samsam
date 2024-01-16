<template>
    <div class="card card-flush h-md-100 p-12 mb-20">
        <div class="d-flex justify-content-between">
            <div class="mb-8">
                <h3>
                    Контактная информация
                </h3>
                <div >
                    Отправляя форму, вы соглашаетесь с политикой обработки <a href="#">персональных данных</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 fv-row fv-plugins-icon-container">
                <label class="fs-5 fw-semibold mb-2 required">Имя Фамилия</label>
                <input type="text" class="form-control form-control-solid" placeholder="" name="name">
                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
            </div>
            <div class="col-md-4 fv-row fv-plugins-icon-container">
                <label class="fs-5 fw-semibold mb-2 required">Email </label>
                <input type="text" class="form-control form-control-solid" placeholder="" name="name">
                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
            </div>
            <div class="col-md-4 fv-row fv-plugins-icon-container">
                <label class="fs-5 fw-semibold mb-2 required">Телефон</label>
                <input type="text" class="form-control form-control-solid" placeholder="" name="name">
                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
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