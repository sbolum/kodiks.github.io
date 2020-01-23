!(function(e) {
  "use strict";
  function i(i, r) {
    let a = `grant_type=password&password=${i}&username=${r}`;
    e.ajax({
      url: "https://adisyo.com/token",
      type: "post",
      dataType: "json",
      data: a,
      success: function(i) {
        toggleModal(),
          showAlert(
            "Yönlendirme",
            "Uygulamaya yönlendiriliyorsunuz lüften bekleyiniz...",
            "success",
            5e3
          ),
          setTimeout(() => {
            e.cookie("user", JSON.stringify(i), { expires: 1 }),
              e("#goToApp").css("display", "inline"),
              e("#loginModal").css("display", "none");
            var r = "";
            (r =
              "False" === i.isUsingNewVersion
                ? `https://adisyo.com/app/#!/login?token=${i.access_token}&pin=${i.pin}`
                : `http://pos.adisyo.com/#/login/?token=${i.access_token}&pin=${i.pin}&isHasMultipleRestaurants=${i.isHasMultipleRestaurants}`),
              window.open(r, "_blank");
          }, 2e3);
      },
      error: function(e) {
        showAlert("Hata", e.responseJSON.error_description, "error", 8e3);
      }
    });
  }
  jQuery.validator.addMethod(
    "answercheck",
    function(e, i) {
      return this.optional(i) || /^\bcat\b$/.test(e);
    },
    "type the correct answer -_-"
  ),
    e(function() {
      e("#contactFormLogin").validate({
        rules: {
          name: { required: !0, minlength: 2 },
          surname: { required: !0, minlength: 2 },
          email: { required: !0, email: !0 },
          phone: { required: !0 },
          password: { required: !0, minlength: 6 },
          agree: { required: !0 }
        },
        messages: {
          name: {
            required: "Lütfen adınızı giriniz",
            minlength: "En az 2(iki) karakter olmalıdır"
          },
          surname: {
            required: "Lütfen soyadınızı giriniz",
            minlength: "En az 2 karakter olmalıdır"
          },
          email: { required: "Lütfen e-posta adresinizi giriniz" },
          phone: { required: "Lütfen telefon numaranızı giriniz" },
          password: {
            required: "Lütfen şifrenizi giriniz",
            minlength: "Şifreniz en az 6 karakter olmalıdır"
          }
        },
        submitHandler: function(r) {
          var a = e(r).serializeArray(),
            n = {
              name: a[0].value,
              surname: a[1].value,
              email: a[2].value,
              phoneNumber: a[3].value,
              password: a[4].value,
              isReadContract: "on" == a[5].value
            };
          e.ajax({
            url: "https://adisyo.com/api/security/signup",
            type: "post",
            dataType: "json",
            data: n,
            success: function(e) {
              showAlert(
                "Kayıt",
                "Kullanıcı kaydınız başarıyla yapılmıştır. Teşekkürler.",
                "success",
                5e3
              ),
                i(n.password, n.email);
            },
            error: function(e) {
              showAlert("Hata", e.responseText, "error", 8e3);
            }
          });
        }
      });
    }),
    e(function() {
      e("#contactFormForgot").validate({
        rules: {
          email: { required: !0, email: !0 },
          password: { required: !0, minlength: 8 }
        },
        messages: {
          email: { required: "Lütfen e-posta adresinizi giriniz" },
          password: {
            required: "Lütfen şifrenizi giriniz",
            minlength: "thats all? really?"
          }
        },
        submitHandler: function(i) {
          var r = `email=${e(i).serializeArray()[0].value}`;
          e.ajax({
            url: "https://adisyo.com/api/security/forgot",
            type: "post",
            dataType: "json",
            data: r,
            success: function(e) {
              showAlert(
                "Şifre Yenileme",
                "Şifre yenileme linkiniz e-posta adresinize gönderilmiştir. Lütfen e-posta adresinizi kontrol ediniz.",
                "success",
                5e3
              );
            },
            error: function(e) {
              console.log(e);
            }
          });
        }
      });
    }),
    e(function() {
      e("#contactFormSignup").validate({
        rules: {
          email: { required: !0, email: !0 },
          password: { required: !0, minlength: 6 }
        },
        messages: {
          email: { required: "Lütfen e-posta adresinizi giriniz" },
          password: {
            required: "Lütfen şifrenizi giriniz",
            minlength: "En az 6 karakter olmalı"
          }
        },
        submitHandler: function(r) {
          const a = e(r).serializeArray();
          i(a[1].value, a[0].value);
        }
      });
    }),
    e(function() {
      e("#contactFormCall").validate({
        rules: {
          nameCall: { required: !0 },
          emailCall: { required: !0 },
          telephoneCall: { required: !0 }
        },
        messages: {
          nameCall: { required: "* Lütfen Adınızı Soyadınızı giriniz" },
          emailCall: { required: "* Lütfen e-posta adresinizi giriniz" },
          telephoneCall: { required: "* Telefon numaranızı yazınız" }
        },
        submitHandler: function(i) {
          var r = e(i).serializeArray(),
            a = { fullName: r[0].value, phone: r[2].value, from: r[1].value };
          e.ajax({
            url: "https://adisyo.com/api/general/SendUnauthorizedFeedback",
            type: "post",
            dataType: "json",
            data: a,
            success: function(e) {
              toggleModal(),
                showAlert(
                  "Sizi Arayalım",
                  "Kaydınız alışmıştır. En kısa sürede tarafınıza geri dönüş yapılacaktır. Teşekkürler.",
                  "success",
                  6e3
                );
            },
            error: function(e) {
              showAlert("Hata", e.responseText, "error", 8e3);
            }
          });
        }
      });
    }),
    e(function() {
      e("#contactFormBank").validate({
        rules: {
          nameBank: { required: !0 },
          telBank: { required: !0, minlength: 11 },
          tcBank: { required: !0, minlength: 10 },
          mailBank : { required: !0}
        },
        messages: {
          nameBank: { required: "* Lütfen adınızı soyadınızı giriniz" },
          mailBank: {required: "* Lütfen mail adresinizi giriniz"},
          telBank: {
            required: "* Lütfen telefon numaranızı giriniz",
            minlength: "* Telefon numaranız 11 haneli olmalıdır."
          },
          tcBank: {
            required: "* T.C kimlik/Vergi numaranızı yazınız",
            minlength: "* En az 10 karakter girilmelidir."
          }
        },
        submitHandler: function(i) {
          var r = e(i).serializeArray();
          var a = {
              FullName: "<br>-- İŞ BANKASI BAŞVURU FORMU --<br><br>" + r[0].value.toString(),
              Phone:"<br>TEL NO: " + r[2].value.toString(),
              Identity: "TC NO/VERGI NO: " + r[3].value.toString() +"<br>",
              From: "Email: " + r[1].value.toString(),
              restaurantId: null
            };
          e.ajax({
            url: "https://adisyo.com/api/general/SubmitIsBankCampaignRequest",
            type: "post",
            dataType: "json",
            data: a,
            success: function(e) {
              toggleModal(),
                showAlert(
                  "İŞ Bankası Kampanya",
                  "Kaydınız alınmıştır. En kısa sürede değerlendirilip tarafınıza geri dönüş yapılacaktır. Teşekkürler.",
                  "success",
                  6e3
                );
            },
            error: function(e) {
              showAlert("Hata", e.responseText, "error", 8e3);
            }
          });
        }
      });
    });
})(jQuery);
function closeIsbank() {
  localStorage.setItem("isbankKapat", true);
  $("#isBankButon").css("display", "none");
  $("#isBankButon2").css("display", "none");
  $("#isBankKampanya").css("visibility", "hidden");
}
