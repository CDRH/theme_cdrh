// Initialize lightbox
$(function() {
  $(".pageimage > a").attr("data-fancybox", "gallery");
  $(".media-embeds > .media-render.file > a").attr("data-fancybox", "gallery");
  
  $('[data-fancybox="gallery"]').fancybox();
});
