let btn=document.getElementById("submit")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    let details=document.querySelectorAll("#input")
    let obj={}
    for(let user of details){
        obj[user.className]=user.value
    }
    //console.log(obj)
    adduser(obj)
})
 
async function adduser(obj){
      try{
        let regreq=await fetch("https://kind-pear-bear-garb.cyclic.app/user/create",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{"Content-type":"application/json"}
        })
        if(regreq.ok==true){
            alert("New user added")
            window.location.href="../HTMLPAGES/login.html"
        }else{
            alert("something went wrong")

        }
        //console.log(regreq)
      }catch(err){
        alert("bad request")
        console.log("bad request")
           console.log(err)
      }
}