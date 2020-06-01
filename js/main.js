$(document).ready(function () {
  select();
  header.init();
  btnController.init();
  lidsShow();
  tabs();
  formsProfile();
  copyLink();
  helpMenu();
  forms();
  newsSlider();
});
function select() {
  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $(".wrapper"),
  });
}
var header = {
  init: function () {
    this.user();
    this.notify();
  },
  user: function () {
    $(".header-user").click(function () {
      $(this).toggleClass("active");
    });
    this.hideClickOutside(".header-user");
  },
  notify: function () {
    $(".header-notify").click(function () {
      $(this).toggleClass("active");
    });
    this.hideClickOutside(".header-notify");
  },
  hideClickOutside: function (selector) {
    $(document).mouseup(function (e) {
      var container = $(selector);
      if (container.has(e.target).length === 0) {
        container.removeClass("active");
      }
    });
  },
};
var btnController = {
  init: function () {
    $(document).on("mousedown", ".btn", function (e) {
      var top = e.clientY - $(this).offset().top + $(document).scrollTop();
      var left = e.clientX - $(this).offset().left;
      var circle = $(this).find("span");
      circle.css("top", top + "px");
      circle.css("left", left + "px");
      if (!circle.hasClass("show")) {
        circle.addClass("show");
        setTimeout(function () {
          circle.removeClass("show");
        }, 1000);
      }
    });
  },
};
var lidsShow = function () {
  $(".lid-state-show").click(function () {
    $(".lid-state-history").toggleClass("active");
    $(this).toggleClass("active");
  });
};
var tabs = function () {
  $(".profile-tab-menu span").click(function () {
    $(".profile-tab-menu span").removeClass("active");
    $(this).addClass("active");
    var selector = "[data-id=" + $(this).attr("data-target") + "]";
    $(".profile-tab-item").removeClass("active");
    $(".profile-tab-item" + selector).addClass("active");
  });
  $(".ref-tab-menu span").click(function () {
    $(".ref-tab-menu span").removeClass("active");
    $(this).addClass("active");
    var selector = "[data-id=" + $(this).attr("data-target") + "]";
    $(".ref-tab-item").removeClass("active");
    $(".ref-tab-item" + selector).addClass("active");
  });
};
var formsProfile = function () {
  var profile = function () {
    $("#profile-edit").click(function () {
      $(this).closest(".profile-form").addClass("edit");
    });
    $("#profile-cansel").click(function () {
      $(this).closest(".profile-form").removeClass("edit");
    });
  };
  profile();
};
var copyLink = function () {
  function copy(str) {
    let tmp = document.createElement("INPUT"),
      focus = document.activeElement;
    tmp.value = str;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    focus.focus();
  }
  $(".copy-link").click(function () {
    var str = $(this).parent().find("input").val();
    copy(str);
  });
};
var helpMenu = function () {
  $(".sitebar-help-menu li a").click(function (e) {
    if ($(this).parent().find("ul").length > 0) {
      e.preventDefault();
      $(this).parent().closest("ul").find("li").removeClass("active");
      $(this).parent().addClass("active");
    }
  });
  $(".sitebar-help-menu li").each(function (e) {
    if ($(this).find("ul").length > 0) {
      $(this).addClass("list");
    }
  });
  var helpContentDropdown = function () {
    $(".help-content .drop-title").click(function () {
      $(this).parent().toggleClass("active");
    });
  };
  helpContentDropdown();
};
var forms = function () {
  var clickClose = false;
  $(document).on("click", "[class*=field]", function () {
    if (!clickClose) {
      $(this).addClass("focus");
    } else {
      clickClose = false;
    }
  });
  $(document).on("click", "[class*=field] i", function () {
    if ($(this).hasClass("clear-search")) {
      clickClose = true;
      $(this).parent().find("input").val("");
      $(this).parent().removeClass("focus");
      $(".wrapper").focus();
    } else {
      $(this).parent().find("input").focus();
    }
  });
  $(document).mouseup(function (e) {
    var container = $("[class*=field]");
    container.each(function(){
      if ($(this).has(e.target).length === 0) {
        $(this).removeClass("focus");
      }
    })
    
  });
};
var newsSlider = function(){
  var mySwiper = new Swiper ('.news-list.swiper-container', {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      501: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      851: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1151: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  })
}
