export interface appState {
  userName: string;
  isLoggedIn: boolean;
}

export type appAction = { type: "SET_USERNAME"; username: string };
