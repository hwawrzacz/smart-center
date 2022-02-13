export class ObjectHelper {
  public static objectIsEmpty(object: any) {
    return Object.keys(object).length == 0
  }

  public static copy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object)) as T
  }
}
