<template>
    <!--begin::Login sessions-->
    <div class="card mb-5 mb-lg-10" data-select2-id="select2-data-131-9b4c">
        <!--begin::Card header-->
        <div class="card-header" style="
    flex-wrap: nowrap;
">
            <!--begin::Heading-->

            <div class="input-group input-group-sm" style="
    flex: 0 0 240px;
">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username">
                <span class="input-group-text">
                                        <svg class="icon">
                                          <use xlink:href="#magnifier"></use>
                                        </svg>
                                    </span>

            </div><!--end::Heading-->

            <!--begin::Toolbar-->
            <div class="card-toolbar">
                <div class="my-1 me-4" data-select2-id="select2-data-124-nvfw">
                    <!--begin::Select-->
                    <select class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-control="select2" data-placeholder="Select Hours" data-hide-search="true" data-select2-id="select2-data-9-eavh" tabindex="-1" aria-hidden="true" >
                        <option value="1" selected="" data-select2-id="select2-data-11-9ouk">1 Hours</option>
                        <option value="2" data-select2-id="select2-data-127-u51x">6 Hours</option>
                        <option value="3" data-select2-id="select2-data-128-rzvx">12 Hours</option>
                        <option value="4" data-select2-id="select2-data-129-3qbr">24 Hours</option>
                    </select>
                </div>

                <a href="#" class="btn btn-sm btn-primary my-1">
                    View All
                </a>
            </div>
            <!--end::Toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body p-0">
            <!--begin::Table wrapper-->
            <div class="table-responsive">
                <!--begin::Table-->
                <table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
                    <!--begin::Thead-->
                    <thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
                    <tr>
                        <th class="min-w-250px">ПОЛЬЗОВАТЕЛИ</th>
                        <th class="min-w-100px">СТАТУС</th>
                        <th class="min-w-150px">РЕГИСТРАЦИЯ</th>
                        <th class="min-w-150px">ПОСЛЕДНИЙ ВХОД</th>
                        <th class="min-w-150px">ДЕЙСТВИЯ</th>
                    </tr>
                    </thead>
                    <!--end::Thead-->

                    <!--begin::Tbody-->
                    <tbody class="fw-6 fw-semibold text-gray-600">
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">USA(5)</a>
                        </td>

                        <td>
                            <span class="badge badge-light-success fs-7 fw-bold">OK</span>
                        </td>

                        <td>Chrome - Windows</td>

                        <td>236.125.56.78</td>

                        <td><div class="" data-select2-id="select2-data-124-nvfw">
                            <!--begin::Select-->
                            <select class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible" data-control="select2" data-placeholder="Выбрать" data-hide-search="true" data-select2-id="select2-data-9-eavh" tabindex="-1" aria-hidden="true" >
                                <option value="2" selected="" data-select2-id="select2-data-11-9ou2">Редактировать</option>
                                <option value="2" selected="" data-select2-id="select2-data-11-9ouk">Редактировать</option>
                                <option value="3" data-select2-id="select2-data-127-u51x">Удалить</option>
                            </select>
                            <!--end::Select-->
                        </div></td>
                    </tr>

                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Norway(-)</a>
                        </td>

                        <td>
                            <span class="badge badge-light-danger fs-7 fw-bold">ERR</span>
                        </td>

                        <td>Firefox - Windows</td>

                        <td>236.125.56.10</td>

                        <td>20 mins ago</td>
                    </tr>

                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Italy(5)</a>
                        </td>

                        <td>
                            <span class="badge badge-light-warning fs-7 fw-bold">WRN</span>
                        </td>

                        <td>Samsung Noted 5- Android</td>

                        <td>236.100.56.50</td>

                        <td>40 mins ago</td>
                    </tr>

                    </tbody>
                    <!--end::Tbody-->
                </table>
                <!--end::Table-->
            </div>
            <!--end::Table wrapper-->
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Login sessions-->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card .card-header {
    align-items: center;
}
</style>