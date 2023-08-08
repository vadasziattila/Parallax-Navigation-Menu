$(document).ready(function () {
  $(".Hamburger").click(function () {
    $(this).toggleClass("open");
    $(".Menu").toggleClass("open");
  });

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const mobileCheck = isMobileDevice();

  if (!mobileCheck) {
    let $menu = $(".Menu-list"),
      $item = $(".Menu-list-item"),
      w = $(window).width(),
      h = $(window).height();

    $(window).on("mousemove", function (e) {
      let offsetX = 0.5 - e.pageX / w,
        offsetY = 0.5 - e.pageY / h,
        dy = e.pageY - h / 2,
        dx = e.pageX - w / 2,
        theta = Math.atan2(dy, dx),
        angle = (theta * 180) / Math.PI - 90,
        offsetPoster = $menu.data("offset"),
        transformPoster =
          "translate3d(0, " +
          -offsetX * offsetPoster +
          "px, 0) rotateX(" +
          -offsetY * offsetPoster +
          "deg) rotateY(" +
          offsetX * (offsetPoster * 2) +
          "deg)";

      if (angle < 0) {
        angle = angle + 360;
      }

      $menu.css("transform", transformPoster);

      $item.each(function () {
        let $this = $(this),
          offsetLayer = $this.data("offset") || 0,
          transformLayer =
            "translate3d(" +
            offsetX * offsetLayer +
            "px, " +
            offsetY * offsetLayer +
            "px, 20px)";

        $this.css("transform", transformLayer);
      });
    });
  }
});
