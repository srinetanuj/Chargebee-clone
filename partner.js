let partArr=[
    {
      image:"https://webstatic.chargebee.com/assets/web/510/images/partners/payment-service-provider/cybersource.png",

      airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/payment-service-provider/adyen.png",

       airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/payment-service-provider/paypal.png",

       airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/payment-service-provider/gocardless.png",

       airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/payment-service-provider/bluesnap.png",

       airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/payment-service-provider/checkout.png",

       airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/solution-partners-agencies/mollie.png",

       airo:"↗"
    },
    {
       image:"https://webstatic.chargebee.com/assets/web/510/images/partners/solution-partners-agencies/worldline.png",

       airo:"↗"
    }
 ] 

 let part=document.querySelector("#part");
 function display(partArr){
        partArr.forEach(function(ele){
            let div=document.createElement("div");

            let img=document.createElement("img");
            img.src=ele.image;
            let sign=document.createElement("p")
            sign.innerText=ele.airo;

            div.append(img,sign);
            part.append(div)
        })
    }

    display(partArr) 