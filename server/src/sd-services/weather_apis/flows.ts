// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class flows {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'flows';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new flows(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_flows_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flows');
    //appendnew_flow_flows_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: flows');
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async findRainDetails(
    parentSpanInst,
    latitude: any = undefined,
    longitude: any = undefined,
    start_date: any = undefined,
    end_date: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'findRainDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        latitude,
        longitude,
        start_date,
        end_date,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8QMEKtI3ONAvsdtM(bh, parentSpanInst);
      //appendnew_next_findRainDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cDMb8lwTpULyj0BU',
        spanInst,
        'findRainDetails'
      );
    }
  }

  async findFloodDetails(
    parentSpanInst,
    latitude: any = undefined,
    longitude: any = undefined,
    start_date: any = undefined,
    end_date: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'findFloodDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        latitude,
        longitude,
        start_date,
        end_date,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GdEvNxifylXtABJz(bh, parentSpanInst);
      //appendnew_next_findFloodDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tn7fQLjAWvKLrK31',
        spanInst,
        'findFloodDetails'
      );
    }
  }

  async findCycloneDetails(
    parentSpanInst,
    latitude: any = undefined,
    longitude: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'findCycloneDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        latitude,
        longitude,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iRHOiJmaMTmhMFaa(bh, parentSpanInst);
      //appendnew_next_findCycloneDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B8Qzt8JTMh7LQj2N',
        spanInst,
        'findCycloneDetails'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_8QMEKtI3ONAvsdtM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8QMEKtI3ONAvsdtM',
      parentSpanInst
    );
    try {
      bh.local.url = `https://archive-api.open-meteo.com/v1/archive?
latitude=${bh.input.latitude}
&longitude=${bh.input.longitude}
&start_date=${bh.input.start_date}
&end_date=${bh.input.end_date}
&daily=precipitation_sum
&timezone=auto
`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.fetchRainResults(bh, parentSpanInst);
      //appendnew_next_sd_8QMEKtI3ONAvsdtM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8QMEKtI3ONAvsdtM',
        spanInst,
        'sd_8QMEKtI3ONAvsdtM'
      );
    }
  }

  async fetchRainResults(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.response,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.response = responseMsg;
      //appendnew_next_fetchRainResults
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h7sSImAZg0BVxCDV');
    }
  }

  async sd_GdEvNxifylXtABJz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GdEvNxifylXtABJz',
      parentSpanInst
    );
    try {
      bh.local.url =
        `https://flood-api.open-meteo.com/v1/flood?` +
        `latitude=${bh.input.latitude}` +
        `&longitude=${bh.input.longitude}` +
        `&start_date=${bh.input.start_date}` +
        `&end_date=${bh.input.end_date}` +
        `&daily=river_discharge_mean` +
        `&timezone=auto`;

      console.log('going to trigger');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ygCEYZEewfdT7Va0(bh, parentSpanInst);
      //appendnew_next_sd_GdEvNxifylXtABJz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GdEvNxifylXtABJz',
        spanInst,
        'sd_GdEvNxifylXtABJz'
      );
    }
  }

  async sd_ygCEYZEewfdT7Va0(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.response = responseMsg;
      //appendnew_next_sd_ygCEYZEewfdT7Va0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ygCEYZEewfdT7Va0');
    }
  }

  async sd_iRHOiJmaMTmhMFaa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iRHOiJmaMTmhMFaa',
      parentSpanInst
    );
    try {
      bh.local.url =
        `https://api.open-meteo.com/v1/forecast?` +
        `latitude=${bh.input.latitude}` +
        `&longitude=${bh.input.longitude}` +
        `&hourly=wind_speed_10m,wind_gusts_10m,pressure_msl` +
        `&timezone=auto`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nfGyxZpFmPFrvnpx(bh, parentSpanInst);
      //appendnew_next_sd_iRHOiJmaMTmhMFaa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iRHOiJmaMTmhMFaa',
        spanInst,
        'sd_iRHOiJmaMTmhMFaa'
      );
    }
  }

  async sd_nfGyxZpFmPFrvnpx(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.response = responseMsg;
      //appendnew_next_sd_nfGyxZpFmPFrvnpx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nfGyxZpFmPFrvnpx');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_flows_Catch
}
