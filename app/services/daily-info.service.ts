import * as soap from "soap";
import {promisify} from "util";

export class DailyInfoService {
    public data: any;
    private readonly url: string;
    private readonly soapClient: any;

    constructor() {
        this.url = "http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx?WSDL";
        this.soapClient = promisify(soap.createClient).bind(soap);
    }

    public async getCursOnDate(now: string) {
        const soapClient = await this.soapClient(this.url);
        const client = promisify(soapClient.GetCursOnDate).bind(soapClient);
        const result = await client({On_date: now});

        return this.data = result.GetCursOnDateResult.diffgram.ValuteData.ValuteCursOnDate;
    }

    public getCursByCode(code: string) {
        return this.data.find((item) => item.VchCode === code);
    }
}
