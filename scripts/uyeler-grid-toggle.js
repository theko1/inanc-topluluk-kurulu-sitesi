// Accordion JavaScript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        // Eğer panel başlangıçta açık ise, maxHeight değerini ayarla
        if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
            panel.style.maxHeight = "0px"; // Kapat
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Aç
        }
    });

    // Sayfa yüklendiğinde başlangıçta açık olan accordion'u ayarla
    var panel = acc[i].nextElementSibling;
    if (panel.classList.contains("expanded")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}