window.onload = function() {
    function menuNavBar() {
        document.querySelector('#hamburguer').addEventListener('click', function(){
            let mostrarLinks = document.getElementById("myLinks");
            if (mostrarLinks.style.display === "block") {
                mostrarLinks.style.display = "none";
            } else {
                mostrarLinks.style.display = "block";
            }
        })
    }
    menuNavBar()
}


