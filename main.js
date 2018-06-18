//inicio haciendo mi constante que utilizare en el bloque

const encrypt = () => {
//ligo mi html de donde obtendre mi texto a cifrar
  let plainText = document.getElementById("plainTextInput").value;
  let numberPosition = parseInt(document.getElementById("numberInput").value);
//indico que utilizare objetos utilizare para codificar
    encode (plainText,numberPosition);
}
  let encode = (plainText,numberPosition) => {
    let messageShift = [];
//indico 
    for(i = 0;i <plainText.length; i ++){
//coloco if para agregar espacios entre las palabras.
      if (plainText[i]==" "){
      messageShift.push(" ");
      console.log("")
    }else{
//aplico ecuación para minusculas
    if (plainText.charCodeAt(i) >90) {
      let equation=(((plainText.charCodeAt(i)-97)+numberPosition)%26)+97;
      let substitutionCiphers=String.fromCharCode(equation);

      messageShift.push(substitutionCiphers);

      console.log(substitutionCiphers);
//aplico ecuación para mayusculas
    }else{
      let equation =((plainText.charCodeAt(i)-65)+numberPosition)%26+65;
      let substitutionCiphers=String.fromCharCode(equation);

      messageShift.push(substitutionCiphers);
      console.log(substitutionCiphers);
          }
      }
      document.getElementById("cipher").value=messageShift.join("")
  }
}
//declaro mi constante de bloque para desencriptar
const decrypt = () => {
//coloco las variables que recibiran los mensajes desde html
  let cipherMessage = document.getElementById("cipherTextInput").value;
  let numberPosition = parseInt(document.getElementById("numberInput").value);
//ubico los objetos que voy a utilizar
  decode (cipherMessage,numberPosition);
}
  let decode = (cipherMessage,numberPosition) => {
    let messageThrowBack = [];
//le indicare de donde iniciara a leer y la accion que debe realizar para agregar letras
    for(i = 0;i <cipherMessage.length; i ++){
//le indico que agregue un espacio entre palabras
      if (cipherMessage[i]== " "){
        messageThrowBack.push(" ");
//coloco condiconal para identificar letras minusculas y restar desplazamientos de acuerdo a codigo ASCII
    }else{

    if (cipherMessage.charCodeAt(i) >90) {
      let equationInvert=(((cipherMessage.charCodeAt(i)+111)-numberPosition)%26)+97;
      let toLetters=String.fromCharCode(equationInvert);

      messageThrowBack.push(toLetters);
//coloco condicional para identificar letras mayusculas y restar desplazamientos de acuerdo a codigo ASCII
  
    }else{
      let equationInvert=((cipherMessage.charCodeAt(i)+65)-numberPosition)%26+65;
      let toLetters = String.fromCharCode(equationInvert);
      messageThrowBack.push(toLetters);

          }
      }
//Envio a mi html el mensaje cifrado
      document.getElementById("descipher").value=messageThrowBack.join("")
  }
}