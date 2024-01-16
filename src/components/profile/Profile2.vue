<template>
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_connected_accounts" aria-expanded="true" aria-controls="kt_account_connected_accounts">
            <div class="card-title m-0">
                <h3 class="fw-bold m-0">Аккаунты</h3>
            </div>
        </div>
        <div id="kt_account_settings_connected_accounts" class="collapse show">
            <div class="card-body border-top p-9">
                <div class="py-2">
                    <div class="d-flex flex-stack">
                        <div class="d-flex">
                            <img src="/src/assets/images/profile/google.svg" class="w-30px me-6" alt="">
                            <div class="d-flex flex-column">
                                <a href="#" class="fs-5 text-gray-900 text-hover-primary fw-bold">Google</a>
                                <div class="fs-6 fw-semibold text-gray-500">s.dmitriy.90@gmail.com</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="form-check form-check-solid form-check-custom form-switch">
                                <input class="form-check-input w-45px h-30px" type="checkbox" id="googleswitch" checked="">
                                <label class="form-check-label" for="googleswitch"></label>
                            </div>
                        </div>
                    </div>
                    <div class="separator separator-dashed my-5"></div>
                    <div class="d-flex flex-stack">
                        <div class="d-flex">
                            <img src="/src/assets/images/profile/google.svg" class="w-30px me-6" alt="">
                            <div class="d-flex flex-column">
                                <a href="#" class="fs-5 text-gray-900 text-hover-primary fw-bold">Google</a>
                                <div class="fs-6 fw-semibold text-gray-500">sapmleloooongname@gmail.com</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="form-check form-check-solid form-check-custom form-switch">
                                <input class="form-check-input w-45px h-30px" type="checkbox" id="githubswitch" checked="">
                                <label class="form-check-label" for="githubswitch"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button class="btn btn-primary">Добавить аккаунт</button>
            </div>
        </div>
    </div>
    <div class="card mb-5 mb-xl-10">
        <div class="card-header">
            <div class="card-title">
                <h3>История сессий</h3>
            </div>
            <div class="card-toolbar">
                <div class="my-1 me-4" data-select2-id="select2-data-127-12uz">
                    <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" class="btn btn-sm btn-light d-flex align-items-center px-4">
                        <div class="text-gray-600 fw-bold">10 Dec 2023 - 16 Dec 2023</div>
                        <i class="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
                            <svg class="icon">
                                <use xlink:href="#calendar"></use>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9 mb-0">
                    <thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
                    <tr>
                        <th class="min-w-250px">Локация</th>
                        <th class="min-w-150px">Устройство</th>
                        <th class="min-w-150px">IP-адрес</th>
                        <th class="min-w-150px">Время входа</th>
                        <th class="min-w-150px">Продолжительность</th>
                    </tr>
                    </thead>
                    <tbody class="fw-6 fw-semibold text-gray-600">
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Москва, Россия</a>
                        </td>
                        <td>Chrome - Windows</td>
                        <td>236.125.56.78</td>
                        <td>2 мин. назад</td>
                        <td>1 мин.</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Москва, Россия</a>
                        </td>
                        <td>Safari - Mac OS</td>
                        <td>236.125.56.78</td>
                        <td>Вчера 12:03</td>
                        <td>10 мин.</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Санкт-Петербург, Россия</a>
                        </td>
                        <td>Firefox - Windows</td>
                        <td>236.125.56.10</td>
                        <td>20.01.2023 23:10</td>
                        <td>2 ч. 18 мин</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Ташкент, Узбекистан</a>
                        </td>
                        <td>iOS - iPhone Pro</td>
                        <td>236.125.56.54</td>
                        <td>20.01.2023 18:39</td>
                        <td>1 ч. 29 мин</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">Великий Примерногорск, Р..</a>
                        </td>
                        <td>Samsung Noted 5- Android</td>
                        <td>236.100.56.50</td>
                        <td>01.01.2023 00:16</td>
                        <td>4 ч. 50 мин</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between border-top-1 card-footer">
            <div class="">
                <select class="form-select form-select-sm form-select-solid w-125px" data-control="select2" data-placeholder="Select Hours" data-hide-search="true">
                    <option value="1" selected>5</option>
                    <option value="2">10</option>
                    <option value="3">15</option>
                    <option value="4">20</option>
                    <option value="4">20</option>
                </select>
            </div>
            <ul class="pagination">
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
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>