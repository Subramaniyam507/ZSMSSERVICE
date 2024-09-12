import { ApplicationService } from "@sap/cds";
import twilio from "twilio";


export = (srv:ApplicationService)=>{


    srv.on('sendAlertSms',async (req:any)=>{
        const twilioClient = twilio();
        twilioClient.messages
         .create({
           body: `test`,
           from: '123',
           to: '123',
         }).then((message) =>
            console.log(`Message ${message.sid} has been delivered.`)
          ).catch((message) => console.error(message));
         

    })
}