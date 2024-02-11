type Anytype = any;

type AsyncResult<TData = Anytype, TError = Anytype> = Promise<
    | {
          status: true;
          data: TData;
      }
    | {
          status: false;
          error: TError;
      }
>;

export async function asyncWrapper<TData = Anytype, TError = Anytype>(
    promise: Promise<TData>
): AsyncResult<TData, TError> {
    try {
        const data = await promise;
        return { status: true, data };
    } catch (error) {
        return { status: false, error };
    }
}
