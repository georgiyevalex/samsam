<template>
    <div class="card mb-5 mb-lg-10">
        <div class="card-header">
            <div class="card-title">
                <h3>История оплат</h3>
            </div>
        </div>
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
                    <thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
                    <tr>
                        <th class="min-w-250px">ID ОПЛАТЫ</th>
                        <th class="min-w-150px">СУММА ОПЛАТЫ</th>
                        <th class="min-w-150px">ДАТА ОПЛАТЫ</th>
                        <th class="min-w-100px">РЕЗУЛЬТАТ</th>
                    </tr>
                    </thead>
                    <tbody class="fw-6 fw-semibold text-gray-600">
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">56037-XDER-PO90-8929</a>
                        </td>
                        <td>8 990 р.</td>
                        <td>12 июля 2023, 08:54</td>
                        <td>
                            <span class="badge badge-light-success fs-7 fw-bold">Готово</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">05822-FXSP-ZZ21-09U9</a>
                        </td>
                        <td>12 500 р.</td>
                        <td>25 июня 2022, 11:02</td>
                        <td>
                            <span class="badge badge-light-danger fs-7 fw-bold">Ошибка</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="text-hover-primary text-gray-600">4472-QREX-9SD0-13WQ</a>
                        </td>
                        <td>8 990 р.</td>
                        <td>4 января  2022, 00:05</td>
                        <td>
                            <span class="badge badge-light-warning fs-7 fw-bold">В обработке</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
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