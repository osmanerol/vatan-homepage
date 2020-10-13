$(document).ready(function(){
    var selectedProductNumber=0;
    localStorage.setItem("selectedNumber",selectedProductNumber);
    //  related products
    $.getJSON('relatedProducts.json',function(data){
        for(i=0;i<5;i++){
            var item=data[i];
            var relatedProduct="<div class='relatedProductItem'><div class='top'>"+
            "<img src="+item.img+"><div class='point'><i class='fa fa-star'> 4.6 </i> <span>(122 yorum)</span></div><p class='item-code'>"+item.code+"</p><h6 class='item-title'>"+item.title.slice(0,60)+"</h6><p class='item-price'><i class='fas fa-lira-sign'></i> "+item.price+"</p><div class='cargo'>BUGÜN KARGODA</button></div></div><div class='add-cart no-visible'><button class='icon'><i class='fa fa-exchange'></i></button><button class='cart'>SEPETE EKLE</button></div></div>";
            $(relatedProduct).appendTo(".relatedProducts");
        }
        for(i=5;i<10;i++){
            var item=data[i];
            var relatedProduct="<div class='relatedProductItem'><div class='top'>"+
            "<img src="+item.img+"><div class='point'><i class='fa fa-star'> 4.6 </i> <span>(122 yorum)</span></div><p class='item-code'>"+item.code+"</p><h6 class='item-title'>"+item.title.slice(0,50)+"</h6><p class='item-price'><i class='fas fa-lira-sign'></i> "+item.price+"</p><div class='cargo'>BUGÜN KARGODA</button></div></div><div class='add-cart no-visible'><button class='icon'><i class='fa fa-exchange'></i></button><button class='cart'>SEPETE EKLE</button></div></div>";
            $(relatedProduct).appendTo(".relatedProducts2");
        }
    })

    // hover effect ile button gosterme
    $(".item-container").on("mouseenter",'.relatedProductItem', function() {
        $(this).find(".cargo").addClass("no-visible");
        $(this).find(".add-cart").addClass("no-visible-cart");
        $(this).find(".add-cart").removeClass("no-visible");
      });
    $(".item-container").on("mouseleave",'.relatedProductItem', function() {
        $(this).find(".cargo").removeClass("no-visible");
        $(this).find(".add-cart").removeClass("no-visible-cart");
        $(this).find(".add-cart").addClass("no-visible");
    });

    //  sepete urun eklemede sayı arttirma
    $('.item-container').on("click",".cart",function(){
        let number=localStorage.getItem("selectedNumber");
        number=parseInt(number);
        number+=1;
        localStorage.setItem("selectedNumber",number);
        console.log(localStorage.getItem("selectedNumber"));
        $(".badge").html(number);
    })

    //  best seller
    $.getJSON('bestSeller.json',function(data){
      for(i=0;i<5;i++){
          var item=data[i];
          var relatedProduct="<div class='relatedProductItem'><div class='top'>"+
          "<img src="+item.img+"><div class='point'><i class='fa fa-star'> 4.6 </i> <span>(122 yorum)</span></div><p class='item-code'>"+item.code+"</p><h6 class='item-title'>"+item.title.slice(0,60)+"</h6><p class='item-price'><i class='fas fa-lira-sign'></i> "+item.price+"</p><div class='cargo'>BUGÜN KARGODA</button></div></div><div class='add-cart no-visible'><button class='icon'><i class='fa fa-exchange'></i></button><button class='cart'>SEPETE EKLE</button></div></div>";
          $(relatedProduct).appendTo(".bestSellerProducts");
      }
  })

    // swiper
    var swiper = new Swiper('.swiper-container-auto', {
      slidesPerView: 4,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})