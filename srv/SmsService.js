"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const twilio_1 = __importDefault(require("twilio"));
module.exports = (srv) => {
    srv.on('sendAlertSms', (req) => __awaiter(void 0, void 0, void 0, function* () {
        const twilioClient = (0, twilio_1.default)();
        twilioClient.messages
            .create({
            body: `test`,
            from: '123',
            to: '123',
        }).then((message) => console.log(`Message ${message.sid} has been delivered.`)).catch((message) => console.error(message));
    }));
};
