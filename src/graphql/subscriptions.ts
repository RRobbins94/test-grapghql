/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: ID, $email: String, $userName: String) {
    onCreateUser(id: $id, email: $email, userName: $userName) {
      id
      email
      userName
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: ID, $email: String, $userName: String) {
    onUpdateUser(id: $id, email: $email, userName: $userName) {
      id
      email
      userName
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: ID, $email: String, $userName: String) {
    onDeleteUser(id: $id, email: $email, userName: $userName) {
      id
      email
      userName
    }
  }
`;
