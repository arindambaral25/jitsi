import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform) {}

  // startRecord() {
  //   console.log("Starting");
  //   ScreenRecord.ScreenRecord.startRecord(
  //     {isAudio: true},
  //     "file:///storage/emulated/0/Android/data/test.mp4",
  //     (success) => {
  //       alert('Started Recording');
  //     },
  //     (error) => {
  //       alert('Error in recording');
  //     }
  //   );
  // }
  // stopRecording() {
  //   this.platform.ready().then( () => {
  //     console.log("Stopping");
  //     (<any>window).plugins.ScreenRecord.stopRecord(
  //       (success) => {
  //         alert('Recording Stopped');
  //       },
  //       (error) => {
  //         alert('Error in stopping recoding');
  //       }
  //     )
  //   });
  // }
  start() {
    const domain = 'meet.jit.si';
    const options = {
        roomName: 'JitsiMeetAPIExample',
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet')
    };
    const api = new JitsiMeetExternalAPI(domain, options);
  }
}
