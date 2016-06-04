import * as React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import CommonStore from "../../Stores/CommonStore";
import  * as CommonActionCreators from "../../ActionCreators/CommonActionCreators";
import SmartComponent from "./../SmartComponent";

/* tslint:disable:no-any */
const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

interface IContentPageState {
   bodyTitle: string;
   bodySummary: string;
   greeting: string;
}

export default class ContentPage extends SmartComponent<{}, IContentPageState> {
    constructor() {
        super(CommonStore);
    }

    doRender(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return <div className={styles.container}>
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody ref="contentBodyRef" title={this.state.bodyTitle} summary={this.state.bodySummary}>
                       <div className={styles.hello}>
                    <button onClick={() => this.onButtonClick() }>Say Hello!</button>
                    <span> You said {this.state.greeting ? `'${this.state.greeting}'` : "nothing"}.</span>
                       </div>
                   </ContentBody>
               </div>;
    }

    protected getState(): IContentPageState {
        return {
            bodyTitle: CommonStore.getBodyTitle(),
            bodySummary: CommonStore.getBodySummary(),
            greeting: CommonStore.getGreeting()
        };
    }

    private onButtonClick(): void {
        CommonActionCreators.sayHello();
    }
}