
import { ApplicationService } from "@sap/cds";
import twilio from "twilio";


export = (srv:ApplicationService)=>{


    srv.on('sendAlertSms',async (req:any)=>{
    let sid = '';
    let token = ''
      if(process.env.CDS_ENV = 'production'){
          if(process.env.TWILIO_SID && process.env.TWILIO_TOKEN){
              sid = process.env.TWILIO_SID;
              token =  process.env.TWILIO_TOKEN;
          }
          else{
            req.reject(403,'Could not parse the sms credentials')
          }
      }
      else{
        req.reject(403,'Could not parse the sms credentials')
      }

     
        const twilioClient = twilio(sid,token);
        let result ;
        try {
          result = await twilioClient.messages.create({
            body: `SMS firm initiative test`,
            from: '+919000319895',
            to: '+919874139346',
          });
          
        } catch (error) {
           req.reject(403,'Message not sent ')
        }
    

    })
}