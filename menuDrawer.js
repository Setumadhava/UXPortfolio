document.getElementById("hpmenuicon").onclick = function() {
    document.getElementById("hpmenuicon").style.opacity = 0;
    document.getElementById("hpmenuicon").style.zIndex = -2;
    document.getElementById("hpmobilemenuwrapper").style.opacity = 01;
    document.getElementById("hpmobilemenuwrapper").style.zIndex = 2;
}
document.getElementById('hpmenuxicon').onclick = function() {

    document.getElementById("hpmobilemenuwrapper").style.opacity = 0;
    document.getElementById("hpmobilemenuwrapper").style.zIndex = -2;
    setTimeout(function() {
        document.getElementById("hpmenuicon").style.opacity = 1;
        document.getElementById("hpmenuicon").style.zIndex = 2;
    }, 150);

}
