using {ZT00_PURCHASE_ORDER_WORKFLOW,SMSPOST} from '../db/datamodel';
service SmsService{

    entity PurchaseOrderWorkflowSet as projection on ZT00_PURCHASE_ORDER_WORKFLOW;
    action sendAlertSms(data:SMSPOST)  ;
}