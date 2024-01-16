<template>
    <div class="row g-5 g-xl-8">
        <div class="col-xxl-6">
            <div class="card card-flush h-md-100">
                <div class="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0" style="">
                    <img class="mx-auto h-150px h-lg-200px  theme-light-show" src="/src/assets/images/new-project/1.png" alt="">
                    <div class="mb-10">
                        <div class="fs-2hx fw-bold text-gray-800 text-center mb-13">
                <span class="me-2">Создать самостоятельно<br>

                </span></div>
                        <div class="text-center">
                            <router-link to="new-project/1" class="btn btn-lg btn-primary fw-bold">
                                Старт
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
         </div>

        <div class="col-xxl-6">
            <div class="card card-flush h-md-100">
                <div class="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0" style="">
                    <img class="mx-auto h-150px h-lg-200px  theme-light-show" src="/src/assets/images/new-project/2.png" alt="">
                    <div class="mb-10">
                        <div class="fs-2hx fw-bold text-gray-800 text-center ">
                            Создать с помощью ИИ
                        </div>
                        <div class=" fs-4 text-gray-800 w-400px text-center m-auto mb-13">Кратко опишите тематику и стилистику
                            сайта</div>
                        <div class="text-center">
                            <a href="#" class="btn btn-lg btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_gpt">
                                Хочу быть в курсе
                            </a>
                        </div>
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