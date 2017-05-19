import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {environment as env} from '../../environments/environment';
import {KafkaProxyService} from '../services/KafkaProxy/kafka-proxy.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  public status = 'Create Instance';
  public datePipe = new DatePipe('en-US');
  public currentDate = this.datePipe.transform(new Date(), 'HHmmss');
  public instanceName = 'Instance_' + this.currentDate;
  public env = env;
  public messages = {};
  public user = {
    name: '',
    password: ''
  };

  public subscribedMeasures: Array<string> = [];
  private subscribedTopics: Array<string> = [];

  public options = [{
    value: env.AGENTMEASURES,
    label: env.AGENTMEASURES
  }, {
    value: env.AGENTBYACCOUNTMEASURES,
    label: env.AGENTBYACCOUNTMEASURES
  }, {
    value: env.ROUTINGSERVICEMEASURES,
    label: env.ROUTINGSERVICEMEASURES
  }, {
    value: env.AGENTBYROUTINGSERVICEMEASURES,
    label: env.AGENTBYROUTINGSERVICEMEASURES
  }, {
    value: env.AGENTMEASURESMOVINGWINDOW,
    label: env.AGENTMEASURESMOVINGWINDOW
  }, {
    value: env.AGENTBYACCOUNTMEASURSMOVINGWINDOW,
    label: env.AGENTBYACCOUNTMEASURSMOVINGWINDOW
  }, {
    value: env.ROUTINGSERVICEMEASURESMOVINGWINDOW,
    label: env.ROUTINGSERVICEMEASURESMOVINGWINDOW
  }, {
    value: env.AGENTBYROUTINGSERVICEMEASURESMOVINGWINDOW,
    label: env.AGENTBYROUTINGSERVICEMEASURESMOVINGWINDOW
  }
  ];

  constructor(private _kafkaProxyService: KafkaProxyService) {
  }

  ngOnInit() {

    // console.log("Cách lấy properties nè a Hạnh");
    // let propertiesssss : StartOfDayAgentByAccount = new StartOfDayAgentByAccount();
    // console.log(Object.getOwnPropertyNames(propertiesssss));

    this.messages[env.AGENTMEASURES] = [];
    this.messages[env.AGENTBYACCOUNTMEASURES] = [];
    this.messages[env.ROUTINGSERVICEMEASURES] = [];
    this.messages[env.AGENTBYROUTINGSERVICEMEASURES] = [];
    this.messages[env.AGENTMEASURESMOVINGWINDOW] = [];
    this.messages[env.AGENTBYACCOUNTMEASURSMOVINGWINDOW] = [];
    this.messages[env.ROUTINGSERVICEMEASURESMOVINGWINDOW] = [];
    this.messages[env.AGENTBYROUTINGSERVICEMEASURESMOVINGWINDOW] = [];
    this.fData();
  }

  fData(): any {
    this._kafkaProxyService.addTopic(env.result);
    this._kafkaProxyService.poll().subscribe(
      data => {
        console.log('==========Client Poll Success======== ', data);
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            console.log('==============Item: ', data[i].value);

            if (data[i].topic !== env.result) {
              console.log('==========> Push data receive to topic: ', data[i].topic);
              this.messages[data[i].topic].push(data[i]);
            } else {
              console.log('====>subscriptionRequestId: ', data[i].value.subscriptionRequestId + ' ====>instanceName', this.instanceName);
              if (data[i].value.subscriptionRequestId === this.instanceName) {
                // Send Pump
                this._kafkaProxyService.addTopic(data[i].value.measuresStream);
                this.sendMessage(env.pump, this.createPumpRequest([data[i].value.measuresStream]));
              }
            }
          }
        }
      },
      error => {
        console.log('==========Client Poll Fail ==========');
      }
    );
  }

  /**
   * Send a message
   * @param topic
   * @param message
   */
  sendMessage(topic, message): void {
    this._kafkaProxyService.sendData(topic, message).subscribe(
      data => {
        console.log('====== Push data into topic ==== ', topic, ' --- ', data);
      },
      error => {
        console.log('===== Push data into topic unsuccessfully ===== ', topic, ' --- ', error);
      }
    );
  }

  onMultipleSelected(item) {
    this.subscribedMeasures.push(item.value);
  }

  /**
   * Create a pump request
   * @param measureStreams
   * @returns {{userName: string, password: string, measuresStreams: Array<string>}}
   */
  private createSubscribeRequest(measureStreams: string): any {
    return {
      'userName': this.user.name,
      'subscriptionRequestId': this.instanceName,
      'password': this.user.password,
      'request': 'SUBSCRIBE',
      'measuresStream': measureStreams
    };
  }

  onMultipleDeselected(item) {
    const index = this.subscribedMeasures.indexOf(item.value);
    if (index > -1) {
      this.subscribedMeasures.splice(index, 1);
    }
    this.subscribedTopics = this.subscribedMeasures.map(measure => measure);
    this.subscribedTopics.push(env.result);

    this._kafkaProxyService.removeTopic(item.value);
  }

  /**
   * Subscribe for measures
   */
  public subscribeMeasures(): void {
    for (const measure of this.subscribedMeasures) {
      this.sendMessage(env.rsr, this.createSubscribeRequest(measure));
    }
  }

  /**
   * Create a pump request
   * @param measureStreams
   * @returns {{userName: string, password: string, measuresStreams: Array<string>}}
   */
  private createPumpRequest(measureStreams: Array<string>): any {
    return {
      'userName': this.user.name,
      'password': this.user.password,
      'measuresStreams': measureStreams
    };
  }

  private scrollToBottom(elem) {
    elem.scrollTop = elem.scrollHeight;
  }
}
