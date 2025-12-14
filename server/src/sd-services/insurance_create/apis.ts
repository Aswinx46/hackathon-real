// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA from './flows'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
    //appendnew_flow_apis_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');
    //appendnew_flow_apis_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/insurance/create`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.inputValidation(bh, parentSpanInst);
          //appendnew_next_sd_It4O9Ile8xMAaDiO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_It4O9Ile8xMAaDiO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async inputValidation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'inputValidation',
      parentSpanInst
    );
    try {
      console.log('this is the body', bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_woS3npOo9SKFSvlz(bh, parentSpanInst);
      //appendnew_next_inputValidation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0sazLItNXhqUPMCt',
        spanInst,
        'inputValidation'
      );
    }
  }

  async sd_woS3npOo9SKFSvlz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_woS3npOo9SKFSvlz',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qWViOdXJwB7edSvAInstance: SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA.flows =
        SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qWViOdXJwB7edSvAInstance.insuranceCreation(
          spanInst,
          bh.input.body
        );
      bh.local.response = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_r3rw3eFtHxRJ5jg0(bh, parentSpanInst);
      //appendnew_next_sd_woS3npOo9SKFSvlz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_woS3npOo9SKFSvlz',
        spanInst,
        'sd_woS3npOo9SKFSvlz'
      );
    }
  }

  async sd_r3rw3eFtHxRJ5jg0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r3rw3eFtHxRJ5jg0');
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
  //appendnew_flow_apis_Catch
}
