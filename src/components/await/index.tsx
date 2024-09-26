// TODO: remove delay
interface AwaitProps<T> {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
  delaySeconds?: number; // development only for suspense test
}

export const Await = async <T,>({
  promise,
  children,
  delaySeconds = 0,
}: AwaitProps<T>) => {
  if (delaySeconds > 0) {
    await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));
  }
  const result = await promise;

  return children(result);
};
