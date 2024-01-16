<template>
    <div class="app-main flex-column flex-row-fluid " id="kt_app_main">
        <div class="d-flex flex-column flex-column-fluid">
            <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">
                <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack ">
                    <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                            Чат с поддержкой
                        </h1>
                    </div>
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
                        <router-link to="/new-project" class="btn btn-lg fw-bold btn-primary">
                            <svg class="icon">
                                <use xlink:href="#plus"></use>
                            </svg>
                            Задать новый вопрос
                        </router-link>
                    </div>
                </div>
            </div>
            <div id="kt_app_content_container" class="app-container  container-xxl ">
                <div class="d-flex flex-column flex-lg-row">
                    <div class="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                        <div class="card ">
                            <div class="card-header pt-7" id="kt_chat_contacts_header">
                                <div class="card-title">
                                    <div class="d-flex justify-content-center flex-column me-3">
                                        <div class="fs-4 fw-bold text-gray-900 me-1 mb-2 lh-1">Список чатов</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-5" id="kt_chat_contacts_body">
                                <div class="scroll-y me-n5 pe-5 h-200px h-lg-auto" data-kt-scroll="true"
                                     data-kt-scroll-activate="{default: false, lg: true}"
                                     data-kt-scroll-max-height="auto"
                                     data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_toolbar, #kt_app_toolbar, #kt_footer, #kt_app_footer, #kt_chat_contacts_header"
                                     data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_contacts_body"
                                     data-kt-scroll-offset="5px" style="max-height: 363px;">
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                                <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей
                                                    стр...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">10:29</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar">
                                            </div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                                <div class="fw-semibold text-muted">Добрый день, живут они вдали от
                                                    всех, в бу...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">09:43</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                                <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей
                                                    стр...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">10:29</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar">
                                            </div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                                <div class="fw-semibold text-muted">Добрый день, живут они вдали от
                                                    всех, в бу...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">09:43</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                                <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей
                                                    стр...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">10:29</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar">
                                            </div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                                <div class="fw-semibold text-muted">Добрый день, живут они вдали от
                                                    всех, в бу...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">09:43</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                                <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей
                                                    стр...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">10:29</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                    <div class="d-flex flex-stack py-4">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol  symbol-45px symbol-circle "><img
                                                    src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar">
                                            </div>
                                            <div class="ms-5">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                                <div class="fw-semibold text-muted">Добрый день, живут они вдали от
                                                    всех, в бу...
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end ms-2">
                                            <span class="text-muted fs-7 mb-1">09:43</span>
                                        </div>
                                    </div>
                                    <div class="separator separator-dashed d-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                        <div class="card" id="kt_chat_messenger">
                            <div class="card-header" id="kt_chat_messenger_header">
                                <div class="card-title">
                                    <div class="d-flex justify-content-center flex-column me-3">
                                        <div class="fs-4 fw-bold text-gray-900 me-1 mb-2 lh-1">Обращение №AE-0893</div>
                                    </div>
                                </div>
                                <div class="card-toolbar">
                                    <div class="me-n3">
                                        <button class="btn btn-sm btn-icon btn-active-light-primary"
                                                data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i class="ki-duotone ki-dots-square fs-2"><span class="path1"></span><span
                                                    class="path2"></span><span class="path3"></span><span
                                                    class="path4"></span></i></button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                             data-kt-menu="true" style="">
                                            <div class="menu-item px-3 my-1">
                                                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip"
                                                   data-bs-original-title="Coming soon">Закрыть вопрос</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" id="kt_chat_messenger_body">
                                <div class="scroll-y me-n5 pe-5 h-300px h-lg-auto" data-kt-element="messages"
                                     data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                     data-kt-scroll-max-height="auto"
                                     data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
                                     data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body"
                                     data-kt-scroll-offset="5px" style="max-height: 215px;">
                                    <div class="d-flex justify-content-start mb-10 ">
                                        <div class="d-flex flex-column align-items-start">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                                <div class="ms-3">
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна
                                                        Иванова</a>
                                                    <span class="text-muted fs-7 mb-1">2 mins</span>
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                 data-kt-element="message-text">
                                                How likely are you to recommend our company to your friends and family ?
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-10 ">
                                        <div class="d-flex flex-column align-items-end">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-3">
                                                    <span class="text-muted fs-7 mb-1">5 mins</span>
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">Надежда
                                                        Селезнева</a>
                                                </div>
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                 data-kt-element="message-text">
                                                Hey there, we’re just writing to let you know that you’ve been
                                                subscribed to a repository on GitHub.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-10 ">
                                        <div class="d-flex flex-column align-items-start">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                                <div class="ms-3">
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна
                                                        Иванова</a>
                                                    <span class="text-muted fs-7 mb-1">1 Hour</span>
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                 data-kt-element="message-text">
                                                Ok, Understood!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-10 ">
                                        <div class="d-flex flex-column align-items-end">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-3">
                                                    <span class="text-muted fs-7 mb-1">2 Hours</span>
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">Надежда
                                                        Селезнева</a>
                                                </div>
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                 data-kt-element="message-text">
                                                You’ll receive notifications for all issues, pull requests!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-10 ">
                                        <div class="d-flex flex-column align-items-start">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                                <div class="ms-3">
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна
                                                        Иванова</a>
                                                    <span class="text-muted fs-7 mb-1">3 Hours</span>
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                 data-kt-element="message-text">Специалист техподдержки Татьяна,
                                                уточните ваш вопрос
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-10 ">
                                        <div class="d-flex flex-column align-items-end">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-3">
                                                    <span class="text-muted fs-7 mb-1">2 мин. назад</span>
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">Надежда
                                                        Селезнева</a>
                                                </div>
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                 data-kt-element="message-text">Далеко-далеко за словесными горами в
                                                стране гласных и согласных живут рыбные тексты?
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-10 ">
                                        <div class="d-flex flex-column align-items-start">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                                <div class="ms-3">
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна
                                                        Иванова</a>
                                                    <span class="text-muted fs-7 mb-1">1 мин. назад</span>
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                 data-kt-element="message-text">Добрый день, живут они вдали от всех, в
                                                буквенных домах на берегу Семантика большого языкового океана.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                                        <div class="d-flex flex-column align-items-end">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-3">
                                                    <span class="text-muted fs-7 mb-1">Just now</span>
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                                </div>
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                 data-kt-element="message-text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-10 d-none"
                                         data-kt-element="template-in">
                                        <div class="d-flex flex-column align-items-start">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="symbol  symbol-35px symbol-circle "><img alt="Pic"
                                                                                                     src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A">
                                                </div>
                                                <div class="ms-3">
                                                    <a href="#"
                                                       class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian
                                                        Cox</a>
                                                    <span class="text-muted fs-7 mb-1">Just now</span>
                                                </div>
                                            </div>
                                            <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                 data-kt-element="message-text">
                                                Right before vacation season we have the next Big Deal for you.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer pt-4" id="kt_chat_messenger_footer">
                                <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input"
                                          placeholder="Type a message" style="height: 26px;">
        </textarea>
                                <div class="d-flex flex-stack">
                                    <div class="d-flex align-items-center me-2">
                                        <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button"
                                                data-bs-toggle="tooltip" aria-label="Coming soon"
                                                data-bs-original-title="Coming soon" data-kt-initialized="1">
                                            <i class="ki-duotone ki-paper-clip fs-3"></i></button>
                                        <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button"
                                                data-bs-toggle="tooltip" aria-label="Coming soon"
                                                data-bs-original-title="Coming soon" data-kt-initialized="1">
                                            <i class="ki-duotone ki-exit-up fs-3"><span class="path1"></span><span
                                                    class="path2"></span></i></button>
                                    </div>
                                    <button class="btn btn-primary" type="button" data-kt-element="send">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
</style>