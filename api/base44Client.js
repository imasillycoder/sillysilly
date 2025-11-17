export const base44 = {
  auth: {
    // simple stub for `base44.auth.me()` used in layout.jsx
    me: async () => ({ id: 1, name: 'Dev User', role: 'admin' }),
  },
};

export default base44;