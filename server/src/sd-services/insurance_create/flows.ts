// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny from '../weather_apis/flows'; //_splitter_
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

  async insuranceCreation(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'insuranceCreation',
      parentSpanInst
    );
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M56KBI0GGu0PJCNo(bh, parentSpanInst);
      //appendnew_next_insuranceCreation
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
        'sd_JP3fbnn9vfKzBUpm',
        spanInst,
        'insuranceCreation'
      );
    }
  }

  async callReels(parentSpanInst, data: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('callReels', parentSpanInst);
    let bh: any = {
      input: {
        data,
      },
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X3YQPZQsOmICe8dE(bh, parentSpanInst);
      //appendnew_next_callReels
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
        'sd_uEBLLkNkl7dJLNU8',
        spanInst,
        'callReels'
      );
    }
  }
  //appendnew_flow_flows_start

  async sd_M56KBI0GGu0PJCNo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M56KBI0GGu0PJCNo',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Pb7RzEzOOExbwxNG(bh, parentSpanInst);
      //appendnew_next_sd_M56KBI0GGu0PJCNo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M56KBI0GGu0PJCNo',
        spanInst,
        'sd_M56KBI0GGu0PJCNo'
      );
    }
  }

  async sd_Pb7RzEzOOExbwxNG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pb7RzEzOOExbwxNG',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_UyJmuY2RjioRk8NyInstance: SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny.flows =
        SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny.flows.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_UyJmuY2RjioRk8NyInstance.findRainDetails(
          spanInst,
          bh.input.data.latitude,
          bh.input.data.longitude,
          bh.input.data.start_date,
          bh.input.data.end_date
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_UyJmuY2RjioRk8NyInstance.findFloodDetails(
          spanInst,
          bh.input.data.latitude,
          bh.input.data.longitude,
          bh.input.data.start_date,
          bh.input.data.end_date
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_UyJmuY2RjioRk8NyInstance.findCycloneDetails(
          spanInst,
          bh.input.data.latitude,
          bh.input.data.longitude
        )
      );

      bh.local.async_response = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.rainfallData(bh, parentSpanInst);
      //appendnew_next_sd_Pb7RzEzOOExbwxNG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pb7RzEzOOExbwxNG',
        spanInst,
        'sd_Pb7RzEzOOExbwxNG'
      );
    }
  }

  async rainfallData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'rainfallData',
      parentSpanInst
    );
    try {
      const response = bh.local.async_response.map(
        (item) => item.local.response.payload
      );
      // console.log('this is the response from async result',response)

      const rainDataObj = response[0];
      const floodDataObj = response[1];
      const cycloneDataObj = response[2];

      function categorize(value, thresholds) {
        if (value <= thresholds.low) return 'LOW';
        if (value <= thresholds.medium) return 'MEDIUM';
        return 'HIGH';
      }

      function riskToScore(risk) {
        if (risk === 'LOW') return 1;
        if (risk === 'MEDIUM') return 2;
        return 3;
      }

      function aggregateHourlyToDaily(hourly) {
        const daily = {};

        hourly.time.forEach((t, i) => {
          const date = t.split('T')[0];
          if (!daily[date]) {
            daily[date] = {
              windGusts: [],
              windSpeed: [],
              pressure: [],
            };
          }

          daily[date].windGusts.push(hourly.wind_gusts_10m[i]);
          daily[date].windSpeed.push(hourly.wind_speed_10m[i]);
          daily[date].pressure.push(hourly.pressure_msl[i]);
        });

        return daily;
      }

      function groupDailyToMonthly(dailyObj, valueKey) {
        const monthly = {};

        dailyObj.time.forEach((dateStr, i) => {
          const month = new Date(dateStr).toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          });

          if (!monthly[month]) monthly[month] = [];
          monthly[month].push(dailyObj[valueKey][i]);
        });

        return monthly;
      }

      function safeSum(arr) {
        return arr.length ? arr.reduce((a, b) => a + b, 0) : 0;
      }

      function safeAvg(arr) {
        return arr.length ? safeSum(arr) / arr.length : 0;
      }

      function safeMax(arr) {
        return arr.length ? Math.max(...arr) : 0;
      }

      function calculateMonthlyRisk({
        location,
        month,
        rainfallValues = [],
        floodValues = [],
        cycloneDailyValues,
      }) {
        // --- Rain ---
        const totalRainfall = safeSum(rainfallValues);
        // console.log('this is the total rainfall',totalRainfall)
        const rainyDays = rainfallValues.filter((r) => r > 2).length;
        const extremeRainDays = rainfallValues.filter((r) => r > 50).length;
        const rainRisk = categorize(totalRainfall, { high: 150, medium: 50 });

        // --- Flood ---
        const peakRiverDischarge = safeMax(floodValues);
        const avgRiverDischarge = safeAvg(floodValues);
        const floodDays = floodValues.filter((f) => f > 500).length;
        // console.log('this is the peakriverDischarge',peakRiverDischarge)
        const floodRisk = categorize(peakRiverDischarge, {
          high: 4,
          medium: 2,
        });

        // --- Cyclone ---
        const maxWindGust = safeMax(cycloneDailyValues.windGusts);
        const avgWindSpeed = safeAvg(cycloneDailyValues.windSpeed);
        const lowPressureDays =
          cycloneDailyValues.pressure?.filter((p) => p < 1000).length || 0;
        const stormRisk = categorize(maxWindGust, { low: 40, medium: 70 });

        // --- Combined Score (max = 9) ---
        const combinedScore =
          riskToScore(rainRisk) +
          riskToScore(floodRisk) +
          riskToScore(stormRisk);

        return {
          location,
          month,
          monthIndex: new Date(month).getMonth() + 1,
          riskIndicators: { rainRisk, floodRisk, stormRisk },
          combinedScore,
          metrics: {
            totalRainfall,
            rainyDays,
            extremeRainDays,
            avgRiverDischarge,
            peakRiverDischarge,
            floodDays,
            avgWindSpeed,
            maxWindGust,
            lowPressureDays,
          },
        };
      }

      function keepMostCommonMonths(highRiskMonths) {
        const byMonthName = {};

        for (const item of highRiskMonths) {
          // Convert "May 2024" -> "May"
          const monthName = new Date(item.month).toLocaleString('default', {
            month: 'long',
          });

          if (!byMonthName[monthName]) {
            byMonthName[monthName] = [];
          }
          byMonthName[monthName].push(item);
        }

        // For each month name, keep the highest combinedScore (or whatever rule you want)
        const picked = Object.values(byMonthName).map((listForMonth) => {
          return listForMonth.sort(
            (a, b) => b.combinedScore - a.combinedScore
          )[0];
        });

        // Optional: sort back in calendar order by monthIndex
        return picked.sort((a, b) => a.monthIndex - b.monthIndex);
      }

      function generateAIPayload({ location, monthlyRiskData }) {
        // Filter ONLY high-risk months (already filtered, but double-check)
        // console.log('this is the monthly risk data', monthlyRiskData)
        const highRiskMonths = monthlyRiskData.filter(
          (item) => item.combinedScore >= 2
        );
        const sortedHighRisk = highRiskMonths.sort(
          (a, b) => b.combinedScore - a.combinedScore
        );

        return {
          evaluation_context: {
            purpose: 'Dynamic Insurance Coverage Activation',
            location: {
              latitude: location.latitude,
              longitude: location.longitude,
              description: 'User location coordinates for hazard analysis',
            },
            risk_model: {
              type: 'multi-hazard',
              hazards_analyzed: ['rain', 'flood', 'cyclone'],
              score_range: { low: 1, medium: 2, high: 3, max: 9 },
              threshold: { activate_coverage: 2, optional_topup: 2 },
            },
            analysis_period:
              'Next 12 months forecast + 5-year historical baseline',
          },

          high_risk_months: sortedHighRisk.map((item) => ({
            month: item.month,
            monthIndex: item.monthIndex,
            risk_level: item.riskIndicators,
            combined_risk_score: item.combinedScore,

            hazard_breakdown: {
              rain: {
                risk_level: item.riskIndicators.rainRisk,
                total_rainfall_mm: item.metrics.totalRainfall,
                rainy_days: item.metrics.rainyDays,
                extreme_rain_days: item.metrics.extremeRainDays,
                recommendation:
                  item.metrics.extremeRainDays > 0
                    ? 'HIGH PRECIPITATION RISK'
                    : 'MONITOR',
              },
              flood: {
                risk_level: item.riskIndicators.floodRisk,
                avg_discharge_m3s: item.metrics.avgRiverDischarge,
                peak_discharge_m3s: item.metrics.peakRiverDischarge,
                flood_days: item.metrics.floodDays,
                recommendation:
                  item.metrics.floodDays > 0
                    ? 'RIVER FLOOD RISK'
                    : 'ELEVATION PROTECTED',
              },
              cyclone: {
                risk_level: item.riskIndicators.stormRisk,
                avg_wind_speed_kmh: item.metrics.avgWindSpeed,
                max_wind_gust_kmh: item.metrics.maxWindGust,
                low_pressure_days: item.metrics.lowPressureDays,
                recommendation:
                  item.metrics.maxWindGust > 50
                    ? 'GALE FORCE WINDS'
                    : 'MONITOR',
              },
            },
          })),

          insurance_decision_required: {
            action_needed: sortedHighRisk.length > 0,
            recommended_coverage: {
              active_months: sortedHighRisk.map((m) => m.month),
              premium_adjustment: `+${Math.round(
                (sortedHighRisk.length / 12) * 100
              )}% for high-risk period`,
              customer_notification: `Activate coverage for ${sortedHighRisk.length} high-risk months`,
            },
            risk_summary: {
              total_high_risk_months: sortedHighRisk.length,
              avg_combined_score:
                sortedHighRisk.length > 0
                  ? (
                      sortedHighRisk.reduce(
                        (sum, m) => sum + m.combinedScore,
                        0
                      ) / sortedHighRisk.length
                    ).toFixed(1)
                  : 0,
              dominant_hazard:
                sortedHighRisk.length > 0
                  ? Object.keys(sortedHighRisk[0].riskIndicators).find(
                      (h) => sortedHighRisk[0].riskIndicators[h] === 'HIGH'
                    ) || 'Mixed'
                  : 'None',
            },
          },
        };
      }

      // 🚀 CHANGED: Now returns ALL high-risk months (>=7), not just top 3
      function generateHighRiskMonths({
        rainDataObj,
        floodDataObj,
        cycloneDataObj,
      }) {
        // Extract data
        const dailyRain = rainDataObj.daily;
        const dailyFlood = floodDataObj.daily;
        const hourlyCyclone = cycloneDataObj.hourly;

        // Step 1: Convert cyclone hourly → daily
        const cycloneDaily = aggregateHourlyToDaily(hourlyCyclone);

        // Step 2: Group rain & flood by month
        const monthlyRain = groupDailyToMonthly(dailyRain, 'precipitation_sum');
        const monthlyFlood = groupDailyToMonthly(
          dailyFlood,
          'river_discharge_mean'
        );
        // console.log('monthlyRain', monthlyRain)
        // console.log('monthlyFlood', monthlyFlood)
        // Step 3: Build ALL monthly risk objects
        const monthlyRisk = [];

        Object.keys(monthlyRain).forEach((month) => {
          const cycloneForMonth = {
            windGusts: [],
            windSpeed: [],
            pressure: [],
          };

          Object.keys(cycloneDaily).forEach((date) => {
            const dateMonth = new Date(date).toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            });

            if (dateMonth === month) {
              cycloneForMonth.windGusts.push(
                Math.max(...cycloneDaily[date].windGusts)
              );
              cycloneForMonth.windSpeed.push(
                cycloneDaily[date].windSpeed.reduce((a, b) => a + b, 0) /
                  cycloneDaily[date].windSpeed.length
              );
              cycloneForMonth.pressure.push(
                Math.min(...cycloneDaily[date].pressure)
              );
            }
          });

          // ✅ FIXED: Use defaults for historical months
          if (!cycloneForMonth.windGusts.length) {
            cycloneForMonth.windGusts = [20];
            cycloneForMonth.windSpeed = [10];
            cycloneForMonth.pressure = [1013];
          }

          monthlyRisk.push(
            calculateMonthlyRisk({
              location: {
                latitude: rainDataObj.latitude,
                longitude: rainDataObj.longitude,
              },
              month,
              rainfallValues: monthlyRain[month],
              floodValues: monthlyFlood[month] || [],
              cycloneDailyValues: cycloneForMonth,
            })
          );
        });

        // 🚀 CHANGED: Filter ONLY high-risk months (>=7) and sort by risk
        return monthlyRisk
          .filter((item) => item.combinedScore >= 3) // ONLY high-risk months
          .sort((a, b) => b.combinedScore - a.combinedScore); // Highest risk first
      }

      // 🚀 UPDATED: Now generates high-risk months for AI payload
      const highRiskMonths = generateHighRiskMonths({
        rainDataObj,
        floodDataObj,
        cycloneDataObj,
      });
      const condensedHighRiskMonths = keepMostCommonMonths(highRiskMonths);

      function pickTopRiskMonths(highRiskMonths, topN = 5) {
        const byMonthName = {};

        // Group by month name (Jan, Feb, ...)
        for (const item of highRiskMonths) {
          const monthName = new Date(item.month).toLocaleString('default', {
            month: 'long',
          });

          if (!byMonthName[monthName]) {
            byMonthName[monthName] = [];
          }
          byMonthName[monthName].push(item);
        }

        // For each month name, keep the entry with highest combinedScore
        const onePerMonth = Object.values(byMonthName).map(
          (listForMonth) =>
            listForMonth.sort((a, b) => b.combinedScore - a.combinedScore)[0]
        );

        // Now sort all remaining months by risk and keep only top N
        const topMonths = onePerMonth
          .sort((a, b) => b.combinedScore - a.combinedScore)
          .slice(0, topN);

        // Optional: sort them in calendar order if you prefer
        return topMonths.sort((a, b) => a.monthIndex - b.monthIndex);
      }

      const topRiskMonths = pickTopRiskMonths(highRiskMonths, 4);

      // console.log('this is the rainDataObj',rainDataObj)
      // console.log('this is the floodDataObj',floodDataObj)
      // console.log('this is the cycloneDataObj',cycloneDataObj)

      // console.log("High Risk Months (Score >=4):", highRiskMonths);

      // 🚀 READY FOR AI PAYLOAD - pass this directly to generateAIPayload
      const aiPayload = generateAIPayload({
        location: {
          latitude: rainDataObj.latitude,
          longitude: rainDataObj.longitude,
        },
        monthlyRiskData: topRiskMonths,
      });

      bh.local.aiPayload = aiPayload;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.callingGemini(bh, parentSpanInst);
      //appendnew_next_rainfallData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IW7yHaOdFd12yiPm',
        spanInst,
        'rainfallData'
      );
    }
  }

  async callingGemini(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'callingGemini',
      parentSpanInst
    );
    try {
      const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

      const url =
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' +
        GEMINI_API_KEY;

      const prompt = `
You are an insurance risk analyst.include the premiumMultiplier also
Return ONLY strict JSON. Do not include any extra text or formatting.

DATA:
${JSON.stringify(bh.local.aiPayload)}
`;

      const body = {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          responseMimeType: 'application/json',
        },
      };

      async function callGemini() {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Gemini error ${response.status}: ${errText}`);
        }

        const data = await response.json();
        console.log('RAW GEMINI RESPONSE:', JSON.stringify(data, null, 2));

        const candidate = data.candidates?.[0];
        if (!candidate) {
          throw new Error('No candidates returned by Gemini');
        }

        const part = candidate.content?.parts?.[0];
        if (!part || !part.text) {
          throw new Error('Gemini did not return text output');
        }

        // Safe JSON parse with clearer error
        try {
          return JSON.parse(part.text);
        } catch (e) {
          console.error('Model did not return valid JSON:', part.text);
          throw new Error('Failed to parse model output as JSON');
        }
      }

      console.log('just before');
      async function runGemini() {
        try {
          const result = await callGemini();
          console.log('AI Result:', result);
          bh.local.aiResult = result;
        } catch (err) {
          console.error(err);
        }
      }

      // Call your async wrapper
      runGemini();

      console.log('just after');

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2cjl6gMSWjwW5SzT(bh, parentSpanInst);
      //appendnew_next_callingGemini
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PiaDQfAlchrSPYEh',
        spanInst,
        'callingGemini'
      );
    }
  }

  async sd_2cjl6gMSWjwW5SzT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2cjl6gMSWjwW5SzT',
      parentSpanInst
    );
    try {
      setTimeout(() => {
        if (bh.local.aiResult) {
          bh.local.reelsPayload = {
            weather: bh.input.data.weather,
            location: bh.input.data.location,
            property: bh.input.data.property,
            basePremium: bh.input.data.basePremium,
            premiumMultiplier: 1.33,
            vehicleModel: bh.input.data.vehicleModel,
            insuranceType: bh.input.data.insuranceType,
            safetyMeasure: bh.input.data.safetyMeasure,
            building: bh.input.data.building,
          };

          console.log('this is the result from ai', bh.local.aiResult);
        }
      }, 10000);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mmmcq013WxS0bFuH(bh, parentSpanInst);
      //appendnew_next_sd_2cjl6gMSWjwW5SzT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2cjl6gMSWjwW5SzT',
        spanInst,
        'sd_2cjl6gMSWjwW5SzT'
      );
    }
  }

  async sd_mmmcq013WxS0bFuH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mmmcq013WxS0bFuH',
      parentSpanInst
    );
    try {
      let outputVariables = await this.callReels(
        spanInst,
        bh.local.reelsPayload
      );
      bh.local.response_reels = outputVariables.local.response;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mmmcq013WxS0bFuH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mmmcq013WxS0bFuH',
        spanInst,
        'sd_mmmcq013WxS0bFuH'
      );
    }
  }

  async sd_X3YQPZQsOmICe8dE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X3YQPZQsOmICe8dE',
      parentSpanInst
    );
    try {
      bh.local.body = {
        workflowId: '5aae4a74-79a6-426d-925c-ca60ed2f31d7',
        version: '1.0.4',
        inputObj: bh.input.data,
        subFlowIDs: [],
      };

      bh.local.headers = {
        token: process.env.REELS_TOKEN,
      };

      bh.local.url =
        'https://sandbox.neutrinos-apps.com/integration/api/runtime/sync';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YkmV8xgZD2mrkUsp(bh, parentSpanInst);
      //appendnew_next_sd_X3YQPZQsOmICe8dE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X3YQPZQsOmICe8dE',
        spanInst,
        'sd_X3YQPZQsOmICe8dE'
      );
    }
  }

  async sd_YkmV8xgZD2mrkUsp(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.body,
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
      bh = await this.sd_jWT8prHESEqAnGsc(bh, parentSpanInst);
      //appendnew_next_sd_YkmV8xgZD2mrkUsp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YkmV8xgZD2mrkUsp');
    }
  }

  async sd_jWT8prHESEqAnGsc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jWT8prHESEqAnGsc',
      parentSpanInst
    );
    try {
      console.log('response from reels', bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jWT8prHESEqAnGsc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jWT8prHESEqAnGsc',
        spanInst,
        'sd_jWT8prHESEqAnGsc'
      );
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
