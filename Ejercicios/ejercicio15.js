async function miPromesa() {
    const res = await resuelto();
    console.log(res)
}

function resuelto(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);  
  });
        
}

miPromesa();
