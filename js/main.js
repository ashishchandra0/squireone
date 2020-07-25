var menuBtn = document.getElementById("menu");
        var exitBtm = document.getElementById("exit");
        var menuItem = document.getElementById('menu_item');

        menu.addEventListener('click', function(e) {
            
            menuItem.classList.toggle('menu-item');
            menuBtn.style.display = "none";

        });

        exit.addEventListener('click', function(e) {
            menuItem.classList.add('menu-item');
            menuBtn.style.display = "initial";
        });

        function validation(){
            //alert("validating");
            var name = document.getElementById("enq_name").value;
            var email = document.getElementById("enq_email").value;
            var message = document.getElementById("enq_message").value;
            
            return sendToFirebase(name, email, message);
           

        }