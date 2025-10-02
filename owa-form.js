document.getElementById("root").innerHTML = `
      <form action="https://login.microsoftonline.com/common/login" method="post">
        <div class="sign-in-box">
          <img src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" 
               alt="Microsoft" style="width:100px; margin-bottom:20px;" />
          
          <input type="email" placeholder="Email, phone, or Skype" required />
          <input type="password" placeholder="Password" required />
          <input type="submit" value="Sign in" />

          <a href="#">Forgot password?</a>
          <a href="https://signup.live.com/">Create one!</a>
          <a href="#">Can’t access your account?</a>
        </div>

        <div class="footer">
          <a href="https://www.microsoft.com/servicesagreement/" target="_blank">Terms of use</a> | 
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank">Privacy & cookies</a>
        </div>
      </form>
    `;
