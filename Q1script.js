function promptclick(){
    var name=document.getElementById("name").value;
    var add1=document.getElementById("add1").value;
    var add2=document.getElementById("add2").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var zip=document.getElementById("zip").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    if(name!="")
    {
if(add1!="")
{
if(add2!="")
{
    if(city!="")
    {
        if(state!="")
        {
            if(zip!="")
            {
                if(email!="")
                {
                    if(phone!="")
                    {
                        alert("Thanks")
                    }
                    else{
                        alert("Please enter Phone")
                    }

                }
                else{
                    alert("Please enter Email")
                }


            }
            else{
                alert("Please enter Zip")
            }

        }
        else{
            alert("Please enter State")
        }

    }
    else
    {
        alert("Please enter City")
    }
}
else{
    alert("Please enter Address 2")
}
}
else{
    alert("Please enter Address 1")
}
    }
    else{
        alert("Please enter name")
    }
    
}