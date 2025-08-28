function espera(){
    setTimeout(() => {console.log("Hola")}, 3000)
}

async function  saludoAsync(){
    const res = await espera();
    console.log("Espera de 3 segundos...");
}

saludoAsync();