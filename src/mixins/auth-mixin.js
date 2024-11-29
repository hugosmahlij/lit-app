export const AuthMixin = (Base) =>
  class extends Base {
    isAuthenticated() {
      return !!localStorage.getItem('isAuthenticated');
    }

    redirectIfNotAuthenticated() {
      if (!this.isAuthenticated()) {
        window.location.href = '/login';
      }
    }
  };
