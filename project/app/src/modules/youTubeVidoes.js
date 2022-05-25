export default {
   state() {
      return {
         youTubeVideoes: [],
      };
   },

   mutations: {
      setYouTubeVideoes(state, video) {
         state.youTubeVideoes = video;
      }
   },

   actions: {
      addYouTubeVideos({ commit }, video) {
         commit('setYouTubeVideoes', video);
      },
   },

   getters: {
      getYouTubeVidoes(state) {
         return state.youTubeVideoes;
      },
   },
}