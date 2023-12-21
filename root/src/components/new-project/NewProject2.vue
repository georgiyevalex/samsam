<template>
    <div class="card card-flush h-md-100 p-12 mb-20">

        <div class="d-flex justify-content-between">
            <div class="mb-8">
                <h3>
                    Выбрать дизайн
                </h3>

                <div >
                    Подберите готовый шаблон из более чем 1000 вариантов
                </div>
            </div>

            <div data-select2-id="select2-data-124-nvfw" class="w-200px">
                <select class="select2-selection select2-selection--single form-select form-select-lg form-select-solid w-lg-200px" data-control="select2" data-placeholder="Select Hours" data-hide-search="true" data-select2-id="select2-data-9-eavh" aria-hidden="true">
                    <option>Все</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>


        <div class="row g-5 g-xl-8">
            <div class="col-sm-6 col-xl-4" v-for="item in 9">
                <!--begin::Card-->
                <div class="card card-dashed h-100 ">
                    <!--begin::Card header-->
                    <div class="card-header flex-nowrap border-0 pt-9">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <!--begin::Icon-->
                            <img src="https://dummyimage.com/340x450/8a23e2/cccee8.png&text=Site%20Image" width="100%" alt="image" class="">
                            <!--end::Icon-->

                        </div>
                        <!--end::Card title-->

                        <!--begin::Card toolbar-->


                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                        <!--begin::Heading-->
                        <div class="fs-5 fw-bold mb-3">Универсальный интернет-магазин</div>
                        <!--end::Heading-->

                        <!--begin::Stats-->
                        <div class="d-flex align-items-center flex-wrap mb-5 mt-auto fs-6">
                            <!--begin::Number-->

                            <!--end::Number-->

                            <!--begin::Label-->
                            <div class="fw-semibold text-gray-500">№ 2852529</div>
                            <!--end::Label-->
                        </div>
                        <!--end::Stats-->

                        <div>
                            <router-link to="/new-project/3" class="btn btn-sm btn-success me-2">
                                Выбрать
                            </router-link>

                            <router-link to="#" class="btn btn-sm btn-active-light-success">
                                Посмотреть демо
                            </router-link>
                        </div>


                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->
            </div>
        </div>

        <ul class="pagination mt-10">
            <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
            <li class="page-item "><a href="#" class="page-link">1</a></li>
            <li class="page-item active"><a href="#" class="page-link">2</a></li>
            <li class="page-item "><a href="#" class="page-link">3</a></li>
            <li class="page-item "><a href="#" class="page-link">...</a></li>
            <li class="page-item "><a href="#" class="page-link">5</a></li>
            <li class="page-item "><a href="#" class="page-link">6</a></li>
            <li class="page-item next"><a href="#"  class="page-link"><i class="next"></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>