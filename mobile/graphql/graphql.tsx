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
};

export type Mutation = {
  __typename?: 'Mutation';
  createNotes: Notes;
  createUsers: Users;
  deleteNotes: Scalars['String'];
  deleteUsers: Scalars['String'];
  loginUsers: LoginResponse;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updateNotes: Notes;
  updateUsers: Users;
};


export type MutationCreateNotesArgs = {
  newNotesInput: NotesInput;
};


export type MutationCreateUsersArgs = {
  newUsersInput: UsersInput;
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


export type MutationUpdateNotesArgs = {
  editNotesInput: NotesInput;
};


export type MutationUpdateUsersArgs = {
  editUsersInput: UsersInput;
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
  bye: Scalars['String'];
  notes: Notes;
  /** Get List of Notes */
  notesList: Array<Notes>;
  users: Users;
  /** Get List of Users */
  usersList: Array<Users>;
};


export type QueryNotesArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  id: Scalars['String'];
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

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', usersList: Array<{ __typename?: 'Users', id: string, email?: string | null, firstName: string, lastName: string }> };


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