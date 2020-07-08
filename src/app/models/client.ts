
export interface Client {
    firstName: string;
    identity: number;
    subscriptions: Subs[];
}
// tslint:disable-next-line:class-name
export interface Subs {
  subscriptionId: number;
  subscriptionName: string;
  packages: Package[];
}

export interface Package {
    packageId: number;
    packageName: string;
    count: number;
    utilization: number;
}
