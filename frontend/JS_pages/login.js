let btn=document.getElementById("submit")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    let details=document.querySelectorAll("#input")
    let obj={}
    for(let user of details){
        obj[user.className]=user.value
    }
    //console.log(obj)
    loginuser(obj)
})

async function loginuser(obj){
     try{
        let loginreq=await fetch("http://localhost:8080/user/login",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{"Content-type":"application/json"}
        })
        if(loginreq.ok==true){
            let token=await loginreq.json()
            sessionStorage.setItem("token",token.token)
            alert("login successful")
            window.location.href="../HTMLPAGES/index.html"
            //console.log(token)
        }
        console.log(loginreq)
     }catch(err){
        alert("can't login please check details")
        console.log("can't login please check details")
        console.log(err)
     }
}