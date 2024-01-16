<template>
    <div class="card card-flush h-md-100 p-12">
        <h3>
            Выбрать тип сайта
        </h3>
        <div class="mb-4">
            Узнайте больше о типах сайт на <a href="#">странице тарифов</a>
        </div>
        <div class="row g-5 g-xl-8">
            <div class="col-sm-6 col-xl-4">
                <div class="card card-dashed h-100 ">
                    <div class="card-header flex-nowrap border-0 pt-9">
                        <div class="card-title m-0">
                            <img src="/src/assets/images/new-project/rocket.svg" alt="image" class="">
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                        <div class="fs-3 fw-bold mb-3">Посадочная страница</div>
                        <div class="d-flex align-items-center flex-wrap mb-5 mt-auto fs-6">
                            <i class="ki-duotone ki-Up-right fs-3 me-1 text-danger"></i>
                            <div class="fw-semibold text-gray-500">Одностраничный сайт, который отлично продает определенный товар или услугу</div>
                        </div>
                        <router-link to="/new-project/2" class="btn btn-sm btn-success">
                            Выбрать
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card card-dashed h-100 ">
                    <div class="card-header flex-nowrap border-0 pt-9">
                        <div class="card-title m-0">
                            <img src="/src/assets/images/new-project/briefcase.svg" alt="image" class="">
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                        <div class="fs-3 fw-bold mb-3">Сайт компании</div>
                        <div class="d-flex align-items-center flex-wrap mb-5 mt-auto fs-6">
                            <i class="ki-duotone ki-Up-right fs-3 me-1 text-danger"></i>
                            <div class="fw-semibold text-gray-500">Многостраничный сайт для размещения широкого спектра услуг </div>
                        </div>
                        <router-link to="/new-project/2" class="btn btn-sm btn-success">
                            Выбрать
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card card-dashed h-100 ">
                    <div class="card-header flex-nowrap border-0 pt-9">
                        <div class="card-title m-0">
                            <img src="/src/assets/images/new-project/purchase.svg" alt="image" class="">
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                        <div class="fs-3 fw-bold mb-3">Интернет-магазин</div>
                        <div class="d-flex align-items-center flex-wrap mb-5 mt-auto fs-6">
                            <i class="ki-duotone ki-Up-right fs-3 me-1 text-danger"></i>
                            <div class="fw-semibold text-gray-500">Полнофункциональный каталог товаров с корзиной для онлайн-продаж</div>
                        </div>
                        <router-link to="/new-project/2" class="btn btn-sm btn-success">
                            Выбрать
                        </router-link>
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