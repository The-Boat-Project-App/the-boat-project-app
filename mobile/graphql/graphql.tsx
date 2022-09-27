import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNews: News;
  createNotes: Notes;
  createUsers: RegisterResponse;
  deleteNews: Scalars['String'];
  deleteNotes: Scalars['String'];
  deleteUsers: Scalars['String'];
  loginUsers: LoginResponse;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updateNews: News;
  updateNotes: Notes;
  updateUsers: Users;
};


export type MutationCreateNewsArgs = {
  newNewsInput: NewsInput;
};


export type MutationCreateNotesArgs = {
  newNotesInput: NotesInput;
};


export type MutationCreateUsersArgs = {
  newUsersInput: UsersInput;
};


export type MutationDeleteNewsArgs = {
  id: Scalars['String'];
};


export type MutationDeleteNotesArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUsersArgs = {
  id: Scalars['String'];
};


export type MutationLoginUsersArgs = {
  UsersLoginInput: UsersInput;
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String'];
};


export type MutationUpdateNewsArgs = {
  editNewsInput: NewsInput;
};


export type MutationUpdateNotesArgs = {
  editNotesInput: NotesInput;
};


export type MutationUpdateUsersArgs = {
  editUsersInput: UsersInput;
};

/** The News Model */
export type News = {
  __typename?: 'News';
  author: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  mainPicture?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NewsInput = {
  author: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mainPicture?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** The Notes Model */
export type Notes = {
  __typename?: 'Notes';
  backgroundColor?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  isArchived?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NotesInput = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  News: News;
  /** Get List of News */
  NewsList: Array<News>;
  notes: Notes;
  /** Get List of Notes */
  notesList: Array<Notes>;
  user: Users;
  users: Users;
  /** Get List of Users */
  usersList: Array<Users>;
};


export type QueryNewsArgs = {
  id: Scalars['String'];
};


export type QueryNotesArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  id: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  accessToken: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** The Users Model */
export type Users = {
  __typename?: 'Users';
  active?: Maybe<Scalars['Boolean']>;
  app_lang?: Maybe<Scalars['String']>;
  audio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lang?: Maybe<Scalars['String']>;
  lastLogin: Scalars['DateTime'];
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tokenVersion: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type UsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  app_lang?: InputMaybe<Scalars['String']>;
  audio?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = { __typename?: 'Query', NewsList: Array<{ __typename?: 'News', id: string, title: string, author: string, content?: string | null, mainPicture?: string | null, createdAt: any, isActive?: boolean | null }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', usersList: Array<{ __typename?: 'Users', id: string, email?: string | null, firstName: string, lastName: string }> };

export type GetUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDataQuery = { __typename?: 'Query', user: { __typename?: 'Users', firstName: string, lastName: string } };

export type LoginMutationVariables = Exact<{
  UsersLoginInput: UsersInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUsers: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string, firstName: string, lastName: string } };

export type RegisterMutationVariables = Exact<{
  newUsersInput: UsersInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUsers: { __typename?: 'RegisterResponse', accessToken: string, refreshToken: string, firstName: string, lastName: string } };


export const GetAllNewsDocument = gql`
    query getAllNews {
  NewsList {
    id
    title
    author
    content
    mainPicture
    createdAt
    isActive
  }
}
    `;

/**
 * __useGetAllNewsQuery__
 *
 * To run a query within a React component, call `useGetAllNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllNewsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
      }
export function useGetAllNewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
        }
export type GetAllNewsQueryHookResult = ReturnType<typeof useGetAllNewsQuery>;
export type GetAllNewsLazyQueryHookResult = ReturnType<typeof useGetAllNewsLazyQuery>;
export type GetAllNewsQueryResult = Apollo.QueryResult<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  usersList {
    id
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserDataDocument = gql`
    query getUserData {
  user {
    firstName
    lastName
  }
}
    `;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
      }
export function useGetUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
        }
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataQueryResult = Apollo.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;
export const LoginDocument = gql`
    mutation Login($UsersLoginInput: UsersInput!) {
  loginUsers(UsersLoginInput: $UsersLoginInput) {
    accessToken
    refreshToken
    firstName
    lastName
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      UsersLoginInput: // value for 'UsersLoginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($newUsersInput: UsersInput!) {
  createUsers(newUsersInput: $newUsersInput) {
    accessToken
    refreshToken
    firstName
    lastName
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      newUsersInput: // value for 'newUsersInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;