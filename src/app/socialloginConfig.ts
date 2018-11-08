import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular5-social-login';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('915778652071-9ir3l2jbat3sdrj1thvqq63g8vbp36oq.apps.googleusercontent.com')
  }]);

  return config;
}
