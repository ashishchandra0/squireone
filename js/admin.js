var output = document.getElementById("output");
var tab = document.getElementById("tab");
//output.innerHTML = "Loading..";
var enquiryCount = firebase.database().ref('enquiryform');

var replyMesssage = "Thank you for your curiosity, We will answer your queries within 3 days.";








var entries ="";
enquiryCount.on('value', function(snapshot) {
    var s = snapshot.val();
    console.log(s);
    
    var key = Object.keys(s);
    
    for (let index = 0; index < key.length; index++) {
        const element = s[key[index]];
        entries+=enquiryEntryFormate(element, key[index]);
    }
    document.getElementById("enq_entries").innerHTML = entries;
});

function dataInTR(element, key){
    return "<tr><td>"+key+"</td><td>"+element.name+"</td><td>"+element.email+"</td><td>"+element.message+"</td></tr>"
}

function enquiryEntryFormate(element, key){
    let out="";
    out+='<div class="entry" id="entry'+key+'" >';
    out+='<span>ID - '+key+'</span><br>';
    out+='<span>NAME - '+element.name+'</span><br>';
    out+='<span>EMAIL - '+element.email+'</span><br>';
    out+='<span>MESSAGE - '+element.message+'</span><br>';
    out+='<a href = "mailto: '+element.email+'?subject = Squireone&body = '+replyMesssage+'">Send Email</a>';
    out+='</div>';
    return out;
}
