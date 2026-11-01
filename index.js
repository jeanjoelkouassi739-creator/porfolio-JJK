async function requests() {
    const resp=await fetch("https://jsonplaceholder.typicode.com/users")
   const data= await resp.json()
   console.log(data)
    
}

const vara=document.getElementById("skills")
vara.textContent