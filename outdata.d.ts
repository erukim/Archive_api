export interface Like_Data {
  /**
   * @default boolean | true, false
   * @description | The past 24 hours are good Whether
   */
  like: boolean;
  /**
   * @default number
   * @description | Time remaining until initialization
   */
  resetLike: number;
  /**
   * @default number
   * @description | The last time I pressed it
   */
  lastLike: number;
}
export interface Like {
  /**
   * @default number
   * @description | Stable status code
   */
  status: number;
  /**
   * @default Like_Data
   */
  data: Like_Data;
  /**
   * @default string
   * @description | Message returned
   */
  message: string;
}

export interface Stats {
  /**
   * @default boolean
   * @description | Success status
   */
  data: boolean;
  /**
   * @default string
   * @description | Message returned
   */
  message: string;
}