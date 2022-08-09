function createlable(tagname,attname,attvalue,content){
    var lab=document.createElement(tagname);
    lab.setAttribute(attname,attvalue);
    lab.innerHTML=content;
    return lab
}

function createinput(tag,types,cont,attr1,val1){
var input=document.createElement("input");
input.setAttribute(types,cont);
input.setAttribute(attr1,val1);
return input;
}

function createbreak(braker){
    var nextline=document.createElement("br");
    return nextline;
}


var labelfirst=createlable("label","for","firstname","Firstname");
var breaker=createbreak("br");
var inputfirst=createinput("input","type","text","name","firstname");
var breaker1=createbreak("br");
var labellast=createlable("label","for","firstname","Lastname");
var breaker2=createbreak("br");
var inputlast=createinput("input","type","text","name","Lastname");
var breaker3=createbreak("br");
var labelemail=createlable("label","for","email","Email");
var breaker4=createbreak("br");
var inputemail=createinput("input","type","text","name","Email");
var breaker5=createbreak("br");
var label=createlable("label","for","number","Phonenumber");
var breaker6=createbreak("br");
var input=createinput("input","type","tel","name","Phonenumber");
var breaker12=createbreak("br");
var labelad=createlable("label","for","Address","Address");
var breaker7=createbreak("br");
var inputad=createinput("input","type","text","name","Address");
var breaker10=createbreak("br");
var labelad1=createlable("label","for","Adress1","Adress 1");
var breaker8=createbreak("br");
var inputad1=createinput("input","type","text","name","Address1");
var breaker11=createbreak("br");
var labelad2=createlable("label","for","Adress2","Adress 2");
var breaker9=createbreak("br");
var inputad2=createinput("input","type","text","name","Address2");

document.body.innerHTML=('<div class="PageContent row">     <div class="c1 col-4"></div>     <div class="c2 col-8"></div>    </div>');
var divpagecontent=document.querySelector(".c1");
divpagecontent.append(labelfirst,breaker,inputfirst,breaker1,labellast,breaker2,inputlast,breaker3,labelemail,breaker4,inputemail,breaker5,label,breaker6,input,breaker12,labelad,breaker7,inputad,breaker10,labelad1,breaker8,inputad1,breaker11,labelad2,breaker9,inputad2);
divpagecontent.innerHTML =(divpagecontent.innerHTML+' <label for="Gender">Gender</label><select name="gender" id="gen">    <option value>Please select</option><option value="MALE">MALE</option>    <option value="FEMALE">FEMALE</option>    <option value="OTHER">OTHER</option></select><br><label for="Food">Food</label><select name="food" id="foo">    <option value>Please select</option>    <option value="VEG">VEG</option>    <option value="NON-VEG">NON-VEG</option> <option value="VEGAN">VEGAN</option></select><br><label for="State">State</label><select name="state" id="sta">    <option value>Please select</option>    <option value="Tamil Nadu">Tamil Nadu</option>    <option value="Kerala">Kerala</option>    <option value="Madhya Pradesh">Madhya Pradesh</option>    <option value="Karnataka">Karnataka</option>    <option value="Kerala">Kerala</option>    <option value="Delhi">Delhi</option>    <option value="Goa">Goa</option></select><br><label for="Countrys">Country</label><select name="Country" id="cont">    <option value>Please select</option>    <option value="India">India</option>           <option value="OTHER">OTHER</option></select><button id="AddBTN" onclick="addDetails()">Add Items</button>');
var divpagecontent1=document.querySelector(".c2");
divpagecontent1.innerHTML='    <div class="TableDiv col-12">        <div class="TableHeader col-12 row"> <div>Firstname</div><div>Lastname</div><div>Email</div><div>Ph No,</div><div>Address</div><div>Address1</div><div>Address2</div><div>Gender</div><div>Food</div><div>state</div><div>country</div>             </div>        <div class="TableBody row">        </div>    </div>';
function addDetails(){
    var divpagecontent2=document.querySelector(".TableBody");
    var finalStrinf="<div class='TableBodyCon row col-12 pl-0 pr-0'>";
    var Fname=document.getElementsByName("firstname")[0].value;
    finalStrinf=finalStrinf+"<div>"+Fname+"</div>";
    var Lastname=document.getElementsByName("Lastname")[0].value;
    finalStrinf=finalStrinf+"<div>"+Lastname+"</div>";
    var Email=document.getElementsByName("Email")[0].value;
    finalStrinf=finalStrinf+"<div>"+Email+"</div>";
    var Phonenumber=document.getElementsByName("Phonenumber")[0].value;
    finalStrinf=finalStrinf+"<div>"+Phonenumber+"</div>";
    var Address=document.getElementsByName("Address")[0].value;
    finalStrinf=finalStrinf+"<div>"+Address+"</div>";
    var Address1=document.getElementsByName("Address1")[0].value;
    finalStrinf=finalStrinf+"<div>"+Address1+"</div>";
    var Address2=document.getElementsByName("Address2")[0].value;
    finalStrinf=finalStrinf+"<div>"+Address2+"</div>";
    var gen=document.getElementsByName("gender")[0].value;
    finalStrinf=finalStrinf+"<div>"+gen+"</div>";
    var foo=document.getElementsByName("food")[0].value;
    finalStrinf=finalStrinf+"<div>"+foo+"</div>";
    var sta=document.getElementsByName("state")[0].value;
    finalStrinf=finalStrinf+"<div>"+sta+"</div>";
    var cont=document.getElementsByName("Country")[0].value;
    finalStrinf=finalStrinf+"<div>"+cont+"</div>";
    finalStrinf=finalStrinf+"</div>";
    divpagecontent2.innerHTML=divpagecontent2.innerHTML+finalStrinf;
    
}
