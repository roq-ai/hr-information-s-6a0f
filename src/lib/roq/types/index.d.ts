/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model payroll
 *
 */
export type payroll = $Result.DefaultSelection<Prisma.$payrollPayload>;
/**
 * Model sick_leave
 *
 */
export type sick_leave = $Result.DefaultSelection<Prisma.$sick_leavePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vacation
 *
 */
export type vacation = $Result.DefaultSelection<Prisma.$vacationPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **payroll** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payrolls
   * const payrolls = await prisma.payroll.findMany()
   * ```
   */
  get payroll(): Prisma.payrollDelegate<ExtArgs>;

  /**
   * `prisma.sick_leave`: Exposes CRUD operations for the **sick_leave** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sick_leaves
   * const sick_leaves = await prisma.sick_leave.findMany()
   * ```
   */
  get sick_leave(): Prisma.sick_leaveDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vacation`: Exposes CRUD operations for the **vacation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vacations
   * const vacations = await prisma.vacation.findMany()
   * ```
   */
  get vacation(): Prisma.vacationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    employee: 'employee';
    payroll: 'payroll';
    sick_leave: 'sick_leave';
    user: 'user';
    vacation: 'vacation';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'employee' | 'payroll' | 'sick_leave' | 'user' | 'vacation';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      payroll: {
        payload: Prisma.$payrollPayload<ExtArgs>;
        fields: Prisma.payrollFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.payrollFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.payrollFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>;
          };
          findFirst: {
            args: Prisma.payrollFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.payrollFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>;
          };
          findMany: {
            args: Prisma.payrollFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>[];
          };
          create: {
            args: Prisma.payrollCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>;
          };
          createMany: {
            args: Prisma.payrollCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.payrollDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>;
          };
          update: {
            args: Prisma.payrollUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>;
          };
          deleteMany: {
            args: Prisma.payrollDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.payrollUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.payrollUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payrollPayload>;
          };
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayroll>;
          };
          groupBy: {
            args: Prisma.payrollGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PayrollGroupByOutputType>[];
          };
          count: {
            args: Prisma.payrollCountArgs<ExtArgs>;
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number;
          };
        };
      };
      sick_leave: {
        payload: Prisma.$sick_leavePayload<ExtArgs>;
        fields: Prisma.sick_leaveFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.sick_leaveFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.sick_leaveFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          findFirst: {
            args: Prisma.sick_leaveFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.sick_leaveFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          findMany: {
            args: Prisma.sick_leaveFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>[];
          };
          create: {
            args: Prisma.sick_leaveCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          createMany: {
            args: Prisma.sick_leaveCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.sick_leaveDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          update: {
            args: Prisma.sick_leaveUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          deleteMany: {
            args: Prisma.sick_leaveDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.sick_leaveUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.sick_leaveUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          aggregate: {
            args: Prisma.Sick_leaveAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSick_leave>;
          };
          groupBy: {
            args: Prisma.sick_leaveGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Sick_leaveGroupByOutputType>[];
          };
          count: {
            args: Prisma.sick_leaveCountArgs<ExtArgs>;
            result: $Utils.Optional<Sick_leaveCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vacation: {
        payload: Prisma.$vacationPayload<ExtArgs>;
        fields: Prisma.vacationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vacationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vacationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          findFirst: {
            args: Prisma.vacationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vacationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          findMany: {
            args: Prisma.vacationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>[];
          };
          create: {
            args: Prisma.vacationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          createMany: {
            args: Prisma.vacationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vacationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          update: {
            args: Prisma.vacationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          deleteMany: {
            args: Prisma.vacationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vacationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vacationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          aggregate: {
            args: Prisma.VacationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVacation>;
          };
          groupBy: {
            args: Prisma.vacationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VacationGroupByOutputType>[];
          };
          count: {
            args: Prisma.vacationCountArgs<ExtArgs>;
            result: $Utils.Optional<VacationCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    payroll: number;
    sick_leave: number;
    vacation: number;
  };

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | EmployeeCountOutputTypeCountPayrollArgs;
    sick_leave?: boolean | EmployeeCountOutputTypeCountSick_leaveArgs;
    vacation?: boolean | EmployeeCountOutputTypeCountVacationArgs;
  };

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayrollArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: payrollWhereInput;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSick_leaveArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sick_leaveWhereInput;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountVacationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: vacationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employee: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone: number;
    email: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    email?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    email?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    email?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone?: boolean;
      email?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone: string | null;
        email: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly phone: FieldRef<'company', 'String'>;
    readonly email: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    employee_number: number | null;
    salary: number | null;
    performance_rating: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    employee_number: number | null;
    salary: number | null;
    performance_rating: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    employee_number: number | null;
    hire_date: Date | null;
    termination_date: Date | null;
    position: string | null;
    salary: number | null;
    user_id: string | null;
    adress: string | null;
    phone: string | null;
    email: string | null;
    emergency_contact: string | null;
    performance_rating: number | null;
    department: string | null;
    job_description: string | null;
    contract_type: string | null;
    employee_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    employee_number: number | null;
    hire_date: Date | null;
    termination_date: Date | null;
    position: string | null;
    salary: number | null;
    user_id: string | null;
    adress: string | null;
    phone: string | null;
    email: string | null;
    emergency_contact: string | null;
    performance_rating: number | null;
    department: string | null;
    job_description: string | null;
    contract_type: string | null;
    employee_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    employee_number: number;
    hire_date: number;
    termination_date: number;
    position: number;
    salary: number;
    user_id: number;
    adress: number;
    phone: number;
    email: number;
    emergency_contact: number;
    performance_rating: number;
    department: number;
    job_description: number;
    contract_type: number;
    employee_status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    employee_number?: true;
    salary?: true;
    performance_rating?: true;
  };

  export type EmployeeSumAggregateInputType = {
    employee_number?: true;
    salary?: true;
    performance_rating?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    employee_number?: true;
    hire_date?: true;
    termination_date?: true;
    position?: true;
    salary?: true;
    user_id?: true;
    adress?: true;
    phone?: true;
    email?: true;
    emergency_contact?: true;
    performance_rating?: true;
    department?: true;
    job_description?: true;
    contract_type?: true;
    employee_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    employee_number?: true;
    hire_date?: true;
    termination_date?: true;
    position?: true;
    salary?: true;
    user_id?: true;
    adress?: true;
    phone?: true;
    email?: true;
    emergency_contact?: true;
    performance_rating?: true;
    department?: true;
    job_description?: true;
    contract_type?: true;
    employee_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    employee_number?: true;
    hire_date?: true;
    termination_date?: true;
    position?: true;
    salary?: true;
    user_id?: true;
    adress?: true;
    phone?: true;
    email?: true;
    emergency_contact?: true;
    performance_rating?: true;
    department?: true;
    job_description?: true;
    contract_type?: true;
    employee_status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    employee_number: number;
    hire_date: Date;
    termination_date: Date | null;
    position: string;
    salary: number;
    user_id: string;
    adress: string | null;
    phone: string | null;
    email: string | null;
    emergency_contact: string | null;
    performance_rating: number | null;
    department: string | null;
    job_description: string | null;
    contract_type: string | null;
    employee_status: string | null;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        employee_number?: boolean;
        hire_date?: boolean;
        termination_date?: boolean;
        position?: boolean;
        salary?: boolean;
        user_id?: boolean;
        adress?: boolean;
        phone?: boolean;
        email?: boolean;
        emergency_contact?: boolean;
        performance_rating?: boolean;
        department?: boolean;
        job_description?: boolean;
        contract_type?: boolean;
        employee_status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        payroll?: boolean | employee$payrollArgs<ExtArgs>;
        sick_leave?: boolean | employee$sick_leaveArgs<ExtArgs>;
        vacation?: boolean | employee$vacationArgs<ExtArgs>;
        _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    employee_number?: boolean;
    hire_date?: boolean;
    termination_date?: boolean;
    position?: boolean;
    salary?: boolean;
    user_id?: boolean;
    adress?: boolean;
    phone?: boolean;
    email?: boolean;
    emergency_contact?: boolean;
    performance_rating?: boolean;
    department?: boolean;
    job_description?: boolean;
    contract_type?: boolean;
    employee_status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    payroll?: boolean | employee$payrollArgs<ExtArgs>;
    sick_leave?: boolean | employee$sick_leaveArgs<ExtArgs>;
    vacation?: boolean | employee$vacationArgs<ExtArgs>;
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      payroll: Prisma.$payrollPayload<ExtArgs>[];
      sick_leave: Prisma.$sick_leavePayload<ExtArgs>[];
      vacation: Prisma.$vacationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employee_number: number;
        hire_date: Date;
        termination_date: Date | null;
        position: string;
        salary: number;
        user_id: string;
        adress: string | null;
        phone: string | null;
        email: string | null;
        emergency_contact: string | null;
        performance_rating: number | null;
        department: string | null;
        job_description: string | null;
        contract_type: string | null;
        employee_status: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    payroll<T extends employee$payrollArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$payrollArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'findMany'> | Null>;

    sick_leave<T extends employee$sick_leaveArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$sick_leaveArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findMany'> | Null>;

    vacation<T extends employee$vacationArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$vacationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly employee_number: FieldRef<'employee', 'Int'>;
    readonly hire_date: FieldRef<'employee', 'DateTime'>;
    readonly termination_date: FieldRef<'employee', 'DateTime'>;
    readonly position: FieldRef<'employee', 'String'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly adress: FieldRef<'employee', 'String'>;
    readonly phone: FieldRef<'employee', 'String'>;
    readonly email: FieldRef<'employee', 'String'>;
    readonly emergency_contact: FieldRef<'employee', 'String'>;
    readonly performance_rating: FieldRef<'employee', 'Int'>;
    readonly department: FieldRef<'employee', 'String'>;
    readonly job_description: FieldRef<'employee', 'String'>;
    readonly contract_type: FieldRef<'employee', 'String'>;
    readonly employee_status: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee.payroll
   */
  export type employee$payrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    where?: payrollWhereInput;
    orderBy?: payrollOrderByWithRelationInput | payrollOrderByWithRelationInput[];
    cursor?: payrollWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[];
  };

  /**
   * employee.sick_leave
   */
  export type employee$sick_leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    where?: sick_leaveWhereInput;
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    cursor?: sick_leaveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * employee.vacation
   */
  export type employee$vacationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    where?: vacationWhereInput;
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    cursor?: vacationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null;
    _avg: PayrollAvgAggregateOutputType | null;
    _sum: PayrollSumAggregateOutputType | null;
    _min: PayrollMinAggregateOutputType | null;
    _max: PayrollMaxAggregateOutputType | null;
  };

  export type PayrollAvgAggregateOutputType = {
    salary: number | null;
    bonus: number | null;
    deductions: number | null;
    net_pay: number | null;
    commission: number | null;
  };

  export type PayrollSumAggregateOutputType = {
    salary: number | null;
    bonus: number | null;
    deductions: number | null;
    net_pay: number | null;
    commission: number | null;
  };

  export type PayrollMinAggregateOutputType = {
    id: string | null;
    employee_id: string | null;
    salary: number | null;
    bonus: number | null;
    deductions: number | null;
    net_pay: number | null;
    pay_date: Date | null;
    reimbursement: string | null;
    commission: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PayrollMaxAggregateOutputType = {
    id: string | null;
    employee_id: string | null;
    salary: number | null;
    bonus: number | null;
    deductions: number | null;
    net_pay: number | null;
    pay_date: Date | null;
    reimbursement: string | null;
    commission: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PayrollCountAggregateOutputType = {
    id: number;
    employee_id: number;
    salary: number;
    bonus: number;
    deductions: number;
    net_pay: number;
    pay_date: number;
    reimbursement: number;
    commission: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PayrollAvgAggregateInputType = {
    salary?: true;
    bonus?: true;
    deductions?: true;
    net_pay?: true;
    commission?: true;
  };

  export type PayrollSumAggregateInputType = {
    salary?: true;
    bonus?: true;
    deductions?: true;
    net_pay?: true;
    commission?: true;
  };

  export type PayrollMinAggregateInputType = {
    id?: true;
    employee_id?: true;
    salary?: true;
    bonus?: true;
    deductions?: true;
    net_pay?: true;
    pay_date?: true;
    reimbursement?: true;
    commission?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PayrollMaxAggregateInputType = {
    id?: true;
    employee_id?: true;
    salary?: true;
    bonus?: true;
    deductions?: true;
    net_pay?: true;
    pay_date?: true;
    reimbursement?: true;
    commission?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PayrollCountAggregateInputType = {
    id?: true;
    employee_id?: true;
    salary?: true;
    bonus?: true;
    deductions?: true;
    net_pay?: true;
    pay_date?: true;
    reimbursement?: true;
    commission?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payroll to aggregate.
     */
    where?: payrollWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payrolls to fetch.
     */
    orderBy?: payrollOrderByWithRelationInput | payrollOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: payrollWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payrolls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payrolls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payrolls
     **/
    _count?: true | PayrollCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PayrollAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PayrollSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PayrollMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PayrollMaxAggregateInputType;
  };

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
    [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>;
  };

  export type payrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payrollWhereInput;
    orderBy?: payrollOrderByWithAggregationInput | payrollOrderByWithAggregationInput[];
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum;
    having?: payrollScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayrollCountAggregateInputType | true;
    _avg?: PayrollAvgAggregateInputType;
    _sum?: PayrollSumAggregateInputType;
    _min?: PayrollMinAggregateInputType;
    _max?: PayrollMaxAggregateInputType;
  };

  export type PayrollGroupByOutputType = {
    id: string;
    employee_id: string;
    salary: number;
    bonus: number;
    deductions: number;
    net_pay: number;
    pay_date: Date;
    reimbursement: string;
    commission: number;
    created_at: Date;
    updated_at: Date;
    _count: PayrollCountAggregateOutputType | null;
    _avg: PayrollAvgAggregateOutputType | null;
    _sum: PayrollSumAggregateOutputType | null;
    _min: PayrollMinAggregateOutputType | null;
    _max: PayrollMaxAggregateOutputType | null;
  };

  type GetPayrollGroupByPayload<T extends payrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PayrollGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
          : GetScalarType<T[P], PayrollGroupByOutputType[P]>;
      }
    >
  >;

  export type payrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      employee_id?: boolean;
      salary?: boolean;
      bonus?: boolean;
      deductions?: boolean;
      net_pay?: boolean;
      pay_date?: boolean;
      reimbursement?: boolean;
      commission?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      employee?: boolean | employeeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payroll']
  >;

  export type payrollSelectScalar = {
    id?: boolean;
    employee_id?: boolean;
    salary?: boolean;
    bonus?: boolean;
    deductions?: boolean;
    net_pay?: boolean;
    pay_date?: boolean;
    reimbursement?: boolean;
    commission?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type payrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $payrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payroll';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employee_id: string;
        salary: number;
        bonus: number;
        deductions: number;
        net_pay: number;
        pay_date: Date;
        reimbursement: string;
        commission: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payroll']
    >;
    composites: {};
  };

  type payrollGetPayload<S extends boolean | null | undefined | payrollDefaultArgs> = $Result.GetResult<
    Prisma.$payrollPayload,
    S
  >;

  type payrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    payrollFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PayrollCountAggregateInputType | true;
  };

  export interface payrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payroll']; meta: { name: 'payroll' } };
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {payrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends payrollFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, payrollFindUniqueArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Payroll that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {payrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends payrollFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payrollFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__payrollClient<
      $Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends payrollFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, payrollFindFirstArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends payrollFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payrollFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     *
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends payrollFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payrollFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payroll.
     * @param {payrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     *
     **/
    create<T extends payrollCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payrollCreateArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Payrolls.
     *     @param {payrollCreateManyArgs} args - Arguments to create many Payrolls.
     *     @example
     *     // Create many Payrolls
     *     const payroll = await prisma.payroll.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends payrollCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payrollCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payroll.
     * @param {payrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     *
     **/
    delete<T extends payrollDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payrollDeleteArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Payroll.
     * @param {payrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends payrollUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payrollUpdateArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Payrolls.
     * @param {payrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends payrollDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payrollDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends payrollUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payrollUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payroll.
     * @param {payrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     **/
    upsert<T extends payrollUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payrollUpsertArgs<ExtArgs>>,
    ): Prisma__payrollClient<$Result.GetResult<Prisma.$payrollPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
     **/
    count<T extends payrollCountArgs>(
      args?: Subset<T, payrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollAggregateArgs>(
      args: Subset<T, PayrollAggregateArgs>,
    ): Prisma.PrismaPromise<GetPayrollAggregateType<T>>;

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollGroupByArgs} args - Group by arguments.
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
      T extends payrollGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payrollGroupByArgs['orderBy'] }
        : { orderBy?: payrollGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, payrollGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payroll model
     */
    readonly fields: payrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payrollClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payroll model
   */
  interface payrollFieldRefs {
    readonly id: FieldRef<'payroll', 'String'>;
    readonly employee_id: FieldRef<'payroll', 'String'>;
    readonly salary: FieldRef<'payroll', 'Int'>;
    readonly bonus: FieldRef<'payroll', 'Int'>;
    readonly deductions: FieldRef<'payroll', 'Int'>;
    readonly net_pay: FieldRef<'payroll', 'Int'>;
    readonly pay_date: FieldRef<'payroll', 'DateTime'>;
    readonly reimbursement: FieldRef<'payroll', 'String'>;
    readonly commission: FieldRef<'payroll', 'Int'>;
    readonly created_at: FieldRef<'payroll', 'DateTime'>;
    readonly updated_at: FieldRef<'payroll', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payroll findUnique
   */
  export type payrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * Filter, which payroll to fetch.
     */
    where: payrollWhereUniqueInput;
  };

  /**
   * payroll findUniqueOrThrow
   */
  export type payrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * Filter, which payroll to fetch.
     */
    where: payrollWhereUniqueInput;
  };

  /**
   * payroll findFirst
   */
  export type payrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * Filter, which payroll to fetch.
     */
    where?: payrollWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payrolls to fetch.
     */
    orderBy?: payrollOrderByWithRelationInput | payrollOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payrolls.
     */
    cursor?: payrollWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payrolls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payrolls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[];
  };

  /**
   * payroll findFirstOrThrow
   */
  export type payrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * Filter, which payroll to fetch.
     */
    where?: payrollWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payrolls to fetch.
     */
    orderBy?: payrollOrderByWithRelationInput | payrollOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payrolls.
     */
    cursor?: payrollWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payrolls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payrolls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[];
  };

  /**
   * payroll findMany
   */
  export type payrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * Filter, which payrolls to fetch.
     */
    where?: payrollWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payrolls to fetch.
     */
    orderBy?: payrollOrderByWithRelationInput | payrollOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payrolls.
     */
    cursor?: payrollWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payrolls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payrolls.
     */
    skip?: number;
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[];
  };

  /**
   * payroll create
   */
  export type payrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * The data needed to create a payroll.
     */
    data: XOR<payrollCreateInput, payrollUncheckedCreateInput>;
  };

  /**
   * payroll createMany
   */
  export type payrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payrolls.
     */
    data: payrollCreateManyInput | payrollCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payroll update
   */
  export type payrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * The data needed to update a payroll.
     */
    data: XOR<payrollUpdateInput, payrollUncheckedUpdateInput>;
    /**
     * Choose, which payroll to update.
     */
    where: payrollWhereUniqueInput;
  };

  /**
   * payroll updateMany
   */
  export type payrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payrolls.
     */
    data: XOR<payrollUpdateManyMutationInput, payrollUncheckedUpdateManyInput>;
    /**
     * Filter which payrolls to update
     */
    where?: payrollWhereInput;
  };

  /**
   * payroll upsert
   */
  export type payrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * The filter to search for the payroll to update in case it exists.
     */
    where: payrollWhereUniqueInput;
    /**
     * In case the payroll found by the `where` argument doesn't exist, create a new payroll with this data.
     */
    create: XOR<payrollCreateInput, payrollUncheckedCreateInput>;
    /**
     * In case the payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payrollUpdateInput, payrollUncheckedUpdateInput>;
  };

  /**
   * payroll delete
   */
  export type payrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
    /**
     * Filter which payroll to delete.
     */
    where: payrollWhereUniqueInput;
  };

  /**
   * payroll deleteMany
   */
  export type payrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payrolls to delete
     */
    where?: payrollWhereInput;
  };

  /**
   * payroll without action
   */
  export type payrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payroll
     */
    select?: payrollSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payrollInclude<ExtArgs> | null;
  };

  /**
   * Model sick_leave
   */

  export type AggregateSick_leave = {
    _count: Sick_leaveCountAggregateOutputType | null;
    _min: Sick_leaveMinAggregateOutputType | null;
    _max: Sick_leaveMaxAggregateOutputType | null;
  };

  export type Sick_leaveMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    doctor_note: boolean | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sick_leaveMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    doctor_note: boolean | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sick_leaveCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    doctor_note: number;
    employee_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Sick_leaveMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    doctor_note?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sick_leaveMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    doctor_note?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sick_leaveCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    doctor_note?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Sick_leaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sick_leave to aggregate.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sick_leaves
     **/
    _count?: true | Sick_leaveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Sick_leaveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Sick_leaveMaxAggregateInputType;
  };

  export type GetSick_leaveAggregateType<T extends Sick_leaveAggregateArgs> = {
    [P in keyof T & keyof AggregateSick_leave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSick_leave[P]>
      : GetScalarType<T[P], AggregateSick_leave[P]>;
  };

  export type sick_leaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sick_leaveWhereInput;
    orderBy?: sick_leaveOrderByWithAggregationInput | sick_leaveOrderByWithAggregationInput[];
    by: Sick_leaveScalarFieldEnum[] | Sick_leaveScalarFieldEnum;
    having?: sick_leaveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sick_leaveCountAggregateInputType | true;
    _min?: Sick_leaveMinAggregateInputType;
    _max?: Sick_leaveMaxAggregateInputType;
  };

  export type Sick_leaveGroupByOutputType = {
    id: string;
    start_date: Date | null;
    end_date: Date | null;
    doctor_note: boolean | null;
    employee_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Sick_leaveCountAggregateOutputType | null;
    _min: Sick_leaveMinAggregateOutputType | null;
    _max: Sick_leaveMaxAggregateOutputType | null;
  };

  type GetSick_leaveGroupByPayload<T extends sick_leaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sick_leaveGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Sick_leaveGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Sick_leaveGroupByOutputType[P]>
          : GetScalarType<T[P], Sick_leaveGroupByOutputType[P]>;
      }
    >
  >;

  export type sick_leaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        doctor_note?: boolean;
        employee_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['sick_leave']
    >;

  export type sick_leaveSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    doctor_note?: boolean;
    employee_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type sick_leaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $sick_leavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sick_leave';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date | null;
        end_date: Date | null;
        doctor_note: boolean | null;
        employee_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sick_leave']
    >;
    composites: {};
  };

  type sick_leaveGetPayload<S extends boolean | null | undefined | sick_leaveDefaultArgs> = $Result.GetResult<
    Prisma.$sick_leavePayload,
    S
  >;

  type sick_leaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    sick_leaveFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Sick_leaveCountAggregateInputType | true;
  };

  export interface sick_leaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sick_leave']; meta: { name: 'sick_leave' } };
    /**
     * Find zero or one Sick_leave that matches the filter.
     * @param {sick_leaveFindUniqueArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends sick_leaveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveFindUniqueArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Sick_leave that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {sick_leaveFindUniqueOrThrowArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends sick_leaveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Sick_leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveFindFirstArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends sick_leaveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindFirstArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Sick_leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveFindFirstOrThrowArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends sick_leaveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sick_leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sick_leaves
     * const sick_leaves = await prisma.sick_leave.findMany()
     *
     * // Get first 10 Sick_leaves
     * const sick_leaves = await prisma.sick_leave.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sick_leaveWithIdOnly = await prisma.sick_leave.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends sick_leaveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sick_leave.
     * @param {sick_leaveCreateArgs} args - Arguments to create a Sick_leave.
     * @example
     * // Create one Sick_leave
     * const Sick_leave = await prisma.sick_leave.create({
     *   data: {
     *     // ... data to create a Sick_leave
     *   }
     * })
     *
     **/
    create<T extends sick_leaveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveCreateArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Sick_leaves.
     *     @param {sick_leaveCreateManyArgs} args - Arguments to create many Sick_leaves.
     *     @example
     *     // Create many Sick_leaves
     *     const sick_leave = await prisma.sick_leave.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends sick_leaveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sick_leave.
     * @param {sick_leaveDeleteArgs} args - Arguments to delete one Sick_leave.
     * @example
     * // Delete one Sick_leave
     * const Sick_leave = await prisma.sick_leave.delete({
     *   where: {
     *     // ... filter to delete one Sick_leave
     *   }
     * })
     *
     **/
    delete<T extends sick_leaveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveDeleteArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Sick_leave.
     * @param {sick_leaveUpdateArgs} args - Arguments to update one Sick_leave.
     * @example
     * // Update one Sick_leave
     * const sick_leave = await prisma.sick_leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends sick_leaveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveUpdateArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Sick_leaves.
     * @param {sick_leaveDeleteManyArgs} args - Arguments to filter Sick_leaves to delete.
     * @example
     * // Delete a few Sick_leaves
     * const { count } = await prisma.sick_leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends sick_leaveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sick_leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sick_leaves
     * const sick_leave = await prisma.sick_leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends sick_leaveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sick_leave.
     * @param {sick_leaveUpsertArgs} args - Arguments to update or create a Sick_leave.
     * @example
     * // Update or create a Sick_leave
     * const sick_leave = await prisma.sick_leave.upsert({
     *   create: {
     *     // ... data to create a Sick_leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sick_leave we want to update
     *   }
     * })
     **/
    upsert<T extends sick_leaveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveUpsertArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Sick_leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveCountArgs} args - Arguments to filter Sick_leaves to count.
     * @example
     * // Count the number of Sick_leaves
     * const count = await prisma.sick_leave.count({
     *   where: {
     *     // ... the filter for the Sick_leaves we want to count
     *   }
     * })
     **/
    count<T extends sick_leaveCountArgs>(
      args?: Subset<T, sick_leaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sick_leaveCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sick_leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sick_leaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sick_leaveAggregateArgs>(
      args: Subset<T, Sick_leaveAggregateArgs>,
    ): Prisma.PrismaPromise<GetSick_leaveAggregateType<T>>;

    /**
     * Group by Sick_leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveGroupByArgs} args - Group by arguments.
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
      T extends sick_leaveGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sick_leaveGroupByArgs['orderBy'] }
        : { orderBy?: sick_leaveGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, sick_leaveGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSick_leaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sick_leave model
     */
    readonly fields: sick_leaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sick_leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sick_leaveClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sick_leave model
   */
  interface sick_leaveFieldRefs {
    readonly id: FieldRef<'sick_leave', 'String'>;
    readonly start_date: FieldRef<'sick_leave', 'DateTime'>;
    readonly end_date: FieldRef<'sick_leave', 'DateTime'>;
    readonly doctor_note: FieldRef<'sick_leave', 'Boolean'>;
    readonly employee_id: FieldRef<'sick_leave', 'String'>;
    readonly created_at: FieldRef<'sick_leave', 'DateTime'>;
    readonly updated_at: FieldRef<'sick_leave', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sick_leave findUnique
   */
  export type sick_leaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave findUniqueOrThrow
   */
  export type sick_leaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave findFirst
   */
  export type sick_leaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sick_leaves.
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sick_leaves.
     */
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * sick_leave findFirstOrThrow
   */
  export type sick_leaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sick_leaves.
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sick_leaves.
     */
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * sick_leave findMany
   */
  export type sick_leaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leaves to fetch.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sick_leaves.
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * sick_leave create
   */
  export type sick_leaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * The data needed to create a sick_leave.
     */
    data: XOR<sick_leaveCreateInput, sick_leaveUncheckedCreateInput>;
  };

  /**
   * sick_leave createMany
   */
  export type sick_leaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sick_leaves.
     */
    data: sick_leaveCreateManyInput | sick_leaveCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sick_leave update
   */
  export type sick_leaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * The data needed to update a sick_leave.
     */
    data: XOR<sick_leaveUpdateInput, sick_leaveUncheckedUpdateInput>;
    /**
     * Choose, which sick_leave to update.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave updateMany
   */
  export type sick_leaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sick_leaves.
     */
    data: XOR<sick_leaveUpdateManyMutationInput, sick_leaveUncheckedUpdateManyInput>;
    /**
     * Filter which sick_leaves to update
     */
    where?: sick_leaveWhereInput;
  };

  /**
   * sick_leave upsert
   */
  export type sick_leaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * The filter to search for the sick_leave to update in case it exists.
     */
    where: sick_leaveWhereUniqueInput;
    /**
     * In case the sick_leave found by the `where` argument doesn't exist, create a new sick_leave with this data.
     */
    create: XOR<sick_leaveCreateInput, sick_leaveUncheckedCreateInput>;
    /**
     * In case the sick_leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sick_leaveUpdateInput, sick_leaveUncheckedUpdateInput>;
  };

  /**
   * sick_leave delete
   */
  export type sick_leaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter which sick_leave to delete.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave deleteMany
   */
  export type sick_leaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sick_leaves to delete
     */
    where?: sick_leaveWhereInput;
  };

  /**
   * sick_leave without action
   */
  export type sick_leaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | user$employeeArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vacation
   */

  export type AggregateVacation = {
    _count: VacationCountAggregateOutputType | null;
    _min: VacationMinAggregateOutputType | null;
    _max: VacationMaxAggregateOutputType | null;
  };

  export type VacationMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    employee_id: string | null;
    approved: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VacationMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    employee_id: string | null;
    approved: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VacationCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    employee_id: number;
    approved: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VacationMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    employee_id?: true;
    approved?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VacationMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    employee_id?: true;
    approved?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VacationCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    employee_id?: true;
    approved?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VacationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vacation to aggregate.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vacations
     **/
    _count?: true | VacationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VacationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VacationMaxAggregateInputType;
  };

  export type GetVacationAggregateType<T extends VacationAggregateArgs> = {
    [P in keyof T & keyof AggregateVacation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacation[P]>
      : GetScalarType<T[P], AggregateVacation[P]>;
  };

  export type vacationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vacationWhereInput;
    orderBy?: vacationOrderByWithAggregationInput | vacationOrderByWithAggregationInput[];
    by: VacationScalarFieldEnum[] | VacationScalarFieldEnum;
    having?: vacationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VacationCountAggregateInputType | true;
    _min?: VacationMinAggregateInputType;
    _max?: VacationMaxAggregateInputType;
  };

  export type VacationGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    employee_id: string;
    approved: boolean;
    created_at: Date;
    updated_at: Date;
    _count: VacationCountAggregateOutputType | null;
    _min: VacationMinAggregateOutputType | null;
    _max: VacationMaxAggregateOutputType | null;
  };

  type GetVacationGroupByPayload<T extends vacationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VacationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VacationGroupByOutputType[P]>
          : GetScalarType<T[P], VacationGroupByOutputType[P]>;
      }
    >
  >;

  export type vacationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        employee_id?: boolean;
        approved?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['vacation']
    >;

  export type vacationSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    employee_id?: boolean;
    approved?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vacationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $vacationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vacation';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        employee_id: string;
        approved: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vacation']
    >;
    composites: {};
  };

  type vacationGetPayload<S extends boolean | null | undefined | vacationDefaultArgs> = $Result.GetResult<
    Prisma.$vacationPayload,
    S
  >;

  type vacationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vacationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VacationCountAggregateInputType | true;
  };

  export interface vacationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vacation']; meta: { name: 'vacation' } };
    /**
     * Find zero or one Vacation that matches the filter.
     * @param {vacationFindUniqueArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vacationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vacationFindUniqueArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Vacation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vacationFindUniqueOrThrowArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vacationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vacation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationFindFirstArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vacationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindFirstArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Vacation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationFindFirstOrThrowArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vacationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Vacations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacations
     * const vacations = await prisma.vacation.findMany()
     *
     * // Get first 10 Vacations
     * const vacations = await prisma.vacation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vacationWithIdOnly = await prisma.vacation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vacationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vacation.
     * @param {vacationCreateArgs} args - Arguments to create a Vacation.
     * @example
     * // Create one Vacation
     * const Vacation = await prisma.vacation.create({
     *   data: {
     *     // ... data to create a Vacation
     *   }
     * })
     *
     **/
    create<T extends vacationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vacationCreateArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vacations.
     *     @param {vacationCreateManyArgs} args - Arguments to create many Vacations.
     *     @example
     *     // Create many Vacations
     *     const vacation = await prisma.vacation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vacationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vacation.
     * @param {vacationDeleteArgs} args - Arguments to delete one Vacation.
     * @example
     * // Delete one Vacation
     * const Vacation = await prisma.vacation.delete({
     *   where: {
     *     // ... filter to delete one Vacation
     *   }
     * })
     *
     **/
    delete<T extends vacationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vacationDeleteArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vacation.
     * @param {vacationUpdateArgs} args - Arguments to update one Vacation.
     * @example
     * // Update one Vacation
     * const vacation = await prisma.vacation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vacationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vacationUpdateArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vacations.
     * @param {vacationDeleteManyArgs} args - Arguments to filter Vacations to delete.
     * @example
     * // Delete a few Vacations
     * const { count } = await prisma.vacation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vacationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vacations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacations
     * const vacation = await prisma.vacation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vacationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vacationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vacation.
     * @param {vacationUpsertArgs} args - Arguments to update or create a Vacation.
     * @example
     * // Update or create a Vacation
     * const vacation = await prisma.vacation.upsert({
     *   create: {
     *     // ... data to create a Vacation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacation we want to update
     *   }
     * })
     **/
    upsert<T extends vacationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vacationUpsertArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vacations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationCountArgs} args - Arguments to filter Vacations to count.
     * @example
     * // Count the number of Vacations
     * const count = await prisma.vacation.count({
     *   where: {
     *     // ... the filter for the Vacations we want to count
     *   }
     * })
     **/
    count<T extends vacationCountArgs>(
      args?: Subset<T, vacationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vacation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VacationAggregateArgs>(
      args: Subset<T, VacationAggregateArgs>,
    ): Prisma.PrismaPromise<GetVacationAggregateType<T>>;

    /**
     * Group by Vacation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationGroupByArgs} args - Group by arguments.
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
      T extends vacationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vacationGroupByArgs['orderBy'] }
        : { orderBy?: vacationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vacationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVacationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vacation model
     */
    readonly fields: vacationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vacation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vacationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vacation model
   */
  interface vacationFieldRefs {
    readonly id: FieldRef<'vacation', 'String'>;
    readonly start_date: FieldRef<'vacation', 'DateTime'>;
    readonly end_date: FieldRef<'vacation', 'DateTime'>;
    readonly employee_id: FieldRef<'vacation', 'String'>;
    readonly approved: FieldRef<'vacation', 'Boolean'>;
    readonly created_at: FieldRef<'vacation', 'DateTime'>;
    readonly updated_at: FieldRef<'vacation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vacation findUnique
   */
  export type vacationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation findUniqueOrThrow
   */
  export type vacationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation findFirst
   */
  export type vacationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vacations.
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vacations.
     */
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * vacation findFirstOrThrow
   */
  export type vacationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vacations.
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vacations.
     */
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * vacation findMany
   */
  export type vacationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacations to fetch.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vacations.
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * vacation create
   */
  export type vacationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * The data needed to create a vacation.
     */
    data: XOR<vacationCreateInput, vacationUncheckedCreateInput>;
  };

  /**
   * vacation createMany
   */
  export type vacationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vacations.
     */
    data: vacationCreateManyInput | vacationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vacation update
   */
  export type vacationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * The data needed to update a vacation.
     */
    data: XOR<vacationUpdateInput, vacationUncheckedUpdateInput>;
    /**
     * Choose, which vacation to update.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation updateMany
   */
  export type vacationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vacations.
     */
    data: XOR<vacationUpdateManyMutationInput, vacationUncheckedUpdateManyInput>;
    /**
     * Filter which vacations to update
     */
    where?: vacationWhereInput;
  };

  /**
   * vacation upsert
   */
  export type vacationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * The filter to search for the vacation to update in case it exists.
     */
    where: vacationWhereUniqueInput;
    /**
     * In case the vacation found by the `where` argument doesn't exist, create a new vacation with this data.
     */
    create: XOR<vacationCreateInput, vacationUncheckedCreateInput>;
    /**
     * In case the vacation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vacationUpdateInput, vacationUncheckedUpdateInput>;
  };

  /**
   * vacation delete
   */
  export type vacationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter which vacation to delete.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation deleteMany
   */
  export type vacationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vacations to delete
     */
    where?: vacationWhereInput;
  };

  /**
   * vacation without action
   */
  export type vacationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone: 'phone';
    email: 'email';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    employee_number: 'employee_number';
    hire_date: 'hire_date';
    termination_date: 'termination_date';
    position: 'position';
    salary: 'salary';
    user_id: 'user_id';
    adress: 'adress';
    phone: 'phone';
    email: 'email';
    emergency_contact: 'emergency_contact';
    performance_rating: 'performance_rating';
    department: 'department';
    job_description: 'job_description';
    contract_type: 'contract_type';
    employee_status: 'employee_status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const PayrollScalarFieldEnum: {
    id: 'id';
    employee_id: 'employee_id';
    salary: 'salary';
    bonus: 'bonus';
    deductions: 'deductions';
    net_pay: 'net_pay';
    pay_date: 'pay_date';
    reimbursement: 'reimbursement';
    commission: 'commission';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum];

  export const Sick_leaveScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    doctor_note: 'doctor_note';
    employee_id: 'employee_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Sick_leaveScalarFieldEnum = (typeof Sick_leaveScalarFieldEnum)[keyof typeof Sick_leaveScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VacationScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    employee_id: 'employee_id';
    approved: 'approved';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VacationScalarFieldEnum = (typeof VacationScalarFieldEnum)[keyof typeof VacationScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    phone?: StringNullableFilter<'company'> | string | null;
    email?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      phone?: StringNullableFilter<'company'> | string | null;
      email?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    phone?: StringNullableWithAggregatesFilter<'company'> | string | null;
    email?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    employee_number?: IntFilter<'employee'> | number;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    termination_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    position?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    user_id?: UuidFilter<'employee'> | string;
    adress?: StringNullableFilter<'employee'> | string | null;
    phone?: StringNullableFilter<'employee'> | string | null;
    email?: StringNullableFilter<'employee'> | string | null;
    emergency_contact?: StringNullableFilter<'employee'> | string | null;
    performance_rating?: IntNullableFilter<'employee'> | number | null;
    department?: StringNullableFilter<'employee'> | string | null;
    job_description?: StringNullableFilter<'employee'> | string | null;
    contract_type?: StringNullableFilter<'employee'> | string | null;
    employee_status?: StringNullableFilter<'employee'> | string | null;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    payroll?: PayrollListRelationFilter;
    sick_leave?: Sick_leaveListRelationFilter;
    vacation?: VacationListRelationFilter;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    employee_number?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrderInput | SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    adress?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    emergency_contact?: SortOrderInput | SortOrder;
    performance_rating?: SortOrderInput | SortOrder;
    department?: SortOrderInput | SortOrder;
    job_description?: SortOrderInput | SortOrder;
    contract_type?: SortOrderInput | SortOrder;
    employee_status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    payroll?: payrollOrderByRelationAggregateInput;
    sick_leave?: sick_leaveOrderByRelationAggregateInput;
    vacation?: vacationOrderByRelationAggregateInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      employee_number?: IntFilter<'employee'> | number;
      hire_date?: DateTimeFilter<'employee'> | Date | string;
      termination_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
      position?: StringFilter<'employee'> | string;
      salary?: IntFilter<'employee'> | number;
      user_id?: UuidFilter<'employee'> | string;
      adress?: StringNullableFilter<'employee'> | string | null;
      phone?: StringNullableFilter<'employee'> | string | null;
      email?: StringNullableFilter<'employee'> | string | null;
      emergency_contact?: StringNullableFilter<'employee'> | string | null;
      performance_rating?: IntNullableFilter<'employee'> | number | null;
      department?: StringNullableFilter<'employee'> | string | null;
      job_description?: StringNullableFilter<'employee'> | string | null;
      contract_type?: StringNullableFilter<'employee'> | string | null;
      employee_status?: StringNullableFilter<'employee'> | string | null;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      payroll?: PayrollListRelationFilter;
      sick_leave?: Sick_leaveListRelationFilter;
      vacation?: VacationListRelationFilter;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    employee_number?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrderInput | SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    adress?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    emergency_contact?: SortOrderInput | SortOrder;
    performance_rating?: SortOrderInput | SortOrder;
    department?: SortOrderInput | SortOrder;
    job_description?: SortOrderInput | SortOrder;
    contract_type?: SortOrderInput | SortOrder;
    employee_status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    employee_number?: IntWithAggregatesFilter<'employee'> | number;
    hire_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    termination_date?: DateTimeNullableWithAggregatesFilter<'employee'> | Date | string | null;
    position?: StringWithAggregatesFilter<'employee'> | string;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    adress?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    phone?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    email?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    emergency_contact?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    performance_rating?: IntNullableWithAggregatesFilter<'employee'> | number | null;
    department?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    job_description?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    contract_type?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    employee_status?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type payrollWhereInput = {
    AND?: payrollWhereInput | payrollWhereInput[];
    OR?: payrollWhereInput[];
    NOT?: payrollWhereInput | payrollWhereInput[];
    id?: UuidFilter<'payroll'> | string;
    employee_id?: UuidFilter<'payroll'> | string;
    salary?: IntFilter<'payroll'> | number;
    bonus?: IntFilter<'payroll'> | number;
    deductions?: IntFilter<'payroll'> | number;
    net_pay?: IntFilter<'payroll'> | number;
    pay_date?: DateTimeFilter<'payroll'> | Date | string;
    reimbursement?: StringFilter<'payroll'> | string;
    commission?: IntFilter<'payroll'> | number;
    created_at?: DateTimeFilter<'payroll'> | Date | string;
    updated_at?: DateTimeFilter<'payroll'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type payrollOrderByWithRelationInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    pay_date?: SortOrder;
    reimbursement?: SortOrder;
    commission?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type payrollWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: payrollWhereInput | payrollWhereInput[];
      OR?: payrollWhereInput[];
      NOT?: payrollWhereInput | payrollWhereInput[];
      employee_id?: UuidFilter<'payroll'> | string;
      salary?: IntFilter<'payroll'> | number;
      bonus?: IntFilter<'payroll'> | number;
      deductions?: IntFilter<'payroll'> | number;
      net_pay?: IntFilter<'payroll'> | number;
      pay_date?: DateTimeFilter<'payroll'> | Date | string;
      reimbursement?: StringFilter<'payroll'> | string;
      commission?: IntFilter<'payroll'> | number;
      created_at?: DateTimeFilter<'payroll'> | Date | string;
      updated_at?: DateTimeFilter<'payroll'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type payrollOrderByWithAggregationInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    pay_date?: SortOrder;
    reimbursement?: SortOrder;
    commission?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: payrollCountOrderByAggregateInput;
    _avg?: payrollAvgOrderByAggregateInput;
    _max?: payrollMaxOrderByAggregateInput;
    _min?: payrollMinOrderByAggregateInput;
    _sum?: payrollSumOrderByAggregateInput;
  };

  export type payrollScalarWhereWithAggregatesInput = {
    AND?: payrollScalarWhereWithAggregatesInput | payrollScalarWhereWithAggregatesInput[];
    OR?: payrollScalarWhereWithAggregatesInput[];
    NOT?: payrollScalarWhereWithAggregatesInput | payrollScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payroll'> | string;
    employee_id?: UuidWithAggregatesFilter<'payroll'> | string;
    salary?: IntWithAggregatesFilter<'payroll'> | number;
    bonus?: IntWithAggregatesFilter<'payroll'> | number;
    deductions?: IntWithAggregatesFilter<'payroll'> | number;
    net_pay?: IntWithAggregatesFilter<'payroll'> | number;
    pay_date?: DateTimeWithAggregatesFilter<'payroll'> | Date | string;
    reimbursement?: StringWithAggregatesFilter<'payroll'> | string;
    commission?: IntWithAggregatesFilter<'payroll'> | number;
    created_at?: DateTimeWithAggregatesFilter<'payroll'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payroll'> | Date | string;
  };

  export type sick_leaveWhereInput = {
    AND?: sick_leaveWhereInput | sick_leaveWhereInput[];
    OR?: sick_leaveWhereInput[];
    NOT?: sick_leaveWhereInput | sick_leaveWhereInput[];
    id?: UuidFilter<'sick_leave'> | string;
    start_date?: DateTimeNullableFilter<'sick_leave'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'sick_leave'> | Date | string | null;
    doctor_note?: BoolNullableFilter<'sick_leave'> | boolean | null;
    employee_id?: UuidFilter<'sick_leave'> | string;
    created_at?: DateTimeFilter<'sick_leave'> | Date | string;
    updated_at?: DateTimeFilter<'sick_leave'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type sick_leaveOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    doctor_note?: SortOrderInput | SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type sick_leaveWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: sick_leaveWhereInput | sick_leaveWhereInput[];
      OR?: sick_leaveWhereInput[];
      NOT?: sick_leaveWhereInput | sick_leaveWhereInput[];
      start_date?: DateTimeNullableFilter<'sick_leave'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'sick_leave'> | Date | string | null;
      doctor_note?: BoolNullableFilter<'sick_leave'> | boolean | null;
      employee_id?: UuidFilter<'sick_leave'> | string;
      created_at?: DateTimeFilter<'sick_leave'> | Date | string;
      updated_at?: DateTimeFilter<'sick_leave'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type sick_leaveOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    doctor_note?: SortOrderInput | SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: sick_leaveCountOrderByAggregateInput;
    _max?: sick_leaveMaxOrderByAggregateInput;
    _min?: sick_leaveMinOrderByAggregateInput;
  };

  export type sick_leaveScalarWhereWithAggregatesInput = {
    AND?: sick_leaveScalarWhereWithAggregatesInput | sick_leaveScalarWhereWithAggregatesInput[];
    OR?: sick_leaveScalarWhereWithAggregatesInput[];
    NOT?: sick_leaveScalarWhereWithAggregatesInput | sick_leaveScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sick_leave'> | string;
    start_date?: DateTimeNullableWithAggregatesFilter<'sick_leave'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'sick_leave'> | Date | string | null;
    doctor_note?: BoolNullableWithAggregatesFilter<'sick_leave'> | boolean | null;
    employee_id?: UuidWithAggregatesFilter<'sick_leave'> | string;
    created_at?: DateTimeWithAggregatesFilter<'sick_leave'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sick_leave'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    employee?: EmployeeListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      employee?: EmployeeListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vacationWhereInput = {
    AND?: vacationWhereInput | vacationWhereInput[];
    OR?: vacationWhereInput[];
    NOT?: vacationWhereInput | vacationWhereInput[];
    id?: UuidFilter<'vacation'> | string;
    start_date?: DateTimeFilter<'vacation'> | Date | string;
    end_date?: DateTimeFilter<'vacation'> | Date | string;
    employee_id?: UuidFilter<'vacation'> | string;
    approved?: BoolFilter<'vacation'> | boolean;
    created_at?: DateTimeFilter<'vacation'> | Date | string;
    updated_at?: DateTimeFilter<'vacation'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type vacationOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    employee_id?: SortOrder;
    approved?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type vacationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vacationWhereInput | vacationWhereInput[];
      OR?: vacationWhereInput[];
      NOT?: vacationWhereInput | vacationWhereInput[];
      start_date?: DateTimeFilter<'vacation'> | Date | string;
      end_date?: DateTimeFilter<'vacation'> | Date | string;
      employee_id?: UuidFilter<'vacation'> | string;
      approved?: BoolFilter<'vacation'> | boolean;
      created_at?: DateTimeFilter<'vacation'> | Date | string;
      updated_at?: DateTimeFilter<'vacation'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type vacationOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    employee_id?: SortOrder;
    approved?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vacationCountOrderByAggregateInput;
    _max?: vacationMaxOrderByAggregateInput;
    _min?: vacationMinOrderByAggregateInput;
  };

  export type vacationScalarWhereWithAggregatesInput = {
    AND?: vacationScalarWhereWithAggregatesInput | vacationScalarWhereWithAggregatesInput[];
    OR?: vacationScalarWhereWithAggregatesInput[];
    NOT?: vacationScalarWhereWithAggregatesInput | vacationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vacation'> | string;
    start_date?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
    employee_id?: UuidWithAggregatesFilter<'vacation'> | string;
    approved?: BoolWithAggregatesFilter<'vacation'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type employeeCreateInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
    payroll?: payrollCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    user_id: string;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payroll?: payrollUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    payroll?: payrollUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: payrollUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateManyInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    user_id: string;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payrollCreateInput = {
    id?: string;
    salary: number;
    bonus?: number;
    deductions?: number;
    net_pay: number;
    pay_date: Date | string;
    reimbursement: string;
    commission: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutPayrollInput;
  };

  export type payrollUncheckedCreateInput = {
    id?: string;
    employee_id: string;
    salary: number;
    bonus?: number;
    deductions?: number;
    net_pay: number;
    pay_date: Date | string;
    reimbursement: string;
    commission: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutPayrollNestedInput;
  };

  export type payrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payrollCreateManyInput = {
    id?: string;
    employee_id: string;
    salary: number;
    bonus?: number;
    deductions?: number;
    net_pay: number;
    pay_date: Date | string;
    reimbursement: string;
    commission: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveCreateInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    doctor_note?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutSick_leaveInput;
  };

  export type sick_leaveUncheckedCreateInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    doctor_note?: boolean | null;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutSick_leaveNestedInput;
  };

  export type sick_leaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveCreateManyInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    doctor_note?: boolean | null;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    approved?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutVacationInput;
  };

  export type vacationUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    employee_id: string;
    approved?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutVacationNestedInput;
  };

  export type vacationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    employee_id: string;
    approved?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type PayrollListRelationFilter = {
    every?: payrollWhereInput;
    some?: payrollWhereInput;
    none?: payrollWhereInput;
  };

  export type Sick_leaveListRelationFilter = {
    every?: sick_leaveWhereInput;
    some?: sick_leaveWhereInput;
    none?: sick_leaveWhereInput;
  };

  export type VacationListRelationFilter = {
    every?: vacationWhereInput;
    some?: vacationWhereInput;
    none?: vacationWhereInput;
  };

  export type payrollOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type sick_leaveOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type vacationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    employee_number?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    adress?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    emergency_contact?: SortOrder;
    performance_rating?: SortOrder;
    department?: SortOrder;
    job_description?: SortOrder;
    contract_type?: SortOrder;
    employee_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    employee_number?: SortOrder;
    salary?: SortOrder;
    performance_rating?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    employee_number?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    adress?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    emergency_contact?: SortOrder;
    performance_rating?: SortOrder;
    department?: SortOrder;
    job_description?: SortOrder;
    contract_type?: SortOrder;
    employee_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    employee_number?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    adress?: SortOrder;
    phone?: SortOrder;
    email?: SortOrder;
    emergency_contact?: SortOrder;
    performance_rating?: SortOrder;
    department?: SortOrder;
    job_description?: SortOrder;
    contract_type?: SortOrder;
    employee_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    employee_number?: SortOrder;
    salary?: SortOrder;
    performance_rating?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type EmployeeRelationFilter = {
    is?: employeeWhereInput;
    isNot?: employeeWhereInput;
  };

  export type payrollCountOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    pay_date?: SortOrder;
    reimbursement?: SortOrder;
    commission?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type payrollAvgOrderByAggregateInput = {
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    commission?: SortOrder;
  };

  export type payrollMaxOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    pay_date?: SortOrder;
    reimbursement?: SortOrder;
    commission?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type payrollMinOrderByAggregateInput = {
    id?: SortOrder;
    employee_id?: SortOrder;
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    pay_date?: SortOrder;
    reimbursement?: SortOrder;
    commission?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type payrollSumOrderByAggregateInput = {
    salary?: SortOrder;
    bonus?: SortOrder;
    deductions?: SortOrder;
    net_pay?: SortOrder;
    commission?: SortOrder;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type sick_leaveCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    doctor_note?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sick_leaveMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    doctor_note?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sick_leaveMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    doctor_note?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type vacationCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    employee_id?: SortOrder;
    approved?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vacationMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    employee_id?: SortOrder;
    approved?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vacationMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    employee_id?: SortOrder;
    approved?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type payrollCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<payrollCreateWithoutEmployeeInput, payrollUncheckedCreateWithoutEmployeeInput>
      | payrollCreateWithoutEmployeeInput[]
      | payrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: payrollCreateOrConnectWithoutEmployeeInput | payrollCreateOrConnectWithoutEmployeeInput[];
    createMany?: payrollCreateManyEmployeeInputEnvelope;
    connect?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
  };

  export type sick_leaveCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
  };

  export type vacationCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
  };

  export type payrollUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<payrollCreateWithoutEmployeeInput, payrollUncheckedCreateWithoutEmployeeInput>
      | payrollCreateWithoutEmployeeInput[]
      | payrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: payrollCreateOrConnectWithoutEmployeeInput | payrollCreateOrConnectWithoutEmployeeInput[];
    createMany?: payrollCreateManyEmployeeInputEnvelope;
    connect?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
  };

  export type sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
  };

  export type vacationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type payrollUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<payrollCreateWithoutEmployeeInput, payrollUncheckedCreateWithoutEmployeeInput>
      | payrollCreateWithoutEmployeeInput[]
      | payrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: payrollCreateOrConnectWithoutEmployeeInput | payrollCreateOrConnectWithoutEmployeeInput[];
    upsert?: payrollUpsertWithWhereUniqueWithoutEmployeeInput | payrollUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: payrollCreateManyEmployeeInputEnvelope;
    set?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    disconnect?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    delete?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    connect?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    update?: payrollUpdateWithWhereUniqueWithoutEmployeeInput | payrollUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: payrollUpdateManyWithWhereWithoutEmployeeInput | payrollUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: payrollScalarWhereInput | payrollScalarWhereInput[];
  };

  export type sick_leaveUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    set?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    disconnect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    delete?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    update?:
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
  };

  export type vacationUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    upsert?: vacationUpsertWithWhereUniqueWithoutEmployeeInput | vacationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    set?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    disconnect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    delete?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    update?: vacationUpdateWithWhereUniqueWithoutEmployeeInput | vacationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: vacationUpdateManyWithWhereWithoutEmployeeInput | vacationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: vacationScalarWhereInput | vacationScalarWhereInput[];
  };

  export type payrollUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<payrollCreateWithoutEmployeeInput, payrollUncheckedCreateWithoutEmployeeInput>
      | payrollCreateWithoutEmployeeInput[]
      | payrollUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: payrollCreateOrConnectWithoutEmployeeInput | payrollCreateOrConnectWithoutEmployeeInput[];
    upsert?: payrollUpsertWithWhereUniqueWithoutEmployeeInput | payrollUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: payrollCreateManyEmployeeInputEnvelope;
    set?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    disconnect?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    delete?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    connect?: payrollWhereUniqueInput | payrollWhereUniqueInput[];
    update?: payrollUpdateWithWhereUniqueWithoutEmployeeInput | payrollUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: payrollUpdateManyWithWhereWithoutEmployeeInput | payrollUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: payrollScalarWhereInput | payrollScalarWhereInput[];
  };

  export type sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    set?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    disconnect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    delete?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    update?:
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
  };

  export type vacationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    upsert?: vacationUpsertWithWhereUniqueWithoutEmployeeInput | vacationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    set?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    disconnect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    delete?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    update?: vacationUpdateWithWhereUniqueWithoutEmployeeInput | vacationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: vacationUpdateManyWithWhereWithoutEmployeeInput | vacationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: vacationScalarWhereInput | vacationScalarWhereInput[];
  };

  export type employeeCreateNestedOneWithoutPayrollInput = {
    create?: XOR<employeeCreateWithoutPayrollInput, employeeUncheckedCreateWithoutPayrollInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutPayrollInput;
    connect?: employeeWhereUniqueInput;
  };

  export type employeeUpdateOneRequiredWithoutPayrollNestedInput = {
    create?: XOR<employeeCreateWithoutPayrollInput, employeeUncheckedCreateWithoutPayrollInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutPayrollInput;
    upsert?: employeeUpsertWithoutPayrollInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutPayrollInput, employeeUpdateWithoutPayrollInput>,
      employeeUncheckedUpdateWithoutPayrollInput
    >;
  };

  export type employeeCreateNestedOneWithoutSick_leaveInput = {
    create?: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutSick_leaveInput;
    connect?: employeeWhereUniqueInput;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type employeeUpdateOneRequiredWithoutSick_leaveNestedInput = {
    create?: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutSick_leaveInput;
    upsert?: employeeUpsertWithoutSick_leaveInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutSick_leaveInput, employeeUpdateWithoutSick_leaveInput>,
      employeeUncheckedUpdateWithoutSick_leaveInput
    >;
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeCreateNestedOneWithoutVacationInput = {
    create?: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutVacationInput;
    connect?: employeeWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type employeeUpdateOneRequiredWithoutVacationNestedInput = {
    create?: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutVacationInput;
    upsert?: employeeUpsertWithoutVacationInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutVacationInput, employeeUpdateWithoutVacationInput>,
      employeeUncheckedUpdateWithoutVacationInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type payrollCreateWithoutEmployeeInput = {
    id?: string;
    salary: number;
    bonus?: number;
    deductions?: number;
    net_pay: number;
    pay_date: Date | string;
    reimbursement: string;
    commission: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payrollUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    salary: number;
    bonus?: number;
    deductions?: number;
    net_pay: number;
    pay_date: Date | string;
    reimbursement: string;
    commission: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payrollCreateOrConnectWithoutEmployeeInput = {
    where: payrollWhereUniqueInput;
    create: XOR<payrollCreateWithoutEmployeeInput, payrollUncheckedCreateWithoutEmployeeInput>;
  };

  export type payrollCreateManyEmployeeInputEnvelope = {
    data: payrollCreateManyEmployeeInput | payrollCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type sick_leaveCreateWithoutEmployeeInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    doctor_note?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    doctor_note?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveCreateOrConnectWithoutEmployeeInput = {
    where: sick_leaveWhereUniqueInput;
    create: XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>;
  };

  export type sick_leaveCreateManyEmployeeInputEnvelope = {
    data: sick_leaveCreateManyEmployeeInput | sick_leaveCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type vacationCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    approved?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    approved?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationCreateOrConnectWithoutEmployeeInput = {
    where: vacationWhereUniqueInput;
    create: XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>;
  };

  export type vacationCreateManyEmployeeInputEnvelope = {
    data: vacationCreateManyEmployeeInput | vacationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payrollUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: payrollWhereUniqueInput;
    update: XOR<payrollUpdateWithoutEmployeeInput, payrollUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<payrollCreateWithoutEmployeeInput, payrollUncheckedCreateWithoutEmployeeInput>;
  };

  export type payrollUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: payrollWhereUniqueInput;
    data: XOR<payrollUpdateWithoutEmployeeInput, payrollUncheckedUpdateWithoutEmployeeInput>;
  };

  export type payrollUpdateManyWithWhereWithoutEmployeeInput = {
    where: payrollScalarWhereInput;
    data: XOR<payrollUpdateManyMutationInput, payrollUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type payrollScalarWhereInput = {
    AND?: payrollScalarWhereInput | payrollScalarWhereInput[];
    OR?: payrollScalarWhereInput[];
    NOT?: payrollScalarWhereInput | payrollScalarWhereInput[];
    id?: UuidFilter<'payroll'> | string;
    employee_id?: UuidFilter<'payroll'> | string;
    salary?: IntFilter<'payroll'> | number;
    bonus?: IntFilter<'payroll'> | number;
    deductions?: IntFilter<'payroll'> | number;
    net_pay?: IntFilter<'payroll'> | number;
    pay_date?: DateTimeFilter<'payroll'> | Date | string;
    reimbursement?: StringFilter<'payroll'> | string;
    commission?: IntFilter<'payroll'> | number;
    created_at?: DateTimeFilter<'payroll'> | Date | string;
    updated_at?: DateTimeFilter<'payroll'> | Date | string;
  };

  export type sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: sick_leaveWhereUniqueInput;
    update: XOR<sick_leaveUpdateWithoutEmployeeInput, sick_leaveUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>;
  };

  export type sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: sick_leaveWhereUniqueInput;
    data: XOR<sick_leaveUpdateWithoutEmployeeInput, sick_leaveUncheckedUpdateWithoutEmployeeInput>;
  };

  export type sick_leaveUpdateManyWithWhereWithoutEmployeeInput = {
    where: sick_leaveScalarWhereInput;
    data: XOR<sick_leaveUpdateManyMutationInput, sick_leaveUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type sick_leaveScalarWhereInput = {
    AND?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
    OR?: sick_leaveScalarWhereInput[];
    NOT?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
    id?: UuidFilter<'sick_leave'> | string;
    start_date?: DateTimeNullableFilter<'sick_leave'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'sick_leave'> | Date | string | null;
    doctor_note?: BoolNullableFilter<'sick_leave'> | boolean | null;
    employee_id?: UuidFilter<'sick_leave'> | string;
    created_at?: DateTimeFilter<'sick_leave'> | Date | string;
    updated_at?: DateTimeFilter<'sick_leave'> | Date | string;
  };

  export type vacationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: vacationWhereUniqueInput;
    update: XOR<vacationUpdateWithoutEmployeeInput, vacationUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>;
  };

  export type vacationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: vacationWhereUniqueInput;
    data: XOR<vacationUpdateWithoutEmployeeInput, vacationUncheckedUpdateWithoutEmployeeInput>;
  };

  export type vacationUpdateManyWithWhereWithoutEmployeeInput = {
    where: vacationScalarWhereInput;
    data: XOR<vacationUpdateManyMutationInput, vacationUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type vacationScalarWhereInput = {
    AND?: vacationScalarWhereInput | vacationScalarWhereInput[];
    OR?: vacationScalarWhereInput[];
    NOT?: vacationScalarWhereInput | vacationScalarWhereInput[];
    id?: UuidFilter<'vacation'> | string;
    start_date?: DateTimeFilter<'vacation'> | Date | string;
    end_date?: DateTimeFilter<'vacation'> | Date | string;
    employee_id?: UuidFilter<'vacation'> | string;
    approved?: BoolFilter<'vacation'> | boolean;
    created_at?: DateTimeFilter<'vacation'> | Date | string;
    updated_at?: DateTimeFilter<'vacation'> | Date | string;
  };

  export type employeeCreateWithoutPayrollInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutPayrollInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    user_id: string;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutPayrollInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutPayrollInput, employeeUncheckedCreateWithoutPayrollInput>;
  };

  export type employeeUpsertWithoutPayrollInput = {
    update: XOR<employeeUpdateWithoutPayrollInput, employeeUncheckedUpdateWithoutPayrollInput>;
    create: XOR<employeeCreateWithoutPayrollInput, employeeUncheckedCreateWithoutPayrollInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutPayrollInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutPayrollInput, employeeUncheckedUpdateWithoutPayrollInput>;
  };

  export type employeeUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateWithoutSick_leaveInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
    payroll?: payrollCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutSick_leaveInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    user_id: string;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payroll?: payrollUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutSick_leaveInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
  };

  export type employeeUpsertWithoutSick_leaveInput = {
    update: XOR<employeeUpdateWithoutSick_leaveInput, employeeUncheckedUpdateWithoutSick_leaveInput>;
    create: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutSick_leaveInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutSick_leaveInput, employeeUncheckedUpdateWithoutSick_leaveInput>;
  };

  export type employeeUpdateWithoutSick_leaveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    payroll?: payrollUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutSick_leaveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: payrollUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payroll?: payrollCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payroll?: payrollUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    employee_number?: IntFilter<'employee'> | number;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    termination_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    position?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    user_id?: UuidFilter<'employee'> | string;
    adress?: StringNullableFilter<'employee'> | string | null;
    phone?: StringNullableFilter<'employee'> | string | null;
    email?: StringNullableFilter<'employee'> | string | null;
    emergency_contact?: StringNullableFilter<'employee'> | string | null;
    performance_rating?: IntNullableFilter<'employee'> | number | null;
    department?: StringNullableFilter<'employee'> | string | null;
    job_description?: StringNullableFilter<'employee'> | string | null;
    contract_type?: StringNullableFilter<'employee'> | string | null;
    employee_status?: StringNullableFilter<'employee'> | string | null;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type employeeCreateWithoutVacationInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
    payroll?: payrollCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutVacationInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    user_id: string;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payroll?: payrollUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutVacationInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
  };

  export type employeeUpsertWithoutVacationInput = {
    update: XOR<employeeUpdateWithoutVacationInput, employeeUncheckedUpdateWithoutVacationInput>;
    create: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutVacationInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutVacationInput, employeeUncheckedUpdateWithoutVacationInput>;
  };

  export type employeeUpdateWithoutVacationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    payroll?: payrollUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutVacationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: payrollUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type payrollCreateManyEmployeeInput = {
    id?: string;
    salary: number;
    bonus?: number;
    deductions?: number;
    net_pay: number;
    pay_date: Date | string;
    reimbursement: string;
    commission: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveCreateManyEmployeeInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    doctor_note?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationCreateManyEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    approved?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payrollUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payrollUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payrollUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    bonus?: IntFieldUpdateOperationsInput | number;
    deductions?: IntFieldUpdateOperationsInput | number;
    net_pay?: IntFieldUpdateOperationsInput | number;
    pay_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: StringFieldUpdateOperationsInput | string;
    commission?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctor_note?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    approved?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    employee_number: number;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    position: string;
    salary: number;
    adress?: string | null;
    phone?: string | null;
    email?: string | null;
    emergency_contact?: string | null;
    performance_rating?: number | null;
    department?: string | null;
    job_description?: string | null;
    contract_type?: string | null;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: payrollUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payroll?: payrollUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_number?: IntFieldUpdateOperationsInput | number;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    adress?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    performance_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    job_description?: NullableStringFieldUpdateOperationsInput | string | null;
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
   */
  export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use payrollDefaultArgs instead
   */
  export type payrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    payrollDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use sick_leaveDefaultArgs instead
   */
  export type sick_leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    sick_leaveDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vacationDefaultArgs instead
   */
  export type vacationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vacationDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
