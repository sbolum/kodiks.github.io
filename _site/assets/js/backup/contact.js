  ;(function($) {
    "use strict";

    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm Login - Yeni üye ol - Ücretsiz Dene
    $(function() {
        $('#contactFormLogin').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
              
                email: {
                    required: true,
                    email: true
                },

                telephone: {
                    required: true,
                    telephone: true
                },
               
                password: {
            required: true,
            minlength: 8
        }
            },
            messages: {
                name: {
                    required: "* Lütfen Adınızı Soyadınızı giriniz",
                    minlength: "* İsminiz en az 2 karakter olmalıdır"
                },
               
                email: {
                    required: "* Lütfen e-posta adresinizi giriniz"
                },

                telephone: {
                    required: "* Lütfen telefon numaranızı giriniz"
                },
               
               
                password: {
            required: "* Lütfen şifrenizi giriniz",
            minlength: "* Şifreniz en az 6 karakter olmalıdır"
        }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"#",
                    success: function() {
                        $('#contactFormLogin :input').attr('disabled', 'disabled');
                        $('#contactFormLogin').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function() {
                        $('#contactFormLogin').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })

    // validate contactForm Forgot - Şifremi Unuttum
    $(function () {
        $('#contactFormForgot').validate({
            rules: {
                
                email: {
                    required: true,
                    email: true
                },

                password: {
                    required: true,
                    minlength: 8
                }
            },
            messages: {
                
                email: {
                    required: "* Lütfen e-posta adresinizi giriniz"
                },

               
                password: {
                    required: "* Lütfen şifrenizi giriniz",
                    minlength: "* Şifreniz en az 6 karakter olmalıdır"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "#",
                    success: function () {
                        $('#contactFormForgot :input').attr('disabled', 'disabled');
                        $('#contactFormForgot').fadeTo("slow", 0.15, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function () {
                        $('#contactFormForgot').fadeTo("slow", 0.15, function () {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })

    // validate contactForm signup Giriş Yap
    $(function () {
        $('#contactFormSignup').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8
                }
            },

            messages: {
               
                email: {
                    required: "* Lütfen e-posta adresinizi giriniz"
                },

               
                password: {
                    required: "* Lütfen şifrenizi giriniz",
                    minlength: "* Şifreniz en az 6 karakter olmalıdır"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "#",
                    success: function () {
                        $('#contactFormSignup :input').attr('disabled', 'disabled');
                        $('#contactFormSignup').fadeTo("slow", 0.15, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function () {
                        $('#contactFormSignup').fadeTo("slow", 0.15, function () {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })

    // validate contactForm Call - Sizi arayalim
    $(function () {
        $('#contactFormCall').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
              
                email: {
                    required: true,
                    email: true
                },

                telephone: {
                    required: true,
                    telephone: true
                },
               
            },
            messages: {
                name: {
                    required: "* Lütfen Adınızı Soyadınızı giriniz",
                    minlength: "* İsminiz en az 2 karakter olmalıdır"
                },
               
                email: {
                    required: "* Lütfen e-posta adresinizi giriniz"
                },

                telephone: {
                    required: "* Lütfen telefon numaranızı giriniz"
                },
                
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "",
                    success: function () {
                        $('#contactFormCall :input').attr('disabled', 'disabled');
                        $('#contactFormCall').fadeTo("slow", 0.15, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function () {
                        $('#contactFormCall').fadeTo("slow", 0.15, function () {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })
      
})(jQuery)
