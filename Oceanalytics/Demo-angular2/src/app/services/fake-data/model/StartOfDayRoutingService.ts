export class StartOfDayRoutingService {
	Routing_Service_Name: string = '';
	Routing_Service_ID: string = '';
	Available: string = '';
	Contacts_Waiting : number = 0;
	Contacts_At_Agent : number = 0;
	In_ACW : number = 0;
	Active : number = 0;
	Answered : number = 0;
	Answered_After_Threshold : number = 0;
	Abandoned_After_Threshold : number = 0;
	Held_Contacts : number = 0;
	Holds : number = 0;
	Alerting : number = 0;
	Offered : number = 0;
	Not_Answered : number = 0;
	Abandoned : number = 0;
	Consults : number = 0;
	Transfers : number = 0;
	Conferences : number = 0;
	Hold_Time : number = 0;
	Abandon_Time : number = 0;
	Total_Time : number = 0;
	Ring_Time : number = 0;
	WaitTime : number = 0;
	Active_Time : number = 0;
	Oldest_Contact_Waiting : string = '';
	Service_Display_Name : string = '';
	Provider_ID : number = 0;
	Expected_Wait_Time : number = 0;
	Channel_ID : number = 0;
	TRANSFERRED_TO_AGENT: number = 0;
	TRANSFERRED_TO_SERVICE: number = 0;
	CONSULTS_INITIATED: number = 0;
	TRANSFERRED_INITIATED: number = 0;
	CONFERENCED_INITIATED: number = 0;
	CONSULTS_ACCEPTED: number = 0;
	TRANSFERRED_ACCEPTED: number = 0;
	CONFERENCED_ACCEPTED: number = 0;
	TRANSFERRED_INITIATED_TO_SERVICE: number = 0;
	TRANSFERRED_INITIATED_TO_AGENT: number = 0;
	TRANSFERRED_ACCEPTED_FROM_SERVICE: number = 0;
	TRANSFERRED_ACCEPTED_FROM_AGENT: number = 0;
	COACHED: number = 0;
	COACHING: number = 0;
	OBSERVED: number = 0;
	OBSERVING: number = 0;
	BARGED_IN: number = 0;
	BARGED_OUT: number = 0;
	CONSULT_DURATION: number = 0;
	CONSULTING_DURATION: number = 0;
	COACHED_DURATION: number = 0;
	COACHING_DURATION: number = 0;
	OBSERVED_DURATION: number = 0;
	OBSERVING_DURATION: number = 0;
	BARGED_IN_DURATION: number = 0;
	BARGED_OUT_DURATION: number = 0;
	ACW_DURATION: number = 0;
	ACW: number = 0;
	ACW_EXTENDED: number = 0;
	Long_Engagements: number = 0;
	Short_Engagements: number = 0;
	Long_Wrap_Ups: number = 0;
	Short_Wrap_Ups: number = 0;
}
