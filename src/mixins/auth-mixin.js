export const AuthMixin = (superclass) =>
  class extends superclass {
    isAuthenticated() {
      return localStorage.getItem('userAuthenticated') === 'true';
    }

    redirectIfNotAutheticated() {
      if (!this.isAuthenticated()) {
        window.location.href = '/login';
      }
    }

    logOut() {
      localStorage.removeItem('userAuthenticated');
      window.location.href = '/login';
    }
  };
