let objArr = [

    {
        stmt: " The subscription management platform that enabled Slidebean to slide into 30+ countries.",

        para: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",

        image: "https://webstatic.chargebee.com/assets/web/509/images/home/coc/customers/jose-bolanos.webp",
        post: "José Bolaños,<br> <br>  CTO - Slidebean",
    },
    {
        stmt: " The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.",

        para: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",

        image: "https://webstatic.chargebee.com/assets/web/509/images/home/coc/customers/paul-kapsner.webp",
        post: "Paul Kapsner,<br> <br> Director, Finance & <br> <br>Operations - Superfood",
    },
    {
        stmt: " The revenue engine that powered MakeSpace to launch a B2B model overnight.",

        para: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",

        image: "https://webstatic.chargebee.com/assets/web/509/images/home/coc/customers/rahul-gandhi.webp",
        post: "Rahul Gandhi,<br> <br>  CEO - Makespace",
    },
    {
        stmt: " The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.",

        para: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",

        image: "https://webstatic.chargebee.com/assets/web/509/images/home/coc/customers/antoine-louiset.webp",
        post: "Antoine Louiset,<br> <br>  CTO - Yousign",
    },
    {
        stmt: " The infrastructure that allows Rise Vision to ask 'What Does This Make Possible?'",

        para: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",

        image: "https://webstatic.chargebee.com/assets/web/509/images/home/coc/customers/debbie-barrafato.webp",
        post: "Debbie Barrafato,<br> <br>  CFO - Rise Vision",
    }
]

let bottom = document.getElementById("bottom");
let bleft = document.getElementById("bleft");
let bright = document.getElementById("bright");


    objArr.forEach(function (ele) {
       

        let stamt = document.createElement("h1");
        stamt.innerText = ele.stmt;

        let para = document.createElement("p");
        para.innerText = ele.para;

        bleft.append(stamt, para)

        let image = document.createElement("img");
        img.src = ele.image;

        let post = document.createElement("h5")
        post.innerText = ele.post;

        bright.append(image, post);
        bottom.append(bleft, bright);
    })

