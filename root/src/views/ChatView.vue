<template>
    <div class="app-main flex-column flex-row-fluid " id="kt_app_main">
        <div class="d-flex flex-column flex-column-fluid">
            <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">

                <!--begin::Toolbar container-->
                <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack ">


                    <!--begin::Page title-->
                    <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                        <!--begin::Title-->
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                            Чат с поддержкой
                        </h1>
                        <!--end::Title-->
                    </div>
                    <!--end::Page title-->
                    <!--begin::Actions-->
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
                        <!--begin::Primary button-->
                        <router-link to="/new-project" class="btn btn-lg fw-bold btn-primary">
                            <svg class="icon">
                                <use xlink:href="#plus"></use>
                            </svg>
                            Задать новый вопрос
                        </router-link>
                        <!--end::Primary button-->
                    </div>
                    <!--end::Actions-->
                </div>
                <!--end::Toolbar container-->
            </div>

            <div id="kt_app_content_container" class="app-container  container-xxl ">

            <div class="d-flex flex-column flex-lg-row">
                <!--begin::Sidebar-->
                <div class="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                    <!--begin::Contacts-->
                    <div class="card ">
                        <!--begin::Card header-->
                        <div class="card-header pt-7" id="kt_chat_contacts_header">
                            <!--begin::Form-->

                            <div class="card-title">
                                <!--begin::User-->
                                <div class="d-flex justify-content-center flex-column me-3">
                                    <div class="fs-4 fw-bold text-gray-900 me-1 mb-2 lh-1">Список чатов</div>

                                    <!--begin::Info-->

                                    <!--end::Info-->
                                </div>
                                <!--end::User-->
                            </div><!--end::Form-->
                        </div>
                        <!--end::Card header-->

                        <!--begin::Card body-->
                        <div class="card-body pt-5" id="kt_chat_contacts_body">
                            <!--begin::List-->
                            <div class="scroll-y me-n5 pe-5 h-200px h-lg-auto" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_toolbar, #kt_app_toolbar, #kt_footer, #kt_app_footer, #kt_chat_contacts_header" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_contacts_body" data-kt-scroll-offset="5px" style="max-height: 363px;">

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                            <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей стр...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">10:29</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                            <div class="fw-semibold text-muted">Добрый день, живут они вдали от всех, в бу...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">09:43</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                            <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей стр...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">10:29</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                            <div class="fw-semibold text-muted">Добрый день, живут они вдали от всех, в бу...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">09:43</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->
                                <!--end::User-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                            <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей стр...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">10:29</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                            <div class="fw-semibold text-muted">Добрый день, живут они вдали от всех, в бу...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">09:43</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№DW-2003</a>
                                            <div class="fw-semibold text-muted">Маленький ручеек Даль журчит по всей стр...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">10:29</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->

                                <!--begin::User-->
                                <div class="d-flex flex-stack py-4">
                                    <!--begin::Details-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Avatar--><div class="symbol  symbol-45px symbol-circle "><img src="https://dummyimage.com/48x48/b04cb0/cccee8.png&amp;text=avatar"></div><!--end::Avatar-->
                                        <!--begin::Details-->
                                        <div class="ms-5">
                                            <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">№AE-0893</a>
                                            <div class="fw-semibold text-muted">Добрый день, живут они вдали от всех, в бу...</div>
                                        </div>
                                        <!--end::Details-->
                                    </div>
                                    <!--end::Details-->

                                    <!--begin::Lat seen-->
                                    <div class="d-flex flex-column align-items-end ms-2">
                                        <span class="text-muted fs-7 mb-1">09:43</span>


                                    </div>
                                    <!--end::Lat seen-->
                                </div>
                                <!--end::User-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed d-none"></div>
                                <!--end::Separator-->


                            </div>
                            <!--end::List-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Contacts-->    </div>
                <!--end::Sidebar-->

                <!--begin::Content-->
                <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                    <!--begin::Messenger-->
                    <div class="card" id="kt_chat_messenger">
                        <!--begin::Card header-->
                        <div class="card-header" id="kt_chat_messenger_header">
                            <!--begin::Title-->
                            <div class="card-title">
                                <!--begin::User-->
                                <div class="d-flex justify-content-center flex-column me-3">
                                    <div class="fs-4 fw-bold text-gray-900 me-1 mb-2 lh-1">Обращение №AE-0893</div>

                                    <!--begin::Info-->

                                    <!--end::Info-->
                                </div>
                                <!--end::User-->
                            </div>
                            <!--end::Title-->

                            <!--begin::Card toolbar-->
                            <div class="card-toolbar">
                                <!--begin::Menu-->
                                <div class="me-n3">
                                    <button class="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i class="ki-duotone ki-dots-square fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>                </button>

                                    <!--begin::Menu 3-->
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true" style="">
                                        <!--begin::Heading-->









                                        <!--end::Menu item-->

                                        <!--begin::Menu item-->



                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3 my-1">
                                            <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon">Закрыть вопрос</a>
                                        </div>
                                        <!--end::Menu item-->
                                    </div>
                                    <!--end::Menu 3-->
                                </div>
                                <!--end::Menu-->
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end::Card header-->

                        <!--begin::Card body-->
                        <div class="card-body" id="kt_chat_messenger_body">
                            <!--begin::Messages-->
                            <div class="scroll-y me-n5 pe-5 h-300px h-lg-auto" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body" data-kt-scroll-offset="5px" style="max-height: 215px;">



                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна Иванова</a>
                                                <span class="text-muted fs-7 mb-1">2 mins</span>
                                            </div>
                                            <!--end::Details-->

                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                                            How likely are you to recommend our company to your friends and family ?            </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->

                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">5 mins</span>
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">Надежда Селезнева</a>
                                            </div>
                                            <!--end::Details-->

                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                                            Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.            </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->

                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна Иванова</a>
                                                <span class="text-muted fs-7 mb-1">1 Hour</span>
                                            </div>
                                            <!--end::Details-->

                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                                            Ok, Understood!            </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->

                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">2 Hours</span>
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">Надежда Селезнева</a>
                                            </div>
                                            <!--end::Details-->

                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                                            You’ll receive notifications for all issues, pull requests!            </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->

                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна Иванова</a>
                                                <span class="text-muted fs-7 mb-1">3 Hours</span>
                                            </div>
                                            <!--end::Details-->

                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Специалист техподдержки Татьяна, уточните ваш вопрос            </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->

                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">2 мин. назад</span>
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">Надежда Селезнева</a>
                                            </div>
                                            <!--end::Details-->

                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты?</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->

                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10 ">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Татьяна Иванова</a>
                                                <span class="text-muted fs-7 mb-1">1 мин. назад</span>
                                            </div>
                                            <!--end::Details-->

                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Добрый день, живут они вдали от всех, в буквенных домах на берегу Семантика большого языкового океана.</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->

                                <!--begin::Message(template for out)-->
                                <div class="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">Just now</span>
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->

                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                                        </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(template for out)-->

                                <!--begin::Message(template for in)-->
                                <div class="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar--><div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="https://dummyimage.com/48x48/b04cb0/ffffff.png&text=A"></div><!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">Just now</span>
                                            </div>
                                            <!--end::Details-->

                                        </div>
                                        <!--end::User-->

                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                                            Right before vacation season we have the next Big Deal for you.            </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(template for in)-->
                            </div>
                            <!--end::Messages-->
                        </div>
                        <!--end::Card body-->

                        <!--begin::Card footer-->
                        <div class="card-footer pt-4" id="kt_chat_messenger_footer">
                            <!--begin::Input-->
                            <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message" style="height: 26px;">
        </textarea>
                            <!--end::Input-->

                            <!--begin:Toolbar-->
                            <div class="d-flex flex-stack">
                                <!--begin::Actions-->
                                <div class="d-flex align-items-center me-2">
                                    <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" aria-label="Coming soon" data-bs-original-title="Coming soon" data-kt-initialized="1">
                                        <i class="ki-duotone ki-paper-clip fs-3"></i>                </button>
                                    <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" aria-label="Coming soon" data-bs-original-title="Coming soon" data-kt-initialized="1">
                                        <i class="ki-duotone ki-exit-up fs-3"><span class="path1"></span><span class="path2"></span></i>                </button>
                                </div>
                                <!--end::Actions-->

                                <!--begin::Send-->
                                <button class="btn btn-primary" type="button" data-kt-element="send">Send</button>
                                <!--end::Send-->
                            </div>
                            <!--end::Toolbar-->
                        </div>
                        <!--end::Card footer-->
                    </div>
                    <!--end::Messenger-->    </div>
                <!--end::Content-->
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