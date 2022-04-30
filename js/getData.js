export const getData = async () => {
    try {
        const response = await fetch("https://fpatrilla.github.io/jvsJason/stockCafe.json");
        const prodCafe = await response.json();
        // console.log(prodCafe);

        return prodCafe;
    } catch (error) {
        // console.log('error catch', error)
    };
}


 
