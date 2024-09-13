entity ZT00_PURCHASE_ORDER_WORKFLOW{

    key PO_NUMBER: String;
    key REQUESTOR : String;
    key PROCESS_ID :String;
        PO_DATE  :String;
        QUANTITY:Decimal;
        UNIT_PRICE:Decimal;
        TOTAL_PRICE : Decimal;
        DELIVERY_DATE:Date;
        APPROVER1:String;
        APPROVER2:String;
        APPROVER3:String;

}

type SMSPOST{

        PO_NUMBER: String;
        REQUESTOR : String;
        PROCESS_ID :String;
        PO_DATE  :String;
        QUANTITY:Decimal;
        UNIT_PRICE:Decimal;
        TOTAL_PRICE : Decimal;
        DELIVERY_DATE:Date;
        APPROVER1:String;
        APPROVER2:String;
        APPROVER3:String;
        STAGE:String(1);

}