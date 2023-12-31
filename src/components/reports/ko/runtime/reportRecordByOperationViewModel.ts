import * as ko from "knockout";

/**
 * A view model for metrics aggregated by API.
 */
export class ReportRecordByOperationViewModel {
    /**
     * Operation identifier, e.g. "/apis/httpbin/operations/get".
     */
    public operationId: ko.Observable<string>;

    /**
     * Operation name, e.g. "Get".
     */
    public operationName: ko.Observable<string>;

    /**
     * Number of successful calls.
     */
    public callCountSuccess: ko.Observable<string>;

    /**
     * Number of calls blocked due to invalid credentials.
     */
    public callCountBlocked: ko.Observable<string>;

    /**
     * Number of calls failed due to gateway or backend errors.
     */
    public callCountFailed: ko.Observable<string>;

    /**
     * 	Number of calls that didn't fall into any of the previous categories
     */
    public callCountOther: ko.Observable<string>;

    /**
     * Total number of calls during requested period.
     */
    public callCountTotal: ko.Observable<string>;

    /**
     * Total bandwidth consumed (Kb).
     */
    public bandwidth: ko.Observable<string>;

    /**
     * Average time it took to process a request.
     */
    public apiTimeAvg: ko.Observable<string>;

    constructor() {
        this.operationId = ko.observable();
        this.operationName = ko.observable();
        this.callCountSuccess = ko.observable();
        this.callCountBlocked = ko.observable();
        this.callCountFailed = ko.observable();
        this.callCountOther = ko.observable();
        this.callCountTotal = ko.observable();
        this.bandwidth = ko.observable();
        this.apiTimeAvg = ko.observable();
    }
}