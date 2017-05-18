import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';

import {StartOfDayAgentByAccount} from 'app/services/fake-data/model/StartOfDayAgentByAccount';
import {StartOfDayAgent} from 'app/services/fake-data/model/StartOfDayAgent';
import {StartOfDayRoutingService} from 'app/services/fake-data/model/StartOfDayRoutingService';
import {StartOfDayAgentByRoutingService} from 'app/services/fake-data/model/StartOfDayAgentByRoutingService';
import {MovingWindowAgentByAccount} from 'app/services/fake-data/model/MovingWindowAgentByAccount';
import {MovingWindowAgent} from 'app/services/fake-data/model/MovingWindowAgent';
import {MovingWindowRoutingService} from 'app/services/fake-data/model/MovingWindowRoutingService';
import {MovingWindowAgentByRoutingService} from 'app/services/fake-data/model/MovingWindowAgentByRoutingService';

@Injectable()
export class FakeDataService {
  public result: any;
  constructor() {
  }

  public realtimeData(type: string) {
    let result: any;
    switch (type) {
      case environment.AGENTMEASURES:
        const startOfDayAgentByAccount: StartOfDayAgentByAccount = new StartOfDayAgentByAccount();
        startOfDayAgentByAccount.Agent_ID = this.randomNumber();
        startOfDayAgentByAccount.Provider_ID = this.randomNumber();
        startOfDayAgentByAccount.Account_ID = this.randomNumber();
        startOfDayAgentByAccount.Supervisor_ID = this.randomNumber();
        startOfDayAgentByAccount.Offered = this.randomNumber();
        startOfDayAgentByAccount.Completed = this.randomNumber();
        startOfDayAgentByAccount.Abandoned = this.randomNumber();
        startOfDayAgentByAccount.Not_Answered = this.randomNumber();
        startOfDayAgentByAccount.Conferenced = this.randomNumber();
        startOfDayAgentByAccount.Answered = this.randomNumber();
        startOfDayAgentByAccount.Consults = this.randomNumber();
        startOfDayAgentByAccount.Transfers = this.randomNumber();
        startOfDayAgentByAccount.Logged_In_Time = this.randomNumber();
        startOfDayAgentByAccount.Hold_Time = this.randomNumber();
        startOfDayAgentByAccount.Alert_Time = this.randomNumber();
        startOfDayAgentByAccount.Active_Time = this.randomNumber();
        startOfDayAgentByAccount.Not_Ready_Time = this.randomNumber();
        startOfDayAgentByAccount.Disconnects_From_Hold = this.randomNumber();
        startOfDayAgentByAccount.Long_Holds = this.randomNumber();
        startOfDayAgentByAccount.First_Name = this.randomString();
        startOfDayAgentByAccount.Last_Name = this.randomString();
        startOfDayAgentByAccount.Display_Name = this.randomString();
        startOfDayAgentByAccount.Supervisor_First_Name = this.randomString();
        startOfDayAgentByAccount.Supervisor_Last_Name = this.randomString();
        startOfDayAgentByAccount.Ready = this.randomNumber();
        startOfDayAgentByAccount.Not_Ready = this.randomNumber();
        startOfDayAgentByAccount.Work_State = this.randomString();
        startOfDayAgentByAccount.Channel = this.randomString();
        startOfDayAgentByAccount.loginTimeStamp = this.randomString();
        startOfDayAgentByAccount.logoutTimeStamp = this.randomString();
        startOfDayAgentByAccount.lastStateChangeTimestamp = this.randomNumber();
        startOfDayAgentByAccount.LastStateReasonTimestamp = this.randomNumber();
        startOfDayAgentByAccount.agentbyAccountState = this.randomNumber();
        startOfDayAgentByAccount.Long_Engagements = this.randomNumber();
        startOfDayAgentByAccount.Short_Engagements = this.randomNumber();
        startOfDayAgentByAccount.Long_Wrap_Ups = this.randomNumber();
        startOfDayAgentByAccount.Short_Wrap_Ups = this.randomNumber();
        startOfDayAgentByAccount.Holds = this.randomNumber();
        startOfDayAgentByAccount.NR_Reason_Code = this.randomString();
        startOfDayAgentByAccount.NR_Reason_Code_Name = this.randomString();
        startOfDayAgentByAccount.Blended_Active_Time = this.randomNumber();
        startOfDayAgentByAccount.ADHOC = this.randomNumber();
        startOfDayAgentByAccount.ADHOC_DURATION = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_TO_AGENT = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_TO_SERVICE = this.randomNumber();
        startOfDayAgentByAccount.CONSULTS_INITIATED = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_INITIATED = this.randomNumber();
        startOfDayAgentByAccount.CONFERENCED_INITIATED = this.randomNumber();
        startOfDayAgentByAccount.CONSULTS_ACCEPTED = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_ACCEPTED = this.randomNumber();
        startOfDayAgentByAccount.CONFERENCED_ACCEPTED = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        startOfDayAgentByAccount.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        startOfDayAgentByAccount.COACHED = this.randomNumber();
        startOfDayAgentByAccount.COACHING = this.randomNumber();
        startOfDayAgentByAccount.OBSERVED = this.randomNumber();
        startOfDayAgentByAccount.OBSERVING = this.randomNumber();
        startOfDayAgentByAccount.BARGED_IN = this.randomNumber();
        startOfDayAgentByAccount.BARGED_OUT = this.randomNumber();
        startOfDayAgentByAccount.CONSULT_DURATION = this.randomNumber();
        startOfDayAgentByAccount.CONSULTING_DURATION = this.randomNumber();
        startOfDayAgentByAccount.COACHED_DURATION = this.randomNumber();
        startOfDayAgentByAccount.COACHING_DURATION = this.randomNumber();
        startOfDayAgentByAccount.OBSERVED_DURATION = this.randomNumber();
        startOfDayAgentByAccount.OBSERVING_DURATION = this.randomNumber();
        startOfDayAgentByAccount.BARGED_IN_DURATION = this.randomNumber();
        startOfDayAgentByAccount.BARGED_OUT_DURATION = this.randomNumber();
        startOfDayAgentByAccount.ACW_DURATION = this.randomNumber();
        startOfDayAgentByAccount.ACW = this.randomNumber();
        startOfDayAgentByAccount.ACW_EXTENDED = this.randomNumber();

        this.result = startOfDayAgentByAccount;
        break;

      case environment.AGENTBYACCOUNTMEASURES : {
        const startOfDayAgent: StartOfDayAgent = new StartOfDayAgent();
        startOfDayAgent.First_Name = this.randomString();
        startOfDayAgent.Last_Name = this.randomString();
        startOfDayAgent.Agent_ID = this.randomNumber();
        startOfDayAgent.Display_Name = this.randomString();
        startOfDayAgent.Supervisor_First_Name = this.randomString();
        startOfDayAgent.Supervisor_Last_Name = this.randomString();
        startOfDayAgent.Supervisor_ID = this.randomNumber();
        startOfDayAgent.Offered = this.randomNumber();
        startOfDayAgent.Abandoned = this.randomNumber();
        startOfDayAgent.Answered = this.randomNumber();
        startOfDayAgent.Completed = this.randomNumber();
        startOfDayAgent.Transfers = this.randomNumber();
        startOfDayAgent.Conferenced = this.randomNumber();
        startOfDayAgent.Consults = this.randomNumber();
        startOfDayAgent.Active_Time = this.randomNumber();
        startOfDayAgent.Hold_Time = this.randomNumber();
        startOfDayAgent.Alert_Time = this.randomNumber();
        startOfDayAgent.Not_Ready_Time = this.randomNumber();
        startOfDayAgent.Logged_In_Time = this.randomNumber();
        startOfDayAgent.Idle_Time = this.randomNumber();
        startOfDayAgent.Ready = this.randomNumber();
        startOfDayAgent.Not_Ready = this.randomNumber();
        startOfDayAgent.Disconnects_From_Hold = this.randomNumber();
        startOfDayAgent.Long_Holds = this.randomNumber();
        startOfDayAgent.Last_State_Change_Time = this.randomNumber();
        startOfDayAgent.Provider_ID = this.randomNumber();
        startOfDayAgent.Agent_State = this.randomNumber();
        startOfDayAgent.Work_State = this.randomString();
        startOfDayAgent.ID = this.randomNumber();
        startOfDayAgent.LastState_Change_Timestamp = this.randomNumber();
        startOfDayAgent.Login_TimeStamp = this.randomString();
        startOfDayAgent.logoutTimeStamp = this.randomString();
        startOfDayAgent.Last_State_Reason_Timestamp = this.randomNumber();
        startOfDayAgent.Last_WorkCodeChangeTimestamp = this.randomNumber();
        startOfDayAgent.NR_Reason_Code = this.randomString();
        startOfDayAgent.Long_Engagements = this.randomNumber();
        startOfDayAgent.Short_Engagements = this.randomNumber();
        startOfDayAgent.Long_Wrap_Ups = this.randomNumber();
        startOfDayAgent.Short_Wrap_Ups = this.randomNumber();
        startOfDayAgent.Short_Not_Ready = this.randomNumber();
        startOfDayAgent.Blended_active_time = this.randomNumber();
        startOfDayAgent.Blended_alerting_time = this.randomNumber();
        startOfDayAgent.Additional_time = this.randomNumber();
        startOfDayAgent.TRANSFERRED_TO_AGENT = this.randomNumber();
        startOfDayAgent.TRANSFERRED_TO_SERVICE = this.randomNumber();
        startOfDayAgent.ADHOC = this.randomNumber();
        startOfDayAgent.ADHOC_DURATION = this.randomNumber();
        startOfDayAgent.CONSULTS_INITIATED = this.randomNumber();
        startOfDayAgent.TRANSFERRED_INITIATED = this.randomNumber();
        startOfDayAgent.CONFERENCED_INITIATED = this.randomNumber();
        startOfDayAgent.CONSULTS_ACCEPTED = this.randomNumber();
        startOfDayAgent.TRANSFERRED_ACCEPTED = this.randomNumber();
        startOfDayAgent.CONFERENCED_ACCEPTED = this.randomNumber();
        startOfDayAgent.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        startOfDayAgent.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        startOfDayAgent.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        startOfDayAgent.TRANSFERRED_ACCEPTED_FROM_AGENT = this.randomNumber();
        startOfDayAgent.COACHED = this.randomNumber();
        startOfDayAgent.COACHING = this.randomNumber();
        startOfDayAgent.OBSERVED = this.randomNumber();
        startOfDayAgent.OBSERVING = this.randomNumber();
        startOfDayAgent.BARGED_IN = this.randomNumber();
        startOfDayAgent.BARGED_OUT = this.randomNumber();
        startOfDayAgent.CONSULT_DURATION = this.randomNumber();
        startOfDayAgent.CONSULTING_DURATION = this.randomNumber();
        startOfDayAgent.COACHED_DURATION = this.randomNumber();
        startOfDayAgent.COACHING_DURATION = this.randomNumber();
        startOfDayAgent.OBSERVED_DURATION = this.randomNumber();
        startOfDayAgent.OBSERVING_DURATION = this.randomNumber();
        startOfDayAgent.BARGED_IN_DURATION = this.randomNumber();
        startOfDayAgent.BARGED_OUT_DURATION = this.randomNumber();
        startOfDayAgent.ACW_DURATION = this.randomNumber();
        startOfDayAgent.ACW = this.randomNumber();
        startOfDayAgent.ACW_EXTENDED = this.randomNumber();
        this.result = startOfDayAgent;
        break;

      case environment.ROUTINGSERVICEMEASURES : {
        const startOfDayRoutingService: StartOfDayRoutingService = new StartOfDayRoutingService();
        startOfDayRoutingService.Routing_Service_Name = this.randomString();
        startOfDayRoutingService.Routing_Service_ID = this.randomString();
        startOfDayRoutingService.Available = this.randomString();
        startOfDayRoutingService.Contacts_Waiting = this.randomNumber();
        startOfDayRoutingService.Contacts_At_Agent = this.randomNumber();
        startOfDayRoutingService.In_ACW = this.randomNumber();
        startOfDayRoutingService.Active = this.randomNumber();
        startOfDayRoutingService.Answered = this.randomNumber();
        startOfDayRoutingService.Answered_After_Threshold = this.randomNumber();
        startOfDayRoutingService.Abandoned_After_Threshold = this.randomNumber();
        startOfDayRoutingService.Held_Contacts = this.randomNumber();
        startOfDayRoutingService.Holds = this.randomNumber();
        startOfDayRoutingService.Alerting = this.randomNumber();
        startOfDayRoutingService.Offered = this.randomNumber();
        startOfDayRoutingService.Not_Answered = this.randomNumber();
        startOfDayRoutingService.Abandoned = this.randomNumber();
        startOfDayRoutingService.Consults = this.randomNumber();
        startOfDayRoutingService.Transfers = this.randomNumber();
        startOfDayRoutingService.Conferences = this.randomNumber();
        startOfDayRoutingService.Hold_Time = this.randomNumber();
        startOfDayRoutingService.Abandon_Time = this.randomNumber();
        startOfDayRoutingService.Total_Time = this.randomNumber();
        startOfDayRoutingService.Ring_Time = this.randomNumber();
        startOfDayRoutingService.WaitTime = this.randomNumber();
        startOfDayRoutingService.Active_Time = this.randomNumber();
        startOfDayRoutingService.Oldest_Contact_Waiting = this.randomString();
        startOfDayRoutingService.Service_Display_Name = this.randomString();
        startOfDayRoutingService.Provider_ID = this.randomNumber();
        startOfDayRoutingService.Expected_Wait_Time = this.randomNumber();
        startOfDayRoutingService.Channel_ID = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_TO_AGENT = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_TO_SERVICE = this.randomNumber();
        startOfDayRoutingService.CONSULTS_INITIATED = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_INITIATED = this.randomNumber();
        startOfDayRoutingService.CONFERENCED_INITIATED = this.randomNumber();
        startOfDayRoutingService.CONSULTS_ACCEPTED = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_ACCEPTED = this.randomNumber();
        startOfDayRoutingService.CONFERENCED_ACCEPTED = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        startOfDayRoutingService.TRANSFERRED_ACCEPTED_FROM_AGENT = this.randomNumber();
        startOfDayRoutingService.COACHED = this.randomNumber();
        startOfDayRoutingService.COACHING = this.randomNumber();
        startOfDayRoutingService.OBSERVED = this.randomNumber();
        startOfDayRoutingService.OBSERVING = this.randomNumber();
        startOfDayRoutingService.BARGED_IN = this.randomNumber();
        startOfDayRoutingService.BARGED_OUT = this.randomNumber();
        startOfDayRoutingService.CONSULT_DURATION = this.randomNumber();
        startOfDayRoutingService.CONSULTING_DURATION = this.randomNumber();
        startOfDayRoutingService.COACHED_DURATION = this.randomNumber();
        startOfDayRoutingService.COACHING_DURATION = this.randomNumber();
        startOfDayRoutingService.OBSERVED_DURATION = this.randomNumber();
        startOfDayRoutingService.OBSERVING_DURATION = this.randomNumber();
        startOfDayRoutingService.BARGED_IN_DURATION = this.randomNumber();
        startOfDayRoutingService.BARGED_OUT_DURATION = this.randomNumber();
        startOfDayRoutingService.ACW_DURATION = this.randomNumber();
        startOfDayRoutingService.ACW = this.randomNumber();
        startOfDayRoutingService.ACW_EXTENDED = this.randomNumber();
        startOfDayRoutingService.Long_Engagements = this.randomNumber();
        startOfDayRoutingService.Short_Engagements = this.randomNumber();
        startOfDayRoutingService.Long_Wrap_Ups = this.randomNumber();
        startOfDayRoutingService.Short_Wrap_Ups = this.randomNumber();

        this.result = startOfDayRoutingService;
        break;

      case environment.AGENTBYROUTINGSERVICEMEASURES : {
        const startOfDayAgentByRoutingService: StartOfDayAgentByRoutingService = new StartOfDayAgentByRoutingService();
        startOfDayAgentByRoutingService.Agent_ID = this.randomNumber();
        startOfDayAgentByRoutingService.Supervisor_ID = this.randomNumber();
        startOfDayAgentByRoutingService.Agent_Surname = this.randomString();
        startOfDayAgentByRoutingService.Agent_Firstname = this.randomString();
        startOfDayAgentByRoutingService.Supervisor_Surname = this.randomString();
        startOfDayAgentByRoutingService.Supervisor_Firstname = this.randomString();
        startOfDayAgentByRoutingService.Service_Display_Name = this.randomString();
        startOfDayAgentByRoutingService.Provider_ID = this.randomNumber();
        startOfDayAgentByRoutingService.Channel_ID = this.randomNumber();
        startOfDayAgentByRoutingService.Offered = this.randomNumber();
        startOfDayAgentByRoutingService.Completed = this.randomNumber();
        startOfDayAgentByRoutingService.Abandoned = this.randomNumber();
        startOfDayAgentByRoutingService.Not_Answered = this.randomNumber();
        startOfDayAgentByRoutingService.Conferences = this.randomNumber();
        startOfDayAgentByRoutingService.Answered = this.randomNumber();
        startOfDayAgentByRoutingService.Consults = this.randomNumber();
        startOfDayAgentByRoutingService.Transfers = this.randomNumber();
        startOfDayAgentByRoutingService.Hold_Duration = this.randomNumber();
        startOfDayAgentByRoutingService.Disconnects_From_Hold = this.randomNumber();
        startOfDayAgentByRoutingService.Holds = this.randomNumber();
        startOfDayAgentByRoutingService.Long_Engagements = this.randomNumber();
        startOfDayAgentByRoutingService.Short_Engagements = this.randomNumber();
        startOfDayAgentByRoutingService.Long_Holds = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_TO_AGENT = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_TO_SERVICE = this.randomNumber();
        startOfDayAgentByRoutingService.CONSULTS_INITIATED = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_INITIATED = this.randomNumber();
        startOfDayAgentByRoutingService.CONFERENCED_INITIATED = this.randomNumber();
        startOfDayAgentByRoutingService.CONSULTS_ACCEPTED = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_ACCEPTED = this.randomNumber();
        startOfDayAgentByRoutingService.CONFERENCED_ACCEPTED = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        startOfDayAgentByRoutingService.TRANSFERRED_ACCEPTED_FROM_AGENT = this.randomNumber();
        startOfDayAgentByRoutingService.COACHED = this.randomNumber();
        startOfDayAgentByRoutingService.COACHING = this.randomNumber();
        startOfDayAgentByRoutingService.OBSERVED = this.randomNumber();
        startOfDayAgentByRoutingService.OBSERVING = this.randomNumber();
        startOfDayAgentByRoutingService.BARGED_IN = this.randomNumber();
        startOfDayAgentByRoutingService.BARGED_OUT = this.randomNumber();
        startOfDayAgentByRoutingService.CONSULT_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.CONSULTING_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.COACHED_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.COACHING_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.OBSERVED_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.OBSERVING_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.BARGED_IN_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.BARGED_OUT_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.ACW_DURATION = this.randomNumber();
        startOfDayAgentByRoutingService.ACW = this.randomNumber();
        startOfDayAgentByRoutingService.ACW_EXTENDED = this.randomNumber();
        startOfDayAgentByRoutingService.Long_Wrap_Ups = this.randomNumber();
        startOfDayAgentByRoutingService.Short_Wrap_Ups = this.randomNumber();

        this.result = startOfDayAgentByRoutingService;
        break;

      case environment.AGENTMEASURESMOVINGWINDOW : {
        const movingWindowAgentByAccount: MovingWindowAgentByAccount = new MovingWindowAgentByAccount();
        movingWindowAgentByAccount.Agent_ID = this.randomNumber();
        movingWindowAgentByAccount.Provider_ID = this.randomNumber();
        movingWindowAgentByAccount.Supervisor_ID = this.randomNumber();
        movingWindowAgentByAccount.Account_ID = this.randomNumber();
        movingWindowAgentByAccount.Offered = this.randomNumber();
        movingWindowAgentByAccount.Completed = this.randomNumber();
        movingWindowAgentByAccount.Abandoned = this.randomNumber();
        movingWindowAgentByAccount.Not_Answered = this.randomNumber();
        movingWindowAgentByAccount.Conferences = this.randomNumber();
        movingWindowAgentByAccount.Answered = this.randomNumber();
        movingWindowAgentByAccount.Consults = this.randomNumber();
        movingWindowAgentByAccount.Transfers = this.randomNumber();
        movingWindowAgentByAccount.Hold_Time = this.randomNumber();
        movingWindowAgentByAccount.Alert_Time = this.randomNumber();
        movingWindowAgentByAccount.Active_Time = this.randomNumber();
        movingWindowAgentByAccount.Not_Ready_Time = this.randomNumber();
        movingWindowAgentByAccount.Disconnects_From_Hold = this.randomNumber();
        movingWindowAgentByAccount.Long_Holds = this.randomNumber();
        movingWindowAgentByAccount.ID = this.randomNumber();
        movingWindowAgentByAccount.First_Name = this.randomString();
        movingWindowAgentByAccount.Last_Name = this.randomString();
        movingWindowAgentByAccount.Display_Name = this.randomString();
        movingWindowAgentByAccount.Supervisor_First_Name = this.randomString();
        movingWindowAgentByAccount.Supervisor_Last_Name = this.randomString();
        movingWindowAgentByAccount.Ready = this.randomNumber();
        movingWindowAgentByAccount.Not_Ready = this.randomNumber();
        movingWindowAgentByAccount.Work_State = this.randomString();
        movingWindowAgentByAccount.Channel = this.randomString();
        movingWindowAgentByAccount.loginTimeStamp = this.randomString();
        movingWindowAgentByAccount.logoutTimeStamp = this.randomString();
        movingWindowAgentByAccount.lastStateChangeTimestamp = this.randomNumber();
        movingWindowAgentByAccount.LastStateReasonTimestamp = this.randomNumber();
        movingWindowAgentByAccount.agentbyAccountState = this.randomString();
        movingWindowAgentByAccount.Long_Engagements = this.randomNumber();
        movingWindowAgentByAccount.Short_Engagements = this.randomNumber();
        movingWindowAgentByAccount.Long_Wrap_Ups = this.randomNumber();
        movingWindowAgentByAccount.Short_Wrap_Ups = this.randomNumber();
        movingWindowAgentByAccount.Holds = this.randomNumber();
        movingWindowAgentByAccount.NR_Reason_Code = this.randomString();
        movingWindowAgentByAccount.NR_Reason_Code_Name = this.randomString();
        movingWindowAgentByAccount.Blended_Active_Time = this.randomString();
        movingWindowAgentByAccount.ADHOC = this.randomNumber();
        movingWindowAgentByAccount.ADHOC_DURATION  = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_TO_AGENT = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_TO_SERVICE = this.randomNumber();
        movingWindowAgentByAccount.CONSULTS_INITIATED = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_INITIATED = this.randomNumber();
        movingWindowAgentByAccount.CONFERENCED_INITIATED = this.randomNumber();
        movingWindowAgentByAccount.CONSULTS_ACCEPTED = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_ACCEPTED = this.randomNumber();
        movingWindowAgentByAccount.CONFERENCED_ACCEPTED = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        movingWindowAgentByAccount.TRANSFERRED_ACCEPTED_FROM_AGENT = this.randomNumber();
        movingWindowAgentByAccount.COACHED = this.randomNumber();
        movingWindowAgentByAccount.COACHING = this.randomNumber();
        movingWindowAgentByAccount.OBSERVED = this.randomNumber();
        movingWindowAgentByAccount.OBSERVING = this.randomNumber();
        movingWindowAgentByAccount.BARGED_IN = this.randomNumber();
        movingWindowAgentByAccount.BARGED_OUT = this.randomNumber();
        movingWindowAgentByAccount.CONSULT_DURATION = this.randomNumber();
        movingWindowAgentByAccount.CONSULTING_DURATION = this.randomNumber();
        movingWindowAgentByAccount.COACHED_DURATION = this.randomNumber();
        movingWindowAgentByAccount.COACHING_DURATION = this.randomNumber();
        movingWindowAgentByAccount.OBSERVED_DURATION = this.randomNumber();
        movingWindowAgentByAccount.OBSERVING_DURATION = this.randomNumber();
        movingWindowAgentByAccount.BARGED_IN_DURATION = this.randomNumber();
        movingWindowAgentByAccount.BARGED_OUT_DURATION = this.randomNumber();
        movingWindowAgentByAccount.ACW_DURATION = this.randomNumber();
        movingWindowAgentByAccount.ACW = this.randomNumber();
        movingWindowAgentByAccount.ACW_EXTENDED = this.randomNumber();
        this.result = movingWindowAgentByAccount;
        break;

      case environment.AGENTBYACCOUNTMEASURSMOVINGWINDOW : {
        const movingWindowAgent: MovingWindowAgent = new MovingWindowAgent();

        movingWindowAgent.First_Name = this.randomString();
        movingWindowAgent.Last_Name = this.randomString();
        movingWindowAgent.Agent_ID = this.randomNumber();
        movingWindowAgent.Display_Name = this.randomString();
        movingWindowAgent.Supervisor_First_Name = this.randomString();
        movingWindowAgent.Supervisor_Last_Name = this.randomString();
        movingWindowAgent.Supervisor_ID = this.randomNumber();
        movingWindowAgent.Account_ID = this.randomNumber();
        movingWindowAgent.Offered = this.randomNumber();
        movingWindowAgent.Abandoned = this.randomNumber();
        movingWindowAgent.Answered = this.randomNumber();
        movingWindowAgent.Completed = this.randomNumber();
        movingWindowAgent.Transfers = this.randomNumber();
        movingWindowAgent.Conferences = this.randomNumber();
        movingWindowAgent.Consults = this.randomNumber();
        movingWindowAgent.Not_Answered = this.randomNumber();
        movingWindowAgent.Holds = this.randomNumber();
        movingWindowAgent.Active_Time = this.randomNumber();
        movingWindowAgent.Hold_Time = this.randomNumber();
        movingWindowAgent.Alert_Time = this.randomNumber();
        movingWindowAgent.Not_Ready_Time = this.randomNumber();
        movingWindowAgent.Logged_In_Time = this.randomNumber();
        movingWindowAgent.Idle_Time = this.randomNumber();
        movingWindowAgent.Ready = this.randomNumber();
        movingWindowAgent.Not_Ready = this.randomNumber();
        movingWindowAgent.Disconnects_From_Hold = this.randomNumber();
        movingWindowAgent.Long_Holds = this.randomNumber();
        movingWindowAgent.Last_State_Change_Time = this.randomNumber();
        movingWindowAgent.Provider_ID = this.randomNumber();
        movingWindowAgent.Agent_State = this.randomString();
        movingWindowAgent.Work_State = this.randomString();
        movingWindowAgent.ID = this.randomNumber();
        movingWindowAgent.LastState_Change_Timestamp = this.randomNumber();
        movingWindowAgent.Login_TimeStamp = this.randomNumber();
        movingWindowAgent.logoutTimeStamp = this.randomNumber();
        movingWindowAgent.NR_Reason_Code_Name = this.randomString();
        movingWindowAgent.LastStateReasonTimestamp = this.randomNumber();
        movingWindowAgent.NR_Reason_Code = this.randomString();
        movingWindowAgent.Long_Engagements = this.randomNumber();
        movingWindowAgent.Short_Engagements = this.randomNumber();
        movingWindowAgent.Long_Wrap_Ups = this.randomNumber();
        movingWindowAgent.Short_Wrap_Ups = this.randomNumber();
        movingWindowAgent.Short_Not_Ready = this.randomNumber();
        movingWindowAgent.Blended_active_time = this.randomString();
        movingWindowAgent.Blended_alerting_time = this.randomString();
        movingWindowAgent.Additional_time = this.randomString();
        movingWindowAgent.TRANSFERRED_TO_AGENT = this.randomNumber();
        movingWindowAgent.TRANSFERRED_TO_SERVICE = this.randomNumber();
        movingWindowAgent.ADHOC = this.randomNumber();
        movingWindowAgent.ADHOC_DURATION  = this.randomNumber();
        movingWindowAgent.CONSULTS_INITIATED = this.randomNumber();
        movingWindowAgent.TRANSFERRED_INITIATED = this.randomNumber();
        movingWindowAgent.CONFERENCED_INITIATED = this.randomNumber();
        movingWindowAgent.CONSULTS_ACCEPTED = this.randomNumber();
        movingWindowAgent.TRANSFERRED_ACCEPTED = this.randomNumber();
        movingWindowAgent.CONFERENCED_ACCEPTED = this.randomNumber();
        movingWindowAgent.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        movingWindowAgent.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        movingWindowAgent.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        movingWindowAgent.TRANSFERRED_ACCEPTED_FROM_AGENT = this.randomNumber();
        movingWindowAgent.COACHED = this.randomNumber();
        movingWindowAgent.COACHING = this.randomNumber();
        movingWindowAgent.OBSERVED = this.randomNumber();
        movingWindowAgent.OBSERVING = this.randomNumber();
        movingWindowAgent.BARGED_IN = this.randomNumber();
        movingWindowAgent.BARGED_OUT = this.randomNumber();
        movingWindowAgent.CONSULT_DURATION = this.randomNumber();
        movingWindowAgent.CONSULTING_DURATION = this.randomNumber();
        movingWindowAgent.CONSULTED_DURATION = this.randomNumber();
        movingWindowAgent.COACHED_DURATION = this.randomNumber();
        movingWindowAgent.COACHING_DURATION = this.randomNumber();
        movingWindowAgent.OBSERVED_DURATION = this.randomNumber();
        movingWindowAgent.OBSERVING_DURATION = this.randomNumber();
        movingWindowAgent.BARGED_IN_DURATION = this.randomNumber();
        movingWindowAgent.BARGED_OUT_DURATION = this.randomNumber();
        movingWindowAgent.ACW_DURATION = this.randomNumber();
        movingWindowAgent.ACW = this.randomNumber();
        movingWindowAgent.ACW_EXTENDED = this.randomNumber();

        this.result = movingWindowAgent;
        break;

      case environment.ROUTINGSERVICEMEASURESMOVINGWINDOW : {
        const movingWindowRoutingService: MovingWindowRoutingService = new MovingWindowRoutingService();

        movingWindowRoutingService.Routing_Service_Name = this.randomString();
        movingWindowRoutingService.Available = this.randomString();
        movingWindowRoutingService.Staffed = this.randomString();
        movingWindowRoutingService.Contacts_Waiting = this.randomNumber();
        movingWindowRoutingService.Contacts_At_Agent = this.randomNumber();
        movingWindowRoutingService.Active = this.randomNumber();
        movingWindowRoutingService.Completed = this.randomNumber();
        movingWindowRoutingService.Answered = this.randomNumber();
        movingWindowRoutingService.Answered_After_Threshold = this.randomNumber();
        movingWindowRoutingService.Abandoned_After_Threshold = this.randomNumber();
        movingWindowRoutingService.Held_Contacts = this.randomNumber();
        movingWindowRoutingService.Holds = this.randomNumber();
        movingWindowRoutingService.Alerting = this.randomNumber();
        movingWindowRoutingService.Offered = this.randomNumber();
        movingWindowRoutingService.Not_Answered = this.randomNumber();
        movingWindowRoutingService.Abandoned = this.randomNumber();
        movingWindowRoutingService.Consults = this.randomNumber();
        movingWindowRoutingService.Transfers = this.randomNumber();
        movingWindowRoutingService.Hold_Time = this.randomNumber();
        movingWindowRoutingService.Abandon_Time = this.randomNumber();
        movingWindowRoutingService.Total_Time = this.randomNumber();
        movingWindowRoutingService.Ring_Time = this.randomNumber();
        movingWindowRoutingService.WaitTime = this.randomNumber();
        movingWindowRoutingService.Active_Time = this.randomNumber();
        movingWindowRoutingService.Oldest_Contact_Waiting = this.randomString();
        movingWindowRoutingService.Service_Display_Name = this.randomString();
        movingWindowRoutingService.Provider_ID = this.randomNumber();
        movingWindowRoutingService.Expected_Wait_Time = this.randomString();
        movingWindowRoutingService.Channel_ID = this.randomNumber();
        movingWindowRoutingService.Long_Engagements = this.randomNumber();
        movingWindowRoutingService.Short_Engagements = this.randomNumber();
        movingWindowRoutingService.Long_Wrap_Ups = this.randomNumber();
        movingWindowRoutingService.Short_Wrap_Ups = this.randomNumber();
        this.result = movingWindowRoutingService;
        break;

      case environment.AGENTBYROUTINGSERVICEMEASURESMOVINGWINDOW : {
        const movingWindowAgentByRoutingService: MovingWindowAgentByRoutingService = new MovingWindowAgentByRoutingService();

        movingWindowAgentByRoutingService.Agent_ID = this.randomNumber();
        movingWindowAgentByRoutingService.Supervisor_ID = this.randomNumber();
        movingWindowAgentByRoutingService.Agent_Surname = this.randomString();
        movingWindowAgentByRoutingService.Agent_Firstname = this.randomString();
        movingWindowAgentByRoutingService.Supervisor_Surname = this.randomString();
        movingWindowAgentByRoutingService.Supervisor_First_Name = this.randomString();
        movingWindowAgentByRoutingService.Routing_Service_ID = this.randomNumber();
        movingWindowAgentByRoutingService.Service_Display_Name = this.randomString();
        movingWindowAgentByRoutingService.Provider_ID = this.randomNumber();
        movingWindowAgentByRoutingService.Channel_ID = this.randomNumber();
        movingWindowAgentByRoutingService.Offered = this.randomNumber();
        movingWindowAgentByRoutingService.Completed = this.randomNumber();
        movingWindowAgentByRoutingService.Abandoned = this.randomNumber();
        movingWindowAgentByRoutingService.Not_Answered = this.randomNumber();
        movingWindowAgentByRoutingService.Conferences = this.randomNumber();
        movingWindowAgentByRoutingService.Answered = this.randomNumber();
        movingWindowAgentByRoutingService.Consults = this.randomNumber();
        movingWindowAgentByRoutingService.Transferred = this.randomNumber();
        movingWindowAgentByRoutingService.Hold_Duration = this.randomNumber();
        movingWindowAgentByRoutingService.Blended_Active_Duration = this.randomNumber();
        movingWindowAgentByRoutingService.Alertting_Duration = this.randomNumber();
        movingWindowAgentByRoutingService.Active_Time = this.randomNumber();
        movingWindowAgentByRoutingService.Disconnects_From_Hold = this.randomNumber();
        movingWindowAgentByRoutingService.Holds = this.randomNumber();
        movingWindowAgentByRoutingService.Long_Engagements = this.randomNumber();
        movingWindowAgentByRoutingService.Short_Engagements = this.randomNumber();
        movingWindowAgentByRoutingService.Long_Wrap_Ups = this.randomNumber();
        movingWindowAgentByRoutingService.Short_Wrap_Ups = this.randomNumber();
        movingWindowAgentByRoutingService.Long_Holds = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_TO_AGENT = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_TO_SERVICE = this.randomNumber();
        movingWindowAgentByRoutingService.CONSULTS_INITIATED = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_INITIATED = this.randomNumber();
        movingWindowAgentByRoutingService.CONFERENCED_INITIATED = this.randomNumber();
        movingWindowAgentByRoutingService.CONSULTS_ACCEPTED = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_ACCEPTED = this.randomNumber();
        movingWindowAgentByRoutingService.CONFERENCED_ACCEPTED = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_INITIATED_TO_SERVICE = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_INITIATED_TO_AGENT = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_ACCEPTED_FROM_SERVICE = this.randomNumber();
        movingWindowAgentByRoutingService.TRANSFERRED_ACCEPTED_FROM_AGENT = this.randomNumber();
        movingWindowAgentByRoutingService.COACHED = this.randomNumber();
        movingWindowAgentByRoutingService.COACHING = this.randomNumber();
        movingWindowAgentByRoutingService.OBSERVED = this.randomNumber();
        movingWindowAgentByRoutingService.OBSERVING = this.randomNumber();
        movingWindowAgentByRoutingService.BARGED_IN = this.randomNumber();
        movingWindowAgentByRoutingService.BARGED_OUT = this.randomNumber();
        movingWindowAgentByRoutingService.CONSULT_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.CONSULTING_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.CONSULTED_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.COACHED_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.COACHING_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.OBSERVED_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.OBSERVING_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.BARGED_IN_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.BARGED_OUT_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.ACW_DURATION = this.randomNumber();
        movingWindowAgentByRoutingService.ACW = this.randomNumber();
        movingWindowAgentByRoutingService.ACW_EXTENDED = this.randomNumber();

        this.result = movingWindowAgentByRoutingService;

        break;
    }
    return result;
  }

  public randomNumber(): number {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
  };

  public randomString(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
}
