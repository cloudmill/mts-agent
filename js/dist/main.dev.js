"use strict";

$(document).ready(function () {
  select();
  header.init();
  btnController.init();
  lidsShow();
  tabs();
  formsProfile();
  copyLink();
  helpMenu();
});

function select() {
  $(".js-select").select2({
    minimumResultsForSearch: Infinity
  });
}

var header = {
  init: function init() {
    this.user();
    this.notify();
  },
  user: function user() {
    $(".header-user").click(function () {
      $(this).toggleClass("active");
    });
    this.hideClickOutside(".header-user");
  },
  notify: function notify() {
    $(".header-notify").click(function () {
      $(this).toggleClass("active");
    });
    this.hideClickOutside(".header-notify");
  },
  hideClickOutside: function hideClickOutside(selector) {
    $(document).mouseup(function (e) {
      var container = $(selector);

      if (container.has(e.target).length === 0) {
        container.removeClass("active");
      }
    });
  }
};
var btnController = {
  init: function init() {
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
  }
};

var lidsShow = function lidsShow() {
  $(".lid-state-show").click(function () {
    $(".lid-state-history").toggleClass("active");
    $(this).toggleClass("active");
  });
};

var tabs = function tabs() {
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

var formsProfile = function formsProfile() {
  var profile = function profile() {
    $("#profile-edit").click(function () {
      $(this).closest(".profile-form").addClass("edit");
    });
    $("#profile-cansel").click(function () {
      $(this).closest(".profile-form").removeClass("edit");
    });
  };

  profile();
};

var copyLink = function copyLink() {
  function copy(str) {
    var tmp = document.createElement("INPUT"),
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

var helpMenu = function helpMenu() {
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

  var helpContentDropdown = function helpContentDropdown() {
    $(".help-content .drop-title").click(function () {
      $(this).parent().toggleClass("active");
    });
  };

  helpContentDropdown();
};