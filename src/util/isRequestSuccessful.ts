export function isRequestSuccessful(statusCode: number): boolean {
    return statusCode >= 200 && statusCode <= 299;
  }