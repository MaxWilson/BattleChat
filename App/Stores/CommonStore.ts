import BaseStore from "./BaseStore";
import IAction from "./../Actions/IAction";
import Dispatcher from "../Dispatcher/Dispatcher";
import AppLoadedAction from "../Actions/AppLoadedAction";
import SayHelloAction from "../Actions/SayHelloAction";

class CommonStore extends BaseStore {
    private bodyTitle: string;
    private bodySummary: string;
    private messages: string[] = [];

    constructor() {
        super();
        Dispatcher.register((action: IAction) => this.processActions(action));
    }

    getBodyTitle(): string {
        if (this.bodyTitle) {
            return this.bodyTitle.toUpperCase();
        }

        return "";
    };

    getBodySummary(): string {
        return this.bodySummary;
    };

    getGreeting(): string {
        return this.messages.join(", ");
    };

    private processActions(action: IAction): void {
        if (action instanceof AppLoadedAction)	{
            this.bodyTitle = action.bodyTitle;
            this.bodySummary = action.bodySummary;
            this.emitChange();

        } else if (action instanceof SayHelloAction) {
            this.messages.push("Hello");
            this.emitChange();

        }
    };
}

export default new CommonStore();