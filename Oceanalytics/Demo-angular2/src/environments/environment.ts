// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  server: 'http://11.11.254.102:8082', // 192.168.104.18 //11.11.254.102
  generalErr: 'Internal error',
  result: 'Realtimesubscriptionresponse',
  rsr: 'Realtimesubscriptionrequest',
  pump: 'Realtimemeasurespumpuprequest',
  kafka_rest_proxy: 'http://11.11.254.102:8082'
};
