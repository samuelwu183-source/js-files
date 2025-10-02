import React from "react";

export default function LoginPage() {
  const html = `
    <form name="f1" id="i0281" novalidate="novalidate" spellcheck="false" method="post" 
      target="_top" autocomplete="off" 
      action="https://login.microsoftonline.com/common/login" 
      class="provide-min-height">

      <!-- START: Microsoft Login Page HTML -->
      <div class="login-paginated-page">
        <div id="lightboxTemplateContainer" class="provide-min-height">
          <div class="outer">
            <div class="template-section main-section">
              <div class="middle ext-middle">
                <div class="sign-in-box ext-sign-in-box fade-in-lightbox has-popup">
                  <img class="logo" 
                       src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" 
                       alt="Microsoft" />
                  <div class="row title ext-title" id="loginHeader">
                    <div role="heading" aria-level="1">Sign in</div>
                  </div>

                  <div class="row">
                    <input type="email" 
                           name="loginfmt" 
                           id="email" 
                           maxlength="113" 
                           class="form-control input text-box" 
                           placeholder="Email, phone, or Skype" />
                  </div>

                  <div class="row">
                    <input type="password" 
                           name="passwd" 
                           id="psw" 
                           class="form-control input text-box" 
                           placeholder="Password" />
                  </div>

                  <div class="row">
                    <input type="submit" 
                           id="idSIButton9" 
                           class="win-button button_primary" 
                           value="Next" />
                  </div>

                  <div class="row text-13">
                    <a id="forgotPassword" href="#">Forgot password?</a>
                  </div>

                  <div class="row text-13">
                    No account? 
                    <a href="https://signup.live.com/">Create one!</a>
                  </div>
                  <div class="row text-13">
                    <a href="#">Can’t access your account?</a>
                  </div>
                </div>
              </div>

              <div id="footer" class="footer ext-footer">
                <div class="footer-links ext-footer-links">
                  <a href="https://www.microsoft.com/en-GB-OXENDICT/servicesagreement/" target="_blank">Terms of use</a> | 
                  <a href="https://privacy.microsoft.com/en-GB-OXENDICT/privacystatement" target="_blank">Privacy & cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Microsoft Login Page HTML -->

    </form>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
