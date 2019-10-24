import React,{Component} from 'react';
import {FirstComponent} from "./components/FirstComponent"
import {Clock} from "./components/Clock";
import "./App.css"
class App extends Component{
  render() {
    return(
        <div className={"App"}>
            <div> <h1>Merhaba dunya</h1></div>
          <FirstComponent></FirstComponent>
          <Clock date={new Date()}></Clock>
        </div>
    )
  }

}
//<!--componentlerin en temel düzeyde haberleşmesi için vue js de :prob="prob" şeklinde-->
export default App;
