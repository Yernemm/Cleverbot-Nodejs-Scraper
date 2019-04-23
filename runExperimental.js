const puppeteer = require('puppeteer');
var running = true;

var page;
var browser;
const readline = require('readline');
(async () => {
  lgp("Opening browser...");
  browser = await puppeteer.launch();
  lgp("Opening new tab...");
  page = await browser.newPage();
  lgp("Setting viewport...");
  await page.setViewport({width: 1920, height: 1080});
  lgp("Loading CleverBot website...");
  await page.goto('https://www.cleverbot.com/', {waitUntil: 'networkidle2'});
  askQuestion(browser, page);
})();


function cleverbotSend(browser, page, message, callback){
  
  (async () => {
    await rl.close();
    //await page.setRequestInterception(true);
    lgp("Sending message...");
    var messageToSend = message

    page.evaluate(function(botmsg){
      document.querySelector('form[id="avatarform"] > input[name="stimulus"]').value = botmsg;
      cleverbot.sendAI();
  }, message);


    lgp("Intercepting response...");
    page.on('response', function responseListener(response){
  {
    //console.log(interceptedRequest.url());
    var alreadyFound = false;
    if(response.url().startsWith("https://www.cleverbot.com/webservicemin?")){
      //console.log("==================================");
      if(!alreadyFound)
      lgp("Response found...");

      //IT TOOK ME WAYYY TOO LONG TO WORK OUT THESE ARE SEPARATED BY '\r'
      //I'm keeping it commented as a reminder of my

     // console.log(response.status());
      response.text().then(r =>{
      //  let rebuiltString = "";
       // var charArr = [];
      //  regex = /([a-zA-Z0-9_\\/:;()\[\]<>\?\!.,\'\"\& ])+/g
      //  var splitflag = 0;
      //  r.split('').forEach(char => {
        //  charArr.push(char);
        //  if(char.match(regex) & splitflag < 10){
        //    console.log(char);
        //  rebuiltString+=char;
        //  }else{
         //   splitflag++;
          //}
          
        //});
        //console.log(charArr);
        //console.log(r.length);
        //console.log(rebuiltString.length);
        //console.log(rebuiltString);

        //console.log(rebuiltString)

        

        


        if(r != "OK\n"){
          alreadyFound = true;
          page.removeListener('response', function responseListener(response){
            {
              //console.log(interceptedRequest.url());
              var alreadyFound = false;
              if(response.url().startsWith("https://www.cleverbot.com/webservicemin?")){
                //console.log("==================================");
                if(!alreadyFound)
                lgp("Response found...");
          
                //IT TOOK ME WAYYY TOO LONG TO WORK OUT THESE ARE SEPARATED BY '\r'
                //I'm keeping it commented as a reminder of my
          
               // console.log(response.status());
                response.text().then(r =>{
                //  let rebuiltString = "";
                 // var charArr = [];
                //  regex = /([a-zA-Z0-9_\\/:;()\[\]<>\?\!.,\'\"\& ])+/g
                //  var splitflag = 0;
                //  r.split('').forEach(char => {
                  //  charArr.push(char);
                  //  if(char.match(regex) & splitflag < 10){
                  //    console.log(char);
                  //  rebuiltString+=char;
                  //  }else{
                   //   splitflag++;
                    //}
                    
                  //});
                  //console.log(charArr);
                  //console.log(r.length);
                  //console.log(rebuiltString.length);
                  //console.log(rebuiltString);
          
                  //console.log(rebuiltString)
          
                  
          
                  
          
          
                  if(r != "OK\n"){
                    alreadyFound = true;
                    page.removeListener('response', responseListener)
                    listenerCallback(r.split("\r")[0]);
                    //lgp("Closing browser...");
            //browser.close().then(()=>{lgp("Done!");});
                    }
                }).catch();
                
                //console.log("==================================");
              }
          
            }
          })
          listenerCallback(r.split("\r")[0]);
          //lgp("Closing browser...");
  //browser.close().then(()=>{lgp("Done!");});
          }
      }).catch();
      
      //console.log("==================================");
    }

  }
});


    //console.log("Taking screenshot...");
    //let scp = 'Screenshot-' + Date.now() +'.png';
    //await page.screenshot({path: scp});
    //console.log("Screenshot saved to '" + scp + "'");
    //console.log("Closing browser...");

   

    
    })();
}



function listenerCallback(res){

  console.log(">Response: " + res);

 askQuestion(browser, page);

}

//may or may not have copied the ones below from some website

var rl;
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function askQuestion(browser, page){
  

 
  

  rl.question('>Message: ', (userMsg) => { 
    cleverbotSend(browser, page, userMsg, res =>{
      
      
     
      
    })
  
    
  });
  
  
}

function lgp(msg){
  console.log("================" + msg);
}




