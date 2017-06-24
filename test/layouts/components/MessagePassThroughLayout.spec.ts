import {LogEvent} from "../../../src/core/LogEvent";
import {levels} from "../../../src/core/LogLevel";
import {expect} from "../../tools";
import {MessagePassThroughLayout} from "../../../src/layouts/components/MessagePassThroughLayout";

describe("MessagePassThroughLayout", () => {

    before(() => {

        this.layout = new MessagePassThroughLayout({
            type: "messagePassThrough"
        });

        const context = new Map();
        context.set("user", "romain");
        const logEvent = new LogEvent("category", levels().DEBUG, ["data"], context);
        (logEvent as any)._startTime = new Date("2017-06-18 22:29:38.234");
        this.result = this.layout.transform(logEvent);
    });


    it("should return a formated string", () => {
        expect(this.result).to.eq("data");
    });


});