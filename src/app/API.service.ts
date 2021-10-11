/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
};

export type CreateUserInput = {
  email: string;
  userName: string;
};

export type User = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  userName?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null;
  email?: TableStringFilterInput | null;
  userName?: TableStringFilterInput | null;
};

export type TableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type UserConnection = {
  __typename: "UserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type ListUsersQuery = {
  __typename: "UserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    email: string;
    userName: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  userName: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: TableUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: TableUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            email
            userName
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateUserListener(
    id?: string,
    email?: string,
    userName?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($id: ID, $email: String, $userName: String) {
        onCreateUser(id: $id, email: $email, userName: $userName) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (userName) {
      gqlAPIServiceArguments.userName = userName;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    id?: string,
    email?: string,
    userName?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($id: ID, $email: String, $userName: String) {
        onUpdateUser(id: $id, email: $email, userName: $userName) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (userName) {
      gqlAPIServiceArguments.userName = userName;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    id?: string,
    email?: string,
    userName?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($id: ID, $email: String, $userName: String) {
        onDeleteUser(id: $id, email: $email, userName: $userName) {
          __typename
          id
          email
          userName
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (userName) {
      gqlAPIServiceArguments.userName = userName;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }
}
