var $hardware = [
  {
    "id": "1",
    "name": "Dell Optiplex",
    "type": "workstations",
    "description": {
      "overview": "The OptiPlex 3050 Micro Desktop is an ultra-compact business desktop with multiple mounting possibilities to best fit your workspace. Offers essential best-in-class security and manageability. Enhance your productivity with powerful workstations built for long hours of continuous use.",
      "features": [
        "Sturdy chassis with ample room for additional memory, storage and expansion cards",
        "Ease of upgrading and service for years of use as your organization grows"
      ]
    },
    "specs": [
      {
        "title": "Operating system",
        "desc": "Microsoft Windows 10 Professional preinstalled"
      },
      {
        "title": "Processor",
        "desc": "6th Gen Intel® Core™ i3-6100T dual-core processor"
      },
      {
        "title": "Memory",
        "desc": "4GB high-bandwidth DDR4 RAM for basic multitasking"
      },
      {
        "title": "Storage",
        "desc": "500GB 7200 rpm SATA hard drive for serviceable file storage space"
      },
      {
        "title": "Connectivity",
        "desc": [
          "4 SuperSpeed 10Gbs USB 3.1 ports for ultra-fast data transfer",
          "2 USB 2.0 ports for quick plug-and-play connectivity",
          "Built-in Gigabit Ethernet LAN port for wired network connectivity",
          "Microphone and headphone jacks, HDMI output"
        ]
      },
      {
        "title": "Software",
        "desc": "30-day trial of Microsoft Office included"
      }
    ],
    "note": "Note: This computer does not include a built-in DVD/CD drive.",
    "price": "$795"
  },
  {
    "id": "2",
    "name": "Lenovo Desktop",
    "type": "workstations",
    "description": {
      "overview": "The Lenovo Desktop is a versatile desktop computer designed to handle multiple tasks with ease. Featuring up to 7th Gen Intel Core i7 processing and up to 512GB M.2 SATA SSD, this desktop delivers fast and responsive performance.",
      "features": [
        "Up to 8GB DDR4 RAM for smooth multitasking",
        "Windows 10 Home for a familiar and productive computing experience"
      ]
    },
    "price": "$795"
  },
  {
    "id": "3",
    "name": "Lenovo Laptop",
    "type": "laptops",
    "description": {
      "overview": "The Lenovo Laptop is a powerful and portable computing solution designed for productivity and entertainment on-the-go. Featuring up to 7th Gen Intel Core i7 processing and up to 512GB M.2 SATA SSD, this laptop delivers fast and responsive performance. The Lenovo Active Pen (sold separately) emulates the easy comfort of a pen-on-paper writing experience, and thanks to Windows Ink, you’ll discover all the ways you can turn thoughts into action.",
      "features": [
        "Up to 8GB DDR4 RAM for smooth multitasking",
        "Windows 10 Home",
        "Up to 512 GB M.2 SATA SSD",
        "Up to 8 GB DDR4"
      ]
    },
    "price": "$795"
  },
  {
    "id": "4",
    "name": "ASUS Monitor 24″",
    "type": "monitors",
    "description": {
      "overview": "This monitor features a 50,000,000:1 smart contrast ratio with aspect control to deliver clear, true-to-life images and video. The Splendid Video Intelligence technology allows you to choose from among 6 preset video modes for optimal viewing.",
      "features": [
        {
          "title": "Ultrafast 2 ms response time",
          "desc": "Allows pixels to change colors quickly to avoid streaking, blurring and ghosting in fast-moving scenes and video games."
        },
        {
          "title": "23.6″ widescreen LED panel",
          "desc": "Features a mercury-free design for safety."
        },
        {
          "title": "50,000,000:1 smart contrast ratio and 300 cd/m² brightness",
          "desc": "With aspect control to deliver clear, lifelike images."
        },
        {
          "title": "1920 x 1080 true resolution",
          "desc": "With 170° horizontal and 160° vertical viewing angles offers a clear, high-resolution picture from a variety of vantage points."
        },
        {
          "title": "Splendid Video Intelligence technology",
          "desc": "Offers 6 preset video modes (scenery, theater, game, night view, sRGB and standard) selected via a hot key to optimize video performance and image fidelity."
        },
        {
          "title": "Hot key controls",
          "desc": "Allow you to adjust the brightness and volume with an auto adjust option in addition to the video presets."
        },
        {
          "title": "VESA standard 100mm x 100mm",
          "desc": "Allows for wall mounting with optional mounting kit (not included)."
        }
      ]
    },
    "price": "$795"
  },
  {
    "id": "5",
    "name": "Topaz T-L460 SigLite LCD 1×5 Series",
    "type": "signature_pads",
    "description": {
      "overview": "SigLite LCD 1×5 (T-L460-HSB-R) is Topaz’s low-cost, pressure-sensitive electronic signature capture pad with an LCD display and USB connection.",
    },
    "price": "$190"
  },
  {
    "id": "6",
    "name": "Topaz T-L460 SigLite 1×5 Series",
    "type": "signature_pads",
    "description": {
      "overview": "With this model series, the signature is only viewable on the computer screen. If your application requires customers to view the signature on the pad’s screen, see the SigLite LCD 1×5.",
    },
    "price": "$125"
  },
  {
    "id": "7",
    "name": "Motorola-DS8108",
    "type": "scanners",
    "description": {
      "overview": "We provide support for these certified handheld scanners, you are able to capture the taxpayer’s source documents and information to associate them with the appropriate tax return ATS tax Software. Get the power of a bar code scanner, digital camera and document scanner in a single, cost-effective device.",
    },
    "price": "$349.99"
  }
]


