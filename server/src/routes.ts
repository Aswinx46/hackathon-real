//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny
import { flows as SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny } from './sd-services/weather_apis/flows';
//CORE_REFERENCE_IMPORT-flows-SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA
import { flows as SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA } from './sd-services/insurance_create/flows';
//CORE_REFERENCE_IMPORT-apis-SSD_SERVICE_ID_sd_9TY22ZbJgz9HuiNI
import { apis as SSD_SERVICE_ID_sd_9TY22ZbJgz9HuiNI } from './sd-services/insurance_create/apis';

export const UserRoutes = [
    //CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny
SSD_SERVICE_ID_sd_UyJmuY2RjioRk8Ny,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-flows-SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA
SSD_SERVICE_ID_sd_qWViOdXJwB7edSvA,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-apis-SSD_SERVICE_ID_sd_9TY22ZbJgz9HuiNI
SSD_SERVICE_ID_sd_9TY22ZbJgz9HuiNI,
];
