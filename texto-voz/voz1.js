(function() {
    
    // paquetes
    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    var readline = require("readline");
    
    // LLAVE  REGION  NombreDelArchivo
    var subscriptionKey = "e4b96448c6e04fbc9bdcf9834658d447";
    var serviceRegion = "southcentralus";
    var filename = "NuevoArchivo.wav";
    // var r = "es-CO-GonzaloNeural";
  

    var audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
    var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion,);
    // var voz = sdk.SpeechConfig.speechSynthesisVoiceName = "es-CL";
    
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
  
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    // rl.question es casi parecido a prompt, pero este ess de readline
    rl.question("ingresa el texto \n ", function (text) {
      rl.close(); //rl.close se usa para que rl.question no siga preguntando mas

      synthesizer.speakTextAsync(text,
        
          function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log("el archivo se guardo con exito"); //si todo esta bien se ejecuta esto
        
        } else {  //si fallo algo se ejecuta esto
          console.error("se cancelo el proceso, " + result.errorDetails + " ya tienes la clave de susbcripcion");
        }
        synthesizer.close();
        synthesizer = undefined;
      },
          function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer = undefined;
      });
      console.log("El archivo se guardo en: " + filename);
    });
    
  }());