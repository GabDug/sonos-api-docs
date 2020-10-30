import { SonosServiceAction } from './sonos-service-action';
import SonosStateVariable from "./sonos-state-variable";

export interface SonosService {
  name: string;
  serviceName: string;
  discoveryUri: string;

  serviceId: string;
  serviceType: string;
  controlURL: string;
  eventSubURL: string;

  description?: string;
  availableAt?: string[];

  stateVariables?: SonosStateVariable[];
  actions?: SonosServiceAction[];
}

