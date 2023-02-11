import app from '../app';

// update CSS styles
let windowStyle = document.createElement('style');
( () => {

  document.head.appendChild(windowStyle);

  windowStyle.sheet.insertRule(` body {
    display: block;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;

    background-repeat: no-repeat;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    min-width: 1200px !important; /* set the min width or the window */

    background-color: rgba( 235, 235, 235, 1.0 ); /* grey */
  } `);
  /* prevent user from being able to select the webpage text with mouse moves across is */
  windowStyle.sheet.insertRule(` div {
    user-select: none;
  } `);
  /* prevent highlighting of dropdowns */
  windowStyle.sheet.insertRule(` select {
    user-select: none;
    outline: none;
  } `);

  windowStyle.sheet.insertRule(` button {
    outline: none;
  } `);

  windowStyle.sheet.insertRule(` .background-Color2 {
    background-color: rgba( 235, 25, 235, 1.0 );
  } `);
  windowStyle.sheet.insertRule(` .hold-image {
    display: inline-block;
    vertical-align: middle;
    width: 36px;
    height: 36px;
  } `);
  windowStyle.sheet.insertRule(` .image-alignment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
  } `);
  windowStyle.sheet.insertRule(` .image-alignment:hover {
    display: inline-block;
    text-align: left;
  } `);
  windowStyle.sheet.insertRule(` .image-alignment:hover img {
    float: left;
    display: block;
    position: absolute;
    max-width: none;
    max-height: none;
    width: 400px;
    height: auto;
    z-index: ${ app.initial.zIndex.menu };
    text-align: left;
  } `);
  windowStyle.sheet.insertRule(` img {
    max-width: 36px;
    max-height: 36px;
  } `);




  windowStyle.sheet.insertRule(` .Container{
    display: grid;
    grid-template-rows: auto auto auto;
    /*justify-content: center;*/
    grid-gap: 15px;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
  } `);
  windowStyle.sheet.insertRule(` .Container > *{
    /*background-color: rgba(20, 250, 230, 0.2);*/
  } `);


  /*   SPACER   */


  windowStyle.sheet.insertRule(` .Menu-Container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    margin: 4px 10px;

    min-height: 120px;

    align-items: center;
    /*margin-bottom: 15px;
    height: 100%;*/
    /*background-color: rgba(20, 230, 230, 0.3);*/
  } `);
  windowStyle.sheet.insertRule(` .Menu-Container > * {
    /*background-color: rgba(230, 20, 230, 0.1);*/
  } `);
  windowStyle.sheet.insertRule(` .group {
    /*margin-top: 15px;*/
    margin: 15px 4px 0 4px;

    padding: 0px 12px;
    /*background-color: rgba(230, 20, 230, 0.2);*/
  } `);
  windowStyle.sheet.insertRule(` .menuBar {
    background-color: rgba(240, 240, 240, 1.0);
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;

    font-size: 12px;
    font-weight: 500;
    padding: 6px 11px;
    margin: 0 4px;
    text-decoration: none;
    border: none;
    filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
  } `);
  windowStyle.sheet.insertRule(` .menuBar:hover {
    background-color: rgba(220, 220, 220, 1.0);
  } `);
  windowStyle.sheet.insertRule(` .menuBar:active {
    position:relative;
    top:1px;
  } `);
  windowStyle.sheet.insertRule(` .menuBar:focus {
    outline: none;
    box-shadow: none;
  } `);
  windowStyle.sheet.insertRule(` .menuBar.notActive {
    /*display: none;*/
  } `);
  windowStyle.sheet.insertRule(` #selectRecipeDropdown{
    /*display: none;*/
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-width: 200px;
  } `);
  windowStyle.sheet.insertRule(` .menubar-checkbox{
    padding: 0 8px;
    display: inline-block;
  } `);
  windowStyle.sheet.insertRule(` .checkbox-title{
    display: block;
    font-size: 10px;
    text-align: center;
    padding-bottom: 2px;
  } `);
  windowStyle.sheet.insertRule(` .switch {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 14px;
  } `);
  windowStyle.sheet.insertRule(` .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  } `);
  windowStyle.sheet.insertRule(` .switch .Switch-Help{
    font-size: 10px;
    position: absolute;
    width: 240px;
    top: 110%;
    left: 110%;
    background-color: rgba(255, 255, 255, 0.9);
    color:  rgba(0, 0, 0, 1.0);
    text-align: left;
    border-radius: 6px;
    padding: 10px 15px;
    filter: drop-shadow( 0px 4px 5px rgba( 120, 120, 120, 0.8 ) );
    z-index: ${ app.initial.zIndex.help };
    visibility: hidden;
    transition-property: visibility;
    transition-delay: 0.7s;
    opacity: 0.0;
  } `);
  windowStyle.sheet.insertRule(` .switch:hover .Switch-Help.active{
    visibility: visible;
    opacity: 1.0;
  } `);
  windowStyle.sheet.insertRule(` .switchAction {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba( 150, 150, 150, 1.0 ); /* "red-ish" color */
    -webkit-transition: .4s;
    transition: .4s;
  } `);
  windowStyle.sheet.insertRule(` .switchAction.active {
    color: rgba( 150, 150, 150, 1.0 );
  } `);
  windowStyle.sheet.insertRule(` .switchAction:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  } `);

  windowStyle.sheet.insertRule(` input:checked + .switchAction {
    background-color: rgba( 150, 150, 150, 1.0 ); /* "green-ish" color */
  } `);
  windowStyle.sheet.insertRule(` input:checked + .switchAction.active {
    background-color: rgba( 70, 70, 70, 1.0 ); /* "green-ish" color */
  } `);
  windowStyle.sheet.insertRule(` input:focus + .switchAction {
    box-shadow: 0 0 1px #21f37c;
  } `);
  windowStyle.sheet.insertRule(` input:checked + .switchAction:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  } `);
  windowStyle.sheet.insertRule(` .switchAction.round {
    border-radius: 10px;
  } `);
  windowStyle.sheet.insertRule(` .switchAction.round:before {
    border-radius: 50%;
  } `);


  /*   SPACER   */


  windowStyle.sheet.insertRule(` .Sequencer-Menu {
    display: flex;
    margin: 0 auto;
    filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    align-items: center;
  } `);
  windowStyle.sheet.insertRule(` .Sequencer-Menu > * {
    vertical-align: middle;
  } `);
  windowStyle.sheet.insertRule(` .Sequencer-Settings {
    display: inline-block;
    vertical-align: top;
  } `);
  windowStyle.sheet.insertRule(` .Sequencer-Settings > * {
    display: inline-block;
    vertical-align: middle;
  } `);
  windowStyle.sheet.insertRule(` .sequencer-Menu-group > * {
    display: block;
    margin: 4px 10px;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 500;

  } `);

  windowStyle.sheet.insertRule(` .sequencer-Menu-Button, .sequencer-Menu-input{
    font-size: 10px;
    font-weight: 500;
    padding: 2px 7px;
    border: none;
    border-radius: 3px;
    background-color: rgba(240, 240, 240, 1.0);
    filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
  } `);
  windowStyle.sheet.insertRule(` .sequencer-Menu-Button:hover {
    background-color: rgba(210, 210, 210, 1.0);
  } `);
  windowStyle.sheet.insertRule(` .sequencer-Menu-input::-webkit-outer-spin-button,
    .sequencer-Menu-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    } `);
    windowStyle.sheet.insertRule(` #measureCounter, #TimeSignatureA, #TimeSignatureB {
      margin: 0 10px;
    } `);
    windowStyle.sheet.insertRule(` .sequencer-switch{
      padding: 0 8px;
      display: inline-block;
    } `);
    windowStyle.sheet.insertRule(` .sequencer-title{
      display: block;
      font-size: 8px;
      text-align: center;
      padding-bottom: 2px;
    } `);
    windowStyle.sheet.insertRule(` .Sequencer-Start-Stop {
      display: inline-block;
    } `);
    windowStyle.sheet.insertRule(` .Sequencer-Help {
      display: inline-block;
    } `);
    windowStyle.sheet.insertRule(` .sequencer {
      background-color: rgba(246, 246, 246, 1.0);
      border-radius: 5px;
      display: block;
      cursor: pointer;
      color: #000000;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10px;
      font-weight: 500;
      padding: 4px 12px;
      margin: 0 4px;
      text-decoration: none;
      border: none;
      filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    } `);
    windowStyle.sheet.insertRule(` .sequencer:hover {
    } `);
    windowStyle.sheet.insertRule(` .sequencer.active {
      background-color: rgba(215, 215, 215, 1.0);
    } `);
    windowStyle.sheet.insertRule(` .sequencer:focus {
      outline: none;
      box-shadow: none;
    } `);


    /*   SPACER   */


    windowStyle.sheet.insertRule(` .play-container {
      margin: auto 1em ;
      display: grid;
      grid-auto-flow: column;
      justify-content: start;
      gap: .3em;
    } `);
    windowStyle.sheet.insertRule(` .btn {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: .5em .5em .5em .5em;
      align-content: center;
      justify-items: center;
      width: 2em;
      height: 2em;
      cursor: pointer;
      border: none;
      border-radius: 3px;
      background-color: rgba(240, 240, 240, 1.0);
      filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    } `);
    windowStyle.sheet.insertRule(` .btn:hover {
      background-color: rgba(210, 210, 210, 1.0);
    } `);
    windowStyle.sheet.insertRule(` .btn:active {
      transform: scale(0.95, 0.95);
    } `);
    windowStyle.sheet.insertRule(` .btn:focus {
      transform: scale(0.95, 0.95);
    } `);
    windowStyle.sheet.insertRule(` .btn > div {
      position: relative;
      border-style: solid;
      opacity: .6;
    } `);
    windowStyle.sheet.insertRule(` .btn:hover > div {
      opacity: 1;
    } `);
    windowStyle.sheet.insertRule(` .step-forward-step {
      grid-column: 2;
      border-width: .35em 0 .35em .6em;
      border-color: transparent transparent transparent #000;
    } `);
    windowStyle.sheet.insertRule(` .step-forward-to {
      grid-column: 3;
      border-width: .35em 0 .35em .6em;
      border-color: transparent transparent transparent #000;
    } `);
    windowStyle.sheet.insertRule(` .step-backward-to {
      grid-column: 2;
      border-width: .35em .6em .35em 0;
      border-color: transparent #000 transparent transparent;
    } `);
    windowStyle.sheet.insertRule(` .step-backward-step {
      grid-column: 3;
      border-width: .35em .6em .35em 0;
      border-color: transparent #000 transparent transparent;
    } `);
    windowStyle.sheet.insertRule(` .previous-measure-to {
      grid-column: 2;
      border-width: 0 .22em 0 0;
      border-color: #000 #000 #000 transparent;
    } `);
    windowStyle.sheet.insertRule(` .previous-measure-step {
      grid-column: 3;
      border-width: .35em .6em .35em 0;
      border-color: transparent #000 transparent transparent;
    } `);
    windowStyle.sheet.insertRule(` .next-measure-step {
      grid-column: 2;
      border-width: .35em 0 .35em .6em;
      border-color: transparent transparent transparent #000;
    } `);
    windowStyle.sheet.insertRule(` .next-measure-to {
      grid-column: 3;
      border-width: 0 .22em .0 0;
      border-color: #000 #000 #000 transparent;
    } `);
    windowStyle.sheet.insertRule(` .play-left{
      grid-column: 2 / 4;
      border-width: .5em 0 .5em .9em;
      border-color: transparent transparent transparent #000;
    } `);
    windowStyle.sheet.insertRule(` .play-right{
      visibility: hidden;
    } `);
    windowStyle.sheet.insertRule(` .play-left.active{
      opacity: 1;
      border-color: transparent transparent transparent #008000;
    } `);
    windowStyle.sheet.insertRule(` .btn:hover .play-left.active{
      grid-column: 2;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #FFF;
    } `);
    windowStyle.sheet.insertRule(` .btn:hover .play-right.active{
      visibility: visible;
      grid-column: 3;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #FFF;
    } `);
    windowStyle.sheet.insertRule(` .play-left.active-pause{
      grid-column: 2;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #000;
      opacity: 1;
    } `);
    windowStyle.sheet.insertRule(` .play-right.active-pause{
      visibility: visible;
      grid-column: 3;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #000;
      opacity: 1;
    } `);
    windowStyle.sheet.insertRule(` .btn:hover .play-left.active-pause{
      grid-column: 2 / 4;
      width: 0;
      height: 0;
      border-width: .5em 0 .5em .9em;
      border-color: transparent transparent transparent #000;
      opacity: 1;
    } `);
    windowStyle.sheet.insertRule(` .btn:hover .play-right.active-pause{
      visibility: hidden;
      grid-column: 0;
      width: 0;
      height: 0;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #000;
    } `);
    windowStyle.sheet.insertRule(` .stop-left {
      grid-column: 2 / 4;
      height: .9em;
      border-width: 0 0 0 .9em;
      border-color: transparent transparent transparent #000;
    } `);
    windowStyle.sheet.insertRule(` .stop-right{
      visibility: hidden;
    } `);
    windowStyle.sheet.insertRule(` .stop-left.active{
      opacity: 1;
      border-color: transparent transparent transparent rgba( 0, 0, 0, 1.0 );
    } `);
    windowStyle.sheet.insertRule(` .record{
      grid-column: 2 / 4;
      height: 1em;
      border-width: 0 0 0 1em;
      border-color: transparent transparent transparent #000;
      border-radius: .5em;
    } `);
    windowStyle.sheet.insertRule(` .record.active{
      border-color: transparent transparent transparent #FF0000;
    } `);


    /*   SPACER   */

    windowStyle.sheet.insertRule(` .Sequencer-Container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      padding-top:20px;
      min-height: 40px;

      min-width: 1200px; /* set the min width or the window */

      /*background-color: rgba(246, 26, 26, 0.2);*/ /* for testing */

      overflow: auto;
    } `);

    windowStyle.sheet.insertRule(` .Measure-Container{
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: fit-content;
      block-size: fit-content;

      padding: 2px 6px;
      border-radius: 5px;
      background-color: rgba(246, 246, 246, 1.0);


      margin: 0 3px;
      /*margin-bottom: 15px;*/
    } `);
    windowStyle.sheet.insertRule(` .Measure-Container.active{
      background-color: rgba(215, 215, 215, 1.0);
    } `);
    windowStyle.sheet.insertRule(` .Measure-Title{
      margin: 0 auto;
    } `);
    windowStyle.sheet.insertRule(` .Measure-Title-Lable{
      display: block;
      font-size: 10px;
      text-align: center;
      padding-bottom: 0px;
    } `);
    windowStyle.sheet.insertRule(` .Measure {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;

      justify-content: center;
      align-items: center;
      width: 100%;


      border-radius: 5px;
      padding-bottom: 2px;
    } `);
    windowStyle.sheet.insertRule(` .Measure-Start-Stop{
      display: inline-flex;
      border-radius: 2px;
      background-color: rgba(100, 100, 100, 1.0);
      width: 100%;
      min-width: 10px;
      max-width: 15px;

      height: 20px;
      margin: 0 2px;
    } `);
    windowStyle.sheet.insertRule(` .Measure-Start-Stop.update{
      background-color: rgba(232, 186, 77, 1.0); /* light orange */
    } `);
    windowStyle.sheet.insertRule(` .Measure-steps-container{
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;
      width: 100%;
    } `);
    windowStyle.sheet.insertRule(` .Beat {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;

      border-radius: 2px;
      /*background-color: rgba(255, 255, 255, 1.0);*/ /* for testing */
      width: 100%;

      height: 20px;
      margin: 0 1px;
    } `);
    windowStyle.sheet.insertRule(` .Step {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;

      border-radius: 2px;
      background-color: rgba(235, 235, 235, 1.0); /* light grey */

      width: 100%;
      min-width: 8px;
      max-width: 10px;

      border-radius: 2px;
      margin: 1px 1px;
      margin-top: 4px;
    } `);
    windowStyle.sheet.insertRule(` .Step.active {
      background-color: rgba(140, 140, 140, 1.0); /* grey */
    } `);
    windowStyle.sheet.insertRule(` .Step.play {
      background-color: rgba(77, 232, 170, 1.0); /* light green */
    } `);
    windowStyle.sheet.insertRule(` .Start-help-tip {
      visibility: hidden;
      width: 280px;
      position: absolute;
      margin-top: 30px;


      background-color: rgba(255, 255, 255, 0.7);
      color: rgba(0, 0, 0, 1.0);
      text-align: center;
      border-radius: 6px;
      padding: 5px;


      opacity: 0;
      filter: drop-shadow( 0px 4px 5px rgba( 120, 120, 120, 0.8 ) );
      transition: opacity 0.3s;
    } `);
    windowStyle.sheet.insertRule(` .Measure-Start-Stop .Start-help-tip::after {
      content: "";
      position: absolute;

      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent rgba(255, 255, 255, 0.7);
    } `);
    windowStyle.sheet.insertRule(` .Measure-Start-Stop:hover .Start-help-tip.active{
      visibility: visible;
      opacity: 1;
    } `);
    windowStyle.sheet.insertRule(` .Stop-help-tip {
      visibility: hidden;
      width: 280px;
      position: absolute;
      margin-top: 30px;



      background-color: rgba(255, 255, 255, 0.7);
      color:  rgba(0, 0, 0, 1.0);
      text-align: center;
      border-radius: 6px;
      padding: 5px;


      opacity: 0;
      filter: drop-shadow( 0px 4px 5px rgba( 120, 120, 120, 0.8 ) );
      transition: opacity 0.3s;
    } `);
    windowStyle.sheet.insertRule(` .Measure-Start-Stop .Stop-help-tip::after {
      content: "";
      position: absolute;

      border-width: 5px;
      border-style: solid;
      border-color: transparent rgba(255, 255, 255, 0.7) transparent transparent;
    } `);
    windowStyle.sheet.insertRule(` .Measure-Start-Stop:hover .Stop-help-tip.active{
      visibility: visible;
      opacity: 1;
    } `);




    /*   SPACER   */

    windowStyle.sheet.insertRule(` .Filter-UI-Container {
      display: grid;
      /*grid-gap: 0.52%;*/
      grid-template-columns: auto;
      /*grid-template-columns: minmax(154px, 240px) minmax(530px, 840px) minmax(505px, 800px);*/
      justify-content: center;
      /*align-items: start;*/
      align-items: center;
      width: 100%;
      height: 100%;
    } `);
    windowStyle.sheet.insertRule(` .Filter-UI-Container > *{
      /*background-color: rgba(10, 120, 250, 0.2);*/
    } `);

    windowStyle.sheet.insertRule(` .Layer-Container{
      aspect-ratio: 1 / 1;
      display: grid;
      grid-row: 1;
      grid-column: 1;

      max-width: 240px;
      max-height: 860px;

      /* background-color: rgba(120, 120, 250, 0.2); */
    } `);

    windowStyle.sheet.insertRule(` .Layer-Window {
      display: grid;
      grid-gap: 0px;
      grid-template-rows: 30px auto 30px;

      align-items: center;
      justify-content: stretch;
    } `);
    windowStyle.sheet.insertRule(` .Layer-Window > * {
      /* background-color: rgba(250, 20, 20, 0.2); */
    } `);
    windowStyle.sheet.insertRule(` .LAYERS::-webkit-scrollbar {
      display: none;
    } `);
    windowStyle.sheet.insertRule(` .LAYERS {
      aspect-ratio: 1 / 3.33;
      overflow-y: scroll;
      display: grid;
      position: relative;
      max-height: 860px;
      max-width: 240px;

      background-color: rgba(250, 250, 250, 1.0);
      box-shadow: inset 0px 2px 4px rgba( 40, 40, 40, 0.8 );
    } `);
    windowStyle.sheet.insertRule(` #layer-container{

      /*background-color: rgba(120, 120, 250, 0.4);*/
    } `);
    windowStyle.sheet.insertRule(` .Layer-Buttons{
      display: grid;
      grid-gap: 8%;

      grid-template-columns: auto auto auto;
      grid-template-rows: auto;

      align-items: center;
      justify-content: center;
    } `);
    windowStyle.sheet.insertRule(` .Layer-Buttons > *{
      /* background-color: rgba(80, 180, 250, 0.9); */
    } `);
    windowStyle.sheet.insertRule(` .Add-Remove-Button{
      width: 2.2em;
      height: 1.2em;

      font-weight: normal;
      text-align: center;
      line-height: 1em;
      /*padding: 2px 5px;*/
      /*margin: auto 20px;*/
      border: none;
      border-radius: 5px;
      /* background-color: rgba(240, 240, 240, 1.0); */
      filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    } `);
    windowStyle.sheet.insertRule(` .Add-Remove-Button:hover {
      /* background-color: rgba(210, 210, 210, 1.0); */
    } `);

    windowStyle.sheet.insertRule(` .Background-Picker{
      display: grid;
      grid-gap: 5px;
      grid-template-columns: 58px auto;
      /*grid-template-columns: 58px 68%;*/
      align-items: center;
      justify-items: start;
    } `);
    windowStyle.sheet.insertRule(` .Background-Picker > *{
      /* background-color: rgba(0, 250, 250, 0.2); */
    } `);
    windowStyle.sheet.insertRule(` .Background-Picker-block{
      padding-left: 5px;
      font-size: 10px;
      white-space: wrap;
    } `);

    windowStyle.sheet.insertRule(` .radio-button-container{
      display: grid;
      grid-column: 2;
      place-self: stretch;
      align-items: center;

    } `);
    windowStyle.sheet.insertRule(` .radio-button-collection{
      display: grid;
      grid-gap: 4px;
      grid-template-columns: repeat(6, 12%);
      align-items: center;
      justify-content: end;
      padding-right: 5px;
      /*justify-content: center;*/
    } `);

    windowStyle.sheet.insertRule(` .radio-button{
      display: grid;
      /*justify-items: center;*/
      /*align-items: center;*/

      max-width: 18px;
      max-height: 18px;
      /*aspect-ratio: 1 / 1;*/
      /* background-color: rgba( 30, 130, 270, 0.5 ); */
    } `);
    windowStyle.sheet.insertRule(` .radio-button input {
      -webkit-appearance: none;
      appearance: none;
      display: none;
    } `);
    windowStyle.sheet.insertRule(` .checkmark {
      aspect-ratio: 1 / 1;
      /*max-width: 15px;
      max-height: 15px;*/
      cursor: pointer;
      border-radius: 50%;
      filter: drop-shadow( 0px 2px 1px rgba( 100, 100, 100, 0.0 ) );
    } `);
    windowStyle.sheet.insertRule(` .radio-button input:checked ~ .checkmark {
      filter: drop-shadow( 0px 2px 1px rgba( 100, 100, 100, 1.0 ) );
    } `);
    windowStyle.sheet.insertRule(` .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      /*visibility: hidden;*/
    } `);


/*   SPACER   */


windowStyle.sheet.insertRule(` .Frequency-Container {
  aspect-ratio: 1 / 1;
  display: grid;
  grid-row: 1;
  grid-column: 2;
  align-items: center;
  justify-items: center;
  max-width: 860px;
  /*max-width: 840px;*/
  /*max-width: 832px;*/
  max-height: 860px;

  /*background-color: rgba(250, 0, 0, 0.2);*/
} `);
windowStyle.sheet.insertRule(` .Frequency-Window {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 30px auto 30px;
  /*grid-template-columns: 20px auto 20px;*/
  /*grid-template-columns: 16px auto 16px;*/
  grid-template-rows: 30px auto 30px;
  align-items: center; 
  width: 100%;
  height: 100%;
  /*justify-items: center;*/
} `);
windowStyle.sheet.insertRule(` .Frequency-Window > * {
  display: grid;
  justify-items: center;
  /*background-color: rgba(0, 250, 0, 0.2);*/
} `);

windowStyle.sheet.insertRule(` .UI {
  aspect-ratio: 1 / 1;
  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 2;
  grid-row: 2;

  grid-template-columns: 100%;
  grid-template-rows: 100%;

  max-width: 800px;
  max-height: 800px;
  background-color: rgba( 248, 248, 248, 1.0 );
  /*filter: drop-shadow( 0px 4px 3px rgba( 160, 160, 160, 0.6 ) );*/
} `);
windowStyle.sheet.insertRule(` .UI > * {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
} `);
windowStyle.sheet.insertRule(` #f-mod-canvas-trasnparentWindow {
  background-color: rgba( 248, 248, 248, 0.8 );
  z-index: ${ app.initial.zIndex.canvasUITrasnparent };
} `);


windowStyle.sheet.insertRule(` .rotate0Counter {
  content: "";
  white-space: nowrap;
  transform: rotate(0deg);
} `);
windowStyle.sheet.insertRule(` .rotate90Counter {
  content: "";
  white-space: nowrap;
  transform: rotate(-90deg);
} `);

windowStyle.sheet.insertRule(` .f-top{
  padding-top: 5px;
} `);
windowStyle.sheet.insertRule(` .f-bottom{
  padding-bottom: 5px;
} `);
windowStyle.sheet.insertRule(` .f-left{
  padding-top: 5px;
} `);
windowStyle.sheet.insertRule(` .f-right{
  padding-bottom: 5px;
  zoom: 0.99; /* to make the text crisp */
} `);

/*   SPACER   */

windowStyle.sheet.insertRule(` .Image-Out-Container {
  aspect-ratio: 1 / 1;
  display: grid;
  grid-row: 1;
  grid-column: 3;
  align-items: center;
  justify-items: center;
  

  max-width: 800px;
  max-height: 860px;

  /* background-color: rgba(250, 120, 10, 0.2); */
} `);
windowStyle.sheet.insertRule(` .Image-Window {
  display: grid;
  grid-gap: 0px;
  width: 100%;
  height: 100%;
  grid-template-rows: 30px auto 30px;
  align-items: center;
} `);
windowStyle.sheet.insertRule(` .Image-Window > * {
  /* background-color: rgba(250, 20, 20, 0.2); */
} `);
windowStyle.sheet.insertRule(` .IMAGE {
  aspect-ratio: 1 / 1;
  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: 100%;
  grid-template-rows: 100%;

  max-width: 800px;
  max-height: 800px;

  z-index: ${ app.initial.zIndex.canvasWebGL };

  background-color: rgba( 248, 248, 248, 1.0 );
  filter: drop-shadow( 0px 4px 3px rgba( 160, 160, 160, 0.6 ) );
} `);

windowStyle.sheet.insertRule(` .IMAGE > * {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
} `);


windowStyle.sheet.insertRule(` .center-webgl-row {
  font-size: .85em;
  font-style: regular;
  text-align: left;
  margin: auto 0;
  padding-left: 10px;
  /*padding-top: 26px;*/
  padding-top: 8px;
} `);

windowStyle.sheet.insertRule(` #webglMouseInfo{
  display: none;

} `);
windowStyle.sheet.insertRule(` .imageMouseInteractions{
  margin-top: 3px;
} `);
windowStyle.sheet.insertRule(` .keyComands{
  font-weight: bold;
} `);


/*   SPACER   */


windowStyle.sheet.insertRule(` #picker-Pre-Size{
  /*visibility: hidden;*/
  background-color: rgba(0, 250, 0, 0.2);
} `);
windowStyle.sheet.insertRule(` #picker-Container{
  /*display: none;
  background-color: rgba(245, 245, 245, 0.95);*/
} `);

/*
windowStyle.sheet.insertRule(` .ui-picker-container{
  display: grid;

  align-items: center;
  justify-items: center;

  background-color: rgba( 248, 248, 248, 0.9 );
  z-index: 100;
} `);

windowStyle.sheet.insertRule(` .ui-picker-collection {
  display: grid;

  grid-gap: 2%;
  grid-template-rows: 90% auto;



  width: 90%;
  height: 90%;
  background-color: rgba( 248, 28, 28, 0.9 );
  z-index: 101;
} `);
*/

windowStyle.sheet.insertRule(` .botton-item{
  /*display: grid;
  justify-items: center;*/
} `);
windowStyle.sheet.insertRule(` #button-container{
  filter: drop-shadow( 0px 4px 3px rgba( 160, 160, 160, 0.6 ) );
} `);
windowStyle.sheet.insertRule(` .button-container{
  display: grid;

  grid-column: 1;
  grid-row: 3;

  grid-gap: 2%;

  align-items: center;
  justify-content: center;
  grid-template-columns: 20% 10% 20%;
} `);
windowStyle.sheet.insertRule(` .button-container > * {

  display: grid;
  align-items: center;
  /*background-color: rgba(25, 110, 110, 0.4);*/
} `);
windowStyle.sheet.insertRule(` .color-picker-button{
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 1.0);
  white-space: nowrap;

  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1.0);
  border: none;
  padding: 3% 10%;

} `);

/*windowStyle.sheet.insertRule(` #myModal{
  display: none;
} `);*/
windowStyle.sheet.insertRule(` #picker-Container-Outer{
  display: none;
} `);
windowStyle.sheet.insertRule(` #webgl-canvas{
width:800px;
height:800px;
  max-width: 800px;
  max-height: 800px;
  visibility: hidden;
  z-index: 1;

  /*background-color: rgba(255, 25, 255, 1.0); */
} `);

windowStyle.sheet.insertRule(` .modal {
  display: none;
  position: fixed; /* Stay in place */
  z-index: ${ app.initial.zIndex.dialog };
  padding-top: 300px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(245, 245, 245, 0.8);
} `);
windowStyle.sheet.insertRule(` .modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px 40px 20px 40px;
  border: 0px solid #888;
  width: 25%;
  min-height: 100px;
  border-radius: 10px;
  filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
} `);
windowStyle.sheet.insertRule(` .close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: normal;
} `);
windowStyle.sheet.insertRule(` .renameTitle{
  border-radius: 5px;
  border: none;
  padding: 3px 8px;
  background-color: rgba( 248, 248, 248, 0.8 );
  filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
} `);
windowStyle.sheet.insertRule(` .renameButton{
  float: right;
  font-weight: normal;
  margin-left: 10px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 2px 10px 3px 10px;

  border: none;
  border-radius: 5px;
  background-color: rgba(240, 240, 240, 1.0);
  filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
} `);
windowStyle.sheet.insertRule(` .close:hover,.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
} `);


windowStyle.sheet.insertRule(` .TEST-Background-COlor{
  /*background-color: rgba(0, 250, 0, 0.2);*/
} `);




/*    SPACE    */
windowStyle.sheet.insertRule(` .total-Mask{
  position: fixed; /* Stay in place */
  z-index: ${ app.initial.zIndex.modal };
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(248, 248, 248, 0.9);
} `);
windowStyle.sheet.insertRule(` .picker-container{
  z-index: ${ app.initial.zIndex.colorPicker };
  /*display: grid;*/
  grid-column: 2;
  grid-row: 2;

  align-items: center;
  justify-items: center;

  width: 100%;
  height: 100%;
  /*background-color: rgba(248, 248, 248, 0.9);*/
} `);
windowStyle.sheet.insertRule(` .picker-container > *{
  width: 100%;
  height: 100%;
  /*background-color: rgba(245, 245, 25, 0.3);*/
} `);
windowStyle.sheet.insertRule(` .picker-window{
  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-rows: 100%;

  z-index: ${ app.initial.zIndex.colorPicker };

  width: 100%;
  height: 100%;
} `);
windowStyle.sheet.insertRule(` .picker-window > *{
  width: 100%;
  height: 100%;
  /*background-color: rgba(245, 25, 245, 0.3);*/
} `);
windowStyle.sheet.insertRule(` .picker-area{
  z-index: ${ app.initial.zIndex.colorPicker };
  display: grid;
  align-items: center;
  justify-items: center;
} `);
windowStyle.sheet.insertRule(` .picker-area > *{
  z-index: ${ app.initial.zIndex.colorPicker };
  grid-column: 1;
  grid-row: 1;
  /*background-color: rgba(245, 25, 25, 0.3);*/
} `);
windowStyle.sheet.insertRule(` #pickerBackground{
  visibility: hidden;
} `);
windowStyle.sheet.insertRule(` #pickerLayer{
  visibility: hidden;
} `);





  windowStyle.sheet.insertRule(` input[type=range] {
    width: 100%;
    margin: 4px 0;
    background-color: transparent;
    -webkit-appearance: none;
  } `);
  windowStyle.sheet.insertRule(` input[type=range]:focus {
    outline: none;
  } `);
  windowStyle.sheet.insertRule(` input[type=range]::-webkit-slider-runnable-track {
    background-color: rgba( 100, 100, 100, 1.0 ); /* "red-ish" color */
    border: 0;
    width: 100%;
    height: 4px;
    cursor: pointer;
  } `);
  windowStyle.sheet.insertRule(` input[type=range]::-webkit-slider-thumb {
    margin-top: -4px;
    width: 12px;
    height: 12px;
    background-color: rgba( 100, 100, 100, 1.0 ); /* "red-ish" color */
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  } `);
  windowStyle.sheet.insertRule(` input[type=range]:focus::-webkit-slider-runnable-track {
    background-color: rgba( 80, 80, 80, 1.0 ); /* "green-ish" color */
  } `);
  windowStyle.sheet.insertRule(` input[type=range]:disabled::-webkit-slider-runnable-track {
    background-color: rgba( 180, 180, 180, 0.5 ); /* "red-ish" color */
  } `);
  windowStyle.sheet.insertRule(` input[type=range]:disabled::-webkit-slider-thumb {
    background-color: rgba( 180, 180, 180, 0.9 ); /* "red-ish" color */
  } `);
document.getElementById( 'body' ).style = null; // remove the style from the html body element

})();




//loadWindowStyleCSS();
