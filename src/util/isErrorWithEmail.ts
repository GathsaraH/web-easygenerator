export function isErrorWithEmail(
  error: any
): error is { status: number; errors: { email: string } } {
  return (
    error &&
    typeof error === "object" &&
    "errors" in error &&
    typeof error.errors === "object" &&
    "email" in error.errors
  );
}
