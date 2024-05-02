const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const config = withModuleFederationPlugin({
  name: 'onecx-tenant-ui',
  filename: 'remoteEntry.js',
  exposes: {
    './OneCXTenantModule': './src/app/onecx-tenant-ui.remote.module.ts',
  },
  shared: share({
    '@angular/core': {
      singleton: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@angular/forms': {
      singleton: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@angular/common': {
      singleton: true,
      requiredVersion: 'auto',
      includeSecondaries: {
        skip: ['@angular/common/http/testing'],
      },
    },
    '@angular/common/http': {
      singleton: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@angular/router': {
      singleton: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    rxjs: {
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@ngx-translate/core': { singleton: true, requiredVersion: 'auto' },
    '@onecx/accelerator': { requiredVersion: 'auto', includeSecondaries: true },
    '@onecx/integration-interface': {
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@onecx/keycloak-auth': {
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@onecx/portal-integration-angular': {
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
  }),

  sharedMappings: ['@onecx/portal-integration-angular'],
});

module.exports = config;
