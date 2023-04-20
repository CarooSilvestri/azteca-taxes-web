var $licencias = [
  {
    "id": 1,
    "name": "CTEC",
    "description": "California is one of the few states to have set requirements for professional tax preparers. State law requires anyone who prepares tax returns for a fee to be either an attorney, certified public accountant (CPA), CTEC registered tax preparer (CRTP) or enrolled agent (EA).Choosing a tax preparer who is not one of those four professionals may prevent you from legal recourse against fraud. It may also increase your chances for additional taxes, interest and fines. Always verify the legal status of a tax preparer before handing over your private tax information.",
    "subtitle": "By law, paid tax preparers must sign your tax return. Signing  or with business labels are red flags for fraud."
  },
  {
    "id": 2,
    "name": "PTIN",
    "description": "The IRS requires any professional who prepares or assists in preparing federal tax returns for compensation to have a valid PTIN. Basically, you’ll need one if you are paid to prepare federal tax returns, are an enrolled agent or intend to become an enrolled agent. The IRS is very clear about the fact that you can’t prepare tax returns for compensation if you don’t obtain a PTIN. If you don’t have one and prepare returns for money, you could be subject to penalties",
    "subtitle": "Preparer tax identification number (PTIN) applications and renewals for 2019 are now being processed."
  },
  {
    "id": 3,
    "name": "IRS EFIN Details",
    "description": "An Electronic Filing Identification Number (EFIN) is an identification number given by the Internal Revenue Service (IRS) to individuals or firms that are accepted and authorized e-file Tax Service Providers. These providers need an EFIN to electronically file tax returns.More than 90% of federal tax returns are e-filed - close to 122 million of the total tax returns each year. Using electronic filing with an EFIN helps to protect the information within them.What you need to know about the EFIN Application (form 8633) process: ‍The application process can be tedious, but it is in place to protect the security of the electronic filing system. The information requested is information you should already have to complete the application efficiently and correctly. Providers need an EFIN to electronically file tax returns.",
    "subtitle": "By law, paid tax preparers must sign your tax return. Signing  or with business labels are red flags for fraud."
  }
]


/* INICIO JS FUNCIONES */
$(document).ready(function () {
  var taxInfoContainer = document.getElementById("container")
  cargar_licencias($licencias, taxInfoContainer)
})


function cargar_licencias(data, container) {

  for (var elem in data) {
    const box = document.createElement("div");
    box.classList.add('row', 'cuadro', 'my-5', 'p-3')
    box.setAttribute('data-aos', 'fade-in')

    const imageBox = document.createElement("div")
    imageBox.classList.add("col-10", "col-md-4", "align-content-center")
    imageBox.innerHTML = `<img src="../rsc/patents/${data[elem].name}.png" width="100%" class="mb-5 mb-md-0" />`

    const infoBox = document.createElement("div")
    infoBox.classList.add("col-12", "col-md-6")
    infoBox.innerHTML = `<p>${data[elem].description}</p>
    <p><b>${data[elem].subtitle}</b></p>
    <p class="call">Call us now and learn how to get your CTEC with our help!<br>
    714-363-0006</p>`
    box.append(imageBox)
    box.append(infoBox)
    container.append(box)
  }
}
