'use strict';
$(document).ready(function () {
  var pageHeaderAddress = document.getElementById('page-header-address');
  var floatingMenuAddress = document.getElementById('floating-menu-address');

  var overlay = document.getElementsByClassName('overlay');

  /*запоминаем все инпуты*/
  var introInputName = document.getElementById('intro-input-name');
  var introInputPhone = document.getElementById('intro-input-phone');
  var introInputCity = document.getElementById('intro-input-city');

  var sevenInputName1 = document.getElementById('seven-input-name-1');
  var sevenInputPhone1 = document.getElementById('seven-input-phone-1');
  var sevenInputCity1 = document.getElementById('seven-input-city-1');

  var sevenInputName2 = document.getElementById('seven-input-name-2');
  var sevenInputPhone2 = document.getElementById('seven-input-phone-2');
  var sevenInputCity2 = document.getElementById('seven-input-city-2');

  var callbackInputName = document.getElementById('callback-input-name');
  var callbackInputPhone = document.getElementById('callback-input-phone');
  var callbackInputCity = document.getElementById('callback-input-city');

  var bankInputName = document.getElementById('bank-input-name');
  var bankInputPhone = document.getElementById('bank-input-phone');
  var bankInputCity = document.getElementById('bank-input-city');
  var bankInput = document.getElementById('bank-input');
  /* */
  /* заполняем скрытые поля с указанием Города*/
  $(introInputCity).val('Краснодар');
  $(sevenInputCity1).val('Краснодар');
  $(sevenInputCity2).val('Краснодар');
  $(callbackInputCity).val('Краснодар');
  $(bankInputCity).val('Краснодар');
  /* */
  /*отрабатываем цели при клике на телефон*/
  var pageHeaderPhone = document.getElementsByClassName('page-header__contact--phone');
  var mapLinkPhone = document.getElementsByClassName('map__link--phone');

  $(pageHeaderPhone).click(function () {
    yaCounter52409989.reachGoal('phone-click');
    gtag('event', 'phone-click', {
      'event_category': 'phone',
      'event_action': 'click',
    });
  });

  $(mapLinkPhone).click(function () {
    yaCounter52409989.reachGoal('phone-click');
    gtag('event', 'phone-click', {
      'event_category': 'phone',
      'event_action': 'click',
    });
  });
  /* */
  /* map */
  var mapSection = document.getElementsByClassName('map');
  var mapField = document.getElementById('map-field');
  var mapAddress = document.getElementById('map-address');

  var addressMaykop = 'Республика Адыгея г. Майкоп ул. Чкалова д. 65 офис 27а, 2 этаж Юридическая защита';
  var addressKrasnodar = 'г. Краснодар ул.Красная д. 145/1 офис';
  var addressRostov = 'г.Ростов-на-Дону ул. Катаева д.293';
  var addressMoscow = 'Москва: Остаповский пр-д, 3';
  var addressNovosibirsk = 'Новосибирск, Коммунистическая ул. 2, офис 2'

  var mapMaykop = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af680dc5c1f17279f65e96d0110c70262144341422722e0cf85d6eb414893ba28&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>'
  var mapKrasnodar = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaa894d1b4f3f96266b421b8ee9dd4e5365bf55b2ded0d8994fa08f6a0d466285&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>'
  var mapRostov = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a7d1547d830626e6bbfe17f8552f254e17b06e1bea70392b018b1ce95601613&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';
  var mapMoscow = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7c9f65985fd0bc679ceeb1536cc060b44865edea62ad70fab0c480c319cb429&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';
  var mapNovosibirsk = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A14a172cc1fa8958589d72599bbd4b2123786a0a43dd10994c21be82b5f68df1d&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>';


  mapField.innerHTML = mapKrasnodar;
  /* */
  /*открытие попапа с формой при нажатии на кнопки в хедере и футере */
  var pageHeaderBtn = document.getElementsByClassName('page-header__button');
  var pageFooterBtn = document.getElementsByClassName('page-footer__btn');
  var floatingMenuBtn = document.getElementsByClassName('floating-menu__button');

  var stagesItemLink = document.getElementsByClassName('stages__item-link');

  var popupCallback = document.getElementsByClassName('popup-callback');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

  var popupSuccess = document.getElementsByClassName('popup-success');
  var popupSuccessBtn = document.getElementsByClassName('popup-success__btn');
  var popupSuccesCloseBtn = document.getElementsByClassName('popup-success__close-btn');

  function showPopupCallback() {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  }

  $(pageHeaderBtn).click(showPopupCallback);
  $(pageFooterBtn).click(showPopupCallback);
  $(floatingMenuBtn).click(showPopupCallback);
  $(stagesItemLink).click(showPopupCallback);

  $(popupCallbackCloseBtn).click(function () {
    $(popupCallback).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });

  $(popupSuccesCloseBtn).click(function () {
    $(popupSuccess).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });

  $(popupSuccessBtn).click(function () {
    $(popupSuccess).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*Плавный скролл*/
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $('html, body').animate({
        scrollTop: dn
      }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
  /* */
  /*парсим utm и определяем с какого Города зашли*/
  function findEnd(url, urlpos) {
    for (var i = urlpos; i <= url.length; i++) {
      if (url[i] == '&') {
        return i;
      } else if (i == (url.length - 1)) {
        return i + 1;
      }
    }
  }

  function findUtmInfo(utmInfoStr) {
    var utmInfoStart = utmUrl.indexOf(utmInfoStr);
    var utmNameLength = utmInfoStr.length + 1;
    var utmInfoStartInt = parseInt(utmInfoStart) + utmNameLength;
    var utmInfoEndInt = findEnd(utmUrl, utmInfoStartInt);
    var utmInfo = utmUrl.slice(utmInfoStartInt, utmInfoEndInt);
    return utmInfo;
  }

  var utmUrl = decodeURI(document.location.search);

  var utmSource = findUtmInfo('utm_source');
  var utmMedium = findUtmInfo('utm_medium');
  var utmCampaign = findUtmInfo('utm_campaign');
  var utmContent = findUtmInfo('utm_content');
  var utmTerm = findUtmInfo('utm_term');
  console.log('utm_source: ' + utmSource + '; utm_medium: ' + utmMedium + '; utm_campaign: ' + utmCampaign + '; utm_content: ' + utmContent + '; utm_term: ' + utmTerm);
  /* */
  /* отрабатываем подставления в зависимости от того какой город в UTM метке*/

  if (~utmContent.indexOf('adygeya')) {
    console.log('Майкоп');
    mapField.innerHTML = mapMaykop;
    mapAddress.textContent = addressMaykop;
    $(introInputCity).val('Майкоп');
    $(sevenInputCity1).val('Майкоп');
    $(sevenInputCity2).val('Майкоп');
    $(callbackInputCity).val('Майкоп');
    $(bankInputCity).val('Майкоп');
  } else if (~utmContent.indexOf('krasnodar')) {
    console.log('Краснодар');
    mapField.innerHTML = mapKrasnodar;
    mapAddress.textContent = addressKrasnodar;
    $(introInputCity).val('Краснодар');
    $(sevenInputCity1).val('Краснодар');
    $(sevenInputCity2).val('Краснодар');
    $(callbackInputCity).val('Краснодар');
    $(bankInputCity).val('Краснодар');
  } else if (~utmContent.indexOf('rostov')) {
    console.log('Ростов-на-Дону');
    mapField.innerHTML = mapRostov;
    mapAddress.textContent = addressRostov;
    $(introInputCity).val('Ростов-на-Дону');
    $(sevenInputCity1).val('Ростов-на-Дону');
    $(sevenInputCity2).val('Ростов-на-Дону');
    $(callbackInputCity).val('Ростов-на-Дону');
    $(bankInputCity).val('Ростов-на-Дону');
  } else if (~utmContent.indexOf('moscow')) {
    console.log('Москва');
    mapField.innerHTML = mapMoscow;
    mapAddress.textContent = addressMoscow;
    $(introInputCity).val('Москва');
    $(sevenInputCity1).val('Москва');
    $(sevenInputCity2).val('Москва');
    $(callbackInputCity).val('Москва');
    $(bankInputCity).val('Москва');
  } else if (~utmContent.indexOf('altay')) {
    console.log('Новосибирск');
    mapField.innerHTML = mapNovosibirsk;
    mapAddress.textContent = addressNovosibirsk;
    $(introInputCity).val('Новосибирск');
    $(sevenInputCity1).val('Новосибирск');
    $(sevenInputCity2).val('Новосибирск');
    $(callbackInputCity).val('Новосибирск');
    $(bankInputCity).val('Новосибирск');
  } else if (~utmContent.indexOf('rusfed')) {
    console.log('РФ');
    $(mapSection).hide();
    $(introInputCity).val('РФ');
    $(sevenInputCity1).val('РФ');
    $(sevenInputCity2).val('РФ');
    $(callbackInputCity).val('РФ');
    $(bankInputCity).val('РФ');
  } else {
    console.log('Москва');
    mapField.innerHTML = mapMoscow;
    mapAddress.textContent = addressMoscow;
    $(introInputCity).val('Москва');
    $(sevenInputCity1).val('Москва');
    $(sevenInputCity2).val('Москва');
    $(callbackInputCity).val('Москва');
    $(bankInputCity).val('Москва');
  }
  /* */
  /*отрабатываем галерею с выписками*/
  var proofImg = document.getElementsByClassName('proof__img');
  proofImg = Array.prototype.slice.call(proofImg);

  proofImg.forEach(function (element, i) {
    $(element).click(function () {

    });
  });
  /* */
  
  /* пользователь пытаетс уйти */
  $(document).mouseleave(function () {
    console.log('ушел со страницы');
    //$.cookie('smartCookies', true, {
    //  expires: 7,
    //  path: '/'
    //});
  });
  /* */
  /*отображаем скрытые выписки*/
  var proofMoreBtn = document.getElementsByClassName('proof__more-btn');
  var proofMoreBtnField = document.getElementsByClassName('proof__more-btn-field');
  var proofItem = document.getElementsByClassName('proof__item');

  $(proofMoreBtn).click(function () {
    $(proofItem).removeClass('proof__item--hidden');
    $(proofItem).removeClass('proof__item--tablet');
    $(proofMoreBtnField).hide();
  });
  /* */
  /* отображаем отзывы */
  var feedbackImg = document.getElementsByClassName('feedback__img');

  var feedbackMoreBtn = document.getElementsByClassName('feedback__more-btn');
  var feedbackMoreBtnField = document.getElementsByClassName('feedback__more-btn-field');

  $(feedbackMoreBtn).click(function () {
    $(feedbackImg).removeClass('feedback__img--inactive');
    $(feedbackMoreBtnField).addClass('disable');
  });
  /* */
  /* отправка формы из popup callback */
  var callbackForm = $('#callback-form');

  callbackForm.submit(function (ev) {
    $.ajax({
      type: callbackForm.attr('method'),
      url: callbackForm.attr('action'),
      data: callbackForm.serialize(),
      success: function (data) {
        $(callbackInputName).val('');
        $(callbackInputPhone).val('');
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter52409989.reachGoal('popup-callback');
        fbq('track', 'Lead');
        gtag('event', 'popup-callback', {
          'event_category': 'popup',
          'event_action': 'callback',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка формы из popup bank */
  var bankForm = $('#bank-form');

  bankForm.submit(function (ev) {
    $.ajax({
      type: bankForm.attr('method'),
      url: bankForm.attr('action'),
      data: bankForm.serialize(),
      success: function (data) {
        $(bankInputName).val('');
        $(bankInputPhone).val('');
        $(popupBank).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter52409989.reachGoal('popup-bank');
        fbq('track', 'Lead');
        gtag('event', 'popup-bank', {
          'event_category': 'popup',
          'event_action': 'bank',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /*кнопка вернуть деньги в intro мобильная версия*/
  var introUtpButton = document.getElementsByClassName('intro__utp-button');

  $(introUtpButton).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });
  /* */
  /* отправка формы из intro-form */
  var introForm = $('#intro-form');

  introForm.submit(function (ev) {
    $.ajax({
      type: introForm.attr('method'),
      url: introForm.attr('action'),
      data: introForm.serialize(),
      success: function (data) {
        $(introInputName).val('');
        $(introInputPhone).val('');
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter52409989.reachGoal('form-intro');
        fbq('track', 'Lead');
        gtag('event', 'form-intro', {
          'event_category': 'form',
          'event_action': 'intro',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка формы из seven-form-1 */
  var sevenForm1 = $('#seven-form-1');

  sevenForm1.submit(function (ev) {
    $.ajax({
      type: sevenForm1.attr('method'),
      url: sevenForm1.attr('action'),
      data: sevenForm1.serialize(),
      success: function (data) {
        $(sevenInputName1).val('');
        $(sevenInputPhone1).val('');
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter52409989.reachGoal('form-seven');
        fbq('track', 'Lead');
        gtag('event', 'form-seven', {
          'event_category': 'form',
          'event_action': 'seven',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка формы из seven-form-1 */
  var sevenForm2 = $('#seven-form-2');

  sevenForm2.submit(function (ev) {
    $.ajax({
      type: sevenForm2.attr('method'),
      url: sevenForm2.attr('action'),
      data: sevenForm2.serialize(),
      success: function (data) {
        $(sevenInputName2).val('');
        $(sevenInputPhone2).val('');
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter52409989.reachGoal('form-seven');
        fbq('track', 'Lead');
        gtag('event', 'form-seven', {
          'event_category': 'form',
          'event_action': 'seven',
        });
      }
    });
    ev.preventDefault();
  });
  /* */
  /*валидация форм*/
  $(introInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(sevenInputPhone1).inputmask("+9 (999) 999-9999"); //specifying options
  $(sevenInputPhone2).inputmask("+9 (999) 999-9999"); //specifying options
  $(callbackInputPhone).inputmask("+9 (999) 999-9999"); //specifying options

  /*всплывающее меню при скролле вниз*/
  /*троттлинг функция*/
  function throttleFloating(func, ms) {

    var isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {

      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments); // (1)

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }
  /* */
  var travelMenu = document.getElementsByClassName('floating-menu');

  var hiddenMenuDown = function () {
    if (window.pageYOffset > 100) {
      $(travelMenu).addClass('floating-menu--active');
    } else {
      $(travelMenu).removeClass('floating-menu--active');
    }
  }

  var hiddenMenuDown100 = throttleFloating(hiddenMenuDown, 100);

  $(window).scroll(function () {
    hiddenMenuDown100();
  });
  /* */

  /* ПОДКЛЮЧАЕМ КАЛЬКУЛЯТОР!!!!!!!!!!!! */
  var popupCalc = document.getElementsByClassName('calc');
  var popupCalcCloseBtn = document.getElementsByClassName('calc__close-btn');
  var forQuizBtn = document.getElementsByClassName('intro__submit');

  var inputPhoneFinal = document.getElementById('input-phone-final');

  var summaOutput = document.getElementById('summa-output');
  var fSumma = document.getElementById('summa-field');

  var strahovanieOutput = document.getElementById('strahovanie-output');
  var fStrahovanie = document.getElementById('strahovanie-field');

  function updateTextInput(val, output) {
    output.value = val;
  }

  function updateRangeValue(val, range) {
    range.value = val;
  }

  $(fSumma).on('propertychange input', function () {
    updateTextInput(this.value, summaOutput);
  });

  $(fStrahovanie).on('propertychange input', function () {
    updateTextInput(this.value, strahovanieOutput);
  });

  $(summaOutput).change(function () {
    updateRangeValue(this.value, fSumma);
  });

  $(strahovanieOutput).change(function () {
    updateRangeValue(this.value, fStrahovanie);
  });

  //открываем закрываем попап с квизом

  $(forQuizBtn).click(function () {
    var popupCalcTop = window.pageYOffset + 60 + 'px';
    $(popupCalc).css('top', popupCalcTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCalc).fadeIn(300);
    });
  });

  $(popupCalcCloseBtn).click(function () {
    $(popupCalc).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    });
  });

  //progressbar

  var progressStage = document.getElementById('progress-stage');
  var progressBar = document.getElementById('progressbar');

  //stage 1

  var stage1 = document.getElementById('stage-1');
  var stageRadiobtnDays = document.getElementsByClassName('stage__radiobtn--days');
  var next1 = document.getElementById('next1');

  var days;

  $(stageRadiobtnDays).click(function () {
    days = this.value;
    console.log(days);
  });

  $(next1).click(function () {
    if (days) {
      $(stage1).fadeOut(300);
      setTimeout(function () {
        $(stage2).fadeIn(300);
        $(progressBar).css('width', '40%');
        progressStage.textContent = '2';
        yaCounter52409989.reachGoal('less3');
      }, 300);
    }
  });
  
  //stage2
  var stage2 = document.getElementById('stage-2');
  var stageRadiobtnSYesNo = document.getElementsByClassName('stage__radiobtn--syesno');
  var next2 = document.getElementById('next2');
  var prev2 = document.getElementById('prev2');

  var syesno;

  $(stageRadiobtnSYesNo).click(function () {
    syesno = this.value;
    console.log(syesno);
  });

  $(next2).click(function () {
    if (syesno) {
      $(stage2).fadeOut(300);
      setTimeout(function () {
        $(stage3).fadeIn(300);
        $(progressBar).css('width', '60%');
        progressStage.textContent = '3';
        yaCounter52409989.reachGoal('syesno');
      }, 300);
    }
  });

  $(prev2).click(function() {
    $(stage2).fadeOut(300);
    setTimeout(function () {
      $(stage1).fadeIn(300);
      $(progressBar).css('width', '20%');
      progressStage.textContent = '1';
    }, 300);
  });

  //stage3
  var stage3 = document.getElementById('stage-3');
  var stageRadiobtnFYesNo = document.getElementsByClassName('stage__radiobtn--fyesno');
  var next3 = document.getElementById('next3');

  var fyesno;

  $(stageRadiobtnFYesNo).click(function () {
    fyesno = this.value;
    console.log(fyesno);
  });

  $(next3).click(function () {
    if (syesno) {
      $(stage3).fadeOut(300);
      setTimeout(function () {
        $(stageFinal).fadeIn(300);
        $(alloptionsField).val('Когда арестовали : ' + days + '\nДеньги списались : ' + syesno + '\nПисьмо от ФССП: ' + fyesno);
        $(progressBar).css('width', '80%');
        progressStage.textContent = '4';
        yaCounter52409989.reachGoal('fyesno');
      }, 300);
    }
  });

  $(prev3).click(function() {
    $(stage3).fadeOut(300);
    setTimeout(function () {
      $(stage2).fadeIn(300);
      $(progressBar).css('width', '40%');
      progressStage.textContent = '2';
    }, 300);
  });

  //stage-final

  var alloptionsField = document.getElementById('alloptions-field');

  var stageFinal = document.getElementById('stage-final');

  var backFinal = document.getElementById('backfinal');

  $(backFinal).click(function () {
    $(stageFinal).fadeOut(300);
    setTimeout(function () {
      $(stage3).fadeIn(300);
      $(progressBar).css('width', '60%');
      progressStage.textContent = '3';
    }, 300);
  });

  // stage-success
  var stageSuccess = document.getElementById('stage-success');

  //валидация номеров
  $(inputPhoneFinal).inputmask("+9 (999) 999-9999"); //specifying options

  /* form-final */
  var formFinal = $('#form-final');

  formFinal.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-calc.php',
      data: formFinal.serialize(),
      success: function (data) {
        yaCounter52409989.reachGoal('form-final');
        $(stageFinal).fadeOut(300);
        setTimeout(function () {
          $(stageSuccess).fadeIn(300);
          $(progressBar).css('width', '100%');
          progressStage.textContent = '4';
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* */
  /*определяем город*/
  ymaps.ready(function () {
    var geolocation = ymaps.geolocation;
    pageHeaderAddress.textContent = geolocation.city;
    floatingMenuAddress.textContent = geolocation.city;
  });
  /* */

  /* возвращает cookie с именем name, если есть, если нет, то undefined */
  function readCookie(name) {

    var name_cook = name + "=";
    var spl = document.cookie.split(';');
    
    for(var i=0; i<spl.length; i++) {
    
      var c = spl[i];
      
      while (c.charAt(0)==' ') {
      
        c = c.substring(1, c.length);
        
      }
      
      if(c.indexOf(name_cook) == 0) {
        
        return c.substring(name_cook.length, c.length);
        
      }
      
    }
    
    return null;
    
  }
  
  /* */

  /* подготавливаем переменные для подмены энвибокса и номеров телефона */

  var mainBody = document.getElementById('body');

  var dynamicPhone = document.getElementsByClassName('dynamic-phone');
  dynamicPhone = Array.prototype.slice.call(dynamicPhone);

  var envyElement = document.createElement('script');
  $(envyElement).attr('charset', 'UTF-8');

  /* */

  /*envycount*/
  var envyCountCookie = 'envycountcookie';
  var envyCount = document.getElementById('envycount-field');

  var finalEnvyCount;

  console.log('justcounter' + envyCount.textContent);

  if (readCookie(envyCountCookie)) {
    console.log('cookiesuccess' + readCookie(envyCountCookie));
    finalEnvyCount = readCookie(envyCountCookie);
  } else {
    console.log('cookiesempty' + envyCount.textContent);
    document.cookie = 'envycountcookie=' + envyCount.textContent;
    finalEnvyCount = envyCount.textContent;
  }

  console.log('final' + finalEnvyCount);

  finalEnvyCount = parseInt(finalEnvyCount);

  if ((finalEnvyCount % 5 == 1) || (finalEnvyCount % 5 == 2)) {

    console.log('Юля');
    dynamicPhone.forEach(function(element, i) {
      element.textContent = '+7 (800) 511-86-55 ';
      $(element).attr('href', 'tel:+78005118655 ');
    });

    $(envyElement).attr('src', 'https://cdn.envybox.io/widget/cbk.js?wcb_code=d9dd414c35d9a22f2c97ed02d3d893e9');

  } else if ((finalEnvyCount % 5 == 3) || (finalEnvyCount % 5 == 4)) {

    console.log('Аэлита');
    dynamicPhone.forEach(function(element, i) {
      element.textContent = '+7 (800) 511-86-55 ';
      $(element).attr('href', 'tel:+78005118655 ');
    });

    $(envyElement).attr('src', 'https://cdn.envybox.io/widget/cbk.js?wcb_code=d9dd414c35d9a22f2c97ed02d3d893e9');

  } else if (finalEnvyCount % 5 == 0) {

    console.log('Артем');
    dynamicPhone.forEach(function(element, i) {
      element.textContent = '+7 (800) 511-86-55 ';
      $(element).attr('href', 'tel:+78005118655 ');
    });

    $(envyElement).attr('src', 'https://cdn.envybox.io/widget/cbk.js?wcb_code=d9dd414c35d9a22f2c97ed02d3d893e9');
  }

  mainBody.appendChild(envyElement);
  /* */
});