$(document).ready(function() {
  var prods = document.getElementById("prods")
  cargar_productos($hardware, prods)
  cargar_opciones($hardware, prods) 
})

function cargar_opciones(data, prods) {

  $('.btn').click(function() { 

    prods = document.getElementById("prods")      
    filtrar(data, this.id, prods)
    $('.btn').removeClass("active")
    $(this).addClass("active")
  })
}

function filtrar(data, tipo_prod="todos", container) { 
  for (var clave in data) {
    if (data[clave].type == tipo_prod) {
      crear_titulo(container, tipo_prod)
      crear_html(data[clave], container)
    } 
  }  
}

/* Cargar todos los productos sin filtrar */
function cargar_productos(data, container) {

  for (var clave in data) {
     crear_html(data[clave], container)
   } 
 }
 
/* Creación del HTML de los productos -formato- */
function crear_html(prod, container) {

  var card = document.createElement("div")
  card.setAttribute("id", "card-producto")
  card.setAttribute("class", "col-10 col-md-3 m-2")
   
  var img_cont = document.createElement("div")
  img_cont.setAttribute("class", "cont-img")

  var img_prod = set_img(prod)
  img_cont.appendChild(img_prod)
  card.appendChild(img_cont)


  var badge = document.createElement("span")
  badge.setAttribute('class', 'badge text-bg-secondary mb-2')
  badge.innerHTML += prod.type

  var texto = document.createElement("div")
  texto.setAttribute("class", "text-card")

  var titulo = document.createElement("h2")
  titulo.innerHTML += prod.name;
      
  var precio = document.createElement("h2")
  precio.innerHTML += prod.price;
  precio.setAttribute("style", "font-weight: 500")

  texto.appendChild(badge)
  texto.appendChild(titulo)
  texto.appendChild(precio)

   
  var cont_btn = document.createElement("div")
  cont_btn.setAttribute("class", "d-flex justify-content-around mt-2")

   var btn_see_more = document.createElement("button")
   btn_see_more.innerText = "See more"
   btn_see_more.setAttribute("class", "btn btn-secondary btn-sm")
   btn_see_more.setAttribute("id", "btn-masprod")
   let pasar_prod = prod
   btn_see_more.addEventListener("click", (e) => {
     abrir_modal(pasar_prod) 
   })
   
   var btn_prod = document.createElement("button")
   btn_prod.innerText = "Buy"
   btn_prod.setAttribute("class", "btn btn-primary btn-sm")

   card.appendChild(texto)
   cont_btn.appendChild(btn_see_more)
   cont_btn.appendChild(btn_prod)
   card.appendChild(cont_btn)
   container.appendChild(card)
   
}

