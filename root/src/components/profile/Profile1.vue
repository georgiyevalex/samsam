<template>
    <!--begin::Basic info-->
    <div class="card mb-5 mb-xl-10" data-select2-id="select2-data-134-60w6">
        <!--begin::Card header-->
        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
            <!--begin::Card title-->
            <div class="card-title m-0">
                <h3 class="fw-bold m-0">Редактировать профиль</h3>
            </div>
            <!--end::Card title-->
        </div>
        <!--begin::Card header-->

        <!--begin::Content-->
        <div id="kt_account_settings_profile_details" class="collapse show" data-select2-id="select2-data-kt_account_settings_profile_details">
            <!--begin::Form-->
            <form id="kt_account_profile_details_form" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" data-select2-id="select2-data-kt_account_profile_details_form">
                <!--begin::Card body-->
                <div class="card-body border-top p-9">
                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6">Аватар:</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8">
                            <!--begin::Image input-->
                            <div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url('/src/assets/images/profile/blank.svg')">
                                <!--begin::Preview existing avatar-->
                                <div class="image-input-wrapper w-125px h-125px" style="background-image: url(https://dummyimage.com/120x120/b04cb0/ffffff.png&text=A)"></div>
                                <!--end::Preview existing avatar-->

                                <!--begin::Label-->
                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" aria-label="Change avatar" data-bs-original-title="Change avatar" >
                                    <i class="ki-duotone ki-pencil fs-7"><span class="path1"></span><span class="path2"></span></i>
                                    <!--begin::Inputs-->
                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg">
                                    <input type="hidden" name="avatar_remove">
                                    <!--end::Inputs-->
                                </label>
                                <!--end::Label-->

                                <!--begin::Cancel-->
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" aria-label="Cancel avatar" data-bs-original-title="Cancel avatar" >
                                <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>                            </span>
                                <!--end::Cancel-->

                                <!--begin::Remove-->
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" aria-label="Remove avatar" data-bs-original-title="Remove avatar" >
                                <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>                            </span>
                                <!--end::Remove-->
                            </div>
                            <!--end::Image input-->

                            <!--begin::Hint-->
                            <div class="form-text">Загрузите изображения в формате: png, jpg, jpeg</div>
                            <!--end::Hint-->
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">ФИО:</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8">
                            <!--begin::Row-->
                            <div class="row">
                                <!--begin::Col-->
                                <div class="col-lg-6 fv-row fv-plugins-icon-container">
                                    <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value="Селезнева">
                                    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                <!--end::Col-->

                                <!--begin::Col-->
                                <div class="col-lg-6 fv-row fv-plugins-icon-container">
                                    <input type="text" name="lname" class="form-control form-control-lg form-control-solid" placeholder="Last name" value="Надежда">
                                    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Компания:</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row fv-plugins-icon-container">
                            <input type="text" name="company" class="form-control form-control-lg form-control-solid" placeholder="Например: ООО Дизайн система" value="">
                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6">
                            <span class="required">Телефоны:</span>


                        </label>
                        <!--end::Label-->

                        <div class="col-lg-4 fv-row fv-plugins-icon-container">
                            <input type="tel" name="phone" class="form-control form-control-lg form-control-solid" placeholder="Phone number" value="044 3276 454 935">
                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div><!--begin::Col-->
                        <div class="col-lg-4 fv-row fv-plugins-icon-container">
                            <input type="tel" name="phone" class="form-control form-control-lg form-control-solid" placeholder="Дополнительный телефон (опционально)" value="">
                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6">E-mail:</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <input type="text" name="website" class="form-control form-control-lg form-control-solid" placeholder="e-mail" value="nadya@ya.ru">
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->

                    <!--end::Input group-->

                    <div class="row mb-6">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Выбрать язык:</label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row fv-plugins-icon-container" data-select2-id="select2-data-133-tewp">
                            <!--begin::Input-->
                            <select name="language" aria-label="Select a Language" data-control="select2" data-placeholder="Select a language..." class="form-select form-select-solid form-select-lg select2-hidden-accessible" data-select2-id="select2-data-12-kxju" tabindex="-1" aria-hidden="true" >
                                <option value="" data-select2-id="select2-data-14-5zhp">Select a Language...</option>
                                <option data-kt-flag="flags/indonesia.svg" value="id" data-select2-id="select2-data-136-d4kl">Bahasa Indonesia - Indonesian</option>
                                <option data-kt-flag="flags/malaysia.svg" value="msa" data-select2-id="select2-data-137-06pl">Bahasa Melayu - Malay</option>
                                <option data-kt-flag="flags/canada.svg" value="ca" data-select2-id="select2-data-138-jlnm">Català - Catalan</option>
                                <option data-kt-flag="flags/czech-republic.svg" value="cs" data-select2-id="select2-data-139-kg2z">Čeština - Czech</option>
                                <option data-kt-flag="flags/netherlands.svg" value="da" data-select2-id="select2-data-140-ki40">Dansk - Danish</option>
                                <option data-kt-flag="flags/germany.svg" value="de" data-select2-id="select2-data-141-oiws">Deutsch - German</option>
                                <option data-kt-flag="flags/united-kingdom.svg" value="en" data-select2-id="select2-data-142-vx5n">English</option>
                                <option data-kt-flag="flags/united-kingdom.svg" value="en-gb" data-select2-id="select2-data-143-2tmf">English UK - British English</option>
                                <option data-kt-flag="flags/spain.svg" value="es" data-select2-id="select2-data-144-aq0n">Español - Spanish</option>
                                <option data-kt-flag="flags/philippines.svg" value="fil" data-select2-id="select2-data-145-p47q">Filipino</option>
                                <option data-kt-flag="flags/france.svg" value="fr" data-select2-id="select2-data-146-lbwe">Français - French</option>
                                <option data-kt-flag="flags/gabon.svg" value="ga" data-select2-id="select2-data-147-xoxo">Gaeilge - Irish (beta)</option>
                                <option data-kt-flag="flags/greenland.svg" value="gl" data-select2-id="select2-data-148-loq8">Galego - Galician (beta)</option>
                                <option data-kt-flag="flags/croatia.svg" value="hr" data-select2-id="select2-data-149-o7fq">Hrvatski - Croatian</option>
                                <option data-kt-flag="flags/italy.svg" value="it" data-select2-id="select2-data-150-uinb">Italiano - Italian</option>
                                <option data-kt-flag="flags/hungary.svg" value="hu" data-select2-id="select2-data-151-u3wg">Magyar - Hungarian</option>
                                <option data-kt-flag="flags/netherlands.svg" value="nl" data-select2-id="select2-data-152-pd7p">Nederlands - Dutch</option>
                                <option data-kt-flag="flags/norway.svg" value="no" data-select2-id="select2-data-153-lbsn">Norsk - Norwegian</option>
                                <option data-kt-flag="flags/poland.svg" value="pl" data-select2-id="select2-data-154-ca7k">Polski - Polish</option>
                                <option data-kt-flag="flags/portugal.svg" value="pt" data-select2-id="select2-data-155-to2r">Português - Portuguese</option>
                                <option data-kt-flag="flags/romania.svg" value="ro" data-select2-id="select2-data-156-o24s">Română - Romanian</option>
                                <option data-kt-flag="flags/slovakia.svg" value="sk" data-select2-id="select2-data-157-v4oq">Slovenčina - Slovak</option>
                                <option data-kt-flag="flags/finland.svg" value="fi" data-select2-id="select2-data-158-14kb">Suomi - Finnish</option>
                                <option data-kt-flag="flags/el-salvador.svg" value="sv" data-select2-id="select2-data-159-ug2v">Svenska - Swedish</option>
                                <option data-kt-flag="flags/virgin-islands.svg" value="vi" data-select2-id="select2-data-160-2zoh">Tiếng Việt - Vietnamese</option>
                                <option data-kt-flag="flags/turkey.svg" value="tr" data-select2-id="select2-data-161-qz7g">Türkçe - Turkish</option>
                                <option data-kt-flag="flags/greece.svg" value="el" data-select2-id="select2-data-162-esa2">Ελληνικά - Greek</option>
                                <option data-kt-flag="flags/bulgaria.svg" value="bg" data-select2-id="select2-data-163-bv4z">Български език - Bulgarian</option>
                                <option data-kt-flag="flags/russia.svg" value="ru" data-select2-id="select2-data-164-0r7s">Русский - Russian</option>
                                <option data-kt-flag="flags/suriname.svg" value="sr" data-select2-id="select2-data-165-o4qn">Српски - Serbian</option>
                                <option data-kt-flag="flags/ukraine.svg" value="uk" data-select2-id="select2-data-166-uly8">Українська мова - Ukrainian</option>
                                <option data-kt-flag="flags/israel.svg" value="he" data-select2-id="select2-data-167-auyx">עִבְרִית - Hebrew</option>
                                <option data-kt-flag="flags/pakistan.svg" value="ur" data-select2-id="select2-data-168-4a8h">اردو - Urdu (beta)</option>
                                <option data-kt-flag="flags/argentina.svg" value="ar" data-select2-id="select2-data-169-5uxy">العربية - Arabic</option>
                                <option data-kt-flag="flags/argentina.svg" value="fa" data-select2-id="select2-data-170-y7z9">فارسی - Persian</option>
                                <option data-kt-flag="flags/mauritania.svg" value="mr" data-select2-id="select2-data-171-7qse">मराठी - Marathi</option>
                                <option data-kt-flag="flags/india.svg" value="hi" data-select2-id="select2-data-172-aknf">हिन्दी - Hindi</option>
                                <option data-kt-flag="flags/bangladesh.svg" value="bn" data-select2-id="select2-data-173-5sh8">বাংলা - Bangla</option>
                                <option data-kt-flag="flags/guam.svg" value="gu" data-select2-id="select2-data-174-c4gq">ગુજરાતી - Gujarati</option>
                                <option data-kt-flag="flags/india.svg" value="ta" data-select2-id="select2-data-175-vtny">தமிழ் - Tamil</option>
                                <option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="kn" data-select2-id="select2-data-176-lck3">ಕನ್ನಡ - Kannada</option>
                                <option data-kt-flag="flags/thailand.svg" value="th" data-select2-id="select2-data-177-d0mk">ภาษาไทย - Thai</option>
                                <option data-kt-flag="flags/south-korea.svg" value="ko" data-select2-id="select2-data-178-vdrz">한국어 - Korean</option>
                                <option data-kt-flag="flags/japan.svg" value="ja" data-select2-id="select2-data-179-ria8">日本語 - Japanese</option>
                                <option data-kt-flag="flags/china.svg" value="zh-cn" data-select2-id="select2-data-180-puty">简体中文 - Simplified Chinese</option>
                                <option data-kt-flag="flags/taiwan.svg" value="zh-tw" data-select2-id="select2-data-181-h5pf">繁體中文 - Traditional Chinese</option>
                            </select>

                            <!--begin::Hint-->

                            <!--end::Hint-->
                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                        <!--end::Col-->
                    </div><!--begin::Input group-->

                    <!--end::Input group-->

                    <div class="row">
                        <!--begin::Label-->
                        <label class="col-lg-4 col-form-label fw-semibold fs-6">
                            <span class="required">Страна:</span>


                        </label>
                        <!--end::Label-->

                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row fv-plugins-icon-container" data-select2-id="select2-data-183-ont9">
                            <select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a country..." class="form-select form-select-solid form-select-lg fw-semibold select2-hidden-accessible" data-select2-id="select2-data-9-06q6" tabindex="-1" aria-hidden="true" >
                                <option value="" data-select2-id="select2-data-11-vvh1">Select a Country...</option>
                                <option data-kt-flag="flags/afghanistan.svg" value="AF" data-select2-id="select2-data-184-tufl">Afghanistan</option>
                                <option data-kt-flag="flags/aland-islands.svg" value="AX" data-select2-id="select2-data-185-l1r5">Aland Islands</option>
                                <option data-kt-flag="flags/albania.svg" value="AL" data-select2-id="select2-data-186-stme">Albania</option>
                                <option data-kt-flag="flags/algeria.svg" value="DZ" data-select2-id="select2-data-187-55zg">Algeria</option>
                                <option data-kt-flag="flags/american-samoa.svg" value="AS" data-select2-id="select2-data-188-5ye3">American Samoa</option>
                                <option data-kt-flag="flags/andorra.svg" value="AD" data-select2-id="select2-data-189-isu7">Andorra</option>
                                <option data-kt-flag="flags/angola.svg" value="AO" data-select2-id="select2-data-190-jjqr">Angola</option>
                                <option data-kt-flag="flags/anguilla.svg" value="AI" data-select2-id="select2-data-191-odqj">Anguilla</option>
                                <option data-kt-flag="flags/antigua-and-barbuda.svg" value="AG" data-select2-id="select2-data-192-zls4">Antigua and Barbuda</option>
                                <option data-kt-flag="flags/argentina.svg" value="AR" data-select2-id="select2-data-193-0ye1">Argentina</option>
                                <option data-kt-flag="flags/armenia.svg" value="AM" data-select2-id="select2-data-194-kt3m">Armenia</option>
                                <option data-kt-flag="flags/aruba.svg" value="AW" data-select2-id="select2-data-195-7efo">Aruba</option>
                                <option data-kt-flag="flags/australia.svg" value="AU" data-select2-id="select2-data-196-ejx5">Australia</option>
                                <option data-kt-flag="flags/austria.svg" value="AT" data-select2-id="select2-data-197-2lsx">Austria</option>
                                <option data-kt-flag="flags/azerbaijan.svg" value="AZ" data-select2-id="select2-data-198-0nej">Azerbaijan</option>
                                <option data-kt-flag="flags/bahamas.svg" value="BS" data-select2-id="select2-data-199-1ljc">Bahamas</option>
                                <option data-kt-flag="flags/bahrain.svg" value="BH" data-select2-id="select2-data-200-d7sr">Bahrain</option>
                                <option data-kt-flag="flags/bangladesh.svg" value="BD" data-select2-id="select2-data-201-incw">Bangladesh</option>
                                <option data-kt-flag="flags/barbados.svg" value="BB" data-select2-id="select2-data-202-vtye">Barbados</option>
                                <option data-kt-flag="flags/belarus.svg" value="BY" data-select2-id="select2-data-203-y2th">Belarus</option>
                                <option data-kt-flag="flags/belgium.svg" value="BE" data-select2-id="select2-data-204-leag">Belgium</option>
                                <option data-kt-flag="flags/belize.svg" value="BZ" data-select2-id="select2-data-205-i2bs">Belize</option>
                                <option data-kt-flag="flags/benin.svg" value="BJ" data-select2-id="select2-data-206-lk9q">Benin</option>
                                <option data-kt-flag="flags/bermuda.svg" value="BM" data-select2-id="select2-data-207-asrx">Bermuda</option>
                                <option data-kt-flag="flags/bhutan.svg" value="BT" data-select2-id="select2-data-208-46qr">Bhutan</option>
                                <option data-kt-flag="flags/bolivia.svg" value="BO" data-select2-id="select2-data-209-v35y">Bolivia, Plurinational State of</option>
                                <option data-kt-flag="flags/bonaire.svg" value="BQ" data-select2-id="select2-data-210-q3bi">Bonaire, Sint Eustatius and Saba</option>
                                <option data-kt-flag="flags/bosnia-and-herzegovina.svg" value="BA" data-select2-id="select2-data-211-eiza">Bosnia and Herzegovina</option>
                                <option data-kt-flag="flags/botswana.svg" value="BW" data-select2-id="select2-data-212-6jo4">Botswana</option>
                                <option data-kt-flag="flags/brazil.svg" value="BR" data-select2-id="select2-data-213-i1zf">Brazil</option>
                                <option data-kt-flag="flags/british-indian-ocean-territory.svg" value="IO" data-select2-id="select2-data-214-25ng">British Indian Ocean Territory</option>
                                <option data-kt-flag="flags/brunei.svg" value="BN" data-select2-id="select2-data-215-97kl">Brunei Darussalam</option>
                                <option data-kt-flag="flags/bulgaria.svg" value="BG" data-select2-id="select2-data-216-5sa1">Bulgaria</option>
                                <option data-kt-flag="flags/burkina-faso.svg" value="BF" data-select2-id="select2-data-217-h2z1">Burkina Faso</option>
                                <option data-kt-flag="flags/burundi.svg" value="BI" data-select2-id="select2-data-218-l1ou">Burundi</option>
                                <option data-kt-flag="flags/cambodia.svg" value="KH" data-select2-id="select2-data-219-w3ts">Cambodia</option>
                                <option data-kt-flag="flags/cameroon.svg" value="CM" data-select2-id="select2-data-220-62nn">Cameroon</option>
                                <option data-kt-flag="flags/canada.svg" value="CA" data-select2-id="select2-data-221-b3yf">Canada</option>
                                <option data-kt-flag="flags/cape-verde.svg" value="CV" data-select2-id="select2-data-222-kxex">Cape Verde</option>
                                <option data-kt-flag="flags/cayman-islands.svg" value="KY" data-select2-id="select2-data-223-wyi0">Cayman Islands</option>
                                <option data-kt-flag="flags/central-african-republic.svg" value="CF" data-select2-id="select2-data-224-pmky">Central African Republic</option>
                                <option data-kt-flag="flags/chad.svg" value="TD" data-select2-id="select2-data-225-y9d8">Chad</option>
                                <option data-kt-flag="flags/chile.svg" value="CL" data-select2-id="select2-data-226-emfr">Chile</option>
                                <option data-kt-flag="flags/china.svg" value="CN" data-select2-id="select2-data-227-l66f">China</option>
                                <option data-kt-flag="flags/christmas-island.svg" value="CX" data-select2-id="select2-data-228-xdl4">Christmas Island</option>
                                <option data-kt-flag="flags/cocos-island.svg" value="CC" data-select2-id="select2-data-229-u5l4">Cocos (Keeling) Islands</option>
                                <option data-kt-flag="flags/colombia.svg" value="CO" data-select2-id="select2-data-230-xd5r">Colombia</option>
                                <option data-kt-flag="flags/comoros.svg" value="KM" data-select2-id="select2-data-231-pnty">Comoros</option>
                                <option data-kt-flag="flags/cook-islands.svg" value="CK" data-select2-id="select2-data-232-el2x">Cook Islands</option>
                                <option data-kt-flag="flags/costa-rica.svg" value="CR" data-select2-id="select2-data-233-47td">Costa Rica</option>
                                <option data-kt-flag="flags/ivory-coast.svg" value="CI" data-select2-id="select2-data-234-qc3q">Côte d'Ivoire</option>
                                <option data-kt-flag="flags/croatia.svg" value="HR" data-select2-id="select2-data-235-8sew">Croatia</option>
                                <option data-kt-flag="flags/cuba.svg" value="CU" data-select2-id="select2-data-236-4wuk">Cuba</option>
                                <option data-kt-flag="flags/curacao.svg" value="CW" data-select2-id="select2-data-237-hkvc">Curaçao</option>
                                <option data-kt-flag="flags/czech-republic.svg" value="CZ" data-select2-id="select2-data-238-54fl">Czech Republic</option>
                                <option data-kt-flag="flags/denmark.svg" value="DK" data-select2-id="select2-data-239-hoik">Denmark</option>
                                <option data-kt-flag="flags/djibouti.svg" value="DJ" data-select2-id="select2-data-240-xerz">Djibouti</option>
                                <option data-kt-flag="flags/dominica.svg" value="DM" data-select2-id="select2-data-241-n2tj">Dominica</option>
                                <option data-kt-flag="flags/dominican-republic.svg" value="DO" data-select2-id="select2-data-242-kgoy">Dominican Republic</option>
                                <option data-kt-flag="flags/ecuador.svg" value="EC" data-select2-id="select2-data-243-wggf">Ecuador</option>
                                <option data-kt-flag="flags/egypt.svg" value="EG" data-select2-id="select2-data-244-57pn">Egypt</option>
                                <option data-kt-flag="flags/el-salvador.svg" value="SV" data-select2-id="select2-data-245-oz0r">El Salvador</option>
                                <option data-kt-flag="flags/equatorial-guinea.svg" value="GQ" data-select2-id="select2-data-246-xeak">Equatorial Guinea</option>
                                <option data-kt-flag="flags/eritrea.svg" value="ER" data-select2-id="select2-data-247-ibp8">Eritrea</option>
                                <option data-kt-flag="flags/estonia.svg" value="EE" data-select2-id="select2-data-248-hl6c">Estonia</option>
                                <option data-kt-flag="flags/ethiopia.svg" value="ET" data-select2-id="select2-data-249-jcij">Ethiopia</option>
                                <option data-kt-flag="flags/falkland-islands.svg" value="FK" data-select2-id="select2-data-250-o1xx">Falkland Islands (Malvinas)</option>
                                <option data-kt-flag="flags/fiji.svg" value="FJ" data-select2-id="select2-data-251-hg7n">Fiji</option>
                                <option data-kt-flag="flags/finland.svg" value="FI" data-select2-id="select2-data-252-73ur">Finland</option>
                                <option data-kt-flag="flags/france.svg" value="FR" data-select2-id="select2-data-253-3d1x">France</option>
                                <option data-kt-flag="flags/french-polynesia.svg" value="PF" data-select2-id="select2-data-254-wo8c">French Polynesia</option>
                                <option data-kt-flag="flags/gabon.svg" value="GA" data-select2-id="select2-data-255-yg4l">Gabon</option>
                                <option data-kt-flag="flags/gambia.svg" value="GM" data-select2-id="select2-data-256-6mxa">Gambia</option>
                                <option data-kt-flag="flags/georgia.svg" value="GE" data-select2-id="select2-data-257-9nwq">Georgia</option>
                                <option data-kt-flag="flags/germany.svg" value="DE" data-select2-id="select2-data-258-pxiy">Germany</option>
                                <option data-kt-flag="flags/ghana.svg" value="GH" data-select2-id="select2-data-259-xg14">Ghana</option>
                                <option data-kt-flag="flags/gibraltar.svg" value="GI" data-select2-id="select2-data-260-uabx">Gibraltar</option>
                                <option data-kt-flag="flags/greece.svg" value="GR" data-select2-id="select2-data-261-csr2">Greece</option>
                                <option data-kt-flag="flags/greenland.svg" value="GL" data-select2-id="select2-data-262-gd4k">Greenland</option>
                                <option data-kt-flag="flags/grenada.svg" value="GD" data-select2-id="select2-data-263-xifm">Grenada</option>
                                <option data-kt-flag="flags/guam.svg" value="GU" data-select2-id="select2-data-264-2nwe">Guam</option>
                                <option data-kt-flag="flags/guatemala.svg" value="GT" data-select2-id="select2-data-265-en3u">Guatemala</option>
                                <option data-kt-flag="flags/guernsey.svg" value="GG" data-select2-id="select2-data-266-c7jn">Guernsey</option>
                                <option data-kt-flag="flags/guinea.svg" value="GN" data-select2-id="select2-data-267-j9ah">Guinea</option>
                                <option data-kt-flag="flags/guinea-bissau.svg" value="GW" data-select2-id="select2-data-268-ifuk">Guinea-Bissau</option>
                                <option data-kt-flag="flags/haiti.svg" value="HT" data-select2-id="select2-data-269-0kxe">Haiti</option>
                                <option data-kt-flag="flags/vatican-city.svg" value="VA" data-select2-id="select2-data-270-z1a8">Holy See (Vatican City State)</option>
                                <option data-kt-flag="flags/honduras.svg" value="HN" data-select2-id="select2-data-271-03o9">Honduras</option>
                                <option data-kt-flag="flags/hong-kong.svg" value="HK" data-select2-id="select2-data-272-wobm">Hong Kong</option>
                                <option data-kt-flag="flags/hungary.svg" value="HU" data-select2-id="select2-data-273-q3k0">Hungary</option>
                                <option data-kt-flag="flags/iceland.svg" value="IS" data-select2-id="select2-data-274-j39d">Iceland</option>
                                <option data-kt-flag="flags/india.svg" value="IN" data-select2-id="select2-data-275-xq46">India</option>
                                <option data-kt-flag="flags/indonesia.svg" value="ID" data-select2-id="select2-data-276-a0dl">Indonesia</option>
                                <option data-kt-flag="flags/iran.svg" value="IR" data-select2-id="select2-data-277-s7u4">Iran, Islamic Republic of</option>
                                <option data-kt-flag="flags/iraq.svg" value="IQ" data-select2-id="select2-data-278-we83">Iraq</option>
                                <option data-kt-flag="flags/ireland.svg" value="IE" data-select2-id="select2-data-279-r64o">Ireland</option>
                                <option data-kt-flag="flags/isle-of-man.svg" value="IM" data-select2-id="select2-data-280-lznf">Isle of Man</option>
                                <option data-kt-flag="flags/israel.svg" value="IL" data-select2-id="select2-data-281-dtya">Israel</option>
                                <option data-kt-flag="flags/italy.svg" value="IT" data-select2-id="select2-data-282-2hm6">Italy</option>
                                <option data-kt-flag="flags/jamaica.svg" value="JM" data-select2-id="select2-data-283-xppi">Jamaica</option>
                                <option data-kt-flag="flags/japan.svg" value="JP" data-select2-id="select2-data-284-ucla">Japan</option>
                                <option data-kt-flag="flags/jersey.svg" value="JE" data-select2-id="select2-data-285-nyzu">Jersey</option>
                                <option data-kt-flag="flags/jordan.svg" value="JO" data-select2-id="select2-data-286-qm3a">Jordan</option>
                                <option data-kt-flag="flags/kazakhstan.svg" value="KZ" data-select2-id="select2-data-287-s6cn">Kazakhstan</option>
                                <option data-kt-flag="flags/kenya.svg" value="KE" data-select2-id="select2-data-288-bhgt">Kenya</option>
                                <option data-kt-flag="flags/kiribati.svg" value="KI" data-select2-id="select2-data-289-rn4q">Kiribati</option>
                                <option data-kt-flag="flags/north-korea.svg" value="KP" data-select2-id="select2-data-290-23bn">Korea, Democratic People's Republic of</option>
                                <option data-kt-flag="flags/kuwait.svg" value="KW" data-select2-id="select2-data-291-6ijd">Kuwait</option>
                                <option data-kt-flag="flags/kyrgyzstan.svg" value="KG" data-select2-id="select2-data-292-4cu3">Kyrgyzstan</option>
                                <option data-kt-flag="flags/laos.svg" value="LA" data-select2-id="select2-data-293-5xhu">Lao People's Democratic Republic</option>
                                <option data-kt-flag="flags/latvia.svg" value="LV" data-select2-id="select2-data-294-8izh">Latvia</option>
                                <option data-kt-flag="flags/lebanon.svg" value="LB" data-select2-id="select2-data-295-uhe3">Lebanon</option>
                                <option data-kt-flag="flags/lesotho.svg" value="LS" data-select2-id="select2-data-296-tb50">Lesotho</option>
                                <option data-kt-flag="flags/liberia.svg" value="LR" data-select2-id="select2-data-297-ospv">Liberia</option>
                                <option data-kt-flag="flags/libya.svg" value="LY" data-select2-id="select2-data-298-cnyz">Libya</option>
                                <option data-kt-flag="flags/liechtenstein.svg" value="LI" data-select2-id="select2-data-299-tuy6">Liechtenstein</option>
                                <option data-kt-flag="flags/lithuania.svg" value="LT" data-select2-id="select2-data-300-x5ay">Lithuania</option>
                                <option data-kt-flag="flags/luxembourg.svg" value="LU" data-select2-id="select2-data-301-mf2q">Luxembourg</option>
                                <option data-kt-flag="flags/macao.svg" value="MO" data-select2-id="select2-data-302-2c2e">Macao</option>
                                <option data-kt-flag="flags/madagascar.svg" value="MG" data-select2-id="select2-data-303-r3r0">Madagascar</option>
                                <option data-kt-flag="flags/malawi.svg" value="MW" data-select2-id="select2-data-304-7knn">Malawi</option>
                                <option data-kt-flag="flags/malaysia.svg" value="MY" data-select2-id="select2-data-305-cn7d">Malaysia</option>
                                <option data-kt-flag="flags/maldives.svg" value="MV" data-select2-id="select2-data-306-fmxj">Maldives</option>
                                <option data-kt-flag="flags/mali.svg" value="ML" data-select2-id="select2-data-307-kav6">Mali</option>
                                <option data-kt-flag="flags/malta.svg" value="MT" data-select2-id="select2-data-308-1bca">Malta</option>
                                <option data-kt-flag="flags/marshall-island.svg" value="MH" data-select2-id="select2-data-309-ox3l">Marshall Islands</option>
                                <option data-kt-flag="flags/martinique.svg" value="MQ" data-select2-id="select2-data-310-m70t">Martinique</option>
                                <option data-kt-flag="flags/mauritania.svg" value="MR" data-select2-id="select2-data-311-jf2p">Mauritania</option>
                                <option data-kt-flag="flags/mauritius.svg" value="MU" data-select2-id="select2-data-312-aq5x">Mauritius</option>
                                <option data-kt-flag="flags/mexico.svg" value="MX" data-select2-id="select2-data-313-pdz1">Mexico</option>
                                <option data-kt-flag="flags/micronesia.svg" value="FM" data-select2-id="select2-data-314-aef3">Micronesia, Federated States of</option>
                                <option data-kt-flag="flags/moldova.svg" value="MD" data-select2-id="select2-data-315-t161">Moldova, Republic of</option>
                                <option data-kt-flag="flags/monaco.svg" value="MC" data-select2-id="select2-data-316-8zyz">Monaco</option>
                                <option data-kt-flag="flags/mongolia.svg" value="MN" data-select2-id="select2-data-317-zmbd">Mongolia</option>
                                <option data-kt-flag="flags/montenegro.svg" value="ME" data-select2-id="select2-data-318-6jsq">Montenegro</option>
                                <option data-kt-flag="flags/montserrat.svg" value="MS" data-select2-id="select2-data-319-6556">Montserrat</option>
                                <option data-kt-flag="flags/morocco.svg" value="MA" data-select2-id="select2-data-320-xncw">Morocco</option>
                                <option data-kt-flag="flags/mozambique.svg" value="MZ" data-select2-id="select2-data-321-ntc7">Mozambique</option>
                                <option data-kt-flag="flags/myanmar.svg" value="MM" data-select2-id="select2-data-322-lz92">Myanmar</option>
                                <option data-kt-flag="flags/namibia.svg" value="NA" data-select2-id="select2-data-323-9s5t">Namibia</option>
                                <option data-kt-flag="flags/nauru.svg" value="NR" data-select2-id="select2-data-324-7ha1">Nauru</option>
                                <option data-kt-flag="flags/nepal.svg" value="NP" data-select2-id="select2-data-325-08wp">Nepal</option>
                                <option data-kt-flag="flags/netherlands.svg" value="NL" data-select2-id="select2-data-326-4d1g">Netherlands</option>
                                <option data-kt-flag="flags/new-zealand.svg" value="NZ" data-select2-id="select2-data-327-om4q">New Zealand</option>
                                <option data-kt-flag="flags/nicaragua.svg" value="NI" data-select2-id="select2-data-328-yeme">Nicaragua</option>
                                <option data-kt-flag="flags/niger.svg" value="NE" data-select2-id="select2-data-329-zmov">Niger</option>
                                <option data-kt-flag="flags/nigeria.svg" value="NG" data-select2-id="select2-data-330-gbl8">Nigeria</option>
                                <option data-kt-flag="flags/niue.svg" value="NU" data-select2-id="select2-data-331-lcu9">Niue</option>
                                <option data-kt-flag="flags/norfolk-island.svg" value="NF" data-select2-id="select2-data-332-o7ze">Norfolk Island</option>
                                <option data-kt-flag="flags/northern-mariana-islands.svg" value="MP" data-select2-id="select2-data-333-wr84">Northern Mariana Islands</option>
                                <option data-kt-flag="flags/norway.svg" value="NO" data-select2-id="select2-data-334-oue1">Norway</option>
                                <option data-kt-flag="flags/oman.svg" value="OM" data-select2-id="select2-data-335-ivkz">Oman</option>
                                <option data-kt-flag="flags/pakistan.svg" value="PK" data-select2-id="select2-data-336-wded">Pakistan</option>
                                <option data-kt-flag="flags/palau.svg" value="PW" data-select2-id="select2-data-337-bnu7">Palau</option>
                                <option data-kt-flag="flags/palestine.svg" value="PS" data-select2-id="select2-data-338-vzms">Palestinian Territory, Occupied</option>
                                <option data-kt-flag="flags/panama.svg" value="PA" data-select2-id="select2-data-339-7qnj">Panama</option>
                                <option data-kt-flag="flags/papua-new-guinea.svg" value="PG" data-select2-id="select2-data-340-9g4c">Papua New Guinea</option>
                                <option data-kt-flag="flags/paraguay.svg" value="PY" data-select2-id="select2-data-341-3k78">Paraguay</option>
                                <option data-kt-flag="flags/peru.svg" value="PE" data-select2-id="select2-data-342-7fkf">Peru</option>
                                <option data-kt-flag="flags/philippines.svg" value="PH" data-select2-id="select2-data-343-o1mh">Philippines</option>
                                <option data-kt-flag="flags/poland.svg" value="PL" data-select2-id="select2-data-344-f2fm">Poland</option>
                                <option data-kt-flag="flags/portugal.svg" value="PT" data-select2-id="select2-data-345-67ir">Portugal</option>
                                <option data-kt-flag="flags/puerto-rico.svg" value="PR" data-select2-id="select2-data-346-s6pf">Puerto Rico</option>
                                <option data-kt-flag="flags/qatar.svg" value="QA" data-select2-id="select2-data-347-or7i">Qatar</option>
                                <option data-kt-flag="flags/romania.svg" value="RO" data-select2-id="select2-data-348-c42v">Romania</option>
                                <option data-kt-flag="flags/russia.svg" value="RU" data-select2-id="select2-data-349-cve9">Russian Federation</option>
                                <option data-kt-flag="flags/rwanda.svg" value="RW" data-select2-id="select2-data-350-wnvt">Rwanda</option>
                                <option data-kt-flag="flags/st-barts.svg" value="BL" data-select2-id="select2-data-351-navt">Saint Barthélemy</option>
                                <option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="KN" data-select2-id="select2-data-352-0i5w">Saint Kitts and Nevis</option>
                                <option data-kt-flag="flags/st-lucia.svg" value="LC" data-select2-id="select2-data-353-mj4q">Saint Lucia</option>
                                <option data-kt-flag="flags/sint-maarten.svg" value="MF" data-select2-id="select2-data-354-vyqd">Saint Martin (French part)</option>
                                <option data-kt-flag="flags/st-vincent-and-the-grenadines.svg" value="VC" data-select2-id="select2-data-355-w58h">Saint Vincent and the Grenadines</option>
                                <option data-kt-flag="flags/samoa.svg" value="WS" data-select2-id="select2-data-356-m01x">Samoa</option>
                                <option data-kt-flag="flags/san-marino.svg" value="SM" data-select2-id="select2-data-357-4h2g">San Marino</option>
                                <option data-kt-flag="flags/sao-tome-and-prince.svg" value="ST" data-select2-id="select2-data-358-y88m">Sao Tome and Principe</option>
                                <option data-kt-flag="flags/saudi-arabia.svg" value="SA" data-select2-id="select2-data-359-n1i9">Saudi Arabia</option>
                                <option data-kt-flag="flags/senegal.svg" value="SN" data-select2-id="select2-data-360-vo33">Senegal</option>
                                <option data-kt-flag="flags/serbia.svg" value="RS" data-select2-id="select2-data-361-x677">Serbia</option>
                                <option data-kt-flag="flags/seychelles.svg" value="SC" data-select2-id="select2-data-362-buib">Seychelles</option>
                                <option data-kt-flag="flags/sierra-leone.svg" value="SL" data-select2-id="select2-data-363-87ju">Sierra Leone</option>
                                <option data-kt-flag="flags/singapore.svg" value="SG" data-select2-id="select2-data-364-k8td">Singapore</option>
                                <option data-kt-flag="flags/sint-maarten.svg" value="SX" data-select2-id="select2-data-365-2348">Sint Maarten (Dutch part)</option>
                                <option data-kt-flag="flags/slovakia.svg" value="SK" data-select2-id="select2-data-366-r6uf">Slovakia</option>
                                <option data-kt-flag="flags/slovenia.svg" value="SI" data-select2-id="select2-data-367-14fj">Slovenia</option>
                                <option data-kt-flag="flags/solomon-islands.svg" value="SB" data-select2-id="select2-data-368-zjfh">Solomon Islands</option>
                                <option data-kt-flag="flags/somalia.svg" value="SO" data-select2-id="select2-data-369-da5r">Somalia</option>
                                <option data-kt-flag="flags/south-africa.svg" value="ZA" data-select2-id="select2-data-370-p7le">South Africa</option>
                                <option data-kt-flag="flags/south-korea.svg" value="KR" data-select2-id="select2-data-371-bd6e">South Korea</option>
                                <option data-kt-flag="flags/south-sudan.svg" value="SS" data-select2-id="select2-data-372-5rbm">South Sudan</option>
                                <option data-kt-flag="flags/spain.svg" value="ES" data-select2-id="select2-data-373-w1zn">Spain</option>
                                <option data-kt-flag="flags/sri-lanka.svg" value="LK" data-select2-id="select2-data-374-bsq7">Sri Lanka</option>
                                <option data-kt-flag="flags/sudan.svg" value="SD" data-select2-id="select2-data-375-loke">Sudan</option>
                                <option data-kt-flag="flags/suriname.svg" value="SR" data-select2-id="select2-data-376-uh9m">Suriname</option>
                                <option data-kt-flag="flags/swaziland.svg" value="SZ" data-select2-id="select2-data-377-6hhr">Swaziland</option>
                                <option data-kt-flag="flags/sweden.svg" value="SE" data-select2-id="select2-data-378-yoyj">Sweden</option>
                                <option data-kt-flag="flags/switzerland.svg" value="CH" data-select2-id="select2-data-379-57p0">Switzerland</option>
                                <option data-kt-flag="flags/syria.svg" value="SY" data-select2-id="select2-data-380-w3im">Syrian Arab Republic</option>
                                <option data-kt-flag="flags/taiwan.svg" value="TW" data-select2-id="select2-data-381-yrbp">Taiwan, Province of China</option>
                                <option data-kt-flag="flags/tajikistan.svg" value="TJ" data-select2-id="select2-data-382-t1sj">Tajikistan</option>
                                <option data-kt-flag="flags/tanzania.svg" value="TZ" data-select2-id="select2-data-383-rtuw">Tanzania, United Republic of</option>
                                <option data-kt-flag="flags/thailand.svg" value="TH" data-select2-id="select2-data-384-7wrw">Thailand</option>
                                <option data-kt-flag="flags/togo.svg" value="TG" data-select2-id="select2-data-385-k7kv">Togo</option>
                                <option data-kt-flag="flags/tokelau.svg" value="TK" data-select2-id="select2-data-386-me6o">Tokelau</option>
                                <option data-kt-flag="flags/tonga.svg" value="TO" data-select2-id="select2-data-387-hm14">Tonga</option>
                                <option data-kt-flag="flags/trinidad-and-tobago.svg" value="TT" data-select2-id="select2-data-388-0q2g">Trinidad and Tobago</option>
                                <option data-kt-flag="flags/tunisia.svg" value="TN" data-select2-id="select2-data-389-79zo">Tunisia</option>
                                <option data-kt-flag="flags/turkey.svg" value="TR" data-select2-id="select2-data-390-kq46">Turkey</option>
                                <option data-kt-flag="flags/turkmenistan.svg" value="TM" data-select2-id="select2-data-391-sp7d">Turkmenistan</option>
                                <option data-kt-flag="flags/turks-and-caicos.svg" value="TC" data-select2-id="select2-data-392-po8s">Turks and Caicos Islands</option>
                                <option data-kt-flag="flags/tuvalu.svg" value="TV" data-select2-id="select2-data-393-mu6l">Tuvalu</option>
                                <option data-kt-flag="flags/uganda.svg" value="UG" data-select2-id="select2-data-394-svrr">Uganda</option>
                                <option data-kt-flag="flags/ukraine.svg" value="UA" data-select2-id="select2-data-395-iykv">Ukraine</option>
                                <option data-kt-flag="flags/united-arab-emirates.svg" value="AE" data-select2-id="select2-data-396-neeg">United Arab Emirates</option>
                                <option data-kt-flag="flags/united-kingdom.svg" value="GB" data-select2-id="select2-data-397-6xcz">United Kingdom</option>
                                <option data-kt-flag="flags/united-states.svg" value="US" data-select2-id="select2-data-398-fma6">United States</option>
                                <option data-kt-flag="flags/uruguay.svg" value="UY" data-select2-id="select2-data-399-vvry">Uruguay</option>
                                <option data-kt-flag="flags/uzbekistan.svg" value="UZ" data-select2-id="select2-data-400-hubm">Uzbekistan</option>
                                <option data-kt-flag="flags/vanuatu.svg" value="VU" data-select2-id="select2-data-401-dlaw">Vanuatu</option>
                                <option data-kt-flag="flags/venezuela.svg" value="VE" data-select2-id="select2-data-402-xr40">Venezuela, Bolivarian Republic of</option>
                                <option data-kt-flag="flags/vietnam.svg" value="VN" data-select2-id="select2-data-403-b9md">Vietnam</option>
                                <option data-kt-flag="flags/virgin-islands.svg" value="VI" data-select2-id="select2-data-404-ih03">Virgin Islands</option>
                                <option data-kt-flag="flags/yemen.svg" value="YE" data-select2-id="select2-data-405-rwjl">Yemen</option>
                                <option data-kt-flag="flags/zambia.svg" value="ZM" data-select2-id="select2-data-406-qljp">Zambia</option>
                                <option data-kt-flag="flags/zimbabwe.svg" value="ZW" data-select2-id="select2-data-407-9ylf">Zimbabwe</option>
                            </select>
                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                        <!--end::Col-->
                    </div><!--begin::Input group-->

                    <!--end::Input group-->











                    <!--end::Input group-->
                </div>
                <!--end::Card body-->

                <!--begin::Actions-->
                <div class="card-footer d-flex justify-content-end py-6 px-9">
                    <button type="reset" class="btn btn-light btn-active-light-primary me-2">Отмена</button>
                    <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Сохранить изменения</button>
                </div>
                <!--end::Actions-->
                <input type="hidden"></form>
            <!--end::Form-->
        </div>
        <!--end::Content-->
    </div>
    <!--end::Notifications-->
    <!--begin::Notifications-->
    <div class="card  mb-5 mb-xl-10">
        <!--begin::Card header-->
        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_notifications" aria-expanded="true" aria-controls="kt_account_notifications">
            <div class="card-title m-0">
                <h3 class="fw-bold m-0">Уведомления</h3>
            </div>
        </div>
        <!--begin::Card header-->

        <!--begin::Content-->
        <div id="kt_account_settings_notifications" class="collapse show">
            <!--begin::Form-->
            <form class="form">
                <!--begin::Card body-->
                <div class="card-body border-top px-9 pt-3 pb-4">
                    <!--begin::Table-->
                    <div class="table-responsive">
                        <table class="table table-row-dashed border-gray-300 align-middle gy-6">
                            <tbody class="fs-6 fw-semibold">
                            <!--begin::Table row-->
                            <tr>
                                <td class="min-w-250px fs-4 fw-bold">Настройки</td>
                                <td class="w-125px">
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="kt_settings_notification_email" checked="" data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=email]">
                                        <label class="form-check-label ps-2" for="kt_settings_notification_email">
                                            Email
                                        </label>
                                    </div>
                                </td>
                                <td class="w-125px">
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="kt_settings_notification_phone" checked="" data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=phone]">
                                        <label class="form-check-label ps-2" for="kt_settings_notification_phone">
                                            SMS
                                        </label>
                                    </div>
                                </td>
                                <td class="w-125px">
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="kt_settings_notification_tg" checked="" data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=tg]">
                                        <label class="form-check-label ps-2" for="kt_settings_notification_tg">Telegram</label>
                                    </div>
                                </td><td class="w-125px">
                                <div class="form-check form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="" id="kt_settings_notification_wapp" checked="" data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=wapp]">
                                    <label class="form-check-label ps-2" for="kt_settings_notification_wapp">WhatsApp</label>
                                </div>
                            </td></tr>
                            <!--begin::Table row-->

                            <!--begin::Table row-->
                            <tr>
                                <td>Заявки через формы:</td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="1" id="billing1" checked="" data-kt-settings-notification="email">
                                        <label class="form-check-label ps-2" for="billing1"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="billing2" checked="" data-kt-settings-notification="phone">
                                        <label class="form-check-label ps-2" for="billing2"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="billing3" checked="" data-kt-settings-notification="tg">
                                        <label class="form-check-label ps-2" for="billing3"></label>
                                    </div>
                                </td><td>
                                <div class="form-check form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="" id="billing4" checked="" data-kt-settings-notification="wapp">
                                    <label class="form-check-label ps-2" for="billing4"></label>
                                </div>
                            </td></tr>
                            <!--begin::Table row-->

                            <!--begin::Table row-->
                            <tr>
                                <td>Новый заказ в магазине:</td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="team1" checked="" data-kt-settings-notification="email">
                                        <label class="form-check-label ps-2" for="team1"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="team2" data-kt-settings-notification="phone">
                                        <label class="form-check-label ps-2" for="team2"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="team3" data-kt-settings-notification="tg">
                                        <label class="form-check-label ps-2" for="team3"></label>
                                    </div>
                                </td><td>
                                <div class="form-check form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="" id="team4" data-kt-settings-notification="wapp">
                                    <label class="form-check-label ps-2" for="team4"></label>
                                </div>
                            </td></tr>
                            <!--begin::Table row-->

                            <!--begin::Table row-->
                            <tr>
                                <td>Заказ оплачен:</td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="project1" data-kt-settings-notification="email">
                                        <label class="form-check-label ps-2" for="project1"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="project2" checked="" data-kt-settings-notification="phone">
                                        <label class="form-check-label ps-2" for="project2"></label>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="project3" checked="" data-kt-settings-notification="tg">
                                        <label class="form-check-label ps-2" for="project3"></label>
                                    </div>
                                </td><td>
                                <div class="form-check form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="" id="project4" checked="" data-kt-settings-notification="wapp">
                                    <label class="form-check-label ps-2" for="project4"></label>
                                </div>
                            </td></tr>
                            <!--begin::Table row-->

                            <!--begin::Table row-->
                            <tr>
                                <td class="border-bottom-0">Создан новый проект:</td>
                                <td class="border-bottom-0">
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="newsletter1" data-kt-settings-notification="email">
                                        <label class="form-check-label ps-2" for="newsletter1"></label>
                                    </div>
                                </td>
                                <td class="border-bottom-0">
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="newsletter2" data-kt-settings-notification="phone">
                                        <label class="form-check-label ps-2" for="newsletter2"></label>
                                    </div>
                                </td>
                                <td class="border-bottom-0">
                                    <div class="form-check form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="" id="newsletter3" data-kt-settings-notification="tg">
                                        <label class="form-check-label ps-2" for="newsletter3"></label>
                                    </div>
                                </td><td class="border-bottom-0">
                                <div class="form-check form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="" id="newsletter4" data-kt-settings-notification="wapp">
                                    <label class="form-check-label ps-2" for="newsletter4"></label>
                                </div>
                            </td></tr>
                            <!--begin::Table row-->
                            </tbody>
                        </table>
                    </div>
                    <!--end::Table-->
                </div>
                <!--end::Card body-->

                <!--begin::Card footer-->
                <div class="card-footer d-flex justify-content-end py-6 px-9">
                    <button class="btn btn-light btn-active-light-primary me-2">Отмена</button>
                    <button class="btn btn-primary  px-6">Сохранить изменения</button>
                </div>
                <!--end::Card footer-->
            </form>
            <!--end::Form-->
        </div>
        <!--end::Content-->
    </div>
    <!--end::Notifications-->
    <!--begin::Deactivate Account-->
    <div class="card  ">

        <!--begin::Card header-->
        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
            <div class="card-title m-0">
                <h3 class="fw-bold m-0">Удалить аккаунт</h3>
            </div>
        </div>
        <!--end::Card header-->

        <!--begin::Content-->
        <div id="kt_account_settings_deactivate" class="collapse show">
            <!--begin::Form-->
            <form id="kt_account_deactivate_form" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">

                <!--begin::Card body-->
                <div class="card-body border-top p-9">

                    <!--begin::Notice-->
                    <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                        <!--begin::Icon-->
                        <i class="ki-duotone ki-information fs-2tx text-warning me-4"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>        <!--end::Icon-->

                        <!--begin::Wrapper-->
                        <div class="d-flex flex-stack flex-grow-1 ">
                            <!--begin::Content-->
                            <div class=" fw-semibold">
                                <h4 class="text-gray-900 fw-bold">Вы хотите деактивируете свою учетную запись</h4>

                                <div class="fs-6 text-gray-700 ">В целях дополнительной безопасности, вам необходимо подтвердить действие через адрес электронной почты или номер телефона</div>
                            </div>
                            <!--end::Content-->

                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Notice-->

                    <!--begin::Form input row-->

                    <!--end::Form input row-->
                </div>
                <!--end::Card body-->

                <!--begin::Card footer-->
                <div class="card-footer d-flex justify-content-end py-6 px-9">
                    <button id="kt_account_deactivate_account_submit" type="submit" class="btn btn-danger fw-semibold">Удалить</button>
                </div>
                <!--end::Card footer-->

                <input type="hidden"></form>
            <!--end::Form-->
        </div>
        <!--end::Content-->
    </div>
    <!--end::Deactivate Account-->

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>