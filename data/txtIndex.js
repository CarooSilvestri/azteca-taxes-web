var $carrousel = [{
    id: "1",
    name: "banner1",
    h1orange: "The solution of your tax business",
    regular: "Access Your 2023 ATS Tax Software Today"

}]

var $banners = [{
    id: "1",
    title: "INDUSTRY LEADING SOFTWARE FOR VOLUME TAX BUSINESSES",
    subtitle: "WINDOWS COMPATIBLE!",
    points: ["Fast, easy and efficient",
        "In-depth calculations",
        "Bank products",
        "1040 & Corp forms",
        "Comprehensive deprecation capabilities",
        "Paperless Solutions"]
}, {
    id: "2",
    title: "TAKING YOUR CAREER FURTHER",
    subtitle: "Azteca Tax Systems's Training Center offers convenient Tax Preparation Courses that will help you master your annual return. Our Tax preparer certification can lead you to a new career.",
    points: ["Become a Certified Tax Professional within of 6 weeks",
        "20 Hours of continuing education",
        "Morning and Evening classes  with flexible schedule",
        "Hands on training (ATS Proprietary Tax Software)",
        "Classes available in English & Spanish"]
},
{
    id: "3",
    title: "DON’T FACE YOUR AUDIT ALONE",
    subtitle: "We sensitively guide you through the procedure and explain exactly what you need to know and what to do.",
    points: [
        "Evaluation and drafting of IRS correspondance as needed",
        "Assistance with communication with IRS during audit",
        "Explanation of claim requirements and available options",
        "Help with IRS forms including Schedules A, C, and E",
        "Assitance with denied credits when tax return is unfunde",
    ]
}
]


/* INICIO JS FUNCIONES */
$(document).ready(function () {
    console.log($banners[2].points)
    var titb1 = document.getElementById("titulo-b1")
    titb1.innerHTML = $banners[0].title
    var descb1 = document.getElementById("cont-b1")

    for (var elem in $banners[0].points) {
        var p = document.createElement("p")
        p.innerHTML = "• " + $banners[0].points[elem]
        descb1.appendChild(p)
    }
    var cont_btn = document.createElement('div')
    add_btn(cont_btn, "pages/software.html", "ATS Software")
    descb1.appendChild(cont_btn)

    var titb2 = document.getElementById("titulo-b2")
    titb2.innerHTML = $banners[1].title
    var descb2 = document.getElementById("cont-b2")

    for (var elem in $banners[1].points) {
        var p = document.createElement("p")
        p.innerHTML = "• " + $banners[1].points[elem]
        descb2.appendChild(p)
    }
    var cont_btn2 = document.createElement('div')
    add_btn(cont_btn2, "pages/software.html", "ATS Tax Training")
    descb2.appendChild(cont_btn2)

    var titb3 = document.getElementById("titulo-b3")
    titb3.innerHTML = $banners[2].title
    var descb3 = document.getElementById("cont-b3")

    for (var elem in $banners[2].points) {
        var p = document.createElement("p")
        p.innerHTML = "• " + $banners[2].points[elem]
        descb3.appendChild(p)
    }
    var cont_btn3 = document.createElement('div')
    add_btn(cont_btn3, "pages/software.html", "Auditions Solutions")
    descb1.appendChild(cont_btn3)
})


function add_btn(cont, link, text) {
    var btn = document.createElement("a")
    btn.setAttribute("class", "btn btn-primary btn-lg  m-0")
    btn.setAttribute("href", link)
    btn.setAttribute("role", "button")
    btn.innerHTML = text
    cont.appendChild(btn)
}