/* Formateo del modal */
 function abrir_modal(elem) {

   /* Obtengo los divs necesarios */
   var modal = document.getElementById("modal")
   var col_imagen = document.getElementById("col-modal-img")
   var col_informacion = document.getElementById("col-modal-text")

   /* Agrego imagen */
   agregar_columna_imagen(elem, col_imagen)
   
   /* Agrego información */
   crear_descripcion(elem, col_informacion)

   /* Funcionamiento del modal */ 
   modal.style.display = "block";

   document.getElementsByClassName("close")[0].onclick = function() { 
     modal.style.display = "none";
   }
     
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
 }

/* Agrego imagen */
 function agregar_columna_imagen(elem, col_imagen) {
  col_imagen.innerHTML =""
   var img = set_img(elem)
   col_imagen.appendChild(img)
 }

/* Formateo de la info del modal */
 function crear_descripcion(prod, col_informacion) {
   
   /* Reinicio contenido */
   col_informacion.innerHTML = ""
   
   /* Agrego título */
   var row_titulo = document.createElement("div")
   row_titulo.setAttribute("class", "row")
   titulo_modal(row_titulo, prod.name)
   col_informacion.appendChild(row_titulo)

   /* Armo la descripción del producto */  
   var description = document.createElement("div")
   description.setAttribute('class', 'row px-5')
   description.innerHTML += prod.description.overview
   col_informacion.appendChild(description)  

   if (prod.description.features) {
   var features = document.createElement("div")
   features.setAttribute('class', 'row px-5 mt-3')
   var t = document.createElement('h5')
   t.innerHTML = 'Features'
    features.appendChild(t)
   
   for (var elem in prod.description.features) {
    var feat = document.createElement("p")
    feat.innerHTML += "- " +prod.description.features[elem]
    features.appendChild(feat)
   }   
  
   col_informacion.appendChild(features) 
  }

   if (prod.specs) {
    var specs = document.createElement("div")
    specs.setAttribute('class', 'row px-5 mt-3')
    var t = document.createElement('h5')
   t.innerHTML = 'Specs:'
    specs.appendChild(t)

   for (var elem in prod.specs) {
    var sp = document.createElement("div")
    sp.innerHTML =`<p><strong>${prod.specs[elem].title}<strong></p>`
      sp.innerHTML +=`<p>${prod.specs[elem].desc}</p>` 
    specs.appendChild(sp)
   }  

   col_informacion.appendChild(specs) 
   }
  
   var btn = document.createElement("div")
   btn.setAttribute('class', 'row px-5 mt-3 justify-content-center')
   var btn_prod = document.createElement("button")
   btn_prod.innerText = "Buy"
   btn_prod.setAttribute("class", "btn btn-primary btn-lg")
   btn.appendChild(btn_prod)
   col_informacion.appendChild(btn) 
 }

/*Agrego título del modal y el span del boton cerrado */
 function titulo_modal (cont, prod) { 

   var div_tit = document.createElement("div")
   div_tit.setAttribute("id", "div_tit")
   crear_titulo(div_tit, prod)
   
   /* Botón de cerrado */
   var span = document.createElement("span")
   span.setAttribute("class", "close")
   span.innerHTML += "&times"
   
   div_tit.appendChild(span)
   cont.appendChild(div_tit)
 }

 function set_img(prod) {

  var img_prod = document.createElement("img")
  img_prod.setAttribute("src", "../rsc/blanc.jpg")
  img_prod.setAttribute("width", "100%")  
  img_prod.setAttribute("class", "img-fluid")
  img_prod.setAttribute("alt", prod)
  return img_prod
}

function crear_titulo(container, prod) {
    
  container.innerHTML = ""
  var titulo = document.createElement("h2")
  titulo.setAttribute("class", "h2")
  titulo.style.textTransform = "capitalize"
  titulo.innerHTML += prod
  container.append(titulo)
}