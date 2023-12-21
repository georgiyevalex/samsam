<template>
    <div class="mb-5 mb-lg-10">
        <!--begin::Card header-->
        <div class="card card-xxl-stretch mb-5 mb-xl-10">
            <!--begin::Header-->
            <div class="card-header card-header-stretch">
                <!--begin::Title-->

                <!--end::Title-->

                <!--begin::Toolbar-->
                <div class="card-toolbar">
                    <ul class="nav nav-tabs nav-line-tabs nav-stretch border-transparent fs-5 fw-bold" id="kt_security_summary_tabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="btn-sm btn btn-active-light-primary my-1 me-2 active" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_security_summary_tab_pane_hours" aria-selected="true" role="tab">Домены</a>
                        </li>

                        <li class="nav-item" role="presentation">
                            <a class="btn-sm btn btn-active-light-primary my-1 me" data-kt-countup-tabs="true" data-bs-toggle="tab" id="kt_security_summary_tab_day" href="#kt_security_summary_tab_pane_day" aria-selected="false" tabindex="-1" role="tab">Владельцы</a>
                        </li>


                    </ul>
                </div>
                <!--end::Toolbar-->

                <div class="card-toolbar">
                    <a href="#" class="btn btn-sm btn-primary my-1 me-2">
                        <svg class="icon">
                            <use xlink:href="#plus"></use>
                        </svg>
                        Заказать новый
                    </a>
                    <a href="#" class="btn btn-sm btn-primary my-1 me-2"> Заказать новый </a>
                    <a href="#" class="btn btn-sm btn-secondary my-1"> Подключить свой </a>
                </div>

            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-7 pb-0 px-0">
                <!--begin::Tab content-->
                <div class="tab-content">
                    <!--begin::Tab panel-->
                    <div class="tab-pane fade tab-pane fade active show" id="kt_security_summary_tab_pane_hours" role="tabpanel">
                        <div class="table-responsive">
                            <!--begin::Table-->
                            <table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                <!--begin::Thead-->
                                <thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
                                <tr>
                                    <th class="min-w-250px">ДОМЕН И ВЛАДЕЛЕЦ</th>
                                    <th class="min-w-100px">ID ЗАКАЗА</th>
                                    <th class="min-w-150px">СТАТУСЫ</th>
                                    <th class="min-w-150px">ДАТА ЗАКАЗА</th>
                                    <th class="min-w-150px">ДЕЙСТВИЯ</th>
                                </tr>
                                </thead>
                                <!--end::Thead-->

                                <!--begin::Tbody-->
                                <tbody class="fw-6 fw-semibold text-gray-600">
                                <tr>
                                    <td>
                                        <a href="#" class="text-hover-primary text-gray-600">Wood.oml.ru</a>
                                        <span>
                                            Власов О.В.
                                        </span>
                                    </td>

                                    <td>
                                        <span>
                                            GH-109278
                                        </span>
                                    </td>

                                    <td>
                                        <span class="badge badge-light-success fs-7 fw-bold me-2">OK</span>
                                        <span class="badge badge-light-success fs-7 fw-bold">OK</span>
                                    </td>

                                    <td>6 ноября 2020, 18:50</td>

                                    <td>
                                        <div class="" data-select2-id="select2-data-124-1">
                                            <!--begin::Select-->
                                            <select class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-control="select2" data-placeholder="Выбрать" data-hide-search="true" data-select2-id="select2-data-9-eavh" tabindex="-1" aria-hidden="true" >
                                                <option value="2" selected="" data-select2-id="select2-data-11-9ouk">
                                                    <svg class="icon">
                                                        <use xlink:href="#wallet"></use>
                                                    </svg>
                                                    Оплатить
                                                </option>
                                                <option value="3" data-select2-id="select2-data-127-u51x">
                                                    <svg class="icon">
                                                        <use xlink:href="#plus-circle"></use>
                                                    </svg>
                                                    Подключить
                                                </option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="#" class="text-hover-primary text-gray-600">Domain.ru</a>
                                        <span>
                                            Затолокин В.В.
                                        </span>
                                    </td>

                                    <td>
                                        <span>
                                            AZ-800340
                                        </span>
                                    </td>

                                    <td>
                                        <span class="badge badge-light fs-7 fw-bold">ABS</span>
                                        <span class="badge badge-light-danger fs-7 fw-bold">ERR</span>
                                    </td>

                                    <td>25 июня 2022, 11:02 </td>

                                    <td>
                                        <div class="" data-select2-id="select2-data-124-2">
                                            <!--begin::Select-->
                                            <select class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-control="select2" data-placeholder="Выбрать" data-hide-search="true" data-select2-id="select2-data-9-eavh2" tabindex="-1" aria-hidden="true" >
                                                <option value="2" selected="" data-select2-id="select2-data-11-9ouk2">
                                                    <svg class="icon">
                                                        <use xlink:href="#wallet"></use>
                                                    </svg>
                                                    Оплатить
                                                </option>
                                                <option value="3" data-select2-id="select2-data-127-u51x2">
                                                    <svg class="icon">
                                                        <use xlink:href="#plus-circle"></use>
                                                    </svg>
                                                    Подключить
                                                </option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                    </td>
                                </tr>

                                </tbody>
                                <!--end::Tbody-->
                            </table>
                            <!--end::Table-->
                        </div>
                    </div>
                    <!--end::Tab panel-->

                    <!--begin::Tab panel-->
                    <div class="tab-pane fade" id="kt_security_summary_tab_pane_day" role="tabpanel" aria-labelledby="kt_security_summary_tab_day">
                        <div class="table-responsive">
                            <!--begin::Table-->
                            <table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                <!--begin::Thead-->
                                <thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
                                <tr>
                                    <th class="min-w-250px">ФИО</th>
                                    <th class="min-w-100px">ID АНКЕТЫ</th>
                                    <th class="min-w-150px">СТАТУСЫ</th>
                                    <th class="min-w-150px">ДЕЙСТВИЯ</th>
                                </tr>
                                </thead>
                                <!--end::Thead-->

                                <!--begin::Tbody-->
                                <tbody class="fw-6 fw-semibold text-gray-600">
                                <tr>
                                    <td>
                                        <span class="text-hover-primary text-gray-600">Кузнецов Ярополк Владимирович</span>
                                        <span>
                                            Физическое лицо
                                        </span>
                                    </td>

                                    <td>
                                        <span>
                                            1496488-NIC/D
                                        </span>
                                    </td>

                                    <td>
                                        <span class="badge   fs-7 fw-bold me-2">Новая анкета</span>
                                        <span class="badge badge-danger fs-7 fw-bold">Нужно подтверждение</span>
                                    </td>

                                    <td>
                                        <div class="" data-select2-id="select2-data-124-1">
                                            <!--begin::Select-->
                                            <select class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-control="select2" data-placeholder="Выбрать" data-hide-search="true" data-select2-id="select2-data-9-eavh2" tabindex="-1" aria-hidden="true" >
                                                <option value="2" selected="" data-select2-id="select2-data-11-9ouk22">
                                                    <svg class="icon">
                                                        <use xlink:href="#dodle-check"></use>
                                                    </svg>
                                                    Подтвердить
                                                </option>
                                                <option value="3" data-select2-id="select2-data-127-u51x2">
                                                    <svg class="icon">
                                                        <use xlink:href="#eye"></use>
                                                    </svg>
                                                    Посмотреть
                                                </option>
                                                <option value="4" selected="" data-select2-id="select2-data-11-9ouk2">
                                                    <svg class="icon">
                                                        <use xlink:href="#pencxil"></use>
                                                    </svg>
                                                    Редактировать
                                                </option>
                                                <option value="5" data-select2-id="select2-data-127-u51x2">
                                                    <svg class="icon">
                                                        <use xlink:href="#trush "></use>
                                                    </svg>
                                                    Удалить
                                                </option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="text-hover-primary text-gray-600">Магамедов Ибрагим Напрогибович</span>
                                        <span>
                                            Юридическое лицо
                                        </span>
                                    </td>

                                    <td>
                                        <span>
                                            2001085-NIC/D
                                        </span>
                                    </td>

                                    <td>
                                        <span class="badge badge-light fs-7 fw-bold">Идентифицирована</span>
                                    </td>

                                    <td>
                                        <div class="" data-select2-id="select2-data-124-2">
                                            <!--begin::Select-->
                                            <select class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-control="select2" data-placeholder="Выбрать" data-hide-search="true" data-select2-id="select2-data-9-eavh3" tabindex="-1" aria-hidden="true" >
                                                <option value="2" selected="" data-select2-id="select2-data-11-9ouk32">
                                                    <svg class="icon">
                                                        <use xlink:href="#dodle-check"></use>
                                                    </svg>
                                                    Подтвердить
                                                </option>
                                                <option value="3" data-select2-id="select2-data-127-u51x3">
                                                    <svg class="icon">
                                                        <use xlink:href="#eye"></use>
                                                    </svg>
                                                    Посмотреть
                                                </option>
                                                <option value="4" selected="" data-select2-id="select2-data-11-9ouk3">
                                                    <svg class="icon">
                                                        <use xlink:href="#pencxil"></use>
                                                    </svg>
                                                    Редактировать
                                                </option>
                                                <option value="5" data-select2-id="select2-data-127-u51x33">
                                                    <svg class="icon">
                                                        <use xlink:href="#trush "></use>
                                                    </svg>
                                                    Удалить
                                                </option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                    </td>
                                </tr>

                                </tbody>
                                <!--end::Tbody-->
                            </table>
                            <!--end::Table-->
                        </div>
                    </div>
                    <!--end::Tab panel-->

                    <!--begin::Tab panel-->

                    <!--end::Tab panel-->
                </div>
                <!--end::Tab content-->
            </div>
            <!--end::Body-->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>