/**
 * ReasoningBank adapter (placeholder).
 * IMPORTANT: feature-flagged; disabled by default.
 */
const enabled = false; // keep false until QA + Legal signoff
module.exports = {
  save: async (obj) => {
    if (!enabled) return { status: 'disabled' };
    // TODO: implement persistence
    return { status: 'ok' };
  }
};
