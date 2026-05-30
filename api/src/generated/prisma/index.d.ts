
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fasilitas
 * 
 */
export type Fasilitas = $Result.DefaultSelection<Prisma.$FasilitasPayload>
/**
 * Model Tiket
 * 
 */
export type Tiket = $Result.DefaultSelection<Prisma.$TiketPayload>
/**
 * Model InfoWisata
 * 
 */
export type InfoWisata = $Result.DefaultSelection<Prisma.$InfoWisataPayload>
/**
 * Model Galeri
 * 
 */
export type Galeri = $Result.DefaultSelection<Prisma.$GaleriPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Fasilitas
 * const fasilitas = await prisma.fasilitas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Fasilitas
   * const fasilitas = await prisma.fasilitas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fasilitas`: Exposes CRUD operations for the **Fasilitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fasilitas
    * const fasilitas = await prisma.fasilitas.findMany()
    * ```
    */
  get fasilitas(): Prisma.FasilitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiket`: Exposes CRUD operations for the **Tiket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tikets
    * const tikets = await prisma.tiket.findMany()
    * ```
    */
  get tiket(): Prisma.TiketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infoWisata`: Exposes CRUD operations for the **InfoWisata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfoWisatas
    * const infoWisatas = await prisma.infoWisata.findMany()
    * ```
    */
  get infoWisata(): Prisma.InfoWisataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galeri`: Exposes CRUD operations for the **Galeri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galeris
    * const galeris = await prisma.galeri.findMany()
    * ```
    */
  get galeri(): Prisma.GaleriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fasilitas: 'Fasilitas',
    Tiket: 'Tiket',
    InfoWisata: 'InfoWisata',
    Galeri: 'Galeri',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fasilitas" | "tiket" | "infoWisata" | "galeri" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Fasilitas: {
        payload: Prisma.$FasilitasPayload<ExtArgs>
        fields: Prisma.FasilitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FasilitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FasilitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          findFirst: {
            args: Prisma.FasilitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FasilitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          findMany: {
            args: Prisma.FasilitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>[]
          }
          create: {
            args: Prisma.FasilitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          createMany: {
            args: Prisma.FasilitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FasilitasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>[]
          }
          delete: {
            args: Prisma.FasilitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          update: {
            args: Prisma.FasilitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          deleteMany: {
            args: Prisma.FasilitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FasilitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FasilitasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>[]
          }
          upsert: {
            args: Prisma.FasilitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          aggregate: {
            args: Prisma.FasilitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFasilitas>
          }
          groupBy: {
            args: Prisma.FasilitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FasilitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.FasilitasCountArgs<ExtArgs>
            result: $Utils.Optional<FasilitasCountAggregateOutputType> | number
          }
        }
      }
      Tiket: {
        payload: Prisma.$TiketPayload<ExtArgs>
        fields: Prisma.TiketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>
          }
          findFirst: {
            args: Prisma.TiketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>
          }
          findMany: {
            args: Prisma.TiketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>[]
          }
          create: {
            args: Prisma.TiketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>
          }
          createMany: {
            args: Prisma.TiketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>[]
          }
          delete: {
            args: Prisma.TiketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>
          }
          update: {
            args: Prisma.TiketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>
          }
          deleteMany: {
            args: Prisma.TiketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>[]
          }
          upsert: {
            args: Prisma.TiketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiketPayload>
          }
          aggregate: {
            args: Prisma.TiketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiket>
          }
          groupBy: {
            args: Prisma.TiketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiketCountArgs<ExtArgs>
            result: $Utils.Optional<TiketCountAggregateOutputType> | number
          }
        }
      }
      InfoWisata: {
        payload: Prisma.$InfoWisataPayload<ExtArgs>
        fields: Prisma.InfoWisataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfoWisataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfoWisataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>
          }
          findFirst: {
            args: Prisma.InfoWisataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfoWisataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>
          }
          findMany: {
            args: Prisma.InfoWisataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>[]
          }
          create: {
            args: Prisma.InfoWisataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>
          }
          createMany: {
            args: Prisma.InfoWisataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfoWisataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>[]
          }
          delete: {
            args: Prisma.InfoWisataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>
          }
          update: {
            args: Prisma.InfoWisataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>
          }
          deleteMany: {
            args: Prisma.InfoWisataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfoWisataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfoWisataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>[]
          }
          upsert: {
            args: Prisma.InfoWisataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoWisataPayload>
          }
          aggregate: {
            args: Prisma.InfoWisataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfoWisata>
          }
          groupBy: {
            args: Prisma.InfoWisataGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfoWisataGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfoWisataCountArgs<ExtArgs>
            result: $Utils.Optional<InfoWisataCountAggregateOutputType> | number
          }
        }
      }
      Galeri: {
        payload: Prisma.$GaleriPayload<ExtArgs>
        fields: Prisma.GaleriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GaleriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GaleriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          findFirst: {
            args: Prisma.GaleriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GaleriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          findMany: {
            args: Prisma.GaleriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>[]
          }
          create: {
            args: Prisma.GaleriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          createMany: {
            args: Prisma.GaleriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GaleriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>[]
          }
          delete: {
            args: Prisma.GaleriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          update: {
            args: Prisma.GaleriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          deleteMany: {
            args: Prisma.GaleriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GaleriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GaleriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>[]
          }
          upsert: {
            args: Prisma.GaleriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          aggregate: {
            args: Prisma.GaleriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGaleri>
          }
          groupBy: {
            args: Prisma.GaleriGroupByArgs<ExtArgs>
            result: $Utils.Optional<GaleriGroupByOutputType>[]
          }
          count: {
            args: Prisma.GaleriCountArgs<ExtArgs>
            result: $Utils.Optional<GaleriCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    fasilitas?: FasilitasOmit
    tiket?: TiketOmit
    infoWisata?: InfoWisataOmit
    galeri?: GaleriOmit
    admin?: AdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Fasilitas
   */

  export type AggregateFasilitas = {
    _count: FasilitasCountAggregateOutputType | null
    _avg: FasilitasAvgAggregateOutputType | null
    _sum: FasilitasSumAggregateOutputType | null
    _min: FasilitasMinAggregateOutputType | null
    _max: FasilitasMaxAggregateOutputType | null
  }

  export type FasilitasAvgAggregateOutputType = {
    id: number | null
  }

  export type FasilitasSumAggregateOutputType = {
    id: number | null
  }

  export type FasilitasMinAggregateOutputType = {
    id: number | null
    nama: string | null
    ikon: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FasilitasMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    ikon: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FasilitasCountAggregateOutputType = {
    id: number
    nama: number
    ikon: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FasilitasAvgAggregateInputType = {
    id?: true
  }

  export type FasilitasSumAggregateInputType = {
    id?: true
  }

  export type FasilitasMinAggregateInputType = {
    id?: true
    nama?: true
    ikon?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FasilitasMaxAggregateInputType = {
    id?: true
    nama?: true
    ikon?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FasilitasCountAggregateInputType = {
    id?: true
    nama?: true
    ikon?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FasilitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitas to aggregate.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fasilitas
    **/
    _count?: true | FasilitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FasilitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FasilitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FasilitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FasilitasMaxAggregateInputType
  }

  export type GetFasilitasAggregateType<T extends FasilitasAggregateArgs> = {
        [P in keyof T & keyof AggregateFasilitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFasilitas[P]>
      : GetScalarType<T[P], AggregateFasilitas[P]>
  }




  export type FasilitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FasilitasWhereInput
    orderBy?: FasilitasOrderByWithAggregationInput | FasilitasOrderByWithAggregationInput[]
    by: FasilitasScalarFieldEnum[] | FasilitasScalarFieldEnum
    having?: FasilitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FasilitasCountAggregateInputType | true
    _avg?: FasilitasAvgAggregateInputType
    _sum?: FasilitasSumAggregateInputType
    _min?: FasilitasMinAggregateInputType
    _max?: FasilitasMaxAggregateInputType
  }

  export type FasilitasGroupByOutputType = {
    id: number
    nama: string
    ikon: string | null
    deskripsi: string | null
    createdAt: Date
    updatedAt: Date
    _count: FasilitasCountAggregateOutputType | null
    _avg: FasilitasAvgAggregateOutputType | null
    _sum: FasilitasSumAggregateOutputType | null
    _min: FasilitasMinAggregateOutputType | null
    _max: FasilitasMaxAggregateOutputType | null
  }

  type GetFasilitasGroupByPayload<T extends FasilitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FasilitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FasilitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FasilitasGroupByOutputType[P]>
            : GetScalarType<T[P], FasilitasGroupByOutputType[P]>
        }
      >
    >


  export type FasilitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ikon?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fasilitas"]>

  export type FasilitasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ikon?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fasilitas"]>

  export type FasilitasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ikon?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fasilitas"]>

  export type FasilitasSelectScalar = {
    id?: boolean
    nama?: boolean
    ikon?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FasilitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "ikon" | "deskripsi" | "createdAt" | "updatedAt", ExtArgs["result"]["fasilitas"]>

  export type $FasilitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fasilitas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      ikon: string | null
      deskripsi: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fasilitas"]>
    composites: {}
  }

  type FasilitasGetPayload<S extends boolean | null | undefined | FasilitasDefaultArgs> = $Result.GetResult<Prisma.$FasilitasPayload, S>

  type FasilitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FasilitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FasilitasCountAggregateInputType | true
    }

  export interface FasilitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fasilitas'], meta: { name: 'Fasilitas' } }
    /**
     * Find zero or one Fasilitas that matches the filter.
     * @param {FasilitasFindUniqueArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FasilitasFindUniqueArgs>(args: SelectSubset<T, FasilitasFindUniqueArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fasilitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FasilitasFindUniqueOrThrowArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FasilitasFindUniqueOrThrowArgs>(args: SelectSubset<T, FasilitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fasilitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindFirstArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FasilitasFindFirstArgs>(args?: SelectSubset<T, FasilitasFindFirstArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fasilitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindFirstOrThrowArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FasilitasFindFirstOrThrowArgs>(args?: SelectSubset<T, FasilitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fasilitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fasilitas
     * const fasilitas = await prisma.fasilitas.findMany()
     * 
     * // Get first 10 Fasilitas
     * const fasilitas = await prisma.fasilitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fasilitasWithIdOnly = await prisma.fasilitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FasilitasFindManyArgs>(args?: SelectSubset<T, FasilitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fasilitas.
     * @param {FasilitasCreateArgs} args - Arguments to create a Fasilitas.
     * @example
     * // Create one Fasilitas
     * const Fasilitas = await prisma.fasilitas.create({
     *   data: {
     *     // ... data to create a Fasilitas
     *   }
     * })
     * 
     */
    create<T extends FasilitasCreateArgs>(args: SelectSubset<T, FasilitasCreateArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fasilitas.
     * @param {FasilitasCreateManyArgs} args - Arguments to create many Fasilitas.
     * @example
     * // Create many Fasilitas
     * const fasilitas = await prisma.fasilitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FasilitasCreateManyArgs>(args?: SelectSubset<T, FasilitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fasilitas and returns the data saved in the database.
     * @param {FasilitasCreateManyAndReturnArgs} args - Arguments to create many Fasilitas.
     * @example
     * // Create many Fasilitas
     * const fasilitas = await prisma.fasilitas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fasilitas and only return the `id`
     * const fasilitasWithIdOnly = await prisma.fasilitas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FasilitasCreateManyAndReturnArgs>(args?: SelectSubset<T, FasilitasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fasilitas.
     * @param {FasilitasDeleteArgs} args - Arguments to delete one Fasilitas.
     * @example
     * // Delete one Fasilitas
     * const Fasilitas = await prisma.fasilitas.delete({
     *   where: {
     *     // ... filter to delete one Fasilitas
     *   }
     * })
     * 
     */
    delete<T extends FasilitasDeleteArgs>(args: SelectSubset<T, FasilitasDeleteArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fasilitas.
     * @param {FasilitasUpdateArgs} args - Arguments to update one Fasilitas.
     * @example
     * // Update one Fasilitas
     * const fasilitas = await prisma.fasilitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FasilitasUpdateArgs>(args: SelectSubset<T, FasilitasUpdateArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fasilitas.
     * @param {FasilitasDeleteManyArgs} args - Arguments to filter Fasilitas to delete.
     * @example
     * // Delete a few Fasilitas
     * const { count } = await prisma.fasilitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FasilitasDeleteManyArgs>(args?: SelectSubset<T, FasilitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fasilitas
     * const fasilitas = await prisma.fasilitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FasilitasUpdateManyArgs>(args: SelectSubset<T, FasilitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fasilitas and returns the data updated in the database.
     * @param {FasilitasUpdateManyAndReturnArgs} args - Arguments to update many Fasilitas.
     * @example
     * // Update many Fasilitas
     * const fasilitas = await prisma.fasilitas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fasilitas and only return the `id`
     * const fasilitasWithIdOnly = await prisma.fasilitas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FasilitasUpdateManyAndReturnArgs>(args: SelectSubset<T, FasilitasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fasilitas.
     * @param {FasilitasUpsertArgs} args - Arguments to update or create a Fasilitas.
     * @example
     * // Update or create a Fasilitas
     * const fasilitas = await prisma.fasilitas.upsert({
     *   create: {
     *     // ... data to create a Fasilitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fasilitas we want to update
     *   }
     * })
     */
    upsert<T extends FasilitasUpsertArgs>(args: SelectSubset<T, FasilitasUpsertArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasCountArgs} args - Arguments to filter Fasilitas to count.
     * @example
     * // Count the number of Fasilitas
     * const count = await prisma.fasilitas.count({
     *   where: {
     *     // ... the filter for the Fasilitas we want to count
     *   }
     * })
    **/
    count<T extends FasilitasCountArgs>(
      args?: Subset<T, FasilitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FasilitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FasilitasAggregateArgs>(args: Subset<T, FasilitasAggregateArgs>): Prisma.PrismaPromise<GetFasilitasAggregateType<T>>

    /**
     * Group by Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FasilitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FasilitasGroupByArgs['orderBy'] }
        : { orderBy?: FasilitasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FasilitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFasilitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fasilitas model
   */
  readonly fields: FasilitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fasilitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FasilitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fasilitas model
   */
  interface FasilitasFieldRefs {
    readonly id: FieldRef<"Fasilitas", 'Int'>
    readonly nama: FieldRef<"Fasilitas", 'String'>
    readonly ikon: FieldRef<"Fasilitas", 'String'>
    readonly deskripsi: FieldRef<"Fasilitas", 'String'>
    readonly createdAt: FieldRef<"Fasilitas", 'DateTime'>
    readonly updatedAt: FieldRef<"Fasilitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fasilitas findUnique
   */
  export type FasilitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas findUniqueOrThrow
   */
  export type FasilitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas findFirst
   */
  export type FasilitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas findFirstOrThrow
   */
  export type FasilitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas findMany
   */
  export type FasilitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas create
   */
  export type FasilitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The data needed to create a Fasilitas.
     */
    data: XOR<FasilitasCreateInput, FasilitasUncheckedCreateInput>
  }

  /**
   * Fasilitas createMany
   */
  export type FasilitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fasilitas.
     */
    data: FasilitasCreateManyInput | FasilitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fasilitas createManyAndReturn
   */
  export type FasilitasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The data used to create many Fasilitas.
     */
    data: FasilitasCreateManyInput | FasilitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fasilitas update
   */
  export type FasilitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The data needed to update a Fasilitas.
     */
    data: XOR<FasilitasUpdateInput, FasilitasUncheckedUpdateInput>
    /**
     * Choose, which Fasilitas to update.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas updateMany
   */
  export type FasilitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fasilitas.
     */
    data: XOR<FasilitasUpdateManyMutationInput, FasilitasUncheckedUpdateManyInput>
    /**
     * Filter which Fasilitas to update
     */
    where?: FasilitasWhereInput
    /**
     * Limit how many Fasilitas to update.
     */
    limit?: number
  }

  /**
   * Fasilitas updateManyAndReturn
   */
  export type FasilitasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The data used to update Fasilitas.
     */
    data: XOR<FasilitasUpdateManyMutationInput, FasilitasUncheckedUpdateManyInput>
    /**
     * Filter which Fasilitas to update
     */
    where?: FasilitasWhereInput
    /**
     * Limit how many Fasilitas to update.
     */
    limit?: number
  }

  /**
   * Fasilitas upsert
   */
  export type FasilitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The filter to search for the Fasilitas to update in case it exists.
     */
    where: FasilitasWhereUniqueInput
    /**
     * In case the Fasilitas found by the `where` argument doesn't exist, create a new Fasilitas with this data.
     */
    create: XOR<FasilitasCreateInput, FasilitasUncheckedCreateInput>
    /**
     * In case the Fasilitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FasilitasUpdateInput, FasilitasUncheckedUpdateInput>
  }

  /**
   * Fasilitas delete
   */
  export type FasilitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter which Fasilitas to delete.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas deleteMany
   */
  export type FasilitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitas to delete
     */
    where?: FasilitasWhereInput
    /**
     * Limit how many Fasilitas to delete.
     */
    limit?: number
  }

  /**
   * Fasilitas without action
   */
  export type FasilitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
  }


  /**
   * Model Tiket
   */

  export type AggregateTiket = {
    _count: TiketCountAggregateOutputType | null
    _avg: TiketAvgAggregateOutputType | null
    _sum: TiketSumAggregateOutputType | null
    _min: TiketMinAggregateOutputType | null
    _max: TiketMaxAggregateOutputType | null
  }

  export type TiketAvgAggregateOutputType = {
    id: number | null
    harga: number | null
  }

  export type TiketSumAggregateOutputType = {
    id: number | null
    harga: number | null
  }

  export type TiketMinAggregateOutputType = {
    id: number | null
    kategori: string | null
    harga: number | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiketMaxAggregateOutputType = {
    id: number | null
    kategori: string | null
    harga: number | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TiketCountAggregateOutputType = {
    id: number
    kategori: number
    harga: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TiketAvgAggregateInputType = {
    id?: true
    harga?: true
  }

  export type TiketSumAggregateInputType = {
    id?: true
    harga?: true
  }

  export type TiketMinAggregateInputType = {
    id?: true
    kategori?: true
    harga?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiketMaxAggregateInputType = {
    id?: true
    kategori?: true
    harga?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TiketCountAggregateInputType = {
    id?: true
    kategori?: true
    harga?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TiketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tiket to aggregate.
     */
    where?: TiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tikets to fetch.
     */
    orderBy?: TiketOrderByWithRelationInput | TiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tikets
    **/
    _count?: true | TiketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiketMaxAggregateInputType
  }

  export type GetTiketAggregateType<T extends TiketAggregateArgs> = {
        [P in keyof T & keyof AggregateTiket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiket[P]>
      : GetScalarType<T[P], AggregateTiket[P]>
  }




  export type TiketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiketWhereInput
    orderBy?: TiketOrderByWithAggregationInput | TiketOrderByWithAggregationInput[]
    by: TiketScalarFieldEnum[] | TiketScalarFieldEnum
    having?: TiketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiketCountAggregateInputType | true
    _avg?: TiketAvgAggregateInputType
    _sum?: TiketSumAggregateInputType
    _min?: TiketMinAggregateInputType
    _max?: TiketMaxAggregateInputType
  }

  export type TiketGroupByOutputType = {
    id: number
    kategori: string
    harga: number
    deskripsi: string | null
    createdAt: Date
    updatedAt: Date
    _count: TiketCountAggregateOutputType | null
    _avg: TiketAvgAggregateOutputType | null
    _sum: TiketSumAggregateOutputType | null
    _min: TiketMinAggregateOutputType | null
    _max: TiketMaxAggregateOutputType | null
  }

  type GetTiketGroupByPayload<T extends TiketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiketGroupByOutputType[P]>
            : GetScalarType<T[P], TiketGroupByOutputType[P]>
        }
      >
    >


  export type TiketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategori?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tiket"]>

  export type TiketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategori?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tiket"]>

  export type TiketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategori?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tiket"]>

  export type TiketSelectScalar = {
    id?: boolean
    kategori?: boolean
    harga?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TiketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kategori" | "harga" | "deskripsi" | "createdAt" | "updatedAt", ExtArgs["result"]["tiket"]>

  export type $TiketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tiket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kategori: string
      harga: number
      deskripsi: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tiket"]>
    composites: {}
  }

  type TiketGetPayload<S extends boolean | null | undefined | TiketDefaultArgs> = $Result.GetResult<Prisma.$TiketPayload, S>

  type TiketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiketCountAggregateInputType | true
    }

  export interface TiketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tiket'], meta: { name: 'Tiket' } }
    /**
     * Find zero or one Tiket that matches the filter.
     * @param {TiketFindUniqueArgs} args - Arguments to find a Tiket
     * @example
     * // Get one Tiket
     * const tiket = await prisma.tiket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiketFindUniqueArgs>(args: SelectSubset<T, TiketFindUniqueArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tiket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiketFindUniqueOrThrowArgs} args - Arguments to find a Tiket
     * @example
     * // Get one Tiket
     * const tiket = await prisma.tiket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiketFindUniqueOrThrowArgs>(args: SelectSubset<T, TiketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tiket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketFindFirstArgs} args - Arguments to find a Tiket
     * @example
     * // Get one Tiket
     * const tiket = await prisma.tiket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiketFindFirstArgs>(args?: SelectSubset<T, TiketFindFirstArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tiket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketFindFirstOrThrowArgs} args - Arguments to find a Tiket
     * @example
     * // Get one Tiket
     * const tiket = await prisma.tiket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiketFindFirstOrThrowArgs>(args?: SelectSubset<T, TiketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tikets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tikets
     * const tikets = await prisma.tiket.findMany()
     * 
     * // Get first 10 Tikets
     * const tikets = await prisma.tiket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiketWithIdOnly = await prisma.tiket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiketFindManyArgs>(args?: SelectSubset<T, TiketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tiket.
     * @param {TiketCreateArgs} args - Arguments to create a Tiket.
     * @example
     * // Create one Tiket
     * const Tiket = await prisma.tiket.create({
     *   data: {
     *     // ... data to create a Tiket
     *   }
     * })
     * 
     */
    create<T extends TiketCreateArgs>(args: SelectSubset<T, TiketCreateArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tikets.
     * @param {TiketCreateManyArgs} args - Arguments to create many Tikets.
     * @example
     * // Create many Tikets
     * const tiket = await prisma.tiket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiketCreateManyArgs>(args?: SelectSubset<T, TiketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tikets and returns the data saved in the database.
     * @param {TiketCreateManyAndReturnArgs} args - Arguments to create many Tikets.
     * @example
     * // Create many Tikets
     * const tiket = await prisma.tiket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tikets and only return the `id`
     * const tiketWithIdOnly = await prisma.tiket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiketCreateManyAndReturnArgs>(args?: SelectSubset<T, TiketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tiket.
     * @param {TiketDeleteArgs} args - Arguments to delete one Tiket.
     * @example
     * // Delete one Tiket
     * const Tiket = await prisma.tiket.delete({
     *   where: {
     *     // ... filter to delete one Tiket
     *   }
     * })
     * 
     */
    delete<T extends TiketDeleteArgs>(args: SelectSubset<T, TiketDeleteArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tiket.
     * @param {TiketUpdateArgs} args - Arguments to update one Tiket.
     * @example
     * // Update one Tiket
     * const tiket = await prisma.tiket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiketUpdateArgs>(args: SelectSubset<T, TiketUpdateArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tikets.
     * @param {TiketDeleteManyArgs} args - Arguments to filter Tikets to delete.
     * @example
     * // Delete a few Tikets
     * const { count } = await prisma.tiket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiketDeleteManyArgs>(args?: SelectSubset<T, TiketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tikets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tikets
     * const tiket = await prisma.tiket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiketUpdateManyArgs>(args: SelectSubset<T, TiketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tikets and returns the data updated in the database.
     * @param {TiketUpdateManyAndReturnArgs} args - Arguments to update many Tikets.
     * @example
     * // Update many Tikets
     * const tiket = await prisma.tiket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tikets and only return the `id`
     * const tiketWithIdOnly = await prisma.tiket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiketUpdateManyAndReturnArgs>(args: SelectSubset<T, TiketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tiket.
     * @param {TiketUpsertArgs} args - Arguments to update or create a Tiket.
     * @example
     * // Update or create a Tiket
     * const tiket = await prisma.tiket.upsert({
     *   create: {
     *     // ... data to create a Tiket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tiket we want to update
     *   }
     * })
     */
    upsert<T extends TiketUpsertArgs>(args: SelectSubset<T, TiketUpsertArgs<ExtArgs>>): Prisma__TiketClient<$Result.GetResult<Prisma.$TiketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tikets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketCountArgs} args - Arguments to filter Tikets to count.
     * @example
     * // Count the number of Tikets
     * const count = await prisma.tiket.count({
     *   where: {
     *     // ... the filter for the Tikets we want to count
     *   }
     * })
    **/
    count<T extends TiketCountArgs>(
      args?: Subset<T, TiketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tiket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiketAggregateArgs>(args: Subset<T, TiketAggregateArgs>): Prisma.PrismaPromise<GetTiketAggregateType<T>>

    /**
     * Group by Tiket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiketGroupByArgs['orderBy'] }
        : { orderBy?: TiketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tiket model
   */
  readonly fields: TiketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tiket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tiket model
   */
  interface TiketFieldRefs {
    readonly id: FieldRef<"Tiket", 'Int'>
    readonly kategori: FieldRef<"Tiket", 'String'>
    readonly harga: FieldRef<"Tiket", 'Int'>
    readonly deskripsi: FieldRef<"Tiket", 'String'>
    readonly createdAt: FieldRef<"Tiket", 'DateTime'>
    readonly updatedAt: FieldRef<"Tiket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tiket findUnique
   */
  export type TiketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * Filter, which Tiket to fetch.
     */
    where: TiketWhereUniqueInput
  }

  /**
   * Tiket findUniqueOrThrow
   */
  export type TiketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * Filter, which Tiket to fetch.
     */
    where: TiketWhereUniqueInput
  }

  /**
   * Tiket findFirst
   */
  export type TiketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * Filter, which Tiket to fetch.
     */
    where?: TiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tikets to fetch.
     */
    orderBy?: TiketOrderByWithRelationInput | TiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tikets.
     */
    cursor?: TiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tikets.
     */
    distinct?: TiketScalarFieldEnum | TiketScalarFieldEnum[]
  }

  /**
   * Tiket findFirstOrThrow
   */
  export type TiketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * Filter, which Tiket to fetch.
     */
    where?: TiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tikets to fetch.
     */
    orderBy?: TiketOrderByWithRelationInput | TiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tikets.
     */
    cursor?: TiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tikets.
     */
    distinct?: TiketScalarFieldEnum | TiketScalarFieldEnum[]
  }

  /**
   * Tiket findMany
   */
  export type TiketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * Filter, which Tikets to fetch.
     */
    where?: TiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tikets to fetch.
     */
    orderBy?: TiketOrderByWithRelationInput | TiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tikets.
     */
    cursor?: TiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tikets.
     */
    distinct?: TiketScalarFieldEnum | TiketScalarFieldEnum[]
  }

  /**
   * Tiket create
   */
  export type TiketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * The data needed to create a Tiket.
     */
    data: XOR<TiketCreateInput, TiketUncheckedCreateInput>
  }

  /**
   * Tiket createMany
   */
  export type TiketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tikets.
     */
    data: TiketCreateManyInput | TiketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tiket createManyAndReturn
   */
  export type TiketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * The data used to create many Tikets.
     */
    data: TiketCreateManyInput | TiketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tiket update
   */
  export type TiketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * The data needed to update a Tiket.
     */
    data: XOR<TiketUpdateInput, TiketUncheckedUpdateInput>
    /**
     * Choose, which Tiket to update.
     */
    where: TiketWhereUniqueInput
  }

  /**
   * Tiket updateMany
   */
  export type TiketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tikets.
     */
    data: XOR<TiketUpdateManyMutationInput, TiketUncheckedUpdateManyInput>
    /**
     * Filter which Tikets to update
     */
    where?: TiketWhereInput
    /**
     * Limit how many Tikets to update.
     */
    limit?: number
  }

  /**
   * Tiket updateManyAndReturn
   */
  export type TiketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * The data used to update Tikets.
     */
    data: XOR<TiketUpdateManyMutationInput, TiketUncheckedUpdateManyInput>
    /**
     * Filter which Tikets to update
     */
    where?: TiketWhereInput
    /**
     * Limit how many Tikets to update.
     */
    limit?: number
  }

  /**
   * Tiket upsert
   */
  export type TiketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * The filter to search for the Tiket to update in case it exists.
     */
    where: TiketWhereUniqueInput
    /**
     * In case the Tiket found by the `where` argument doesn't exist, create a new Tiket with this data.
     */
    create: XOR<TiketCreateInput, TiketUncheckedCreateInput>
    /**
     * In case the Tiket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiketUpdateInput, TiketUncheckedUpdateInput>
  }

  /**
   * Tiket delete
   */
  export type TiketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
    /**
     * Filter which Tiket to delete.
     */
    where: TiketWhereUniqueInput
  }

  /**
   * Tiket deleteMany
   */
  export type TiketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tikets to delete
     */
    where?: TiketWhereInput
    /**
     * Limit how many Tikets to delete.
     */
    limit?: number
  }

  /**
   * Tiket without action
   */
  export type TiketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiket
     */
    select?: TiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tiket
     */
    omit?: TiketOmit<ExtArgs> | null
  }


  /**
   * Model InfoWisata
   */

  export type AggregateInfoWisata = {
    _count: InfoWisataCountAggregateOutputType | null
    _avg: InfoWisataAvgAggregateOutputType | null
    _sum: InfoWisataSumAggregateOutputType | null
    _min: InfoWisataMinAggregateOutputType | null
    _max: InfoWisataMaxAggregateOutputType | null
  }

  export type InfoWisataAvgAggregateOutputType = {
    id: number | null
  }

  export type InfoWisataSumAggregateOutputType = {
    id: number | null
  }

  export type InfoWisataMinAggregateOutputType = {
    id: number | null
    jamBuka: string | null
    jamTutup: string | null
    alamat: string | null
    mapsEmbedUrl: string | null
    noTelepon: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfoWisataMaxAggregateOutputType = {
    id: number | null
    jamBuka: string | null
    jamTutup: string | null
    alamat: string | null
    mapsEmbedUrl: string | null
    noTelepon: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfoWisataCountAggregateOutputType = {
    id: number
    jamBuka: number
    jamTutup: number
    alamat: number
    mapsEmbedUrl: number
    noTelepon: number
    email: number
    sosialMedia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InfoWisataAvgAggregateInputType = {
    id?: true
  }

  export type InfoWisataSumAggregateInputType = {
    id?: true
  }

  export type InfoWisataMinAggregateInputType = {
    id?: true
    jamBuka?: true
    jamTutup?: true
    alamat?: true
    mapsEmbedUrl?: true
    noTelepon?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfoWisataMaxAggregateInputType = {
    id?: true
    jamBuka?: true
    jamTutup?: true
    alamat?: true
    mapsEmbedUrl?: true
    noTelepon?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfoWisataCountAggregateInputType = {
    id?: true
    jamBuka?: true
    jamTutup?: true
    alamat?: true
    mapsEmbedUrl?: true
    noTelepon?: true
    email?: true
    sosialMedia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InfoWisataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoWisata to aggregate.
     */
    where?: InfoWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoWisatas to fetch.
     */
    orderBy?: InfoWisataOrderByWithRelationInput | InfoWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfoWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfoWisatas
    **/
    _count?: true | InfoWisataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfoWisataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfoWisataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfoWisataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfoWisataMaxAggregateInputType
  }

  export type GetInfoWisataAggregateType<T extends InfoWisataAggregateArgs> = {
        [P in keyof T & keyof AggregateInfoWisata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfoWisata[P]>
      : GetScalarType<T[P], AggregateInfoWisata[P]>
  }




  export type InfoWisataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfoWisataWhereInput
    orderBy?: InfoWisataOrderByWithAggregationInput | InfoWisataOrderByWithAggregationInput[]
    by: InfoWisataScalarFieldEnum[] | InfoWisataScalarFieldEnum
    having?: InfoWisataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfoWisataCountAggregateInputType | true
    _avg?: InfoWisataAvgAggregateInputType
    _sum?: InfoWisataSumAggregateInputType
    _min?: InfoWisataMinAggregateInputType
    _max?: InfoWisataMaxAggregateInputType
  }

  export type InfoWisataGroupByOutputType = {
    id: number
    jamBuka: string
    jamTutup: string
    alamat: string
    mapsEmbedUrl: string | null
    noTelepon: string | null
    email: string | null
    sosialMedia: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: InfoWisataCountAggregateOutputType | null
    _avg: InfoWisataAvgAggregateOutputType | null
    _sum: InfoWisataSumAggregateOutputType | null
    _min: InfoWisataMinAggregateOutputType | null
    _max: InfoWisataMaxAggregateOutputType | null
  }

  type GetInfoWisataGroupByPayload<T extends InfoWisataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfoWisataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfoWisataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfoWisataGroupByOutputType[P]>
            : GetScalarType<T[P], InfoWisataGroupByOutputType[P]>
        }
      >
    >


  export type InfoWisataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jamBuka?: boolean
    jamTutup?: boolean
    alamat?: boolean
    mapsEmbedUrl?: boolean
    noTelepon?: boolean
    email?: boolean
    sosialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["infoWisata"]>

  export type InfoWisataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jamBuka?: boolean
    jamTutup?: boolean
    alamat?: boolean
    mapsEmbedUrl?: boolean
    noTelepon?: boolean
    email?: boolean
    sosialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["infoWisata"]>

  export type InfoWisataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jamBuka?: boolean
    jamTutup?: boolean
    alamat?: boolean
    mapsEmbedUrl?: boolean
    noTelepon?: boolean
    email?: boolean
    sosialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["infoWisata"]>

  export type InfoWisataSelectScalar = {
    id?: boolean
    jamBuka?: boolean
    jamTutup?: boolean
    alamat?: boolean
    mapsEmbedUrl?: boolean
    noTelepon?: boolean
    email?: boolean
    sosialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InfoWisataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jamBuka" | "jamTutup" | "alamat" | "mapsEmbedUrl" | "noTelepon" | "email" | "sosialMedia" | "createdAt" | "updatedAt", ExtArgs["result"]["infoWisata"]>

  export type $InfoWisataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfoWisata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jamBuka: string
      jamTutup: string
      alamat: string
      mapsEmbedUrl: string | null
      noTelepon: string | null
      email: string | null
      sosialMedia: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["infoWisata"]>
    composites: {}
  }

  type InfoWisataGetPayload<S extends boolean | null | undefined | InfoWisataDefaultArgs> = $Result.GetResult<Prisma.$InfoWisataPayload, S>

  type InfoWisataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfoWisataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfoWisataCountAggregateInputType | true
    }

  export interface InfoWisataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfoWisata'], meta: { name: 'InfoWisata' } }
    /**
     * Find zero or one InfoWisata that matches the filter.
     * @param {InfoWisataFindUniqueArgs} args - Arguments to find a InfoWisata
     * @example
     * // Get one InfoWisata
     * const infoWisata = await prisma.infoWisata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfoWisataFindUniqueArgs>(args: SelectSubset<T, InfoWisataFindUniqueArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfoWisata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfoWisataFindUniqueOrThrowArgs} args - Arguments to find a InfoWisata
     * @example
     * // Get one InfoWisata
     * const infoWisata = await prisma.infoWisata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfoWisataFindUniqueOrThrowArgs>(args: SelectSubset<T, InfoWisataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoWisata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataFindFirstArgs} args - Arguments to find a InfoWisata
     * @example
     * // Get one InfoWisata
     * const infoWisata = await prisma.infoWisata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfoWisataFindFirstArgs>(args?: SelectSubset<T, InfoWisataFindFirstArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoWisata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataFindFirstOrThrowArgs} args - Arguments to find a InfoWisata
     * @example
     * // Get one InfoWisata
     * const infoWisata = await prisma.infoWisata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfoWisataFindFirstOrThrowArgs>(args?: SelectSubset<T, InfoWisataFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfoWisatas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfoWisatas
     * const infoWisatas = await prisma.infoWisata.findMany()
     * 
     * // Get first 10 InfoWisatas
     * const infoWisatas = await prisma.infoWisata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infoWisataWithIdOnly = await prisma.infoWisata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfoWisataFindManyArgs>(args?: SelectSubset<T, InfoWisataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfoWisata.
     * @param {InfoWisataCreateArgs} args - Arguments to create a InfoWisata.
     * @example
     * // Create one InfoWisata
     * const InfoWisata = await prisma.infoWisata.create({
     *   data: {
     *     // ... data to create a InfoWisata
     *   }
     * })
     * 
     */
    create<T extends InfoWisataCreateArgs>(args: SelectSubset<T, InfoWisataCreateArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfoWisatas.
     * @param {InfoWisataCreateManyArgs} args - Arguments to create many InfoWisatas.
     * @example
     * // Create many InfoWisatas
     * const infoWisata = await prisma.infoWisata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfoWisataCreateManyArgs>(args?: SelectSubset<T, InfoWisataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InfoWisatas and returns the data saved in the database.
     * @param {InfoWisataCreateManyAndReturnArgs} args - Arguments to create many InfoWisatas.
     * @example
     * // Create many InfoWisatas
     * const infoWisata = await prisma.infoWisata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InfoWisatas and only return the `id`
     * const infoWisataWithIdOnly = await prisma.infoWisata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfoWisataCreateManyAndReturnArgs>(args?: SelectSubset<T, InfoWisataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InfoWisata.
     * @param {InfoWisataDeleteArgs} args - Arguments to delete one InfoWisata.
     * @example
     * // Delete one InfoWisata
     * const InfoWisata = await prisma.infoWisata.delete({
     *   where: {
     *     // ... filter to delete one InfoWisata
     *   }
     * })
     * 
     */
    delete<T extends InfoWisataDeleteArgs>(args: SelectSubset<T, InfoWisataDeleteArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfoWisata.
     * @param {InfoWisataUpdateArgs} args - Arguments to update one InfoWisata.
     * @example
     * // Update one InfoWisata
     * const infoWisata = await prisma.infoWisata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfoWisataUpdateArgs>(args: SelectSubset<T, InfoWisataUpdateArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfoWisatas.
     * @param {InfoWisataDeleteManyArgs} args - Arguments to filter InfoWisatas to delete.
     * @example
     * // Delete a few InfoWisatas
     * const { count } = await prisma.infoWisata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfoWisataDeleteManyArgs>(args?: SelectSubset<T, InfoWisataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoWisatas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfoWisatas
     * const infoWisata = await prisma.infoWisata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfoWisataUpdateManyArgs>(args: SelectSubset<T, InfoWisataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoWisatas and returns the data updated in the database.
     * @param {InfoWisataUpdateManyAndReturnArgs} args - Arguments to update many InfoWisatas.
     * @example
     * // Update many InfoWisatas
     * const infoWisata = await prisma.infoWisata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InfoWisatas and only return the `id`
     * const infoWisataWithIdOnly = await prisma.infoWisata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfoWisataUpdateManyAndReturnArgs>(args: SelectSubset<T, InfoWisataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InfoWisata.
     * @param {InfoWisataUpsertArgs} args - Arguments to update or create a InfoWisata.
     * @example
     * // Update or create a InfoWisata
     * const infoWisata = await prisma.infoWisata.upsert({
     *   create: {
     *     // ... data to create a InfoWisata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfoWisata we want to update
     *   }
     * })
     */
    upsert<T extends InfoWisataUpsertArgs>(args: SelectSubset<T, InfoWisataUpsertArgs<ExtArgs>>): Prisma__InfoWisataClient<$Result.GetResult<Prisma.$InfoWisataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InfoWisatas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataCountArgs} args - Arguments to filter InfoWisatas to count.
     * @example
     * // Count the number of InfoWisatas
     * const count = await prisma.infoWisata.count({
     *   where: {
     *     // ... the filter for the InfoWisatas we want to count
     *   }
     * })
    **/
    count<T extends InfoWisataCountArgs>(
      args?: Subset<T, InfoWisataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfoWisataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfoWisata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfoWisataAggregateArgs>(args: Subset<T, InfoWisataAggregateArgs>): Prisma.PrismaPromise<GetInfoWisataAggregateType<T>>

    /**
     * Group by InfoWisata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoWisataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfoWisataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfoWisataGroupByArgs['orderBy'] }
        : { orderBy?: InfoWisataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfoWisataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfoWisataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfoWisata model
   */
  readonly fields: InfoWisataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfoWisata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfoWisataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InfoWisata model
   */
  interface InfoWisataFieldRefs {
    readonly id: FieldRef<"InfoWisata", 'Int'>
    readonly jamBuka: FieldRef<"InfoWisata", 'String'>
    readonly jamTutup: FieldRef<"InfoWisata", 'String'>
    readonly alamat: FieldRef<"InfoWisata", 'String'>
    readonly mapsEmbedUrl: FieldRef<"InfoWisata", 'String'>
    readonly noTelepon: FieldRef<"InfoWisata", 'String'>
    readonly email: FieldRef<"InfoWisata", 'String'>
    readonly sosialMedia: FieldRef<"InfoWisata", 'Json'>
    readonly createdAt: FieldRef<"InfoWisata", 'DateTime'>
    readonly updatedAt: FieldRef<"InfoWisata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InfoWisata findUnique
   */
  export type InfoWisataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * Filter, which InfoWisata to fetch.
     */
    where: InfoWisataWhereUniqueInput
  }

  /**
   * InfoWisata findUniqueOrThrow
   */
  export type InfoWisataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * Filter, which InfoWisata to fetch.
     */
    where: InfoWisataWhereUniqueInput
  }

  /**
   * InfoWisata findFirst
   */
  export type InfoWisataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * Filter, which InfoWisata to fetch.
     */
    where?: InfoWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoWisatas to fetch.
     */
    orderBy?: InfoWisataOrderByWithRelationInput | InfoWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoWisatas.
     */
    cursor?: InfoWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoWisatas.
     */
    distinct?: InfoWisataScalarFieldEnum | InfoWisataScalarFieldEnum[]
  }

  /**
   * InfoWisata findFirstOrThrow
   */
  export type InfoWisataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * Filter, which InfoWisata to fetch.
     */
    where?: InfoWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoWisatas to fetch.
     */
    orderBy?: InfoWisataOrderByWithRelationInput | InfoWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoWisatas.
     */
    cursor?: InfoWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoWisatas.
     */
    distinct?: InfoWisataScalarFieldEnum | InfoWisataScalarFieldEnum[]
  }

  /**
   * InfoWisata findMany
   */
  export type InfoWisataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * Filter, which InfoWisatas to fetch.
     */
    where?: InfoWisataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoWisatas to fetch.
     */
    orderBy?: InfoWisataOrderByWithRelationInput | InfoWisataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfoWisatas.
     */
    cursor?: InfoWisataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoWisatas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoWisatas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoWisatas.
     */
    distinct?: InfoWisataScalarFieldEnum | InfoWisataScalarFieldEnum[]
  }

  /**
   * InfoWisata create
   */
  export type InfoWisataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * The data needed to create a InfoWisata.
     */
    data: XOR<InfoWisataCreateInput, InfoWisataUncheckedCreateInput>
  }

  /**
   * InfoWisata createMany
   */
  export type InfoWisataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfoWisatas.
     */
    data: InfoWisataCreateManyInput | InfoWisataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfoWisata createManyAndReturn
   */
  export type InfoWisataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * The data used to create many InfoWisatas.
     */
    data: InfoWisataCreateManyInput | InfoWisataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfoWisata update
   */
  export type InfoWisataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * The data needed to update a InfoWisata.
     */
    data: XOR<InfoWisataUpdateInput, InfoWisataUncheckedUpdateInput>
    /**
     * Choose, which InfoWisata to update.
     */
    where: InfoWisataWhereUniqueInput
  }

  /**
   * InfoWisata updateMany
   */
  export type InfoWisataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfoWisatas.
     */
    data: XOR<InfoWisataUpdateManyMutationInput, InfoWisataUncheckedUpdateManyInput>
    /**
     * Filter which InfoWisatas to update
     */
    where?: InfoWisataWhereInput
    /**
     * Limit how many InfoWisatas to update.
     */
    limit?: number
  }

  /**
   * InfoWisata updateManyAndReturn
   */
  export type InfoWisataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * The data used to update InfoWisatas.
     */
    data: XOR<InfoWisataUpdateManyMutationInput, InfoWisataUncheckedUpdateManyInput>
    /**
     * Filter which InfoWisatas to update
     */
    where?: InfoWisataWhereInput
    /**
     * Limit how many InfoWisatas to update.
     */
    limit?: number
  }

  /**
   * InfoWisata upsert
   */
  export type InfoWisataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * The filter to search for the InfoWisata to update in case it exists.
     */
    where: InfoWisataWhereUniqueInput
    /**
     * In case the InfoWisata found by the `where` argument doesn't exist, create a new InfoWisata with this data.
     */
    create: XOR<InfoWisataCreateInput, InfoWisataUncheckedCreateInput>
    /**
     * In case the InfoWisata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfoWisataUpdateInput, InfoWisataUncheckedUpdateInput>
  }

  /**
   * InfoWisata delete
   */
  export type InfoWisataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
    /**
     * Filter which InfoWisata to delete.
     */
    where: InfoWisataWhereUniqueInput
  }

  /**
   * InfoWisata deleteMany
   */
  export type InfoWisataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoWisatas to delete
     */
    where?: InfoWisataWhereInput
    /**
     * Limit how many InfoWisatas to delete.
     */
    limit?: number
  }

  /**
   * InfoWisata without action
   */
  export type InfoWisataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoWisata
     */
    select?: InfoWisataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoWisata
     */
    omit?: InfoWisataOmit<ExtArgs> | null
  }


  /**
   * Model Galeri
   */

  export type AggregateGaleri = {
    _count: GaleriCountAggregateOutputType | null
    _avg: GaleriAvgAggregateOutputType | null
    _sum: GaleriSumAggregateOutputType | null
    _min: GaleriMinAggregateOutputType | null
    _max: GaleriMaxAggregateOutputType | null
  }

  export type GaleriAvgAggregateOutputType = {
    id: number | null
    urutan: number | null
  }

  export type GaleriSumAggregateOutputType = {
    id: number | null
    urutan: number | null
  }

  export type GaleriMinAggregateOutputType = {
    id: number | null
    judul: string | null
    gambarUrl: string | null
    caption: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GaleriMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    gambarUrl: string | null
    caption: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GaleriCountAggregateOutputType = {
    id: number
    judul: number
    gambarUrl: number
    caption: number
    urutan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GaleriAvgAggregateInputType = {
    id?: true
    urutan?: true
  }

  export type GaleriSumAggregateInputType = {
    id?: true
    urutan?: true
  }

  export type GaleriMinAggregateInputType = {
    id?: true
    judul?: true
    gambarUrl?: true
    caption?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GaleriMaxAggregateInputType = {
    id?: true
    judul?: true
    gambarUrl?: true
    caption?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GaleriCountAggregateInputType = {
    id?: true
    judul?: true
    gambarUrl?: true
    caption?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GaleriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeri to aggregate.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galeris
    **/
    _count?: true | GaleriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GaleriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GaleriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GaleriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GaleriMaxAggregateInputType
  }

  export type GetGaleriAggregateType<T extends GaleriAggregateArgs> = {
        [P in keyof T & keyof AggregateGaleri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGaleri[P]>
      : GetScalarType<T[P], AggregateGaleri[P]>
  }




  export type GaleriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GaleriWhereInput
    orderBy?: GaleriOrderByWithAggregationInput | GaleriOrderByWithAggregationInput[]
    by: GaleriScalarFieldEnum[] | GaleriScalarFieldEnum
    having?: GaleriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GaleriCountAggregateInputType | true
    _avg?: GaleriAvgAggregateInputType
    _sum?: GaleriSumAggregateInputType
    _min?: GaleriMinAggregateInputType
    _max?: GaleriMaxAggregateInputType
  }

  export type GaleriGroupByOutputType = {
    id: number
    judul: string
    gambarUrl: string
    caption: string | null
    urutan: number
    createdAt: Date
    updatedAt: Date
    _count: GaleriCountAggregateOutputType | null
    _avg: GaleriAvgAggregateOutputType | null
    _sum: GaleriSumAggregateOutputType | null
    _min: GaleriMinAggregateOutputType | null
    _max: GaleriMaxAggregateOutputType | null
  }

  type GetGaleriGroupByPayload<T extends GaleriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GaleriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GaleriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GaleriGroupByOutputType[P]>
            : GetScalarType<T[P], GaleriGroupByOutputType[P]>
        }
      >
    >


  export type GaleriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    gambarUrl?: boolean
    caption?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galeri"]>

  export type GaleriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    gambarUrl?: boolean
    caption?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galeri"]>

  export type GaleriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    gambarUrl?: boolean
    caption?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galeri"]>

  export type GaleriSelectScalar = {
    id?: boolean
    judul?: boolean
    gambarUrl?: boolean
    caption?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GaleriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "gambarUrl" | "caption" | "urutan" | "createdAt" | "updatedAt", ExtArgs["result"]["galeri"]>

  export type $GaleriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galeri"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      gambarUrl: string
      caption: string | null
      urutan: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galeri"]>
    composites: {}
  }

  type GaleriGetPayload<S extends boolean | null | undefined | GaleriDefaultArgs> = $Result.GetResult<Prisma.$GaleriPayload, S>

  type GaleriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GaleriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GaleriCountAggregateInputType | true
    }

  export interface GaleriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galeri'], meta: { name: 'Galeri' } }
    /**
     * Find zero or one Galeri that matches the filter.
     * @param {GaleriFindUniqueArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GaleriFindUniqueArgs>(args: SelectSubset<T, GaleriFindUniqueArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galeri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GaleriFindUniqueOrThrowArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GaleriFindUniqueOrThrowArgs>(args: SelectSubset<T, GaleriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galeri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriFindFirstArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GaleriFindFirstArgs>(args?: SelectSubset<T, GaleriFindFirstArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galeri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriFindFirstOrThrowArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GaleriFindFirstOrThrowArgs>(args?: SelectSubset<T, GaleriFindFirstOrThrowArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galeris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galeris
     * const galeris = await prisma.galeri.findMany()
     * 
     * // Get first 10 Galeris
     * const galeris = await prisma.galeri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galeriWithIdOnly = await prisma.galeri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GaleriFindManyArgs>(args?: SelectSubset<T, GaleriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galeri.
     * @param {GaleriCreateArgs} args - Arguments to create a Galeri.
     * @example
     * // Create one Galeri
     * const Galeri = await prisma.galeri.create({
     *   data: {
     *     // ... data to create a Galeri
     *   }
     * })
     * 
     */
    create<T extends GaleriCreateArgs>(args: SelectSubset<T, GaleriCreateArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galeris.
     * @param {GaleriCreateManyArgs} args - Arguments to create many Galeris.
     * @example
     * // Create many Galeris
     * const galeri = await prisma.galeri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GaleriCreateManyArgs>(args?: SelectSubset<T, GaleriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galeris and returns the data saved in the database.
     * @param {GaleriCreateManyAndReturnArgs} args - Arguments to create many Galeris.
     * @example
     * // Create many Galeris
     * const galeri = await prisma.galeri.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galeris and only return the `id`
     * const galeriWithIdOnly = await prisma.galeri.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GaleriCreateManyAndReturnArgs>(args?: SelectSubset<T, GaleriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Galeri.
     * @param {GaleriDeleteArgs} args - Arguments to delete one Galeri.
     * @example
     * // Delete one Galeri
     * const Galeri = await prisma.galeri.delete({
     *   where: {
     *     // ... filter to delete one Galeri
     *   }
     * })
     * 
     */
    delete<T extends GaleriDeleteArgs>(args: SelectSubset<T, GaleriDeleteArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galeri.
     * @param {GaleriUpdateArgs} args - Arguments to update one Galeri.
     * @example
     * // Update one Galeri
     * const galeri = await prisma.galeri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GaleriUpdateArgs>(args: SelectSubset<T, GaleriUpdateArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galeris.
     * @param {GaleriDeleteManyArgs} args - Arguments to filter Galeris to delete.
     * @example
     * // Delete a few Galeris
     * const { count } = await prisma.galeri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GaleriDeleteManyArgs>(args?: SelectSubset<T, GaleriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galeris
     * const galeri = await prisma.galeri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GaleriUpdateManyArgs>(args: SelectSubset<T, GaleriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeris and returns the data updated in the database.
     * @param {GaleriUpdateManyAndReturnArgs} args - Arguments to update many Galeris.
     * @example
     * // Update many Galeris
     * const galeri = await prisma.galeri.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galeris and only return the `id`
     * const galeriWithIdOnly = await prisma.galeri.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GaleriUpdateManyAndReturnArgs>(args: SelectSubset<T, GaleriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Galeri.
     * @param {GaleriUpsertArgs} args - Arguments to update or create a Galeri.
     * @example
     * // Update or create a Galeri
     * const galeri = await prisma.galeri.upsert({
     *   create: {
     *     // ... data to create a Galeri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galeri we want to update
     *   }
     * })
     */
    upsert<T extends GaleriUpsertArgs>(args: SelectSubset<T, GaleriUpsertArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galeris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriCountArgs} args - Arguments to filter Galeris to count.
     * @example
     * // Count the number of Galeris
     * const count = await prisma.galeri.count({
     *   where: {
     *     // ... the filter for the Galeris we want to count
     *   }
     * })
    **/
    count<T extends GaleriCountArgs>(
      args?: Subset<T, GaleriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GaleriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galeri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GaleriAggregateArgs>(args: Subset<T, GaleriAggregateArgs>): Prisma.PrismaPromise<GetGaleriAggregateType<T>>

    /**
     * Group by Galeri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GaleriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GaleriGroupByArgs['orderBy'] }
        : { orderBy?: GaleriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GaleriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGaleriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galeri model
   */
  readonly fields: GaleriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galeri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GaleriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Galeri model
   */
  interface GaleriFieldRefs {
    readonly id: FieldRef<"Galeri", 'Int'>
    readonly judul: FieldRef<"Galeri", 'String'>
    readonly gambarUrl: FieldRef<"Galeri", 'String'>
    readonly caption: FieldRef<"Galeri", 'String'>
    readonly urutan: FieldRef<"Galeri", 'Int'>
    readonly createdAt: FieldRef<"Galeri", 'DateTime'>
    readonly updatedAt: FieldRef<"Galeri", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Galeri findUnique
   */
  export type GaleriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri findUniqueOrThrow
   */
  export type GaleriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri findFirst
   */
  export type GaleriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeris.
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeris.
     */
    distinct?: GaleriScalarFieldEnum | GaleriScalarFieldEnum[]
  }

  /**
   * Galeri findFirstOrThrow
   */
  export type GaleriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeris.
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeris.
     */
    distinct?: GaleriScalarFieldEnum | GaleriScalarFieldEnum[]
  }

  /**
   * Galeri findMany
   */
  export type GaleriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeris to fetch.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galeris.
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeris.
     */
    distinct?: GaleriScalarFieldEnum | GaleriScalarFieldEnum[]
  }

  /**
   * Galeri create
   */
  export type GaleriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The data needed to create a Galeri.
     */
    data: XOR<GaleriCreateInput, GaleriUncheckedCreateInput>
  }

  /**
   * Galeri createMany
   */
  export type GaleriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galeris.
     */
    data: GaleriCreateManyInput | GaleriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galeri createManyAndReturn
   */
  export type GaleriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The data used to create many Galeris.
     */
    data: GaleriCreateManyInput | GaleriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galeri update
   */
  export type GaleriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The data needed to update a Galeri.
     */
    data: XOR<GaleriUpdateInput, GaleriUncheckedUpdateInput>
    /**
     * Choose, which Galeri to update.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri updateMany
   */
  export type GaleriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galeris.
     */
    data: XOR<GaleriUpdateManyMutationInput, GaleriUncheckedUpdateManyInput>
    /**
     * Filter which Galeris to update
     */
    where?: GaleriWhereInput
    /**
     * Limit how many Galeris to update.
     */
    limit?: number
  }

  /**
   * Galeri updateManyAndReturn
   */
  export type GaleriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The data used to update Galeris.
     */
    data: XOR<GaleriUpdateManyMutationInput, GaleriUncheckedUpdateManyInput>
    /**
     * Filter which Galeris to update
     */
    where?: GaleriWhereInput
    /**
     * Limit how many Galeris to update.
     */
    limit?: number
  }

  /**
   * Galeri upsert
   */
  export type GaleriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The filter to search for the Galeri to update in case it exists.
     */
    where: GaleriWhereUniqueInput
    /**
     * In case the Galeri found by the `where` argument doesn't exist, create a new Galeri with this data.
     */
    create: XOR<GaleriCreateInput, GaleriUncheckedCreateInput>
    /**
     * In case the Galeri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GaleriUpdateInput, GaleriUncheckedUpdateInput>
  }

  /**
   * Galeri delete
   */
  export type GaleriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter which Galeri to delete.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri deleteMany
   */
  export type GaleriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeris to delete
     */
    where?: GaleriWhereInput
    /**
     * Limit how many Galeris to delete.
     */
    limit?: number
  }

  /**
   * Galeri without action
   */
  export type GaleriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FasilitasScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    ikon: 'ikon',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FasilitasScalarFieldEnum = (typeof FasilitasScalarFieldEnum)[keyof typeof FasilitasScalarFieldEnum]


  export const TiketScalarFieldEnum: {
    id: 'id',
    kategori: 'kategori',
    harga: 'harga',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TiketScalarFieldEnum = (typeof TiketScalarFieldEnum)[keyof typeof TiketScalarFieldEnum]


  export const InfoWisataScalarFieldEnum: {
    id: 'id',
    jamBuka: 'jamBuka',
    jamTutup: 'jamTutup',
    alamat: 'alamat',
    mapsEmbedUrl: 'mapsEmbedUrl',
    noTelepon: 'noTelepon',
    email: 'email',
    sosialMedia: 'sosialMedia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InfoWisataScalarFieldEnum = (typeof InfoWisataScalarFieldEnum)[keyof typeof InfoWisataScalarFieldEnum]


  export const GaleriScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    gambarUrl: 'gambarUrl',
    caption: 'caption',
    urutan: 'urutan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GaleriScalarFieldEnum = (typeof GaleriScalarFieldEnum)[keyof typeof GaleriScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FasilitasWhereInput = {
    AND?: FasilitasWhereInput | FasilitasWhereInput[]
    OR?: FasilitasWhereInput[]
    NOT?: FasilitasWhereInput | FasilitasWhereInput[]
    id?: IntFilter<"Fasilitas"> | number
    nama?: StringFilter<"Fasilitas"> | string
    ikon?: StringNullableFilter<"Fasilitas"> | string | null
    deskripsi?: StringNullableFilter<"Fasilitas"> | string | null
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
  }

  export type FasilitasOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FasilitasWhereInput | FasilitasWhereInput[]
    OR?: FasilitasWhereInput[]
    NOT?: FasilitasWhereInput | FasilitasWhereInput[]
    nama?: StringFilter<"Fasilitas"> | string
    ikon?: StringNullableFilter<"Fasilitas"> | string | null
    deskripsi?: StringNullableFilter<"Fasilitas"> | string | null
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
  }, "id">

  export type FasilitasOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FasilitasCountOrderByAggregateInput
    _avg?: FasilitasAvgOrderByAggregateInput
    _max?: FasilitasMaxOrderByAggregateInput
    _min?: FasilitasMinOrderByAggregateInput
    _sum?: FasilitasSumOrderByAggregateInput
  }

  export type FasilitasScalarWhereWithAggregatesInput = {
    AND?: FasilitasScalarWhereWithAggregatesInput | FasilitasScalarWhereWithAggregatesInput[]
    OR?: FasilitasScalarWhereWithAggregatesInput[]
    NOT?: FasilitasScalarWhereWithAggregatesInput | FasilitasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fasilitas"> | number
    nama?: StringWithAggregatesFilter<"Fasilitas"> | string
    ikon?: StringNullableWithAggregatesFilter<"Fasilitas"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Fasilitas"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fasilitas"> | Date | string
  }

  export type TiketWhereInput = {
    AND?: TiketWhereInput | TiketWhereInput[]
    OR?: TiketWhereInput[]
    NOT?: TiketWhereInput | TiketWhereInput[]
    id?: IntFilter<"Tiket"> | number
    kategori?: StringFilter<"Tiket"> | string
    harga?: IntFilter<"Tiket"> | number
    deskripsi?: StringNullableFilter<"Tiket"> | string | null
    createdAt?: DateTimeFilter<"Tiket"> | Date | string
    updatedAt?: DateTimeFilter<"Tiket"> | Date | string
  }

  export type TiketOrderByWithRelationInput = {
    id?: SortOrder
    kategori?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TiketWhereInput | TiketWhereInput[]
    OR?: TiketWhereInput[]
    NOT?: TiketWhereInput | TiketWhereInput[]
    kategori?: StringFilter<"Tiket"> | string
    harga?: IntFilter<"Tiket"> | number
    deskripsi?: StringNullableFilter<"Tiket"> | string | null
    createdAt?: DateTimeFilter<"Tiket"> | Date | string
    updatedAt?: DateTimeFilter<"Tiket"> | Date | string
  }, "id">

  export type TiketOrderByWithAggregationInput = {
    id?: SortOrder
    kategori?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TiketCountOrderByAggregateInput
    _avg?: TiketAvgOrderByAggregateInput
    _max?: TiketMaxOrderByAggregateInput
    _min?: TiketMinOrderByAggregateInput
    _sum?: TiketSumOrderByAggregateInput
  }

  export type TiketScalarWhereWithAggregatesInput = {
    AND?: TiketScalarWhereWithAggregatesInput | TiketScalarWhereWithAggregatesInput[]
    OR?: TiketScalarWhereWithAggregatesInput[]
    NOT?: TiketScalarWhereWithAggregatesInput | TiketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tiket"> | number
    kategori?: StringWithAggregatesFilter<"Tiket"> | string
    harga?: IntWithAggregatesFilter<"Tiket"> | number
    deskripsi?: StringNullableWithAggregatesFilter<"Tiket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tiket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tiket"> | Date | string
  }

  export type InfoWisataWhereInput = {
    AND?: InfoWisataWhereInput | InfoWisataWhereInput[]
    OR?: InfoWisataWhereInput[]
    NOT?: InfoWisataWhereInput | InfoWisataWhereInput[]
    id?: IntFilter<"InfoWisata"> | number
    jamBuka?: StringFilter<"InfoWisata"> | string
    jamTutup?: StringFilter<"InfoWisata"> | string
    alamat?: StringFilter<"InfoWisata"> | string
    mapsEmbedUrl?: StringNullableFilter<"InfoWisata"> | string | null
    noTelepon?: StringNullableFilter<"InfoWisata"> | string | null
    email?: StringNullableFilter<"InfoWisata"> | string | null
    sosialMedia?: JsonNullableFilter<"InfoWisata">
    createdAt?: DateTimeFilter<"InfoWisata"> | Date | string
    updatedAt?: DateTimeFilter<"InfoWisata"> | Date | string
  }

  export type InfoWisataOrderByWithRelationInput = {
    id?: SortOrder
    jamBuka?: SortOrder
    jamTutup?: SortOrder
    alamat?: SortOrder
    mapsEmbedUrl?: SortOrderInput | SortOrder
    noTelepon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sosialMedia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfoWisataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InfoWisataWhereInput | InfoWisataWhereInput[]
    OR?: InfoWisataWhereInput[]
    NOT?: InfoWisataWhereInput | InfoWisataWhereInput[]
    jamBuka?: StringFilter<"InfoWisata"> | string
    jamTutup?: StringFilter<"InfoWisata"> | string
    alamat?: StringFilter<"InfoWisata"> | string
    mapsEmbedUrl?: StringNullableFilter<"InfoWisata"> | string | null
    noTelepon?: StringNullableFilter<"InfoWisata"> | string | null
    email?: StringNullableFilter<"InfoWisata"> | string | null
    sosialMedia?: JsonNullableFilter<"InfoWisata">
    createdAt?: DateTimeFilter<"InfoWisata"> | Date | string
    updatedAt?: DateTimeFilter<"InfoWisata"> | Date | string
  }, "id">

  export type InfoWisataOrderByWithAggregationInput = {
    id?: SortOrder
    jamBuka?: SortOrder
    jamTutup?: SortOrder
    alamat?: SortOrder
    mapsEmbedUrl?: SortOrderInput | SortOrder
    noTelepon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sosialMedia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InfoWisataCountOrderByAggregateInput
    _avg?: InfoWisataAvgOrderByAggregateInput
    _max?: InfoWisataMaxOrderByAggregateInput
    _min?: InfoWisataMinOrderByAggregateInput
    _sum?: InfoWisataSumOrderByAggregateInput
  }

  export type InfoWisataScalarWhereWithAggregatesInput = {
    AND?: InfoWisataScalarWhereWithAggregatesInput | InfoWisataScalarWhereWithAggregatesInput[]
    OR?: InfoWisataScalarWhereWithAggregatesInput[]
    NOT?: InfoWisataScalarWhereWithAggregatesInput | InfoWisataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InfoWisata"> | number
    jamBuka?: StringWithAggregatesFilter<"InfoWisata"> | string
    jamTutup?: StringWithAggregatesFilter<"InfoWisata"> | string
    alamat?: StringWithAggregatesFilter<"InfoWisata"> | string
    mapsEmbedUrl?: StringNullableWithAggregatesFilter<"InfoWisata"> | string | null
    noTelepon?: StringNullableWithAggregatesFilter<"InfoWisata"> | string | null
    email?: StringNullableWithAggregatesFilter<"InfoWisata"> | string | null
    sosialMedia?: JsonNullableWithAggregatesFilter<"InfoWisata">
    createdAt?: DateTimeWithAggregatesFilter<"InfoWisata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InfoWisata"> | Date | string
  }

  export type GaleriWhereInput = {
    AND?: GaleriWhereInput | GaleriWhereInput[]
    OR?: GaleriWhereInput[]
    NOT?: GaleriWhereInput | GaleriWhereInput[]
    id?: IntFilter<"Galeri"> | number
    judul?: StringFilter<"Galeri"> | string
    gambarUrl?: StringFilter<"Galeri"> | string
    caption?: StringNullableFilter<"Galeri"> | string | null
    urutan?: IntFilter<"Galeri"> | number
    createdAt?: DateTimeFilter<"Galeri"> | Date | string
    updatedAt?: DateTimeFilter<"Galeri"> | Date | string
  }

  export type GaleriOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    gambarUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GaleriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GaleriWhereInput | GaleriWhereInput[]
    OR?: GaleriWhereInput[]
    NOT?: GaleriWhereInput | GaleriWhereInput[]
    judul?: StringFilter<"Galeri"> | string
    gambarUrl?: StringFilter<"Galeri"> | string
    caption?: StringNullableFilter<"Galeri"> | string | null
    urutan?: IntFilter<"Galeri"> | number
    createdAt?: DateTimeFilter<"Galeri"> | Date | string
    updatedAt?: DateTimeFilter<"Galeri"> | Date | string
  }, "id">

  export type GaleriOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    gambarUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GaleriCountOrderByAggregateInput
    _avg?: GaleriAvgOrderByAggregateInput
    _max?: GaleriMaxOrderByAggregateInput
    _min?: GaleriMinOrderByAggregateInput
    _sum?: GaleriSumOrderByAggregateInput
  }

  export type GaleriScalarWhereWithAggregatesInput = {
    AND?: GaleriScalarWhereWithAggregatesInput | GaleriScalarWhereWithAggregatesInput[]
    OR?: GaleriScalarWhereWithAggregatesInput[]
    NOT?: GaleriScalarWhereWithAggregatesInput | GaleriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Galeri"> | number
    judul?: StringWithAggregatesFilter<"Galeri"> | string
    gambarUrl?: StringWithAggregatesFilter<"Galeri"> | string
    caption?: StringNullableWithAggregatesFilter<"Galeri"> | string | null
    urutan?: IntWithAggregatesFilter<"Galeri"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Galeri"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Galeri"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type FasilitasCreateInput = {
    nama: string
    ikon?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUncheckedCreateInput = {
    id?: number
    nama: string
    ikon?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasCreateManyInput = {
    id?: number
    nama: string
    ikon?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiketCreateInput = {
    kategori: string
    harga: number
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiketUncheckedCreateInput = {
    id?: number
    kategori: string
    harga: number
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiketUpdateInput = {
    kategori?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategori?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiketCreateManyInput = {
    id?: number
    kategori: string
    harga: number
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TiketUpdateManyMutationInput = {
    kategori?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategori?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfoWisataCreateInput = {
    jamBuka: string
    jamTutup: string
    alamat: string
    mapsEmbedUrl?: string | null
    noTelepon?: string | null
    email?: string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfoWisataUncheckedCreateInput = {
    id?: number
    jamBuka: string
    jamTutup: string
    alamat: string
    mapsEmbedUrl?: string | null
    noTelepon?: string | null
    email?: string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfoWisataUpdateInput = {
    jamBuka?: StringFieldUpdateOperationsInput | string
    jamTutup?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    mapsEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    noTelepon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfoWisataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jamBuka?: StringFieldUpdateOperationsInput | string
    jamTutup?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    mapsEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    noTelepon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfoWisataCreateManyInput = {
    id?: number
    jamBuka: string
    jamTutup: string
    alamat: string
    mapsEmbedUrl?: string | null
    noTelepon?: string | null
    email?: string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfoWisataUpdateManyMutationInput = {
    jamBuka?: StringFieldUpdateOperationsInput | string
    jamTutup?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    mapsEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    noTelepon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfoWisataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jamBuka?: StringFieldUpdateOperationsInput | string
    jamTutup?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    mapsEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    noTelepon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sosialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriCreateInput = {
    judul: string
    gambarUrl: string
    caption?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GaleriUncheckedCreateInput = {
    id?: number
    judul: string
    gambarUrl: string
    caption?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GaleriUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    gambarUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    gambarUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriCreateManyInput = {
    id?: number
    judul: string
    gambarUrl: string
    caption?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GaleriUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    gambarUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    gambarUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FasilitasCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FasilitasMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TiketCountOrderByAggregateInput = {
    id?: SortOrder
    kategori?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiketAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
  }

  export type TiketMaxOrderByAggregateInput = {
    id?: SortOrder
    kategori?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiketMinOrderByAggregateInput = {
    id?: SortOrder
    kategori?: SortOrder
    harga?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TiketSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InfoWisataCountOrderByAggregateInput = {
    id?: SortOrder
    jamBuka?: SortOrder
    jamTutup?: SortOrder
    alamat?: SortOrder
    mapsEmbedUrl?: SortOrder
    noTelepon?: SortOrder
    email?: SortOrder
    sosialMedia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfoWisataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InfoWisataMaxOrderByAggregateInput = {
    id?: SortOrder
    jamBuka?: SortOrder
    jamTutup?: SortOrder
    alamat?: SortOrder
    mapsEmbedUrl?: SortOrder
    noTelepon?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfoWisataMinOrderByAggregateInput = {
    id?: SortOrder
    jamBuka?: SortOrder
    jamTutup?: SortOrder
    alamat?: SortOrder
    mapsEmbedUrl?: SortOrder
    noTelepon?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfoWisataSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GaleriCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    gambarUrl?: SortOrder
    caption?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GaleriAvgOrderByAggregateInput = {
    id?: SortOrder
    urutan?: SortOrder
  }

  export type GaleriMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    gambarUrl?: SortOrder
    caption?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GaleriMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    gambarUrl?: SortOrder
    caption?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GaleriSumOrderByAggregateInput = {
    id?: SortOrder
    urutan?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}