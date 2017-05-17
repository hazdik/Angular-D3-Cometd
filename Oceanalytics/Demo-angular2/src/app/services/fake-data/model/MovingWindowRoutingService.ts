export class MovingWindowRoutingService {
	Routing_Service_Name: string = '';
	Available: string = '';
	Staffed: string = '';
	Contacts_Waiting: number = 0;
	Contacts_At_Agent: number = 0;
	Active: number = 0;
	Completed: number = 0;
	Answered : number = 0;
	Answered_After_Threshold : number = 0;
	Abandoned_After_Threshold : number = 0;
	Held_Contacts : number = 0;
	Holds : number = 0;
	Alerting : number = 0;
	Offered: number = 0;
	Not_Answered : number = 0;
	Abandoned : number = 0;
	Consults : number = 0;
	Transfers : number = 0;
	Hold_Time : number = 0;
	Abandon_Time : number = 0;
	Total_Time : number = 0;
	Ring_Time : number = 0;
	WaitTime : number = 0;
	Active_Time : number = 0;
	Oldest_Contact_Waiting: string = '';
	Service_Display_Name: string = '';
	Provider_ID: number = 0;
	Expected_Wait_Time: string = '';
	Channel_ID: number = 0;
	Long_Engagements: number = 0;
	Short_Engagements: number = 0;
	Long_Wrap_Ups: number = 0;
	Short_Wrap_Ups: number = 0;
}
