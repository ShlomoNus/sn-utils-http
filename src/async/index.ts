type AsyncResult<TData> = Promise<
    | {
          status: true;
          data: TData;
      }
    | {
          status: false;
          error: Error;
      }
>;

export async function asyncWrapper<T>(promise: Promise<T>): AsyncResult<T> {
    try {
        const data = await promise;
        return { status: true, data };
    } catch (error) {
        return { status: false, error };
    }
}
